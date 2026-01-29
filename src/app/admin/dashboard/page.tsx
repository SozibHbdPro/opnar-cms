import { redirect } from "next/navigation";
import { getAdminFromSession } from "@/lib/auth/adminAuth";

export default async function AdminDashboard() {
  const admin = await getAdminFromSession();
  if (!admin) redirect("/admin/login");

  return (
    <div>
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <p className="mt-2 text-gray-600">
        Welcome{admin.name ? `, ${admin.name}` : ""} ({admin.email})
      </p>

      <div className="mt-6 flex gap-3">
        <a className="rounded bg-black px-4 py-2 text-white" href="/admin/logout">
          Logout
        </a>
      </div>
    </div>
  );
}
