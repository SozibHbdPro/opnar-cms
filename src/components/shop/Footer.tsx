import Link from "next/link";
import { FOOTER } from "@/lib/site";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid #e5e7eb", marginTop: 32 }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "24px 16px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 20 }}>
          {FOOTER.columns.map((col) => (
            <div key={col.title}>
              <div style={{ fontWeight: 700, marginBottom: 10, color: "#111827" }}>{col.title}</div>
              <div style={{ display: "grid", gap: 8 }}>
                {col.links.map((l) => (
                  <Link key={l.href} href={l.href} style={{ textDecoration: "none", color: "#374151", fontSize: 14 }}>
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 18, paddingTop: 14, borderTop: "1px solid #f3f4f6", color: "#6b7280", fontSize: 13 }}>
          {FOOTER.bottomText}
        </div>
      </div>
    </footer>
  );
}
