import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Lab | VMG Systems — Live AI Infrastructure Experiments",
  description: "Real production systems: EA agents, n8n automation, Proxmox homelab, Langfuse observability. Everything VMG sells, VMG runs.",
  openGraph: {
    title: "The Lab | VMG Systems — Live AI Infrastructure Experiments",
    description: "Real production systems: EA agents, n8n automation, Proxmox homelab, Langfuse observability. Everything VMG sells, VMG runs.",
    url: "https://www.vmg.systems/lab",
    images: [
      {
        url: "/lab-bg.png",
        width: 1200,
        height: 630,
        alt: "The Lab — VMG Systems Live AI Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Lab | VMG Systems — Live AI Infrastructure Experiments",
    description: "Real production systems: EA agents, n8n automation, Proxmox homelab, Langfuse observability. Everything VMG sells, VMG runs.",
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
