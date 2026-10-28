"use client";

import { FormEvent, useState } from "react";
import { roles } from "@/lib/site";

const started = Date.now();

export function InquiryForm({ source }: { source: string }) {
  const [role, setRole] = useState("Life Advisor");
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      fullName: String(data.get("fullName") || ""),
      mobile: String(data.get("mobile") || ""),
      email: String(data.get("email") || ""),
      city: String(data.get("city") || ""),
      role,
      message: String(data.get("message") || ""),
      consent: data.get("consent") === "on",
      companyWebsite: String(data.get("companyWebsite") || ""),
      startedAt: started,
      sourcePage: source,
    };
    setPending(true);
    try {
      const response = await fetch("/api/inquiry.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const body = await response.json().catch(() => ({}));
      if (!response.ok || !body.ok) {
        setError(body.error || "Could not submit. Please try again.");
        return;
      }
      setDone(body.applicationNo);
      form.reset();
    } catch {
      setError("Could not submit. Please try again.");
    } finally {
      setPending(false);
    }
  }

  if (done) {
    return (
      <div className="form-ok">
        <b>Application received</b>
        <p>Your application number is <strong>{done}</strong>. A career advisor will call you within 24 hours. Keep this number to track the application.</p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <span className="time">2 min</span>
      <h3>Career Application</h3>
      <div className="grid-2">
        <div>
          <label htmlFor="fullName">Full name*</label>
          <input id="fullName" name="fullName" required maxLength={80} placeholder="Priya Sharma" autoComplete="name" />
        </div>
        <div>
          <label htmlFor="mobile">Mobile number*</label>
          <input id="mobile" name="mobile" required inputMode="tel" maxLength={16} placeholder="+91 98765 43210" autoComplete="tel" />
        </div>
      </div>
      <div className="grid-2">
        <div>
          <label htmlFor="email">Email address</label>
          <input id="email" name="email" type="email" required maxLength={120} placeholder="priya@email.com" autoComplete="email" />
        </div>
        <div>
          <label htmlFor="city">City*</label>
          <input id="city" name="city" required maxLength={60} placeholder="Select your city" autoComplete="address-level2" />
        </div>
      </div>
      <label>Role you&apos;re interested in</label>
      <div className="roles-pick">
        {roles.map((item) => (
          <label key={item.formValue}>
            <input type="radio" name="rolePick" checked={role === item.formValue} onChange={() => setRole(item.formValue)} />
            {item.formValue}
          </label>
        ))}
      </div>
      <label htmlFor="message">Message (optional)</label>
      <textarea id="message" name="message" maxLength={1000} placeholder="Tell us a little about your background..." />
      <label className="hp" aria-hidden="true">
        Company website
        <input name="companyWebsite" tabIndex={-1} autoComplete="off" />
      </label>
      <label className="consent">
        <input type="checkbox" name="consent" required />
        <span>I authorise Golden Fortune to contact me via call, SMS or WhatsApp. This overrides DND registration.</span>
      </label>
      {error ? <p className="form-error">{error}</p> : null}
      <button className="btn btn-gold" type="submit" disabled={pending}>{pending ? "Sending..." : "Submit Application"}</button>
      <p className="form-note">Your details are safe and confidential.</p>
    </form>
  );
}
