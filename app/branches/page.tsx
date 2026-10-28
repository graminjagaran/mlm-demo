"use client";

import { useMemo, useState } from "react";
import { branches } from "@/lib/site";
import { PageHero } from "@/components/PageHero";

export default function BranchesPage() {
  const [query, setQuery] = useState("");
  const list = useMemo(
    () => branches.filter((branch) => branch.city.toLowerCase().includes(query.trim().toLowerCase())),
    [query],
  );
  return (
    <section className="section">
      <div className="wrap">
        <PageHero kicker="BRANCHES" title="Find a career desk" text="Head office is in English Bazar, Malda, West Bengal 732101. Other city desks are confirmed on your counselling call." />
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search a city" aria-label="Search a city" />
        <div className="cards-3" style={{ marginTop: 16 }}>
          {list.map((branch) => (
            <article className="card branch" key={branch.city}>
              <div>
                <b>{branch.city}</b>
                <div>{branch.name}</div>
                <span>{branch.detail}</span>
              </div>
              <span>{branch.hours}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
