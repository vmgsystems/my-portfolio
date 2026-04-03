import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consulting | VMG Systems",
  description: "Technical consulting specializing in Clean Slate architecture, Cloud Infrastructure, and AI Integration.",
  openGraph: {
    title: "Consulting | VMG Systems",
    description: "Technical consulting specializing in Clean Slate architecture, Cloud Infrastructure, and AI Integration.",
    url: "https://www.vmg.systems/consulting",
    images: [
      {
        url: "/consulting-bg.png",
        width: 1200,
        height: 630,
        alt: "VMG Systems Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Consulting | VMG Systems",
    description: "Technical consulting specializing in Clean Slate architecture, Cloud Infrastructure, and AI Integration.",
    images: ["/consulting-bg.png"],
  },
};

export default function ConsultingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
