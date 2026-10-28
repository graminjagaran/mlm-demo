<?php
declare(strict_types=1);

ini_set('display_errors', '0');
ini_set('log_errors', '1');

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Could not submit.']);
    exit;
}

$length = (int) ($_SERVER['CONTENT_LENGTH'] ?? 0);
if ($length < 1 || $length > 8000) {
    http_response_code(413);
    echo json_encode(['ok' => false, 'error' => 'Could not submit.']);
    exit;
}

$host = strtolower(preg_replace('/:\d+$/', '', $_SERVER['HTTP_HOST'] ?? ''));
$allowed = array_filter(array_map('trim', explode(',', getenv('GFL_ALLOWED_HOSTS') ?: 'goldenfortunelife.com,www.goldenfortunelife.com,staging.goldenfortunelife.com')));
if (!in_array($host, $allowed, true)) {
    http_response_code(403);
    echo json_encode(['ok' => false, 'error' => 'Could not submit.']);
    exit;
}

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if ($origin !== '') {
    $originHost = strtolower(parse_url($origin, PHP_URL_HOST) ?: '');
    if (!in_array($originHost, $allowed, true)) {
        http_response_code(403);
        echo json_encode(['ok' => false, 'error' => 'Could not submit.']);
        exit;
    }
}

$raw = file_get_contents('php://input') ?: '';
$data = json_decode($raw, true);
if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Could not submit.']);
    exit;
}

if (trim((string) ($data['companyWebsite'] ?? '')) !== '') {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Could not submit.']);
    exit;
}

$started = (int) ($data['startedAt'] ?? 0);
if ($started > 0 && (int) (microtime(true) * 1000) - $started < 1500) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Could not submit.']);
    exit;
}

$ip = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
if (!rate_allow($ip, 5, 3600)) {
    http_response_code(429);
    echo json_encode(['ok' => false, 'error' => 'Too many attempts. Please wait and try again.']);
    exit;
}

$name = clean($data['fullName'] ?? '', 80);
$mobile = preg_replace('/\D+/', '', (string) ($data['mobile'] ?? '')) ?? '';
$email = trim((string) ($data['email'] ?? ''));
$city = clean($data['city'] ?? '', 60);
$role = trim((string) ($data['role'] ?? ''));
$message = clean($data['message'] ?? '', 1000);
$consent = !empty($data['consent']);
$source = clean($data['sourcePage'] ?? '', 80);
$roles = ['Life Advisor', 'Team Leader', 'General Partner'];

if (
    strlen($name) < 2 ||
    strlen($mobile) < 10 || strlen($mobile) > 15 ||
    !filter_var($email, FILTER_VALIDATE_EMAIL) ||
    strlen($city) < 2 ||
    !in_array($role, $roles, true) ||
    !$consent
) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Check the form and try again.']);
    exit;
}

$secret = getenv('TURNSTILE_SECRET') ?: '';
if ($secret !== '') {
    $token = (string) ($data['turnstileToken'] ?? '');
    if (!turnstile_ok($secret, $token, $ip)) {
        http_response_code(400);
        echo json_encode(['ok' => false, 'error' => 'Could not submit.']);
        exit;
    }
}

try {
    $pdo = db();
    $applicationNo = sprintf('GFL-%s-%06d', date('y'), random_int(0, 999999));
    $stmt = $pdo->prepare(
        'INSERT INTO website_inquiries
        (application_no, full_name, mobile, email, city, role, message, consent, source_page)
        VALUES (:application_no, :full_name, :mobile, :email, :city, :role, :message, true, :source_page)'
    );
    $stmt->execute([
        ':application_no' => $applicationNo,
        ':full_name' => $name,
        ':mobile' => $mobile,
        ':email' => $email,
        ':city' => $city,
        ':role' => $role,
        ':message' => $message,
        ':source_page' => $source,
    ]);
    echo json_encode(['ok' => true, 'applicationNo' => $applicationNo]);
} catch (Throwable $e) {
    error_log('inquiry failed');
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Could not submit.']);
}

function clean(mixed $value, int $max): string
{
    $text = trim(preg_replace('/\s+/', ' ', (string) $value) ?? '');
    if (strlen($text) > $max) {
        $text = substr($text, 0, $max);
    }
    return $text;
}

function db(): PDO
{
    $configFile = dirname(__DIR__, 2) . '/private/config.php';
    $dsn = getenv('GFL_DB_DSN') ?: '';
    $user = getenv('GFL_DB_USER') ?: '';
    $password = getenv('GFL_DB_PASSWORD') ?: '';
    if (is_file($configFile)) {
        $config = require $configFile;
        if (is_array($config)) {
            $dsn = (string) ($config['dsn'] ?? $dsn);
            $user = (string) ($config['user'] ?? $user);
            $password = (string) ($config['password'] ?? $password);
        }
    }
    if ($dsn === '' || $user === '' || $password === '') {
        throw new RuntimeException('db config missing');
    }
    $pdo = new PDO($dsn, $user, $password, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_EMULATE_PREPARES => false,
        PDO::ATTR_TIMEOUT => 3,
    ]);
    return $pdo;
}

function rate_allow(string $ip, int $limit, int $window): bool
{
    $dir = sys_get_temp_dir() . '/gfl-rate';
    if (!is_dir($dir)) {
        mkdir($dir, 0700, true);
    }
    $file = $dir . '/' . hash('sha256', $ip) . '.json';
    $now = time();
    $hits = [];
    if (is_file($file)) {
        $decoded = json_decode((string) file_get_contents($file), true);
        if (is_array($decoded)) {
            $hits = array_values(array_filter($decoded, fn ($t) => is_int($t) && $t > $now - $window));
        }
    }
    if (count($hits) >= $limit) {
        return false;
    }
    $hits[] = $now;
    file_put_contents($file, json_encode($hits), LOCK_EX);
    return true;
}

function turnstile_ok(string $secret, string $token, string $ip): bool
{
    if ($token === '') {
        return false;
    }
    $payload = http_build_query([
        'secret' => $secret,
        'response' => $token,
        'remoteip' => $ip,
    ]);
    $context = stream_context_create([
        'http' => [
            'method' => 'POST',
            'header' => "Content-Type: application/x-www-form-urlencoded\r\n",
            'content' => $payload,
            'timeout' => 4,
        ],
    ]);
    $result = file_get_contents('https://challenges.cloudflare.com/turnstile/v0/siteverify', false, $context);
    $json = json_decode((string) $result, true);
    return is_array($json) && !empty($json['success']);
}
