import { redirect, notFound } from "next/navigation";
import { getAdminFromSession, hasAnyAdminUser } from "@/lib/auth/adminAuth";
import RegisterForm from "./ui";

export default async function AdminRegisterPage() {
  const admin = await getAdminFromSession();
  if (admin) redirect("/admin/dashboard");

  const any = await hasAnyAdminUser();
  if (any) notFound(); // after first admin exists, registration page is disabled

  return <RegisterForm />;
}
