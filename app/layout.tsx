import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display"
});

const body = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://luscents.example.com"),
  title: "LU Scents — Blossom & Boss | Pre-Order Now",
  description:
    "LU Scents is launching. Crafted with elegance, made to leave a lasting impression. Pre-order Blossom for Her and Boss for Him — timeless eau de parfum, premium quality, made for every moment.",
  keywords: ["LU Scents", "perfume", "eau de parfum", "preorder", "Blossom", "Boss", "luxury fragrance"],
  openGraph: {
    title: "LU Scents — Your Signature. Your Scent.",
    description: "Crafted with elegance. Made to leave a lasting impression. Pre-order now.",
    images: ["/images/launch-poster.png"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-body bg-ink text-parchment antialiased">
        <div className="grain-overlay" />
        {children}
      </body>
    </html>
  );
}
