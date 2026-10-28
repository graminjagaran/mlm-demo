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
            {insurers.map((name) => <span className="logo-pill" key={name}>{name}</span>)}
          </div>
        </div>
      </section>

      <section className="section" id="why">
        <div className="wrap">
          <div className="why-head">
            <div>
              <div className="eyebrow">WHY CHOOSE A CAREER IN INSURANCE</div>
              <h2>A profession built on trust, rewarded with growth.</h2>
            </div>
            <p className="sub">India&apos;s insurance sector is growing at double digits. Here&apos;s why professionals from every background are making the switch.</p>
          </div>
          <div className="cards-4">
            {[
              ["Unlimited Earnings", "Commissions, lifetime renewals and performance bonuses — with no ceiling."],
              ["Flexible Hours", "Work full-time or part-time, from anywhere, at a pace that suits your life."],
              ["Expert Training", "Certification prep, sales workshops and 1:1 mentoring from top performers."],
              ["Recognition & Growth", "Fast-track leadership roles, award trips and a path to your own agency."],
            ].map(([title, text]) => (
              <article className="card" key={title}><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
          <div className="facts">
            <div className="fact"><span>Income cap</span><b>None</b></div>
            <div className="fact"><span>Work mode</span><b>Your choice</b></div>
            <div className="fact"><span>Training cost</span><b>Free</b></div>
            <div className="fact"><span>Promotion</span><b>In 12 months</b></div>
          </div>
        </div>
      </section>

      <section className="section" id="about" style={{ paddingTop: 10 }}>
        <div className="wrap about">
          <div className="about-photo">
            <img src="/media/about.jpg" alt="Golden Fortune team" />
            <div className="years"><b>{site.years} Years</b><span>Building insurance careers</span></div>
          </div>
          <div>
            <div className="badge">Top Recruiter 2024</div>
            <h2>We don&apos;t just recruit. We build leaders.</h2>
            <p className="sub">{site.legalName} connects ambitious individuals with India&apos;s leading life and general insurers. From your first interview to your first promotion, our team stands beside you with training, tools and a network that turns potential into prosperity.</p>
            <div className="metrics">
              <div><b>{site.advisors}</b><span>Advisors placed</span></div>
              <div><b>{site.cities}</b><span>Cities covered</span></div>
              <div><b>{site.passRate}</b><span>Exam pass rate</span></div>
            </div>
            <ul className="ticks">
              <li>End-to-end licensing support</li>
              <li>Dedicated branch mentor</li>
              <li>Digital sales toolkit</li>
              <li>Transparent payouts</li>
            </ul>
            <Link className="btn btn-navy" href="/about/">Know More About Us</Link>
            <div className="founder">
              <img src="/media/founder.jpg" alt="" />
              <div><b>Rajesh Malhotra</b><span>Founder & Managing Director</span></div>
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
