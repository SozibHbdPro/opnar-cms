"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  Menu,
  Search,
  ShoppingCart,
  User,
  X,
  Heart,
  Phone,
} from "lucide-react";

type NavItem = { label: string; href: string };

export default function Header() {
  const [open, setOpen] = useState(false);

  const nav: NavItem[] = useMemo(
    () => [
      { label: "Shop", href: "/shop" },
      { label: "New", href: "/new" },
      { label: "Best Sellers", href: "/best-sellers" },
      { label: "Offers", href: "/offers" },
      { label: "Contact", href: "/contact" },
    ],
    []
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/90 backdrop-blur">
      {/* top bar */}
      <div className="hidden border-b bg-white sm:block">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-3 py-2 text-xs text-gray-600 sm:px-4">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>Support: +880 0000 000000</span>
          </div>
          <div className="flex items-center gap-4">
            <Link className="hover:text-black" href="/track-order">
              Track Order
            </Link>
            <Link className="hover:text-black" href="/help">
              Help
            </Link>
          </div>
        </div>
      </div>

      {/* main row */}
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-3 py-3 sm:px-4">
        {/* mobile menu */}
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border sm:hidden"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white">
            <span className="text-sm font-semibold">O</span>
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-black">Opnar</div>
            <div className="text-[11px] text-gray-500">Ecommerce</div>
          </div>
        </Link>

        {/* search */}
        <div className="ml-auto hidden flex-1 sm:block">
          <form action="/search" className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <input
              name="q"
              placeholder="Search products..."
              className="h-10 w-full rounded-xl border bg-white pl-10 pr-3 text-sm outline-none focus:border-black"
            />
          </form>
        </div>

        {/* actions */}
        <div className="flex items-center gap-2">
          <Link
            href="/search"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border sm:hidden"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </Link>

          <Link
            href="/wishlist"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border"
            aria-label="Wishlist"
          >
            <Heart className="h-5 w-5" />
          </Link>

          <Link
            href="/account"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border"
            aria-label="Account"
          >
            <User className="h-5 w-5" />
          </Link>

          <Link
            href="/cart"
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-lg border"
            aria-label="Cart"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -right-1 -top-1 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1 text-[10px] font-semibold text-white">
              0
            </span>
          </Link>
        </div>
      </div>

      {/* nav row */}
      <div className="hidden sm:block">
        <div className="mx-auto max-w-6xl px-3 pb-3 sm:px-4">
          <nav className="flex flex-wrap items-center gap-2">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="rounded-full border px-3 py-1.5 text-sm text-gray-700 hover:border-black hover:text-black"
              >
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      {/* mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 sm:hidden">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-[85%] max-w-sm bg-white shadow-xl">
            <div className="flex items-center justify-between border-b p-4">
              <div className="text-sm font-semibold">Menu</div>
              <button
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="p-4">
              <form action="/search" className="relative">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                <input
                  name="q"
                  placeholder="Search products..."
                  className="h-10 w-full rounded-xl border bg-white pl-10 pr-3 text-sm outline-none focus:border-black"
                />
              </form>

              <div className="mt-4 flex flex-col gap-2">
                {nav.map((n) => (
                  <Link
                    key={n.href}
                    href={n.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl border px-3 py-2 text-sm hover:border-black"
                  >
                    {n.label}
                  </Link>
                ))}
              </div>

              <div className="mt-6 grid grid-cols-2 gap-2">
                <Link
                  href="/account"
                  onClick={() => setOpen(false)}
                  className="rounded-xl border px-3 py-2 text-sm hover:border-black"
                >
                  Account
                </Link>
                <Link
                  href="/cart"
                  onClick={() => setOpen(false)}
                  className="rounded-xl border px-3 py-2 text-sm hover:border-black"
                >
                  Cart
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
