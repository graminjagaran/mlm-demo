import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Why insurance" };

export default function WhyPage() {
  return (
    <section className="section">
      <div className="wrap">
        <PageHero kicker="WHY INSURANCE" title="A profession built on trust, rewarded with growth." text="India's insurance sector is growing at double digits. Advisors earn from the business they write, with renewal income that can continue after the first sale." />
        <div className="facts">
          <div className="fact"><span>Income cap</span><b>None</b></div>
          <div className="fact"><span>Work mode</span><b>Your choice</b></div>
          <div className="fact"><span>Training cost</span><b>Free</b></div>
          <div className="fact"><span>Promotion</span><b>In 12 months</b></div>
        </div>
      </div>
    </section>
  );
}
