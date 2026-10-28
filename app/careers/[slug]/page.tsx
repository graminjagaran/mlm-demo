import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { InquiryForm } from "@/components/InquiryForm";
import { roles } from "@/lib/site";

export function generateStaticParams() {
  return roles.map((role) => ({ slug: role.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Metadata {
  return { title: "Career" };
}

export default async function RolePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const role = roles.find((item) => item.slug === slug);
  if (!role) notFound();
  return (
    <section className="section">
      <div className="wrap contact-grid">
        <div>
          <div className="eyebrow">{role.mode}</div>
          <h1>{role.title}</h1>
          <p className="sub">{role.body}</p>
          <ul className="ticks">
            {role.points.map((point) => <li key={point}>{point}</li>)}
          </ul>
          <Link href="/careers/">All roles</Link>
        </div>
        <InquiryForm source={role.slug} />
      </div>
    </section>
  );
}
