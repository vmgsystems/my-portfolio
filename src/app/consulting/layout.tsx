import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Infrastructure Consulting | VMG Systems",
  description: "Clean Slate architecture, AI pipelines, and cloud infrastructure consulting. Production-ready in 28 days. Chicago, IL.",
  openGraph: {
    title: "AI Infrastructure Consulting | VMG Systems",
    description: "Clean Slate architecture, AI pipelines, and cloud infrastructure consulting. Production-ready in 28 days. Chicago, IL.",
    url: "https://www.vmg.systems/consulting",
    images: [
      {
        url: "/consulting-bg.png",
        width: 1200,
        height: 630,
        alt: "VMG Systems AI Infrastructure Consulting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Infrastructure Consulting | VMG Systems",
    description: "Clean Slate architecture, AI pipelines, and cloud infrastructure consulting. Production-ready in 28 days. Chicago, IL.",
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
