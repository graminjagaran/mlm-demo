import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Resources" };

const items = [
  ["/faq/", "FAQs", "Fees, eligibility, licensing and how applications are handled."],
  ["/training/", "Training calendar", "Upcoming certification batches."],
  ["/calculator/", "Income calculator", "An illustration around the published year-1 average."],
  ["/branches/", "Find a branch", "Head office and city career desks."],
];

export default function ResourcesPage() {
  return (
    <section className="section">
      <div className="wrap">
        <PageHero kicker="RESOURCES" title="Before you apply" text="Short answers and the tools from the homepage, in one place." />
        <div className="cards-4">
          {items.map(([href, title, text]) => (
            <Link className="card" key={href} href={href}><h3>{title}</h3><p>{text}</p></Link>
          ))}
        </div>
      </div>
    </section>
  );
}
