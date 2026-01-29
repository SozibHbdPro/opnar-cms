import { requireAdmin } from "@/lib/auth/adminAuth";
import { redirect } from "next/navigation";

export default async function AdminDashboardPage() {
  const session = await requireAdmin();
  if (!session) redirect("/admin/login");

  return (
    <div className="rounded border bg-white p-4">
      <div className="text-lg font-semibold">Dashboard</div>
      <div className="mt-2 text-sm text-gray-600">Logged in as {session.email}</div>
    </div>
  );
}
