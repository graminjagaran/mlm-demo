import type { ReactNode } from "react";
import { site } from "@/lib/site";

function Icon({ d }: { d: string }) {
  return (
    <i aria-hidden="true">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d={d} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </i>
  );
}

export function ContactPanel({ kicker, title, showWhatsapp = false }: { kicker: string; title: ReactNode; showWhatsapp?: boolean }) {
  return (
    <div className="contact-panel">
      <div className="eyebrow">{kicker}</div>
      <h2>{title}</h2>
      <p>Share a few details — a career advisor will call you within 24 hours.</p>
      <div className="info-line">
        <Icon d="M7 3h3l1.4 3.2-1.8 1.1a12 12 0 0 0 5.9 5.9l1.1-1.8L20 13v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
        <div><span>TOLL-FREE</span><a href={site.phoneHref}>{site.phoneDisplay}</a></div>
      </div>
      <div className="info-line">
        <Icon d="M4 6h16v12H4zM4 7l8 6 8-6" />
        <div><span>EMAIL</span><a className="mail" href={`mailto:${site.email}`}>{site.email}</a></div>
      </div>
      <div className="info-line">
        <Icon d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11zM12 11.5a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6z" />
        <div><span>HEAD OFFICE</span><b>{site.address}</b></div>
      </div>
      <div className="info-line">
        <Icon d="M12 7v5l3 2M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" />
        <div><span>HOURS</span><b>{site.hours}</b></div>
      </div>
      {showWhatsapp ? (
        <a className="wa-btn" href={site.whatsapp}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 4a8 8 0 0 0-6.9 12L4 20l4.2-1.1A8 8 0 1 0 12 4z" stroke="currentColor" strokeWidth="1.7" />
            <path d="M9 10.2c.3 2 2 3.6 3.8 4l1-1.2.8.5c.3.2.3.6 0 .8-.7.6-1.6.8-2.4.5-2-.7-3.6-2.3-4.2-4.3-.3-.8.1-1.6.8-2.1.2-.2.6-.1.8.1l.6 1.1c.1.2 0 .4-.2.6z" fill="currentColor" />
          </svg>
          Chat on WhatsApp
        </a>
      ) : null}
    </div>
  );
}
