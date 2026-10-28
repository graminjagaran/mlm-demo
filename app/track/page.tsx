"use client";

import { FormEvent, useState } from "react";
import { PageHero } from "@/components/PageHero";

export default function TrackPage() {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState("");
  const [status, setStatus] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setStatus("");
    const data = new FormData(event.currentTarget);
    setPending(true);
    try {
      const response = await fetch("/api/track.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          applicationNo: String(data.get("applicationNo") || ""),
          mobile: String(data.get("mobile") || ""),
        }),
      });
      const body = await response.json().catch(() => ({}));
      if (!response.ok || !body.ok) {
        setError("No application matched those details.");
        return;
      }
      setStatus(body.status);
    } catch {
      setError("No application matched those details.");
    } finally {
      setPending(false);
    }
  }

  return (
    <section className="section">
      <div className="wrap split">
        <PageHero kicker="TRACK" title="Where your application stands" text="Enter the application number from your confirmation and the mobile number you used." />
        <form className="form" onSubmit={onSubmit}>
          <label htmlFor="applicationNo">Application number</label>
          <input id="applicationNo" name="applicationNo" required maxLength={24} placeholder="GFL-26-000000" />
          <label htmlFor="mobile">Mobile number</label>
          <input id="mobile" name="mobile" required maxLength={16} placeholder="+91 98765 43210" />
          {error ? <p className="form-error">{error}</p> : null}
          {status ? <p className="form-ok">Status: <b>{status}</b></p> : null}
          <button className="btn btn-gold" disabled={pending} type="submit">{pending ? "Checking..." : "Check status"}</button>
        </form>
      </div>
    </section>
  );
}
