import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ContactPanel } from "@/components/ContactPanel";
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
          <div className="cards-3 roles">
            {roles.map((role) => (
              <article className={role.featured ? "role featured" : "role"} key={role.slug}>
                <div className="role-top">
                  <span className="role-icon" aria-hidden="true">
                    {role.slug === "life-advisor" ? (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 19.4s-6.4-3.9-6.4-8.2A3.6 3.6 0 0 1 12 8.2a3.6 3.6 0 0 1 6.4 3c0 4.3-6.4 8.2-6.4 8.2z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /></svg>
                    ) : null}
                    {role.slug === "team-leader" ? (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="2.1" stroke="currentColor" strokeWidth="1.6" /><path d="M8.1 16.6c.6-2 2.1-3.1 3.9-3.1s3.3 1.1 3.9 3.1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /><circle cx="6.3" cy="9.1" r="1.6" stroke="currentColor" strokeWidth="1.5" /><path d="M3.5 16.4c.4-1.5 1.4-2.3 2.8-2.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /><circle cx="17.7" cy="9.1" r="1.6" stroke="currentColor" strokeWidth="1.5" /><path d="M20.5 16.4c-.4-1.5-1.4-2.3-2.8-2.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                    ) : null}
                    {role.slug === "general-partner" ? (
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3.2 13.4 5.4 9.3A2 2 0 0 1 7.2 8.2h9.6a2 2 0 0 1 1.8 1.1l2.2 4.1" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /><path d="M3.4 13.4h17.2V17a1 1 0 0 1-1 1h-1.1M4.4 18H3.4a1 1 0 0 1-1-1v-3.6" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /><circle cx="7.2" cy="17.6" r="1.35" fill="currentColor" /><circle cx="16.8" cy="17.6" r="1.35" fill="currentColor" /></svg>
                    ) : null}
                  </span>
                  {role.featured ? <span className="popular">Most Popular</span> : <span className="mode">{role.mode}</span>}
                </div>
                <h3>{role.title}</h3>
                <p>{role.summary}</p>
                <ul>
                  {role.points.map((point) => (
                    <li key={point}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3.2 8.2 6.3 11.3 12.8 4.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      {point}
                    </li>
                  ))}
                </ul>
                <Link className="btn" href={`/careers/${role.slug}/`}>
                  Apply for this role
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section roadmap" id="roadmap">
        <div className="wrap">
          <div className="why-head">
            <div>
              <div className="eyebrow">ROADMAP TO SUCCESS</div>
              <h2>From application to<br />achievement in 5 steps</h2>
            </div>
            <p>A transparent, fully guided process — most advisors start earning within 30 days.</p>
          </div>
          <div className="road">
            {[
              ["01", "Day 1", "Apply Online", "Share your basic details in a 2-minute form.", "done"],
              ["02", "Day 2–3", "Career Counselling", "Meet a mentor to map goals and the right insurer.", "done"],
              ["03", "Week 1–3", "Training & Exam", "Guided training and certification exam prep.", "current"],
              ["04", "Week 4", "Licensing & Onboarding", "Receive your licence, code and sales toolkit.", "later"],
              ["05", "Ongoing", "Grow & Earn", "Build your clients and step into leadership.", "later"],
            ].map(([n, when, title, text, state]) => (
              <article className="step" key={n}>
                <i className={`node ${state}`}>{n}</i>
                <div className={`step-card${state === "current" ? " current" : ""}`}>
                  <em>{when}</em>
                  <b>{title}</b>
                  <span>{text}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section stories-band" id="stories">
        <div className="wrap">
          <div className="why-head">
            <div>
              <div className="eyebrow">ADVISOR STORIES</div>
              <h2>Real people. Golden careers.</h2>
            </div>
            <div className="rating-card">
              <b>{site.rating}</b>
              <div>
                <span className="stars" aria-hidden="true">★★★★★</span>
                <small>from {site.reviews} reviews</small>
              </div>
            </div>
          </div>
          <div className="stories">
            {[
              ["/media/story-1.jpg", "I left a 9-to-5 desk job and doubled my income within 18 months. The mentorship made all the difference.", "Ananya Iyer", "Senior Advisor · Chennai"],
              ["/media/story-2.jpg", "From clearing my exam to leading a team of 14 advisors — Golden Fortune gave me a clear, honest path.", "Vikram Singh", "Team Leader · Jaipur"],
              ["/media/story-3.jpg", "As a homemaker, flexible hours mattered most. I now earn independently while being there for my kids.", "Meera Joshi", "Part-time Advisor · Pune"],
            ].map(([photo, quote, name, meta]) => (
              <article className="story" key={name}>
                <span className="qmark" aria-hidden="true">“</span>
                <p className="quote">“{quote}”</p>
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
          <ContactPanel kicker="GET IN TOUCH" title={<>Start your golden<br />career today</>} showWhatsapp />
          <InquiryForm source="home" />
        </div>
      </section>
    </>
  );
}
