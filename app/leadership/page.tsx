import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Leadership" };

export default function LeadershipPage() {
  return (
    <section className="section">
      <div className="wrap about">
        <img src="/media/founder.jpg" alt="Rajesh Malhotra" style={{ width: "100%", height: 420, objectFit: "cover", borderRadius: 28 }} />
        <div>
          <PageHero kicker="LEADERSHIP" title="Rajesh Malhotra" text="Founder and Managing Director. He built Golden Fortune Life Multi-Services as a recruitment and training desk for people entering life and general insurance, with a mentor in every branch we cover." />
        </div>
      </div>
    </section>
  );
}
