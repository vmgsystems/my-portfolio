import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Lab | VMG Systems | Sovereign AI OS & Live Telemetry",
  description: "Production systems dogfooded in the open: Alfred (Hermes) Autonomous SRE, VMG AI OS (Talos K8s, FluxCD, VMG Viento v0.3.0), 3-Way E2EE Vaultwarden Sync, and Langfuse Observability.",
  openGraph: {
    title: "The Lab | VMG Systems | Sovereign AI OS & Live Telemetry",
    description: "Production systems dogfooded in the open: Alfred (Hermes) Autonomous SRE, VMG AI OS (Talos K8s, FluxCD, VMG Viento v0.3.0), 3-Way E2EE Vaultwarden Sync, and Langfuse Observability.",
    url: "https://www.vmg.systems/lab",
    images: [
      {
        url: "/lab-bg.png",
        width: 1200,
        height: 630,
        alt: "The Lab | VMG Systems Sovereign AI Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Lab | VMG Systems | Sovereign AI OS & Live Telemetry",
    description: "Production systems dogfooded in the open: Alfred (Hermes) Autonomous SRE, VMG AI OS (Talos K8s, FluxCD, VMG Viento v0.3.0), 3-Way E2EE Vaultwarden Sync, and Langfuse Observability.",
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
