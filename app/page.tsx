import Link from "next/link";
import { Hero } from "@/components/Hero";
import { InquiryForm } from "@/components/InquiryForm";
import { insurers, roles, site } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="insurers">
        <div className="wrap">
          <p>Placing advisors with {site.insurers} leading insurers</p>
          <div className="logo-row">
            {insurers.map((name) => name === "Shriram Finance" ? (
              <img className="insurer-logo" key={name} src="/brand/shriram.png" alt="Shriram Finance" />
            ) : (
              <span className="logo-pill" key={name}>{name}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="why">
        <div className="wrap">
          <div className="why-head">
            <div>
              <div className="eyebrow">WHY CHOOSE A CAREER IN INSURANCE</div>
              <h2>A profession built on trust,<br />rewarded with growth.</h2>
            </div>
            <div className="why-side">
              <p>India&apos;s insurance sector is growing at double digits. Here&apos;s why professionals from every background are making the switch.</p>
              <Link className="explore" href="/#roles">Explore roles <span aria-hidden="true">→</span></Link>
            </div>
          </div>
          <div className="cards-4 why-cards">
            {[
              ["Unlimited Earnings", "Commissions, lifetime renewals and performance bonuses — with no ceiling.", "Income cap", "None", "rupee"],
              ["Flexible Hours", "Work full-time or part-time, from anywhere, at a pace that suits your life.", "Work mode", "Your choice", "clock"],
              ["Expert Training", "Certification prep, sales workshops and 1:1 mentoring from top performers.", "Training cost", "Free", "cap"],
              ["Recognition & Growth", "Fast-track leadership roles, award trips and a path to your own agency.", "Promotion", "In 12 months", "trophy"],
            ].map(([title, text, label, value, icon]) => (
              <article className="why-card" key={title}>
                <i aria-hidden="true">
                  {icon === "rupee" ? <span>₹</span> : null}
                  {icon === "clock" ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.7" /><path d="M12 8v4.5l2.5 1.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>
                  ) : null}
                  {icon === "cap" ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 10 12 6l9 4-9 4-9-4z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /><path d="M7 12.2V16c0 1.2 2.2 2.4 5 2.4s5-1.2 5-2.4v-3.8M21 10v5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>
                  ) : null}
                  {icon === "trophy" ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M8 4h8v6a4 4 0 0 1-8 0V4z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /><path d="M8 6H5.5A2.5 2.5 0 0 0 8 10.2M16 6h2.5A2.5 2.5 0 0 1 16 10.2M12 14v2.2M9.5 20h5M10.5 16.2h3V20h-3z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  ) : null}
                </i>
                <h3>{title}</h3>
                <p>{text}</p>
                <div className="why-foot"><span>{label}</span><b>{value}</b></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="about" style={{ paddingTop: 10 }}>
        <div className="wrap about">
          <div className="about-photo">
            <img src="/media/about.jpg" alt="Golden Fortune team" />
            <div className="recruiter-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M8 20h8M12 17a5 5 0 0 0 5-5V6H7v6a5 5 0 0 0 5 5zM9 6V4h6v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Top Recruiter 2026
            </div>
            <div className="years">
              <i>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="9" r="5" stroke="currentColor" strokeWidth="1.7" /><path d="M9 13.5 8 21l4-2 4 2-1-7.5" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /></svg>
              </i>
              <div><b>{site.years} Years</b><span>Building insurance careers</span></div>
            </div>
          </div>
          <div>
            <div className="eyebrow">ABOUT US</div>
            <h2>We don&apos;t just recruit. We<br />build leaders.</h2>
            <p className="sub">{site.legalName} connects ambitious individuals with India&apos;s leading life and general insurers. From your first interview to your first promotion, our team stands beside you with training, tools and a network that turns potential into prosperity.</p>
            <div className="statbar">
              <div><b>{site.advisors}</b><span>Advisors placed</span></div>
              <div><b>{site.cities}</b><span>Cities covered</span></div>
              <div><b>{site.passRate}</b><span>Exam pass rate</span></div>
            </div>
            <ul className="ticks cols">
              <li>End-to-end licensing support</li>
              <li>Dedicated branch mentor</li>
              <li>Digital sales toolkit</li>
              <li>Transparent payouts</li>
            </ul>
            <div className="about-cta">
              <Link className="btn btn-navy" href="/about/">Know More About Us <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg></Link>
              <div className="founder">
                <img src="/media/founder.jpg" alt="" />
                <div><b>Rajesh Malhotra</b><span>Founder & Managing Director</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="roles">
        <div className="wrap">
          <div className="center">
            <div className="eyebrow">OPEN OPPORTUNITIES</div>
            <h2>Find the role that fits you</h2>
            <p className="sub">Whether you&apos;re a graduate, a working professional or a homemaker — there&apos;s a path for you.</p>
          </div>
          <div className="cards-3" style={{ marginTop: 26 }}>
            {roles.map((role) => (
              <article className={role.featured ? "card role featured" : "card role"} key={role.slug}>
                <span className="mode">{role.mode}</span>
                {role.featured ? <span className="popular">Most Popular</span> : null}
                <h3>{role.title}</h3>
                <p>{role.summary}</p>
                <ul>{role.points.map((point) => <li key={point}>{point}</li>)}</ul>
                <Link className={role.featured ? "btn btn-gold" : "btn btn-ghost"} href={`/careers/${role.slug}/`}>Apply for this role</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section band" id="roadmap">
        <div className="wrap">
          <div className="why-head">
            <div>
              <div className="eyebrow">ROADMAP TO SUCCESS</div>
              <h2>From application to achievement in 5 steps</h2>
            </div>
            <p className="sub">A transparent, fully guided process — most advisors start earning within 30 days.</p>
          </div>
          <div className="steps">
            {[
              ["01", "Day 1", "Apply Online", "Share your basic details in a 2-minute form."],
              ["02", "Day 2–3", "Career Counselling", "Meet a mentor to map goals and the right insurer."],
              ["03", "Week 1–3", "Training & Exam", "Guided training and certification exam prep."],
              ["04", "Week 4", "Licensing & Onboarding", "Receive your licence, code and sales toolkit."],
              ["05", "Ongoing", "Grow & Earn", "Build your clients and step into leadership."],
            ].map(([n, when, title, text]) => (
              <article className="step" key={n}>
                <em>{n} · {when}</em>
                <b>{title}</b>
                <span>{text}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="why-head">
            <div>
              <div className="eyebrow">ADVISOR STORIES</div>
              <h2>Real people. Golden careers.</h2>
            </div>
            <p className="sub"><b style={{ color: "var(--navy)" }}>{site.rating}</b> from {site.reviews} reviews</p>
          </div>
          <div className="stories">
            {[
              ["/media/story-1.jpg", "I left a 9-to-5 desk job and doubled my income within 18 months. The mentorship made all the difference.", "Ananya Iyer", "Senior Advisor · Chennai"],
              ["/media/story-2.jpg", "From clearing my exam to leading a team of 14 advisors — Golden Fortune gave me a clear, honest path.", "Vikram Singh", "Team Leader · Jaipur"],
              ["/media/story-3.jpg", "As a homemaker, flexible hours mattered most. I now earn independently while being there for my kids.", "Meera Joshi", "Part-time Advisor · Pune"],
            ].map(([photo, quote, name, meta]) => (
              <article className="card story" key={name}>
                <q>{quote}</q>
                <div className="who">
                  <img src={photo} alt="" />
                  <div><b>{name}</b><span>{meta}</span></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="contact" style={{ paddingTop: 10 }}>
        <div className="wrap contact-grid">
          <div className="contact-panel">
            <div className="eyebrow">GET IN TOUCH</div>
            <h2>Start your golden career today</h2>
            <p>Share a few details — a career advisor will call you within 24 hours.</p>
            <div className="info-line"><span>TOLL-FREE</span><a href={site.phoneHref}>{site.phoneDisplay}</a></div>
            <div className="info-line"><span>EMAIL</span><a href={`mailto:${site.email}`}>{site.email}</a></div>
            <div className="info-line"><span>HEAD OFFICE</span>{site.address}</div>
            <div className="info-line"><span>HOURS</span>{site.hours}</div>
            <a className="btn btn-line" href={site.whatsapp}>Chat on WhatsApp</a>
          </div>
          <InquiryForm source="home" />
        </div>
      </section>
    </>
  );
}
