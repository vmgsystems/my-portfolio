import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Lab | Gilberto Pina",
  description: "Experiments, tools, and side projects exploring the intersection of AI, infrastructure, and user experience.",
  openGraph: {
    title: "The Lab | Gilberto Pina",
    description: "Experiments, tools, and side projects exploring the intersection of AI, infrastructure, and user experience.",
    url: "https://www.vmg.systems/lab",
    images: [
      {
        url: "/lab-bg.png",
        width: 1200,
        height: 630,
        alt: "The Lab - Gilberto Pina",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Lab | Gilberto Pina",
    description: "Experiments, tools, and side projects exploring the intersection of AI, infrastructure, and user experience.",
    images: ["/lab-bg.png"],
  },
};

export default function LabLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
