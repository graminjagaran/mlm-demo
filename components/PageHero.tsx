export function PageHero({ kicker, title, text }: { kicker: string; title: string; text: string }) {
  return (
    <section className="page-hero">
      <div className="wrap narrow">
        <div className="eyebrow">{kicker}</div>
        <h1>{title}</h1>
        <p className="sub">{text}</p>
      </div>
    </section>
  );
}
