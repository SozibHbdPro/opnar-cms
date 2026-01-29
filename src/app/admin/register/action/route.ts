import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { createSession, hashPassword, hasAnyAdminUser } from "@/lib/auth/adminAuth";

export async function POST(req: Request) {
  const any = await hasAnyAdminUser();
  if (any) return NextResponse.json({ error: "Registration disabled" }, { status: 403 });

  const { name, email, password } = await req.json().catch(() => ({}));
  if (!email || !password) {
    return NextResponse.json({ error: "Email and password required" }, { status: 400 });
  }

  const exists = await prisma.adminUser.findUnique({ where: { email } });
  if (exists) return NextResponse.json({ error: "Email already exists" }, { status: 409 });

  const passwordHash = await hashPassword(password);

  const user = await prisma.adminUser.create({
    data: { email, passwordHash, name: name || null },
  });

  await createSession(user.id);
  return NextResponse.json({ ok: true });
}
