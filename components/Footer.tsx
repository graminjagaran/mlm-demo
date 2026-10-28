import Link from "next/link";
import { site } from "@/lib/site";
import { Logo } from "./Logo";

function SocialIcon({ name }: { name: string }) {
  if (name === "LinkedIn") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M4.7 9.2H7.4V19H4.7V9.2zM6.05 4.6a1.55 1.55 0 1 1 0 3.1 1.55 1.55 0 0 1 0-3.1zM9.2 9.2h2.55v1.34h.04c.36-.67 1.23-1.38 2.53-1.38 2.71 0 3.21 1.78 3.21 4.1V19H15v-5.12c0-1.22-.02-2.79-1.7-2.79-1.7 0-1.96 1.33-1.96 2.7V19H9.2V9.2z" />
      </svg>
    );
  }
  if (name === "Instagram") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4.2" y="4.2" width="15.6" height="15.6" rx="4.2" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="16.7" cy="7.3" r="1" fill="currentColor" />
      </svg>
    );
  }
  if (name === "Facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M14.2 8.2h2.1V5.4h-2.1c-2.15 0-3.6 1.55-3.6 3.9v1.7H8.4v2.8h2.2V19h2.9v-5.2h2.3l.6-2.8h-2.9V9.5c0-.7.35-1.3 1.7-1.3z" />
      </svg>
    );
  }
  if (name === "YouTube") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" fillRule="evenodd" d="M5.2 7.4h13.6c.9 0 1.6.7 1.6 1.6v6c0 .9-.7 1.6-1.6 1.6H5.2c-.9 0-1.6-.7-1.6-1.6v-6c0-.9.7-1.6 1.6-1.6zm5 2.15 4.7 2.45-4.7 2.45V9.55z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

const socials = ["LinkedIn", "Instagram", "Facebook", "YouTube", "X"] as const;

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <Logo />
          <p>Empowering India&apos;s next generation of insurance professionals with training, mentorship and opportunity.</p>
          <div className="socials">
            {socials.map((name) => (
              <a key={name} href={site.url} aria-label={name}>
                <SocialIcon name={name} />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4>Careers</h4>
          <Link href="/careers/life-advisor/">Life Advisor</Link>
          <Link href="/careers/team-leader/">Team Leader</Link>
          <Link href="/careers/general-partner/">General Partner</Link>
          <Link href="/#roadmap">Roadmap</Link>
        </div>
        <div>
          <h4>Company</h4>
          <Link href="/about/">About Us</Link>
          <Link href="/leadership/">Leadership</Link>
          <Link href="/partners/">Partners</Link>
          <Link href="/resources/">Media</Link>
        </div>
        <div>
          <h4>Support</h4>
          <a href={site.memberLogin}>Advisor Login</a>
          <Link href="/track/">Track Application</Link>
          <Link href="/faq/">FAQs</Link>
          <Link href="/contact/">Contact Us</Link>
        </div>
        <div className="reach">
          <h4>Reach Us</h4>
          <a href={site.phoneHref}>
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M7 3.5h3.1l1.3 3.1-1.8 1.1a12 12 0 0 0 5.7 5.7l1.1-1.8 3.1 1.3V16a2 2 0 0 1-2 2A15 15 0 0 1 4 6.5a2 2 0 0 1 2-2z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /></svg>
            {site.phoneDisplay}
          </a>
          <a href={`mailto:${site.email}`}>
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 6.5h16v11H4v-11z" stroke="currentColor" strokeWidth="1.7" /><path d="M4 7.5l8 6 8-6" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /></svg>
            {site.email}
          </a>
          <span>
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 21s6.5-5.8 6.5-10.2a6.5 6.5 0 1 0-13 0C5.5 15.2 12 21 12 21z" stroke="currentColor" strokeWidth="1.7" /><circle cx="12" cy="10.6" r="1.7" stroke="currentColor" strokeWidth="1.7" /></svg>
            {site.address}
          </span>
        </div>
      </div>
      <div className="wrap warn">
        Beware of fraudulent calls. {site.legalName} never charges any fee for recruitment, training or licensing. If you receive such a request, report it to {site.email}.
      </div>
    </footer>
  );
}
