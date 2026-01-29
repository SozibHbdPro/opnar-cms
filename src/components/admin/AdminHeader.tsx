export default function AdminHeader() {
  return (
    <header className="h-14 w-full border-b bg-white px-6 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="text-lg font-semibold">Opnar Admin</span>
      </div>

      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600">Administrator</span>
        <button className="text-sm text-red-600 hover:underline">
          Logout
        </button>
      </div>
    </header>
  );
}
