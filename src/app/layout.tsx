import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "OpenPacks — Back the builders. Own the upside.",
  description:
    "Deal-by-deal participation in real AI systems being built right now. Back Jaron Baston's AI products and get revenue share.",
  openGraph: {
    title: "OpenPacks — Back the builders. Own the upside.",
    description:
      "Not a fund. Deal-by-deal participation in real AI systems being built right now.",
    url: "https://openpacks.dev",
    siteName: "OpenPacks",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
