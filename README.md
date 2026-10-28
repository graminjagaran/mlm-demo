# Golden Fortune Life website

Public careers site for goldenfortunelife.com. Admin, member, and insurer panels stay on their own subdomains.

## Preview on this machine

```bash
npm install
npm run build
npm run preview
```

Open http://localhost:3000

The preview stores applications in memory only. Refreshing the server clears them. It does not connect to Postgres.

## Upload to Plesk

1. Run `npm run build`.
2. Upload the **contents** of `out/` into `httpdocs` for goldenfortunelife.com. `index.html` should sit in `httpdocs`, not inside another folder.
3. Do not upload `node_modules`, `.env`, `deploy/`, or this README into `httpdocs`.
4. On the server, outside `httpdocs`, create `private/config.php` from `deploy/config.example.php`.
5. Run `deploy/schema.sql` on the existing Postgres database, then the grants in `deploy/grants.sql` with a new limited user.

Advisor Login points to https://member.goldenfortunelife.com

Phone, email, and WhatsApp are the figures from the design. Change them in `lib/site.ts`, then build again.

## Form

`out/api/inquiry.php` writes one row to `website_inquiries`. `out/api/track.php` returns only the status, and only when the application number and mobile match.

The database password stays in `private/config.php` or in Plesk environment variables `GFL_DB_DSN`, `GFL_DB_USER`, and `GFL_DB_PASSWORD`. It is not in the website files, git, or the browser.

Set `TURNSTILE_SECRET` before production if you add a Cloudflare Turnstile widget. Until then, honeypot, timing, size limit, and per-IP rate limit still apply.

Postgres must listen on localhost only. The website user can insert into `website_inquiries` and read application number, mobile, and status. It cannot read member or wallet tables.
