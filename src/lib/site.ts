export const SITE = {
  name: "OPNAR",
  logoSrc: "/logo.svg",
};

export const HEADER_LINKS = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "New Arrivals", href: "/shop?tag=new" },
  { label: "Best Sellers", href: "/shop?tag=best" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER = {
  columns: [
    {
      title: "Shop",
      links: [
        { label: "All Products", href: "/shop" },
        { label: "New Arrivals", href: "/shop?tag=new" },
        { label: "Best Sellers", href: "/shop?tag=best" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Shipping", href: "/shipping" },
        { label: "Returns", href: "/returns" },
        { label: "FAQ", href: "/faq" },
      ],
    },
  ],
  bottomText: `© ${new Date().getFullYear()} OPNAR. All rights reserved.`,
};
