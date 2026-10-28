"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";
import { Logo } from "./Logo";

const links = [
  ["Careers", "/#roles"],
  ["Why Insurance", "/#why"],
  ["About Us", "/#about"],
  ["Roadmap", "/#roadmap"],
  ["Resources", "/resources/"],
  ["Contact", "/#contact"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="topbar">
        <div className="wrap">
          <span>Now recruiting Insurance Advisors in {site.cities} cities across India</span>
          <nav>
            <a href={site.memberLogin}>Advisor Login</a>
            <Link href="/track/">Track Application</Link>
            <Link href="/branches/">Find a Branch</Link>
            <a className="phone" href={site.phoneHref}>{site.phoneDisplay}</a>
          </nav>
        </div>
      </div>
      <header className="nav">
        <div className="wrap">
          <Link href="/" onClick={() => setOpen(false)}><Logo /></Link>
          <nav className={open ? "nav-links open" : "nav-links"}>
            {links.map(([label, href]) => (
              <Link key={label} href={href} onClick={() => setOpen(false)}>{label}</Link>
            ))}
            <a href={site.phoneHref} onClick={() => setOpen(false)}>{site.phoneDisplay}</a>
            <Link className="btn btn-gold" href="/apply/" onClick={() => setOpen(false)}>Apply Now</Link>
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
