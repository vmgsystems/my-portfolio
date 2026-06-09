import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Inquiries | VMG Systems | AI Infrastructure & Architecture",
  description: "Inquire about a Clean Slate engineering audit or architectural diagnostic with VMG Systems.",
  openGraph: {
    title: "Contact & Inquiries | VMG Systems | AI Infrastructure & Architecture",
    description: "Inquire about a Clean Slate engineering audit or architectural diagnostic with VMG Systems.",
    url: "https://www.vmg.systems/contact",
    images: [
      {
        url: "/contact-bg.png",
        width: 1200,
        height: 630,
        alt: "Contact & Inquiries | VMG Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact & Inquiries | VMG Systems | AI Infrastructure & Architecture",
    description: "Inquire about a Clean Slate engineering audit or architectural diagnostic with VMG Systems.",
    images: ["/contact-bg.png"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
