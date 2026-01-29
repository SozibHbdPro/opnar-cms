import Link from "next/link";

const menu = [
  { label: "Dashboard", href: "/admin" },
  { label: "Products", href: "/admin/products" },
  { label: "Orders", href: "/admin/orders" },
  { label: "Customers", href: "/admin/customers" },
  { label: "Settings", href: "/admin/settings" },
];

export default function AdminSidebar() {
  return (
    <aside className="w-64 border-r bg-gray-50 min-h-screen p-4">
      <nav className="flex flex-col gap-2">
        {menu.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="rounded px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
