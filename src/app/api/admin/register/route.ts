import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";
import { hasAnyAdminUser, signAdminSession } from "@/lib/auth/adminAuth";

export async function POST(req: Request) {
  const form = await req.formData();
  const email = String(form.get("email") || "").trim().toLowerCase();
  const password = String(form.get("password") || "");

  if (!email || password.length < 6) {
    return NextResponse.redirect(new URL("/admin/register", req.url));
  }

  // allow first admin only
  if (await hasAnyAdminUser()) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  const passwordHash = await bcrypt.hash(password, 12);

  const user = await prisma.adminUser.create({
    data: { email, passwordHash },
  });

  await signAdminSession({ id: user.id, email: user.email });
  return NextResponse.redirect(new URL("/admin/dashboard", req.url));
}
