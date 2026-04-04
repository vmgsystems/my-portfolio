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
  title: "VMG Systems | AI Infrastructure Consulting, Chicago",
  description: "VMG Systems ships production-grade AI infrastructure in 28 days. Clean Slate architecture, IaC-first, zero ClickOps. ex-McDonald's AOT. Chicago, IL.",
  openGraph: {
    title: "VMG Systems | AI Infrastructure Consulting, Chicago",
    description: "VMG Systems ships production-grade AI infrastructure in 28 days. Clean Slate architecture, IaC-first, zero ClickOps. ex-McDonald's AOT. Chicago, IL.",
    url: "https://www.vmg.systems",
    siteName: "VMG Systems",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "VMG Systems | AI Infrastructure Consulting Chicago",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VMG Systems | AI Infrastructure Consulting, Chicago",
    description: "VMG Systems ships production-grade AI infrastructure in 28 days. Clean Slate architecture, IaC-first, zero ClickOps. ex-McDonald's AOT. Chicago, IL.",
    images: ["/hero.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "VMG Systems",
      "url": "https://www.vmg.systems",
      "description": "AI infrastructure consulting. Production-grade systems in 28 days.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chicago",
        "addressRegion": "IL",
        "addressCountry": "US"
      },
      "founder": {
        "@type": "Person",
        "name": "Gilberto Pina",
        "jobTitle": "Principal Architect"
      }
    },
    {
      "@type": "Person",
      "name": "Gilberto Pina",
      "url": "https://www.vmg.systems",
      "jobTitle": "AI Infrastructure Architect",
      "worksFor": { "@type": "Organization", "name": "VMG Systems" },
      "sameAs": [
        "https://linkedin.com/in/gilpina",
        "https://github.com/guarox"
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-white selection:text-black`}
      >
        {children}
      </body>
    </html>
  );
}
