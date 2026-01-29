import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { signAdminSession } from "@/lib/auth/adminAuth";

export async function POST(req: Request) {
  const form = await req.formData();
  const email = String(form.get("email") || "").trim().toLowerCase();
  const password = String(form.get("password") || "");

  const user = await prisma.adminUser.findUnique({ where: { email } });
  if (!user) return NextResponse.redirect(new URL("/admin/login", req.url));

  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) return NextResponse.redirect(new URL("/admin/login", req.url));

  await signAdminSession({ id: user.id, email: user.email });
  return NextResponse.redirect(new URL("/admin/dashboard", req.url));
}
