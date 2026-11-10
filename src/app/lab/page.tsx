"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  BrainCircuit,
  Workflow,
  Server,
  LineChart,
  ArrowLeft,
  Gauge,
  Activity,
  Terminal,
  Radio
} from "lucide-react";
import Link from "next/link";

const experiments = [
  {
    title: "Pythia CLOB & HFT Engine",
    subtitle: "Rust (Tokio/Axum) · Python 3.11 · Polymarket CLOB · SQLite WAL",
    icon: <Gauge className="text-white" />,
    description: "Quantitative prediction market & Level-2 CLOB execution engine (v3.0.3) paired with a native #![forbid(unsafe_code)] Rust HFT reactor (pythia-rust). Executes 6 quantitative strategies (NegRisk combinatorial ARB, Logit Avellaneda-Stoikov MM_SPREAD, OFI, QUANT, MEAN_REV, AI-ALPHA) with L2-Ridge markout calibration, Quarter-Kelly (0.25x) risk gates, EIP-712 shadow signing, and a SHA-256 hash-chained SQLite WAL forensic ledger.",
    tag: "Quant / Rust HFT",
    telemetry: {
      tickToTrade: "13.9us p50",
      rustRss: "11.8 MiB",
      strategies: "6 Active",
      forensicWal: "SHA-256 OK"
    }
  },
  {
    title: "Alfred (Hermes) SRE Agent",
    subtitle: "Gemini 4 Argon + 3.8 Flash · Talos K8s · Qdrant · MCP / A2A",
    icon: <BrainCircuit className="text-white" />,
    description: "Autonomous AIOps & incident-response agent (v1.2.0) running on Talos Kubernetes with a read-only root filesystem. Features a 3-Model Panel of Experts, Interactions API Long Decode (262K-1M context), Qdrant multi-collection RAG, and a closed-loop K8s Sentinel that autonomously remediates failed CronJobs and rebalances CPU-congested pods inside isolated agent-sandbox namespaces.",
    tag: "AI / Autonomous SRE",
    telemetry: {
      uptime: "100%",
      vectors: "2,148 Pts",
      ragLatency: "41ms Avg",
      evalScore: "95.4%"
    }
  },
  {
    title: "PD3board Terminal",
    subtitle: "FastAPI · WebSockets · TradingView v4 · 22 Mnemonics",
    icon: <Terminal className="text-white" />,
    description: "High-throughput financial workstation and Bloomberg Terminal emulator (v1.2.1). Features sub-50ms streaming ingestion across Equities, Crypto L2, FRED Treasury yield curves, and live Polymarket CLOB feeds, 22 function mnemonics (F1-F12 hotkeys), 60 FPS TradingView Lightweight Charts in phosphor amber, RFC 4180 CSV export, and Langfuse LLM trace inspection (LANG <GO>).",
    tag: "FinTech / Systems",
    telemetry: {
      feedLatency: "<50ms",
      renderRate: "60 FPS",
      functions: "22 Active",
      uptime: "99.99%"
    }
  },
  {
    title: "Rambler Smart Bridge",
    subtitle: "NMEA 2000 · Python · Edge Telemetry · HRRR",
    icon: <Radio className="text-white" />,
    description: "Real-time marine tactical intelligence and sensor computing bridge deployed aboard Rambler (J/99 USA 99). Ingests 10Hz CAN bus / NMEA 2000 telemetry, computes live polar target velocities, and synthesizes high-resolution NOAA HRRR wind models for offshore race routing.",
    tag: "Edge / Marine",
    telemetry: {
      sampleRate: "10 Hz",
      polarCalc: "<10ms",
      weatherSync: "HRRR 1km",
      uptime: "100% Race"
    }
  },
  {
    title: "n8n Automation Layer",
    subtitle: "GCP · Linear · Slack · Firestore",
    icon: <Workflow className="text-white" />,
    description: "Self-hosted n8n instance orchestrating three production workflows: GCP infrastructure health checks with Slack alerting, Linear→Slack sprint summaries, and a Firestore polling agent that notifies on completed sales call recordings with full AI-extracted deal summaries.",
    tag: "Automation",
    telemetry: {
      uptime: "99.99%",
      invocations: "42.4K+",
      errorRate: "0.01%",
      activeFlows: "3 Nodes"
    }
  },
  {
    title: "VMG AI OS",
    subtitle: "Talos K8s · FluxCD · VMG Viento v0.4.2 · NVMe SQLite WAL",
    icon: <Server className="text-white" />,
    description: "Sovereign private cloud runtime running declarative Talos Linux Kubernetes (v1.30.1) & Proxmox VE via FluxCD GitOps and SOPS/Age encryption. Governed by VMG Viento v0.4.2 (16 static zero-trust invariants + SARIF 2.1.0), cross-node podAffinity SQLite WAL backup co-location with in-loop PRAGMA integrity verification, autonomous BigQuery FinOps telemetry, 3-way E2EE Vaultwarden sync, and weekly 14/14 DR restore drills.",
    tag: "Sovereign Cloud",
    telemetry: {
      invariants: "16 Rules",
      drTargets: "14 / 14 OK",
      e2eeSecrets: "69 Synced",
      gitOpsSync: "100% Flux"
    }
  },
  {
    title: "Langfuse Observability",
    subtitle: "Langfuse v2.95 · Zero-Dep REST · 7 Workloads · Nightly Evals",
    icon: <LineChart className="text-white" />,
    description: "Full-fleet LLM observability pipeline ingesting real-time traces, generations, realized-PnL score feedback, and declarative frontier model costs (Gemini 4 Argon / 3.8 Flash / 2.5 Flash) across 7 production workloads (Hermes, Pythia, PD3board, OpenWebUI, Deal Sniper, FinOps Exporter, Recruiter Monitor). Paired with a nightly Kubernetes CronJob running golden SRE & Qdrant RAG benchmarks against 95%+ accuracy baselines.",
    tag: "Observability",
    telemetry: {
      evalAccuracy: "95.4%",
      traceLatency: "<12ms",
      apiUptime: "99.99%",
      servicesWired: "7 / 7 Live"
    }
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
    <main className="min-h-screen p-5 sm:p-8 md:p-12 lg:p-24 max-w-7xl mx-auto pt-36 md:pt-32">
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
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 text-white">
              The Builder’s <br/>
              <span className="text-white/60">Lab.</span>
            </h1>
            <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl">
              Production systems built in the open. These are the tools, agents, and infrastructure experiments that run VMG Systems. We dogfood everything we sell.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {experiments.map((exp, index) => (
            <motion.div 
              key={index}
              variants={item}
              className={`glass-card flex flex-col justify-between group overflow-hidden relative border border-[#1a1a1a] hover:bg-[#030303] transition-all p-8 ${
                experiments.length % 2 === 1 && index === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 border border-[#1a1a1a] bg-black group-hover:bg-[#111] transition-colors">
                    {exp.icon}
                  </div>
                  <span className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] px-2.5 py-1 border border-[#1a1a1a] bg-black">
                    {exp.tag}
                  </span>
                </div>
                <h2 className="text-2xl font-bold mb-1 text-white tracking-tight">{exp.title}</h2>
                <p className="text-[10px] text-muted font-bold uppercase tracking-widest mb-4 font-mono">{exp.subtitle}</p>
                <p className="text-muted text-xs leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Telemetry Display Row */}
                <div className="pt-4 border-t border-[#1a1a1a] grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {Object.entries(exp.telemetry).map(([key, val]) => (
                    <div key={key}>
                      <span className="text-[9px] uppercase tracking-widest text-muted block mb-1 font-bold">{key.replace(/([A-Z])/g, " $1")}</span>
                      <span className="text-xs font-mono font-bold text-white tabular-nums">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 flex items-center gap-2 text-white/45 group-hover:text-white transition-colors">
                <Activity size={12} className="animate-pulse" />
                <span className="text-[9px] font-bold uppercase tracking-widest font-mono">NODE ACTIVE & COLLECTING TELEMETRY</span>
              </div>

              {/* Decorative Background Numeric Indicator */}
              <svg aria-hidden="true" role="img" className="absolute -right-8 -bottom-12 w-48 h-32 select-none pointer-events-none opacity-[0.02] group-hover:opacity-[0.04] transition-opacity">
                <text x="0" y="110" className="font-mono text-[120px] font-black fill-white">0{index + 1}</text>
              </svg>
            </motion.div>
          ))}
        </div>

        <motion.div variants={item} className="glass-card border border-[#1a1a1a] p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 bg-[#020202]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-muted mb-3">Everything here runs in production</p>
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight">We dogfood what we sell.</h2>
            <p className="text-muted text-xs leading-relaxed mt-2 max-w-lg">Every system above runs live. If it works for VMG Systems, it is verified as robust enough to ship to clients.</p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 flex items-center gap-2 bg-white text-black px-8 py-4 font-bold hover:bg-gray-200 transition-all duration-300 ease-out group/btn text-xs uppercase tracking-widest"
          >
            Build With Us <ArrowLeft size={14} className="rotate-180 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
