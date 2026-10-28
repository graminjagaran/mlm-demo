<?php
declare(strict_types=1);

ini_set('display_errors', '0');
ini_set('log_errors', '1');

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false]);
    exit;
}

$host = strtolower(preg_replace('/:\d+$/', '', $_SERVER['HTTP_HOST'] ?? ''));
$allowed = array_filter(array_map('trim', explode(',', getenv('GFL_ALLOWED_HOSTS') ?: 'goldenfortunelife.com,www.goldenfortunelife.com,staging.goldenfortunelife.com')));
if (!in_array($host, $allowed, true)) {
    http_response_code(403);
    echo json_encode(['ok' => false]);
    exit;
}

$ip = $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0';
$dir = sys_get_temp_dir() . '/gfl-rate';
if (!is_dir($dir)) {
    mkdir($dir, 0700, true);
}
$file = $dir . '/track-' . hash('sha256', $ip) . '.json';
$now = time();
$hits = [];
if (is_file($file)) {
    $decoded = json_decode((string) file_get_contents($file), true);
    if (is_array($decoded)) {
        $hits = array_values(array_filter($decoded, fn ($t) => is_int($t) && $t > $now - 3600));
    }
}
if (count($hits) >= 12) {
    http_response_code(429);
    echo json_encode(['ok' => false]);
    exit;
}
$hits[] = $now;
file_put_contents($file, json_encode($hits), LOCK_EX);

$data = json_decode(file_get_contents('php://input') ?: '', true);
if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['ok' => false]);
    exit;
}

$applicationNo = strtoupper(trim((string) ($data['applicationNo'] ?? '')));
$mobile = preg_replace('/\D+/', '', (string) ($data['mobile'] ?? '')) ?? '';
if (!preg_match('/^GFL-\d{2}-\d{6}$/', $applicationNo) || strlen($mobile) < 10) {
    http_response_code(404);
    echo json_encode(['ok' => false]);
    exit;
}

try {
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
    $pdo = new PDO($dsn, $user, $password, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_EMULATE_PREPARES => false,
    ]);
    $stmt = $pdo->prepare(
        'SELECT status FROM website_inquiries
         WHERE application_no = :application_no AND mobile = :mobile
         LIMIT 1'
    );
    $stmt->execute([':application_no' => $applicationNo, ':mobile' => $mobile]);
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
    if (!$row) {
        http_response_code(404);
        echo json_encode(['ok' => false]);
        exit;
    }
    echo json_encode(['ok' => true, 'status' => $row['status']]);
} catch (Throwable $e) {
    error_log('track failed');
    http_response_code(404);
    echo json_encode(['ok' => false]);
}
