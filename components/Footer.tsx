import Link from "next/link";
import { site } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <Logo />
          <p>Empowering India&apos;s next generation of insurance professionals with training, mentorship and opportunity.</p>
        </div>
        <div>
          <h4>Careers</h4>
          <Link href="/careers/life-advisor/">Life Advisor</Link>
          <Link href="/careers/team-leader/">Team Leader</Link>
          <Link href="/careers/general-partner/">General Partner</Link>
          <Link href="/#roadmap">Roadmap</Link>
        </div>
        <div>
          <h4>Company</h4>
          <Link href="/about/">About Us</Link>
          <Link href="/leadership/">Leadership</Link>
          <Link href="/partners/">Partners</Link>
          <Link href="/resources/">Media</Link>
        </div>
        <div>
          <h4>Support</h4>
          <a href={site.memberLogin}>Advisor Login</a>
          <Link href="/track/">Track Application</Link>
          <Link href="/faq/">FAQs</Link>
          <Link href="/contact/">Contact Us</Link>
        </div>
        <div>
          <h4>Reach Us</h4>
          <a href={site.phoneHref}>{site.phoneDisplay}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <span>{site.address.replace("Level 9, ", "")}</span>
        </div>
      </div>
      <div className="wrap warn">
        Beware of fraudulent calls. {site.legalName} never charges any fee for recruitment, training or licensing. If you receive such a request, report it to {site.email}.
      </div>
    </footer>
  );
}
