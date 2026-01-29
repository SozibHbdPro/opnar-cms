import { redirect } from "next/navigation";
import { getAdminFromSession } from "@/lib/auth/adminAuth";
import LoginForm from "./ui";

export default async function AdminLoginPage() {
  const admin = await getAdminFromSession();
  if (admin) redirect("/admin/dashboard");
  return <LoginForm />;
}
