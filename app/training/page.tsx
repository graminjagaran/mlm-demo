import type { Metadata } from "next";
import { batches, site } from "@/lib/site";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = { title: "Training calendar" };

export default function TrainingPage() {
  return (
    <section className="section">
      <div className="wrap">
        <PageHero kicker="TRAINING CALENDAR" title={`Next batch: ${site.nextBatch}`} text="Certification prep is free. A counsellor confirms your city, mode and seat after you apply." />
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>Date</th><th>City</th><th>Mode</th><th>Seats</th></tr>
            </thead>
            <tbody>
              {batches.map((batch) => (
                <tr key={batch.date + batch.city}>
                  <td>{batch.date}</td>
                  <td>{batch.city}</td>
                  <td>{batch.mode}</td>
                  <td>{batch.seats}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
