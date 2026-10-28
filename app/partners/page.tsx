import type { Metadata } from "next";
import { insurers, site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Partners" };

export default function PartnersPage() {
  return (
    <section className="section">
      <div className="wrap">
        <PageHero kicker="PARTNERS" title={`Placing advisors with ${site.insurers} leading insurers`} text="The insurer you are licensed with is confirmed during counselling. These are the names used across our career materials." />
        <div className="logo-row">
          {insurers.map((name) => <span className="card" key={name}><h3>{name}</h3></span>)}
        </div>
      </div>
    </section>
  );
}
