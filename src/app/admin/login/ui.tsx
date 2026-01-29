"use client";

import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setErr(null);

    const res = await fetch("/admin/login/action", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      const j = await res.json().catch(() => null);
      setErr(j?.error ?? "Login failed");
      setLoading(false);
      return;
    }

    window.location.href = "/admin/dashboard";
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form onSubmit={onSubmit} className="w-full max-w-sm rounded-xl bg-white p-6 shadow">
        <h1 className="text-xl font-semibold">Admin Login</h1>
        <p className="text-sm text-gray-600 mt-1">Sign in to continue</p>

        <div className="mt-4 space-y-3">
          <input
            className="w-full rounded border p-2"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />
          <input
            className="w-full rounded border p-2"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />
          {err && <div className="text-sm text-red-600">{err}</div>}
          <button
            className="w-full rounded bg-black py-2 text-white disabled:opacity-60"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Login"}
          </button>

          <a className="block text-sm text-blue-600 hover:underline" href="/admin/register">
            Create admin account
          </a>
        </div>
      </form>
    </div>
  );
}
