import type { Metadata, Viewport } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#13322b",
};

export const metadata: Metadata = {
  title: "Ennerty — Solar Energy Brand of EcoHarmony Enterprises Pvt. Ltd.",
  description:
    "Ennerty delivers reliable, efficient, and sustainable solar rooftop and commercial solar energy solutions with Tier-1 solar panels, professional installation, and PM Surya Ghar subsidy support across Kerala & India.",
  keywords: [
    "Ennerty Solar",
    "EcoHarmony Enterprises Pvt Ltd",
    "Solar Energy Kerala",
    "Rooftop Solar Kochi",
    "PM Surya Ghar Muft Bijli Yojana",
    "Tata Power Solar Kerala",
    "Adani Solar Panels",
    "Waaree Solar",
    "KSEB Solar Net Metering",
  ],
  authors: [{ name: "EcoHarmony Enterprises Private Limited" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Ennerty — Powering a Smarter, Greener Future",
    description:
      "Solar energy brand of EcoHarmony Enterprises Pvt. Ltd. Reliable solar systems, professional installation, and dependable after-sales support.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-cream-100 text-ennerty-forest min-h-screen selection:bg-ennerty-lime selection:text-ennerty-forest">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
