import { site } from "@/lib/site";

export function Logo() {
  return (
    <span className="brand">
      <span className="brand-mark">
        <img src="/brand/mark.png" alt="" />
      </span>
      <span className="brand-text">
        <strong>{site.name}</strong>
        <span>MULTI-SERVICES</span>
      </span>
    </span>
  );
}
