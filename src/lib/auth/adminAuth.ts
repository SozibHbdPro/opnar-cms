import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";
import { prisma } from "@/lib/prisma";

const COOKIE_NAME = "opnar_admin";
const secret = new TextEncoder().encode(process.env.ADMIN_JWT_SECRET || "dev_admin_secret_change_me");

export async function hasAnyAdminUser() {
  const count = await prisma.adminUser.count();
  return count > 0;
}

export async function signAdminSession(payload: { id: string; email: string }) {
  const token = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret);

  cookies().set(COOKIE_NAME, token, {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
  });
}

export async function clearAdminSession() {
  cookies().set(COOKIE_NAME, "", { httpOnly: true, path: "/", maxAge: 0 });
}

export async function getAdminSession() {
  const token = cookies().get(COOKIE_NAME)?.value;
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, secret);
    return { id: String(payload.id), email: String(payload.email) };
  } catch {
    return null;
  }
}

export async function requireAdmin() {
  const s = await getAdminSession();
  if (!s) return null;
  // (optional) ensure user still exists
  const user = await prisma.adminUser.findUnique({ where: { id: s.id } });
  if (!user) return null;
  return s;
}
