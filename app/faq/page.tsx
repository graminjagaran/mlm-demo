import type { Metadata } from "next";
import { site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "FAQs" };

const faqs = [
  ["Is there a joining fee?", `${site.legalName} does not charge a fee for recruitment, training or licensing. If someone asks you to pay, write to ${site.email}.`],
  ["Who can apply?", "Life Advisor and General Partner: 18 or older, with a 10th-pass certificate. Team Leader: a graduate with at least two years of experience."],
  ["How long does licensing take?", "The guided path is about 21 days for a life licence, then a sales code and toolkit. The exam calendar can move that."],
  ["Can I work part-time?", "Yes. Full-time and part-time are both open. General Partner is built as a part-time certification of about 15 hours."],
  ["What happens after I submit the form?", "You get an application number. A counsellor calls within 24 hours. You can check the status with that number and your mobile."],
];

export default function FaqPage() {
  return (
    <section className="section">
      <div className="wrap narrow faq">
        <PageHero kicker="FAQ" title="Questions advisors ask first" text="If your question is not here, use the contact form and a counsellor will call." />
        {faqs.map(([q, a]) => (
          <details key={q}><summary>{q}</summary><p>{a}</p></details>
        ))}
      </div>
    </section>
  );
}
