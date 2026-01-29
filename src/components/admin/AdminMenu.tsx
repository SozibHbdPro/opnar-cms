import Link from "next/link";

const items = [
  { href: "/admin/dashboard", label: "Dashboard" },
  { href: "/admin/products", label: "Products" },
  { href: "/admin/orders", label: "Orders" },
  { href: "/admin/settings", label: "Settings" },
];

export default function AdminMenu() {
  return (
    <aside className="w-64 border-r bg-white">
      <div className="p-4 text-xs font-semibold text-gray-500">MENU</div>
      <nav className="px-2 pb-4">
        {items.map((i) => (
          <Link
            key={i.href}
            href={i.href}
            className="block rounded px-3 py-2 text-sm hover:bg-gray-50"
          >
            {i.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
