import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Voice AI Case Study | VMG Systems Rebuild",
  description: "How VMG Systems rebuilt a high-latency legacy voice AI platform into a sub-second, 100% Terraform-codified, fully observable production stack.",
  openGraph: {
    title: "Voice AI Case Study | VMG Systems Rebuild",
    description: "How VMG Systems rebuilt a high-latency legacy voice AI platform into a sub-second, 100% Terraform-codified, fully observable production stack.",
    url: "https://www.vmg.systems/case-studies/automotive-ai",
    images: [
      {
        url: "/timeline-bg.png",
        width: 1200,
        height: 630,
        alt: "VMG Systems Voice AI Case Study Rebuild",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Voice AI Case Study | VMG Systems Rebuild",
    description: "How VMG Systems rebuilt a high-latency legacy voice AI platform into a sub-second, 100% Terraform-codified, fully observable production stack.",
    images: ["/timeline-bg.png"],
  },
};

export default function AutomotiveAILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
