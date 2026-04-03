import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vmg.systems"),
  title: "Gilberto Pina | VMG Systems",
  description: "VMG Systems helps startups ship production-grade AI infrastructure in 28 days. Clean Slate architecture, zero ClickOps, built for the AI-native era.",
  openGraph: {
    title: "Gilberto Pina | VMG Systems",
    description: "VMG Systems helps startups ship production-grade AI infrastructure in 28 days. Clean Slate architecture, zero ClickOps, built for the AI-native era.",
    url: "https://www.vmg.systems",
    siteName: "Gilberto Pina",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "Gilberto Pina - VMG Systems",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gilberto Pina | VMG Systems",
    description: "VMG Systems helps startups ship production-grade AI infrastructure in 28 days. Clean Slate architecture, zero ClickOps, built for the AI-native era.",
    images: ["/hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-white selection:text-black`}
      >
        {children}
      </body>
    </html>
  );
}
