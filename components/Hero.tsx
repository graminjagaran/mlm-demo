"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site";

const slides = [
  {
    title: "Gateway to a",
    accent: "Golden",
    rest: "Career",
    text: "Join a trusted recruitment network that trains, licenses and mentors you to build a rewarding career with India's leading insurers.",
  },
  {
    title: "A profession built",
    accent: "on trust",
    rest: "",
    text: "India's insurance sector is growing at double digits. Training, licensing and mentoring stay with us, and recruitment stays free.",
  },
  {
    title: "From application",
    accent: "to licence",
    rest: "",
    text: "Apply in two minutes, meet a mentor, clear the exam, and start with a code and a sales toolkit.",
  },
];

const actions = [
  { href: "/apply/", title: "Apply Online", text: "2-minute form", icon: "M7 3h7l5 5v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM14 3v6h6" },
  { href: "/apply/", title: "Check Eligibility", text: "18+, 10th pass", icon: "M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zM5 21a7 7 0 0 1 14 0" },
  { href: "/calculator/", title: "Income Calculator", text: "Estimate earnings", icon: "M7 3h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM8 8h8M8 12h2M12 12h2M16 12h0M8 16h2M12 16h2" },
  { href: "/training/", title: "Training Calendar", text: `Next batch: ${site.nextBatch}`, icon: "M7 4h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zM8 2v4M16 2v4M5 10h14" },
  { href: "/branches/", title: "Find a Branch", text: `${site.cities} locations`, icon: "M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" },
];

export function Hero() {
  const [index, setIndex] = useState(0);
  const slide = slides[index];

  return (
    <section className="hero">
      <div className="wrap">
        <div className="hero-stage">
          <div className="hero-copy">
            <div className="hero-pill">CAREERS IN INSURANCE</div>
            <h1>
              {slide.title}{" "}
              <span className="gold-word">{slide.accent}</span>
              {slide.rest ? <> {slide.rest}</> : null}
            </h1>
            <p>{slide.text}</p>
            <div className="hero-actions">
              <Link className="btn btn-gold" href="/apply/">Apply Now — It&apos;s Free <span aria-hidden="true">→</span></Link>
              <a className="btn btn-outline-light" href="#roadmap">
                <i className="play" aria-hidden="true" /> How It Works
              </a>
            </div>
            <div className="hero-checks">
              <span><i /> No joining fee</span>
              <span><i /> Free certification training</span>
              <span><i /> Full-time or part-time</span>
            </div>
            <div className="hero-slider">
              <button type="button" aria-label="Previous" onClick={() => setIndex((index + slides.length - 1) % slides.length)}>‹</button>
              <div>
                {slides.map((item, dot) => (
                  <button key={item.accent} type="button" className={dot === index ? "on" : ""} aria-label={`Slide ${dot + 1}`} onClick={() => setIndex(dot)} />
                ))}
              </div>
              <button type="button" aria-label="Next" onClick={() => setIndex((index + 1) % slides.length)}>›</button>
            </div>
          </div>

          <aside className="float-income">
            <div className="income-top">
              <span className="rupee">₹</span>
              <div>
                <div className="kicker">AVG. YEAR-1 INCOME</div>
                <strong>{site.year1Income}</strong>
              </div>
            </div>
            <div className="bars" aria-hidden="true">
              <i /><i /><i /><i /><i className="hot" /><i className="hot" /><i className="hot" />
            </div>
          </aside>

          <aside className="float-advisors">
            <div className="avatars">
              <img src="/media/story-1.jpg" alt="" />
              <img src="/media/story-2.jpg" alt="" />
              <img src="/media/story-3.jpg" alt="" />
            </div>
            <div>
              <b>{site.advisors} Advisors</b>
              <span>★ {site.rating} average rating</span>
            </div>
          </aside>
        </div>

        <div className="action-bar">
          {actions.map((item) => (
            <Link key={item.title} href={item.href}>
              <i>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d={item.icon} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </i>
              <span><b>{item.title}</b><small>{item.text}</small></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
