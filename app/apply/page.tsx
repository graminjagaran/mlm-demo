import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Apply" };

export default function ApplyPage() {
  return (
    <section className="section" style={{ paddingTop: 28 }}>
      <div className="wrap split">
        <PageHero
          kicker="APPLY NOW"
          title="It's free to apply."
          text="No joining fee. No training fee. A counsellor calls within 24 hours. Eligibility starts at 18 years and a 10th-pass certificate."
        />
        <InquiryForm source="apply" />
      </div>
    </section>
  );
}
