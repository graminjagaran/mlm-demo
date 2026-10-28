"use client";

import { FormEvent, useState } from "react";
import { cities, roles } from "@/lib/site";

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
      <div className="form-head">
        <h3>Career Application</h3>
        <span className="time">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.7" /><path d="M12 8v4l2.5 1.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>
          2 min
        </span>
      </div>
      <div className="grid-2">
        <div>
          <label htmlFor="fullName">Full name*</label>
          <input id="fullName" name="fullName" required maxLength={80} placeholder="Priya Sharma" autoComplete="name" />
        </div>
        <div>
          <label htmlFor="mobile">Mobile number*</label>
          <div className="phone-field">
            <span>+91</span>
            <input id="mobile" name="mobile" required inputMode="tel" maxLength={16} placeholder="98765 43210" autoComplete="tel" />
          </div>
        </div>
      </div>
      <div className="grid-2">
        <div>
          <label htmlFor="email">Email address</label>
          <input id="email" name="email" type="email" required maxLength={120} placeholder="priya@email.com" autoComplete="email" />
        </div>
        <div>
          <label htmlFor="city">City*</label>
          <select id="city" name="city" required defaultValue="">
            <option value="" disabled>Select your city</option>
            {cities.map((city) => <option key={city} value={city}>{city}</option>)}
          </select>
        </div>
      </div>
      <label>Role you&apos;re interested in</label>
      <div className="roles-pick">
        {roles.map((item) => (
          <label key={item.formValue} className={role === item.formValue ? "on" : ""}>
            <input type="radio" name="rolePick" checked={role === item.formValue} onChange={() => setRole(item.formValue)} />
            {item.formValue}
          </label>
        ))}
      </div>
      <label htmlFor="message">Message <span className="opt">(optional)</span></label>
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
      <div className="form-foot">
        <p className="form-note">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="1.7" /><path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.7" /></svg>
          Your details are safe and confidential.
        </p>
        <button className="btn" type="submit" disabled={pending}>{pending ? "Sending..." : "Submit Application"} <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
      </div>
    </form>
  );
}
