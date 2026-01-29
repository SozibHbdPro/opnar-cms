import { NextResponse } from "next/server";
import { clearAdminSession } from "@/lib/auth/adminAuth";

export async function GET(req: Request) {
  await clearAdminSession();
  return NextResponse.redirect(new URL("/admin/login", req.url));
}
