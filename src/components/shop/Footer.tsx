import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-10 border-t bg-white">
      <div className="mx-auto max-w-6xl px-3 py-10 sm:px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="text-lg font-semibold">Opnar</div>
            <p className="mt-2 text-sm text-gray-600">
              Premium ecommerce experience. Fast shipping, easy returns.
            </p>
            <div className="mt-4 text-sm text-gray-700">
              <div>Email: support@opnar.com</div>
              <div>Phone: +880 0000 000000</div>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold">Shop</div>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><Link className="hover:text-black" href="/shop">All Products</Link></li>
              <li><Link className="hover:text-black" href="/new">New Arrivals</Link></li>
              <li><Link className="hover:text-black" href="/best-sellers">Best Sellers</Link></li>
              <li><Link className="hover:text-black" href="/offers">Offers</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold">Company</div>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><Link className="hover:text-black" href="/about">About</Link></li>
              <li><Link className="hover:text-black" href="/contact">Contact</Link></li>
              <li><Link className="hover:text-black" href="/privacy">Privacy Policy</Link></li>
              <li><Link className="hover:text-black" href="/terms">Terms</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold">Customer Care</div>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><Link className="hover:text-black" href="/help">Help Center</Link></li>
              <li><Link className="hover:text-black" href="/track-order">Track Order</Link></li>
              <li><Link className="hover:text-black" href="/returns">Returns</Link></li>
              <li><Link className="hover:text-black" href="/shipping">Shipping</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t pt-6 text-xs text-gray-600 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Opnar. All rights reserved.</div>
          <div className="flex gap-4">
            <Link className="hover:text-black" href="/privacy">Privacy</Link>
            <Link className="hover:text-black" href="/terms">Terms</Link>
            <Link className="hover:text-black" href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
