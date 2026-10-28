import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Roadmap" };

const steps = [
  ["Day 1", "Apply online with your basic details."],
  ["Day 2–3", "A mentor maps your goals and the insurer that fits."],
  ["Week 1–3", "Guided training and certification exam prep."],
  ["Week 4", "Licence, advisor code and the sales toolkit."],
  ["Ongoing", "Build clients, then step into leadership if you want it."],
];

export default function RoadmapPage() {
  return (
    <section className="section">
      <div className="wrap">
        <PageHero kicker="ROADMAP" title="From application to achievement in 5 steps" text="Most advisors who complete licensing start earning within 30 days. The pace depends on the exam calendar and the hours you give it." />
        <div className="cards-3">
          {steps.map(([when, text], index) => (
            <article className="card" key={when}><span className="mode">0{index + 1} · {when}</span><p>{text}</p></article>
          ))}
        </div>
      </div>
    </section>
  );
}
