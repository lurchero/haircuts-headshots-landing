import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Haircuts & Headshots — Atlanta",
  description:
    "Precision haircuts and professional headshots for creatives and professionals. Atlanta, GA. Book now.",
  openGraph: {
    title: "Haircuts & Headshots — Atlanta",
    description:
      "Precision haircuts and professional headshots for creatives and professionals.",
    type: "website",
    locale: "en_US",
    siteName: "Haircuts & Headshots",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haircuts & Headshots — Atlanta",
    description:
      "Precision haircuts and professional headshots for creatives and professionals.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-neutral-900 antialiased">{children}</body>
    </html>
  );
}
