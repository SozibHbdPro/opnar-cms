export default function AdminFooter() {
  return (
    <footer className="h-12 border-t bg-white px-6 flex items-center justify-between text-sm text-gray-500">
      <span>© {new Date().getFullYear()} Opnar Admin</span>
      <span>v1.0.0</span>
    </footer>
  );
}
