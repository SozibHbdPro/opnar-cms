import Link from "next/link";

export default function AdminTopBar({ email }: { email?: string | null }) {
  return (
    <div className="flex h-14 items-center justify-between border-b bg-white px-4">
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded bg-black" />
        <div className="text-sm font-semibold">OPNAR Admin</div>
      </div>
      <div className="flex items-center gap-3 text-sm">
        {email ? <span className="text-gray-600">{email}</span> : null}
        <Link className="rounded border px-3 py-1 hover:bg-gray-50" href="/api/admin/logout">
          Logout
        </Link>
      </div>
    </div>
  );
}
