import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/shop/Header";
import Footer from "@/components/shop/Footer";

export const metadata: Metadata = {
  title: "Opnar",
  description: "Opnar ecommerce",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
              <Footer />
      </body>
    </html>
  );
}
