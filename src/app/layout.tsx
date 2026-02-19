import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Southland Aerials | Professional Drone Photography & Videography",
    template: "%s | Southland Aerials",
  },
  description:
    "Professional drone photography and videography services for commercial real estate in Alabama and the Southeast. FAA Part 107 certified pilots with 5+ years experience.",
  keywords: [
    "drone photography",
    "aerial photography",
    "commercial real estate photography",
    "drone videography",
    "Alabama drone services",
    "3D mapping",
    "aerial surveying",
  ],
  authors: [{ name: "Southland Aerials" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.southlandaerials.com",
    siteName: "Southland Aerials",
    title: "Southland Aerials | Professional Drone Photography & Videography",
    description:
      "Professional drone photography and videography services for commercial real estate in Alabama and the Southeast.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Southland Aerials | Professional Drone Photography & Videography",
    description:
      "Professional drone photography and videography services for commercial real estate in Alabama and the Southeast.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
