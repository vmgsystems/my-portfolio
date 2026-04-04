import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Track Record | VMG Systems — McDonald's, Genubi, Patent-Pending AOT",
  description: "Gilberto Pina's engineering milestones: McDonald's AOT (14K+ locations), Genubi Chief of Eng, patent-pending voice AI system.",
  openGraph: {
    title: "Track Record | VMG Systems — McDonald's, Genubi, Patent-Pending AOT",
    description: "Gilberto Pina's engineering milestones: McDonald's AOT (14K+ locations), Genubi Chief of Eng, patent-pending voice AI system.",
    url: "https://www.vmg.systems/timeline",
    images: [
      {
        url: "/timeline-bg.png",
        width: 1200,
        height: 630,
        alt: "VMG Systems Track Record — McDonald's AOT, Genubi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Track Record | VMG Systems — McDonald's, Genubi, Patent-Pending AOT",
    description: "Gilberto Pina's engineering milestones: McDonald's AOT (14K+ locations), Genubi Chief of Eng, patent-pending voice AI system.",
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
