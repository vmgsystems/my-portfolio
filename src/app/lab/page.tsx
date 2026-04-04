"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  BrainCircuit,
  Workflow,
  Server,
  LineChart,
  ArrowLeft,
  Gauge
} from "lucide-react";
import Link from "next/link";

const experiments = [
  {
    title: "EA Agent System",
    subtitle: "Qdrant · Gemini · Claude CLI",
    icon: <BrainCircuit className="text-white" />,
    description: "Autonomous morning brief and EOD wrap agents running on a self-hosted LXC. Each run recalls context from a Qdrant vector store (3,072-dim Gemini embeddings), generates a brief via Claude, posts to Slack, then extracts and stores new memories — creating a persistent, self-improving context loop.",
    tag: "AI / Memory"
  },
  {
    title: "n8n Automation Layer",
    subtitle: "GCP · Linear · Slack · Firestore",
    icon: <Workflow className="text-white" />,
    description: "Self-hosted n8n instance orchestrating three production workflows: GCP infrastructure health checks with Slack alerting, Linear→Slack sprint summaries, and a Firestore polling agent that notifies on completed sales call recordings with full AI-extracted deal summaries.",
    tag: "Automation"
  },
  {
    title: "Homelab AI OS",
    subtitle: "Proxmox · OPNsense · Tailscale",
    icon: <Server className="text-white" />,
    description: "10-service self-hosted stack running across two Proxmox nodes with full VLAN isolation (OPNsense), zero-trust remote access (Tailscale), wildcard HTTPS via mkcert, and secrets management through a self-hosted Vaultwarden instance. Every service IaC-managed, zero ClickOps.",
    tag: "Infrastructure"
  },
  {
    title: "Langfuse Observability",
    subtitle: "Gemini · FastAPI · pgvector",
    icon: <LineChart className="text-white" />,
    description: "Full LLM observability layer wrapping every Gemini call in Genubi's FastAPI pipeline. Traces inputs, outputs, latency, and token cost per request. Feeds a pgvector store for RAG workflows and enables 'Golden Dataset' regression testing against eval accuracy baselines.",
    tag: "Observability"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

export default function Lab() {
  return (
    <main className="min-h-screen p-8 md:p-12 lg:p-24 max-w-7xl mx-auto pt-32">
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item} className="mb-16 relative overflow-hidden glass-card !p-0 border border-[#1a1a1a]">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/lab-bg.png" 
              alt="Laboratory and Experiments" 
              fill
              className="object-cover opacity-30 grayscale"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />
          </div>
          <div className="relative z-10 p-8 md:p-12">
            <Link href="/" className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm font-bold tracking-widest uppercase mb-8">
              <ArrowLeft size={16} /> Back to Architecture
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white">
              The Builder’s <br/>
              <span className="text-white/60">Lab.</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
              Production systems built in the open. These are the tools, agents, and infrastructure experiments that run VMG Systems — dogfooding everything we sell.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {experiments.map((exp, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="glass-card flex flex-col justify-between group overflow-hidden relative"
            >
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 border border-[#1a1a1a] group-hover:bg-[#111] transition-colors">
                    {exp.icon}
                  </div>
                  <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] px-3 py-1 border border-[#1a1a1a] bg-black">
                    {exp.tag}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                <p className="text-sm text-muted font-bold uppercase tracking-widest mb-4">{exp.subtitle}</p>
                <p className="text-muted text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
              
              <div className="mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Gauge size={14} className="text-white" />
                <span className="text-xs font-bold uppercase tracking-widest">Optimizing...</span>
              </div>

              {/* Decorative Background Element */}
              <div className="absolute -right-8 -bottom-8 font-mono text-[120px] font-black opacity-[0.02] select-none pointer-events-none group-hover:opacity-[0.04] transition-opacity">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div variants={item} className="glass-card border border-[#1a1a1a] p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-muted mb-3">Everything here runs in production</p>
            <h3 className="text-2xl md:text-3xl font-black text-white">We dogfood what we sell.</h3>
            <p className="text-muted text-sm mt-2 max-w-lg">Every system above runs live. If it works for VMG, it ships to clients.</p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 flex items-center gap-2 bg-white text-black px-8 py-4 font-bold hover:bg-gray-200 transition-all duration-300 ease-out group/btn text-sm whitespace-nowrap"
          >
            Build With Us <ArrowLeft size={16} className="rotate-180 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
