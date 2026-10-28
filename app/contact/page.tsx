import type { Metadata } from "next";
import { InquiryForm } from "@/components/InquiryForm";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="section">
      <div className="wrap contact-grid">
        <div className="contact-panel">
          <div className="eyebrow">CONTACT</div>
          <h2>Talk to a career advisor</h2>
          <p>Share a few details — a career advisor will call you within 24 hours.</p>
          <div className="info-line"><span>TOLL-FREE</span><a href={site.phoneHref}>{site.phoneDisplay}</a></div>
          <div className="info-line"><span>EMAIL</span><a href={`mailto:${site.email}`}>{site.email}</a></div>
          <div className="info-line"><span>HEAD OFFICE</span>{site.address}</div>
          <div className="info-line"><span>HOURS</span>{site.hours}</div>
        </div>
        <InquiryForm source="contact" />
      </div>
    </section>
  );
}
