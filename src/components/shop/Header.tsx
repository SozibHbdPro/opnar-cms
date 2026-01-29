import Link from "next/link";
import Image from "next/image";
import { HEADER_LINKS, SITE } from "@/lib/site";

export default function Header() {
  return (
    <header style={{ borderBottom: "1px solid #e5e7eb" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "12px 16px", display: "flex", alignItems: "center", gap: 16 }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <Image src={SITE.logoSrc} alt={SITE.name} width={120} height={28} priority />
        </Link>

        <nav style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
          {HEADER_LINKS.map((l) => (
            <Link key={l.href} href={l.href} style={{ textDecoration: "none", color: "#111827", fontSize: 14 }}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 10 }}>
          <Link href="/search" aria-label="Search" style={{ padding: 8, borderRadius: 10, border: "1px solid #e5e7eb" }}>
            <span style={{ fontSize: 14 }}>Search</span>
          </Link>

          <Link href="/account" aria-label="Account" style={{ padding: 8, borderRadius: 10, border: "1px solid #e5e7eb", display: "flex" }}>
            <Image src="/icons/user.svg" alt="Account" width={18} height={18} />
          </Link>

          <Link href="/cart" aria-label="Cart" style={{ padding: 8, borderRadius: 10, border: "1px solid #e5e7eb", display: "flex" }}>
            <Image src="/icons/cart.svg" alt="Cart" width={18} height={18} />
          </Link>
        </div>
      </div>
    </header>
  );
}
