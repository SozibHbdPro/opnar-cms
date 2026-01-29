import AdminTopBar from "@/components/admin/AdminTopBar";
import AdminMenu from "@/components/admin/AdminMenu";
import AdminFooter from "@/components/admin/AdminFooter";
import { requireAdmin } from "@/lib/auth/adminAuth";
import { redirect } from "next/navigation";

export default async function AdminAppLayout({ children }: { children: React.ReactNode }) {
  const session = await requireAdmin();
  if (!session) redirect("/admin/login");

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminTopBar email={session.email} />
      <div className="flex">
        <AdminMenu />
        <main className="flex-1 p-4">{children}</main>
      </div>
      <AdminFooter />
    </div>
  );
}
