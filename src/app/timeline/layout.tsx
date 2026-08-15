import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Track Record | VMG Systems | Enterprise Voice AI, Patent-Pending AOT",
  description: "Engineering milestones: Enterprise Voice AI (14K+ locations), Voice AI Advisor, patent-pending automated speech recognition system.",
  openGraph: {
    title: "Track Record | VMG Systems | Enterprise Voice AI, Patent-Pending AOT",
    description: "Engineering milestones: Enterprise Voice AI (14K+ locations), Voice AI Advisor, patent-pending automated speech recognition system.",
    url: "https://www.vmg.systems/timeline",
    images: [
      {
        url: "/timeline-bg.png",
        width: 1200,
        height: 630,
        alt: "VMG Systems Track Record | Enterprise Voice AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Track Record | VMG Systems | Enterprise Voice AI, Patent-Pending AOT",
    description: "Engineering milestones: Enterprise Voice AI (14K+ locations), Voice AI Advisor, patent-pending automated speech recognition system.",
    images: ["/timeline-bg.png"],
  },
};

export default function TimelineLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
