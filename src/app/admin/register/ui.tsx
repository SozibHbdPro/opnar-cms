"use client";

import { useState } from "react";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setErr(null);

    const res = await fetch("/admin/register/action", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    if (!res.ok) {
      const j = await res.json().catch(() => null);
      setErr(j?.error ?? "Register failed");
      setLoading(false);
      return;
    }

    window.location.href = "/admin/dashboard";
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form onSubmit={onSubmit} className="w-full max-w-sm rounded-xl bg-white p-6 shadow">
        <h1 className="text-xl font-semibold">Create Admin</h1>
        <p className="text-sm text-gray-600 mt-1">This is only available for the first admin user.</p>

        <div className="mt-4 space-y-3">
          <input
            className="w-full rounded border p-2"
            placeholder="Name (optional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
            autoComplete="new-password"
          />
          {err && <div className="text-sm text-red-600">{err}</div>}
          <button className="w-full rounded bg-black py-2 text-white disabled:opacity-60" disabled={loading}>
            {loading ? "Creating..." : "Create Admin"}
          </button>

          <a className="block text-sm text-blue-600 hover:underline" href="/admin/login">
            Back to login
          </a>
        </div>
      </form>
    </div>
  );
}
