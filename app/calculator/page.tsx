"use client";

import { useMemo, useState } from "react";
import { PageHero } from "@/components/PageHero";

export default function CalculatorPage() {
  const [hours, setHours] = useState(30);
  const estimate = useMemo(() => Math.round((680000 * hours) / 35 / 1000) * 1000, [hours]);
  const monthly = Math.round(estimate / 12);
  return (
    <section className="section">
      <div className="wrap calc">
        <div>
          <PageHero
            kicker="INCOME CALCULATOR"
            title="Estimate a first-year range"
            text="This is an illustration around the published year-1 average of ₹6.8 Lakh. It is not a salary, a guarantee, or an offer."
          />
          <div className="card">
            <label htmlFor="hours">Hours you can give each week: {hours}</label>
            <input id="hours" className="range" type="range" min={10} max={50} value={hours} onChange={(event) => setHours(Number(event.target.value))} />
          </div>
        </div>
        <aside className="result">
          <div className="kicker" style={{ color: "#e0b878" }}>ILLUSTRATIVE YEAR 1</div>
          <strong>₹{estimate.toLocaleString("en-IN")}</strong>
          <p>About ₹{monthly.toLocaleString("en-IN")} a month if the year matches this pace. Commissions vary by insurer, licence and the business you actually write.</p>
        </aside>
      </div>
    </section>
  );
}
