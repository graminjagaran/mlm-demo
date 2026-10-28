import type { Metadata } from "next";
import Link from "next/link";
import { roles } from "@/lib/site";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Careers" };

export default function CareersPage() {
  return (
    <section className="section">
      <div className="wrap">
        <PageHero kicker="CAREERS" title="Three ways to start" text="Pick the licence and the hours that fit. Every path starts with the same free application." />
        <div className="cards-3">
          {roles.map((role) => (
            <article className="card" key={role.slug}>
              <span className="mode">{role.mode}</span>
              <h3>{role.title}</h3>
              <p>{role.summary}</p>
              <Link className="btn btn-ghost" href={`/careers/${role.slug}/`}>Apply for this role</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
