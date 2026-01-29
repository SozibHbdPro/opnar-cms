import Header from "@/components/shop/Header";
import Footer from "@/components/shop/Footer";

export default function ShopLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main style={{ maxWidth: 1200, margin: "0 auto", padding: "16px" }}>{children}</main>
      <Footer />
    </>
  );
}
