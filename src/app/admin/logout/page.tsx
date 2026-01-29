import { redirect } from "next/navigation";
import { destroySession } from "@/lib/auth/adminAuth";

export default async function LogoutPage() {
  await destroySession();
  redirect("/admin/login");
}
