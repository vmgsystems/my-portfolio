import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Consultation | VMG Systems — AI Infrastructure",
  description: "Book a free 30-minute architecture call with VMG Systems. Get a full remediation roadmap in 1–2 weeks.",
  openGraph: {
    title: "Book a Consultation | VMG Systems — AI Infrastructure",
    description: "Book a free 30-minute architecture call with VMG Systems. Get a full remediation roadmap in 1–2 weeks.",
    url: "https://www.vmg.systems/contact",
    images: [
      {
        url: "/contact-bg.png",
        width: 1200,
        height: 630,
        alt: "Book a Consultation — VMG Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Consultation | VMG Systems — AI Infrastructure",
    description: "Book a free 30-minute architecture call with VMG Systems. Get a full remediation roadmap in 1–2 weeks.",
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
