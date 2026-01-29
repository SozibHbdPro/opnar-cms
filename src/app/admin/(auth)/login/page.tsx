import { hasAnyAdminUser } from "@/lib/auth/adminAuth";
import { redirect } from "next/navigation";

export default async function AdminLoginPage() {
  // if no admin exists yet, go to register
  if (!(await hasAnyAdminUser())) redirect("/admin/register");

  return (
    <div className="rounded border bg-white p-6">
      <h1 className="text-xl font-semibold">Admin Login</h1>
      <form className="mt-4 space-y-3" action="/api/admin/login" method="post">
        <div>
          <label className="text-sm text-gray-600">Email</label>
          <input name="email" type="email" required className="mt-1 w-full rounded border px-3 py-2" />
        </div>
        <div>
          <label className="text-sm text-gray-600">Password</label>
          <input name="password" type="password" required className="mt-1 w-full rounded border px-3 py-2" />
        </div>
        <button className="w-full rounded bg-black px-3 py-2 text-white">Login</button>
      </form>
    </div>
  );
}
