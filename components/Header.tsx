"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";
import { Logo } from "./Logo";

function Icon({ d }: { d: string }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d={d} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const caret = "M6 9l6 6 6-6";

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <>
      <div className="topbar">
        <div className="wrap">
          <span>Now recruiting Insurance Advisors in {site.cities} cities across India</span>
          <nav>
            <a href={site.memberLogin}><Icon d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zM5 20a7 7 0 0 1 14 0" /> Advisor Login</a>
            <Link href="/track/"><Icon d="M8 4h8a2 2 0 0 1 2 2v14l-6-3-6 3V6a2 2 0 0 1 2-2z" /> Track Application</Link>
            <Link href="/branches/"><Icon d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11zM12 10.5a1.5 1.5 0 1 0-1.5-1.5 1.5 1.5 0 0 0 1.5 1.5z" /> Find a Branch</Link>
            <a className="phone" href={site.phoneHref}><Icon d="M7 3h3l1.5 4-2 1.2a12 12 0 0 0 6.3 6.3L17 13l4 1.5V18a2 2 0 0 1-2.2 2A16 16 0 0 1 4 6.2 2 2 0 0 1 6 4z" /> {site.phoneDisplay}</a>
          </nav>
        </div>
      </div>
      <header className="nav">
        <div className="wrap">
          <Link href="/" onClick={close}><Logo /></Link>
          <nav className={open ? "nav-links open" : "nav-links"}>
            <div className="drop">
              <Link href="/#roles" onClick={close}>Careers <Icon d={caret} /></Link>
              <div className="drop-menu">
                <Link href="/careers/life-advisor/" onClick={close}>Life Advisor</Link>
                <Link href="/careers/team-leader/" onClick={close}>Team Leader</Link>
                <Link href="/careers/general-partner/" onClick={close}>General Partner</Link>
              </div>
            </div>
            <Link href="/#why" onClick={close}>Why Insurance</Link>
            <Link href="/#about" onClick={close}>About Us</Link>
            <Link href="/#roadmap" onClick={close}>Roadmap</Link>
            <div className="drop">
              <Link href="/resources/" onClick={close}>Resources <Icon d={caret} /></Link>
              <div className="drop-menu">
                <Link href="/faq/" onClick={close}>FAQs</Link>
                <Link href="/training/" onClick={close}>Training calendar</Link>
                <Link href="/calculator/" onClick={close}>Income calculator</Link>
                <Link href="/branches/" onClick={close}>Find a branch</Link>
              </div>
            </div>
            <Link href="/#contact" onClick={close}>Contact</Link>
            <a className="only-mobile" href={site.phoneHref} onClick={close}>{site.phoneDisplay}</a>
            <Link className="search-btn" href="/resources/" aria-label="Search resources" onClick={close}>
              <Icon d="M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16zM21 21l-4.3-4.3" />
            </Link>
            <Link className="btn btn-navy nav-cta" href="/apply/" onClick={close}>Apply Now <span aria-hidden="true">→</span></Link>
          </nav>
          <button className="menu-btn" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M2 4.5h14M2 9h14M2 13.5h14" stroke="#0a2540" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </header>
    </>
  );
}
