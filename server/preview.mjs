import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(fileURLToPath(new URL(".", import.meta.url)), "..", "out");
const port = Number(process.env.PORT || 3000);
const roles = new Set(["Life Advisor", "Team Leader", "General Partner"]);
const leads = new Map();
const hits = new Map();

const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
  ".php": "text/plain; charset=utf-8",
};

function allow(ip, limit) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((time) => now - time < 60 * 60 * 1000);
  if (recent.length >= limit) {
    hits.set(ip, recent);
    return false;
  }
  recent.push(now);
  hits.set(ip, recent);
  return true;
}

function clean(value, max) {
  return String(value || "").replace(/\s+/g, " ").trim().slice(0, max);
}

function send(res, status, body, type = "application/json; charset=utf-8") {
  res.writeHead(status, {
    "Content-Type": type,
    "X-Content-Type-Options": "nosniff",
    "Cache-Control": "no-store",
    "X-Frame-Options": "SAMEORIGIN",
    "Referrer-Policy": "strict-origin-when-cross-origin",
  });
  res.end(body);
}

function inquiry(ip, data) {
  if (!allow(ip, 8)) return { status: 429, body: { ok: false, error: "Too many attempts. Please wait and try again." } };
  if (clean(data.companyWebsite, 80)) return { status: 400, body: { ok: false, error: "Could not submit." } };
  const started = Number(data.startedAt || 0);
  if (started && Date.now() - started < 1500) return { status: 400, body: { ok: false, error: "Please wait a moment and submit again." } };
  const fullName = clean(data.fullName, 80);
  const mobile = String(data.mobile || "").replace(/\D+/g, "");
  const email = clean(data.email, 120);
  const city = clean(data.city, 60);
  const role = clean(data.role, 40);
  const message = clean(data.message, 1000);
  if (fullName.length < 2 || mobile.length < 10 || mobile.length > 15 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || city.length < 2 || !roles.has(role) || !data.consent) {
    return { status: 400, body: { ok: false, error: "Check the form and try again." } };
  }
  const applicationNo = `GFL-${String(new Date().getFullYear()).slice(2)}-${String(Math.floor(Math.random() * 1000000)).padStart(6, "0")}`;
  leads.set(applicationNo, { mobile, status: "new" });
  return { status: 200, body: { ok: true, applicationNo } };
}

function track(ip, data) {
  if (!allow(`track:${ip}`, 20)) return { status: 429, body: { ok: false } };
  const applicationNo = clean(data.applicationNo, 24).toUpperCase();
  const mobile = String(data.mobile || "").replace(/\D+/g, "");
  const lead = leads.get(applicationNo);
  if (!lead || lead.mobile !== mobile) return { status: 404, body: { ok: false } };
  return { status: 200, body: { ok: true, status: lead.status } };
}

async function fileFor(urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0]);
  const safe = normalize(decoded).replace(/^[/\\]+/, "");
  if (safe.includes("..")) return null;
  let path = join(root, safe);
  if (!path.startsWith(root)) return null;
  try {
    const info = await stat(path);
    if (info.isDirectory()) path = join(path, "index.html");
    await stat(path);
    return path;
  } catch {
    if (!extname(path)) {
      const fallback = join(root, safe.replace(/\/$/, ""), "index.html");
      try {
        await stat(fallback);
        return fallback;
      } catch {
        return null;
      }
    }
    return null;
  }
}

const server = createServer(async (req, res) => {
  const ip = req.socket.remoteAddress || "local";
  const url = new URL(req.url || "/", "http://localhost");
  if (req.method === "POST" && (url.pathname === "/api/inquiry.php" || url.pathname === "/api/track.php")) {
    const chunks = [];
    let size = 0;
    for await (const chunk of req) {
      size += chunk.length;
      if (size > 8000) {
        send(res, 413, JSON.stringify({ ok: false, error: "Could not submit." }));
        return;
      }
      chunks.push(chunk);
    }
    let data = {};
    try {
      data = JSON.parse(Buffer.concat(chunks).toString("utf8") || "{}");
    } catch {
      send(res, 400, JSON.stringify({ ok: false, error: "Could not submit." }));
      return;
    }
    const result = url.pathname.endsWith("track.php") ? track(ip, data) : inquiry(ip, data);
    send(res, result.status, JSON.stringify(result.body));
    return;
  }
  if (req.method !== "GET" && req.method !== "HEAD") {
    send(res, 405, "Method not allowed", "text/plain; charset=utf-8");
    return;
  }
  const path = await fileFor(url.pathname);
  if (!path) {
    const missing = await fileFor("/404.html");
    const html = missing ? await readFile(missing) : Buffer.from("Not found");
    send(res, 404, html, "text/html; charset=utf-8");
    return;
  }
  const body = await readFile(path);
  send(res, 200, body, types[extname(path)] || "application/octet-stream");
});

server.listen(port, "0.0.0.0", () => {
  console.log(`preview http://0.0.0.0:${port}`);
});
