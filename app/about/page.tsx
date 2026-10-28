import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "About us" };

export default function AboutPage() {
  return (
    <section className="section">
      <div className="wrap about">
        <div className="about-photo">
          <img src="/media/about.jpg" alt="" />
        </div>
        <div>
          <PageHero kicker="ABOUT US" title="We don't just recruit. We build leaders." text={`${site.legalName} has spent ${site.years} years placing advisors with life and general insurers. Training, the licence and the first year of mentoring sit with us. Recruitment, training and licensing stay free.`} />
          <div className="founder">
            <img src="/media/founder.jpg" alt="" />
            <div><b>Rajesh Malhotra</b><span>Founder & Managing Director</span></div>
          </div>
          <Link className="btn btn-gold" href="/apply/" style={{ marginTop: 18 }}>Apply Now — It&apos;s Free</Link>
        </div>
      </div>
    </section>
  );
}
