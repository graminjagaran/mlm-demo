import type { Metadata } from "next";
import { ContactPanel } from "@/components/ContactPanel";
import { InquiryForm } from "@/components/InquiryForm";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="section">
      <div className="wrap contact-grid">
        <ContactPanel kicker="CONTACT" title="Talk to a career advisor" showWhatsapp />
        <InquiryForm source="contact" />
      </div>
    </section>
  );
}
