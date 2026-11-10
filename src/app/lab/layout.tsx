import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Lab | VMG Systems | Sovereign AI OS & Live Telemetry",
  description: "Production systems dogfooded in the open: Pythia CLOB & Rust HFT Engine (v3.0.3), Alfred (Hermes) Autonomous SRE, PD3board Terminal, VMG AI OS (Talos K8s, FluxCD, VMG Viento v0.4.2), and Langfuse Observability.",
  openGraph: {
    title: "The Lab | VMG Systems | Sovereign AI OS & Live Telemetry",
    description: "Production systems dogfooded in the open: Pythia CLOB & Rust HFT Engine (v3.0.3), Alfred (Hermes) Autonomous SRE, PD3board Terminal, VMG AI OS (Talos K8s, FluxCD, VMG Viento v0.4.2), and Langfuse Observability.",
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
    description: "Production systems dogfooded in the open: Pythia CLOB & Rust HFT Engine (v3.0.3), Alfred (Hermes) Autonomous SRE, PD3board Terminal, VMG AI OS (Talos K8s, FluxCD, VMG Viento v0.4.2), and Langfuse Observability.",
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
