import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Timeline | Gilberto Pina",
  description: "Experience and milestones from engineering edge-compute AI at a global enterprise to executing architectural rebuilds for agile startups.",
  openGraph: {
    title: "Timeline | Gilberto Pina",
    description: "Experience and milestones from engineering edge-compute AI at a global enterprise to executing architectural rebuilds for agile startups.",
    url: "https://gilbertopina.com/timeline",
    images: [
      {
        url: "/timeline-bg.png",
        width: 1200,
        height: 630,
        alt: "Gilberto Pina - Timeline",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Timeline | Gilberto Pina",
    description: "Experience and milestones from engineering edge-compute AI at a global enterprise to executing architectural rebuilds for agile startups.",
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
