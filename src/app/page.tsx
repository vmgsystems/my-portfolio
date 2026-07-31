"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowUpRight,
  Cpu,
  Zap,
  Clock,
  Code2,
  Terminal,
  ChevronRight,
  Play,
  Database,
  AlertTriangle,
  Loader2,
  RefreshCw,
  Sliders,
  FileCode,
  CheckCircle2
} from "lucide-react";

import { useEffect, useState } from "react";
import Link from "next/link";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

const auditProfiles = [
  {
    title: "SaaS & ClickOps Audit",
    problem: "GA4 / GTM / BigQuery Data Churn",
    impact: "$24,000/yr in duplicate agency tools & 12s latency in syncing sales records to DB.",
    logs: [
      "[VMG AUDIT] Scanning GCP Resource Graph...",
      "[ClickOps WARN] Found 14 manually-provisioned firewalls and VM instances without IaC.",
      "[Latency TRACE] BigQuery syncing pipeline running on a synchronous cron. Churn: 12.8s lag.",
      "[LLM Cost INFO] Multi-step agent calling Claude-3.5-Sonnet without caching. Cost waste: 58%.",
      "[SUCCESS] Core diagnostic complete. Security risk identified in unmanaged service account keys."
    ],
    outcome: {
      action: "Terraform codification of GCP stack, async background workers in FastAPI, & prompt caching rules.",
      roi: "Replaced manual setup with 100% Terraform coverage, reduced latency to <1.5s, and cut API cost by 58%."
    }
  },
  {
    title: "AI Pipeline & Observability Audit",
    problem: "Gemini High-Cost Drift & Latency",
    impact: "No tracking of inputs/outputs, billing spikes, and high timeout rate on client devices.",
    logs: [
      "[VMG AUDIT] Hooking into LLM execution gateways...",
      "[Observability WARN] Direct SDK calls bypassing telemetry proxy. Trace depth: 0%.",
      "[Latency TRACE] 40% of Gemini-1.5-Pro calls taking >4.5s; no streaming or response chunking in use.",
      "[Eval INFO] Production LLM output accuracy unmonitored. High risk of prompt drift.",
      "[SUCCESS] Diagnostics finished. Found duplicate semantic queries and memory leakage."
    ],
    outcome: {
      action: "Integrate Langfuse traces, implement response-streaming FastAPI routers, and deploy a vector semantic cache.",
      roi: "100% LLM observability, latency slashed from 4.5s to 850ms (streaming first-token), and billing cut by 35%."
    }
  },
  {
    title: "Mobile Audio Engineering Audit",
    problem: "iOS Background Recording Drops",
    impact: "React Native background task terminates after 10s, failing to upload full sales meetings.",
    logs: [
      "[VMG AUDIT] Testing React Native native-bridge telemetry...",
      "[Native WARN] iOS AVQueuePlayer terminating background task thread due to execution limits.",
      "[Pipeline TRACE] Audio chunking uploads to S3 buffer throwing 502 Bad Gateway due to unbuffered HTTP body streams.",
      "[Concurrency INFO] Backend processes transcription synchronously on the web-server thread.",
      "[SUCCESS] Identified OS-level thread suspension points and synchronous worker bottlenecks."
    ],
    outcome: {
      action: "Deploy background-safe native audio services, implement AWS S3 pre-signed direct multipart chunk uploads, and delegate transcribing to FastAPI background tasks.",
      roi: "0% dropped recordings in background, sub-second transcription delegation, and full multi-platform stability."
    }
  }
];

const CODE_FILES = {
  terraform: {
    name: "gcp_cloud_run.tf",
    lang: "hcl",
    content: `# Fully codified Cloud Run deployments
resource "google_cloud_run_v2_service" "api" {
  name     = "vmg-core-api"
  location = "us-central1"
  ingress  = "INGRESS_TRAFFIC_INTERNAL_AND_CLOUD_LOAD_BALANCING"

  template {
    containers {
      image = "us-central1-docker.pkg.dev/vmg-systems/prod/api:latest"
      resources {
        limits = {
          memory = "2Gi"
          cpu    = "2"
        }
      }
      env {
        name  = "LANGFUSE_HOST"
        value = "https://cloud.langfuse.com"
      }
      env {
        name  = "GEMINI_MODEL"
        value = "gemini-1.5-pro-preview"
      }
    }
    service_account = google_service_account.api_runner.email
  }
}`
  },
  fastapi: {
    name: "gemini_pipeline.py",
    lang: "python",
    content: `# Async FastAPI LLM router with strict telemetry
@app.post("/v1/analyze-audio")
async def analyze_audio(request: Request, payload: AudioPayload):
    # Initialize Langfuse trace for strict observability
    trace = langfuse.trace(
        name="analyze-audio",
        user_id=payload.user_id,
        metadata={"version": "1.4.2"}
    )
    
    # Run structured evaluation via Gemini
    try:
        response = await gemini_client.chat.completions.create(
            model="gemini-1.5-pro",
            response_model=AudioAnalysisSchema,
            messages=[{"role": "user", "content": payload.transcript}],
            trace_id=trace.id
        )
        trace.update(status="SUCCESS", output=response.model_dump())
        return response
    except Exception as e:
        trace.update(status="ERROR", metadata={"error": str(e)})
        raise HTTPException(status_code=500, detail="Inference failed")`
  },
  n8n: {
    name: "slack_alert_flow.json",
    lang: "json",
    content: `{
  "nodes": [
    {
      "parameters": {
        "rules": {
          "values": [{
            "field": "body.status",
            "operation": "equal",
            "value": "error"
          }]
        }
      },
      "name": "Check Health",
      "type": "n8n-nodes-base.if",
      "position": [250, 300]
    },
    {
      "parameters": {
        "channel": "infra-alerts",
        "text": "=🚨 GCP service *{{ $json.body.service }}* failed health check. Latency: {{ $json.body.latency }}ms."
      },
      "name": "Slack Alert",
      "type": "n8n-nodes-base.slack",
      "position": [450, 200]
    }
  ]
}`
  }
};

export default function Home() {
  const [time, setTime] = useState("");
  const [consoleTab, setConsoleTab] = useState<"audit" | "code">("audit");
  const [selectedAuditProfile, setSelectedAuditProfile] = useState(0);
  const [auditState, setAuditState] = useState<"idle" | "running" | "completed">("idle");
  const [auditLogs, setAuditLogs] = useState<string[]>([]);
  const [selectedCodeFile, setSelectedCodeFile] = useState<"terraform" | "fastapi" | "n8n">("terraform");

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString("en-US", {
        timeZone: "America/Chicago",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const runAudit = () => {
    setAuditState("running");
    setAuditLogs([]);
    const logs = auditProfiles[selectedAuditProfile].logs;
    let currentLogIndex = 0;
    
    const interval = setInterval(() => {
      if (currentLogIndex < logs.length) {
        setAuditLogs(prev => [...prev, logs[currentLogIndex]]);
        currentLogIndex++;
      } else {
        clearInterval(interval);
        setAuditState("completed");
      }
    }, 450);
  };

  return (
    <main className="min-h-screen p-4 pt-28 md:p-8 md:pt-36 lg:p-12 lg:pt-40 max-w-7xl mx-auto">
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]"
      >
        {/* Hero Card */}
        <motion.div 
          variants={item}
          className="md:col-span-3 md:row-span-2 glass-card !p-0 relative overflow-hidden group cursor-default flex flex-col justify-end min-h-[440px] border border-[#1a1a1a]"
        >
          <div className="absolute inset-0 z-0">
            <Image 
              src="/hero.png" 
              alt="Gilberto Piña - VMG Systems" 
              fill
              className="object-cover opacity-50 group-hover:scale-105 group-hover:opacity-70 transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          </div>
          
          <div className="relative z-10 p-6 md:p-10 flex flex-col justify-end h-full pt-32">
            <div className="flex items-center gap-2 text-white/80 mb-4 uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold bg-black w-fit px-3 py-1.5 border border-[#1a1a1a]">
              <Zap size={14} className="text-white animate-pulse" />
              <span>AI Infrastructure · Clean Slate Architecture</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 text-white leading-tight md:leading-tight">
              Architecture of <br />
              <span className="text-white">Momentum.</span>
            </h1>
            <p className="text-white/70 text-sm md:text-base lg:text-lg leading-relaxed mb-6 max-w-2xl font-medium">
              Elite AI & Data infrastructure engineering. We replace fragile legacy pipelines and high-cost SaaS bloat with zero-ClickOps Infrastructure as Code. Built to scale, engineered to last.
            </p>
            <div className="border-l-2 border-white pl-4 mb-8 py-1 max-w-2xl">
              <p className="text-xs font-mono text-white/90 leading-relaxed">
                <span className="text-white font-bold uppercase tracking-wider">LATEST PRODUCTION METRIC:</span> Rebuilt legacy voice AI pipelines into modern IaC, cutting API latency by 60% and slashing infrastructure spend by 40% on Day 1.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-white/35 text-[10px] md:text-xs uppercase tracking-widest font-bold mb-8">
              <span>ex-Fortune 100 Voice AI Division</span>
              <span className="hidden sm:block">·</span>
              <span>14,000+ Locations</span>
              <span className="hidden sm:block">·</span>
              <span>Patent-Pending AOT</span>
            </div>
            <Link href="/consulting" className="w-fit flex items-center gap-2 bg-white text-black px-6 py-4 md:py-3 font-bold hover:bg-gray-200 transition-all duration-300 ease-out group/btn text-sm mb-4 md:mb-0">
              Explore the Architecture <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Chicago Clock Card */}
        <motion.div 
          variants={item}
          className="glass-card flex flex-col justify-between items-center text-center group cursor-default overflow-hidden p-6 md:p-8"
        >
          <div className="flex items-center gap-2 text-muted uppercase tracking-widest text-xs font-bold mb-4 md:mb-0">
            <Clock size={12} />
            <span>Chicago, IL</span>
          </div>
          <div className="text-3xl sm:text-4xl font-mono font-bold tracking-tighter tabular-nums my-4 md:my-0">
            {time || "00:00:00"}
          </div>
          <div className="text-xs text-muted uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
            Velocity Made Good
          </div>
        </motion.div>

        {/* VMG Systems Card */}
        <motion.div 
          variants={item}
          className="glass-card md:row-span-2 flex flex-col justify-between group cursor-pointer hover:bg-[#111] !p-0 relative overflow-hidden border border-[#1a1a1a]"
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-transparent" />
          </div>
          <Link href="/consulting" className="absolute inset-0 z-20" aria-label="View VMG Services" />
          
          <div className="relative z-10 p-6 md:p-8 flex flex-col justify-between h-full pointer-events-none">
            <div className="p-2 border border-[#1a1a1a] w-fit mb-4 bg-black/50 backdrop-blur-sm">
              <Code2 className="text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">VMG Systems</h2>
              <p className="text-muted text-sm leading-relaxed">
                Technical consulting specializing in &quot;Clean Slate&quot; architecture, AI orchestration, and cloud automation.
              </p>
            </div>
            <div className="mt-4 flex items-center text-xs font-bold uppercase tracking-widest gap-1 text-muted group-hover:text-white transition-colors">
              View Services <ChevronRight size={14} />
            </div>
          </div>
        </motion.div>

        {/* Automotive AI Platform Card */}
        <motion.div 
          variants={item}
          className="glass-card md:col-span-2 flex flex-col justify-between group cursor-pointer hover:bg-[#111] relative overflow-hidden !p-0 border border-[#1a1a1a] min-h-[180px]"
        >
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-gradient-to-br from-[#111] to-black" />
             <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
             <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 blur-[80px] rounded-full group-hover:bg-white/10 transition-colors duration-700" />
          </div>
          <Link href="/case-studies/automotive-ai" className="absolute inset-0 z-20" aria-label="View Voice AI Case Study" />
          <div className="relative z-10 p-6 md:p-8 flex flex-col justify-between h-full pointer-events-none">
            <div className="flex justify-between items-start">
              <h2 className="text-lg font-bold uppercase tracking-tighter flex items-center gap-2 text-white">
                Automotive Voice AI <ArrowUpRight size={16} className="text-white/50 group-hover:text-white transition-colors" />
              </h2>
              <div className="text-right">
                  <div className="text-xs text-muted uppercase font-bold tracking-widest">Active Venture</div>
                  <div className="text-xs text-white">Head of Technology</div>
              </div>
            </div>
            <div className="mt-8">
              <div className="border-t border-[#1a1a1a] pt-4 text-sm text-white/70 leading-relaxed font-medium">
                Complete clean-slate rebuild of the flagship AI coaching and evaluation platform for automotive dealerships. Orchestrating 165+ commits, 40+ automated CI/CD pipelines, and 5 core services running in production on GCP Cloud Run under 99.5% uptime SLA.
              </div>
              <div className="mt-4 flex items-center gap-2 flex-wrap">
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="text-[10px] uppercase tracking-widest font-bold text-white">165+ Commits · 40+ CI/CD Pipelines · 99.5% SLA · Sub-Second API</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* QSR Voice AI Card */}
        <motion.div
          variants={item}
          className="glass-card md:col-span-2 flex flex-col justify-between group cursor-default relative overflow-hidden border border-[#1a1a1a] p-6 md:p-8"
        >
          <div>
            <div className="flex items-center gap-2 text-muted uppercase tracking-widest text-xs font-bold mb-4">
              <Cpu size={12} />
              <span>Past Engagement · Global QSR Technology</span>
            </div>
            <h2 className="text-xl font-bold mb-2">Drive-Thru Voice AI</h2>
            <p className="text-muted text-sm leading-relaxed">
              Core contributor to the Automated Order Taker (AOT), a flagship AI-powered drive-thru voice system, now patent-pending and deployed globally.
            </p>
          </div>
          <div className="flex gap-6 mt-6">
            <div>
              <div className="text-3xl font-black tabular-nums">82%</div>
              <div className="text-xs text-muted uppercase tracking-widest mt-1">Order Accuracy</div>
            </div>
            <div className="w-[1px] bg-[#1a1a1a]" />
            <div>
              <div className="text-3xl font-black tabular-nums">14K+</div>
              <div className="text-xs text-muted uppercase tracking-widest mt-1">Locations</div>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack Card */}
        <motion.div
          variants={item}
          className="glass-card md:col-span-2 flex flex-col justify-between overflow-hidden p-6 md:p-8"
        >
          <div className="flex items-center gap-2 text-muted uppercase tracking-widest text-xs font-bold mb-4">
            <Terminal size={12} />
            <span>Infrastructure Stack</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {['GCP', 'AWS', 'Python', 'React Native', 'Next.js', 'Terraform', 'Docker', 'Tailscale', 'Gemini', 'Claude', 'Langfuse', 'n8n'].map((tech) => (
              <span key={tech} className="px-3 py-1 border border-[#1a1a1a] text-xs font-mono hover:border-[#333] transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* VMG Systems Interactive Operations Console */}
        <motion.div
          variants={item}
          className="glass-card col-span-1 md:col-span-4 border border-[#1a1a1a] !p-0 overflow-hidden flex flex-col"
        >
          {/* Header Controls */}
          <div className="border-b border-[#1a1a1a] p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-black">
            <div>
              <div className="flex items-center gap-2 text-[10px] text-muted uppercase font-bold tracking-[0.2em] mb-1">
                <Sliders size={12} className="text-white" />
                <span>VMG Operations Console</span>
              </div>
              <h2 className="text-lg font-bold text-white">Interactive Infrastructure Hub</h2>
            </div>
            {/* Tab Toggles */}
            <div className="flex border border-[#1a1a1a] bg-black/50 p-1 w-full sm:w-auto">
              <button
                onClick={() => setConsoleTab("audit")}
                className={`flex-1 sm:flex-none px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${consoleTab === "audit" ? "bg-white text-black" : "text-muted hover:text-white"}`}
              >
                <Sliders size={12} /> Interactive Audit
              </button>
              <button
                onClick={() => setConsoleTab("code")}
                className={`flex-1 sm:flex-none px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${consoleTab === "code" ? "bg-white text-black" : "text-muted hover:text-white"}`}
              >
                <FileCode size={12} /> Live Code Repo
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[380px] bg-black">
            {/* Left Sidebar (Options Panel) */}
            <div className="lg:col-span-5 border-r border-t lg:border-t-0 border-[#1a1a1a] p-6 flex flex-col justify-between">
              {consoleTab === "audit" ? (
                <div className="space-y-4">
                  <p className="text-xs text-muted uppercase tracking-widest font-bold">Select Architectural Bottleneck</p>
                  <div className="space-y-2">
                    {auditProfiles.map((profile, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setSelectedAuditProfile(i);
                          setAuditState("idle");
                          setAuditLogs([]);
                        }}
                        className={`w-full text-left p-4 border transition-all flex flex-col justify-between ${selectedAuditProfile === i ? "border-white bg-[#080808]" : "border-[#1a1a1a] hover:border-[#333] hover:bg-[#040404]"}`}
                      >
                        <div className="flex justify-between items-start gap-2 mb-2">
                          <span className="text-sm font-bold text-white">{profile.title}</span>
                          <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 border border-[#1a1a1a] text-muted">PROFILE 0{i + 1}</span>
                        </div>
                        <span className="text-xs text-muted leading-relaxed font-mono block mb-1">
                          <span className="text-white/40">PROBLEM:</span> {profile.problem}
                        </span>
                        <span className="text-[10px] text-white/50 leading-normal block">
                          <span className="text-white/30 font-bold uppercase tracking-wider">IMPACT:</span> {profile.impact}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-xs text-muted uppercase tracking-widest font-bold">Inspect Infrastructure Modules</p>
                  <div className="space-y-2">
                    {(Object.keys(CODE_FILES) as Array<keyof typeof CODE_FILES>).map((key) => (
                      <button
                        key={key}
                        onClick={() => setSelectedCodeFile(key)}
                        className={`w-full text-left p-4 border transition-all flex flex-col justify-between ${selectedCodeFile === key ? "border-white bg-[#080808]" : "border-[#1a1a1a] hover:border-[#333] hover:bg-[#040404]"}`}
                      >
                        <div className="flex items-center gap-3">
                          <Terminal size={14} className="text-white" />
                          <div>
                            <span className="text-sm font-mono font-bold text-white block">{CODE_FILES[key].name}</span>
                            <span className="text-[9px] text-muted font-bold uppercase tracking-widest">{key === "terraform" ? "Infrastructure as Code" : key === "fastapi" ? "Structured AI Pipeline" : "Automation Orchestrations"}</span>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8 pt-6 border-t border-[#1a1a1a] flex flex-col gap-3">
                {consoleTab === "audit" ? (
                  <button
                    onClick={runAudit}
                    disabled={auditState === "running"}
                    className="w-full flex items-center justify-center gap-2 bg-white text-black py-4 font-bold hover:bg-gray-200 transition-colors disabled:opacity-50 text-xs uppercase tracking-widest"
                  >
                    {auditState === "running" ? (
                      <>
                        <Loader2 size={14} className="animate-spin" /> Auditing Codebase...
                      </>
                    ) : auditState === "completed" ? (
                      <>
                        <RefreshCw size={14} /> Re-Run Diagnostic
                      </>
                    ) : (
                      <>
                        <Play size={14} fill="currentColor" /> Run AI Diagnostic Audit
                      </>
                    )}
                  </button>
                ) : (
                  <div className="text-xs text-muted font-mono leading-relaxed bg-[#050505] p-3 border border-[#1a1a1a]">
                    These are verified, working production templates built and deployed by VMG Systems. Feel free to copy or leverage these blueprints in your setups.
                  </div>
                )}
                <Link href="/contact" className="text-[10px] text-center font-bold uppercase tracking-widest text-muted hover:text-white transition-colors underline underline-offset-4 py-1">
                  Inquire about a custom code audit & roadmap →
                </Link>
              </div>
            </div>

            {/* Right Display (Terminal / Code Console) */}
            <div className="lg:col-span-7 border-t lg:border-t-0 lg:border-l border-[#1a1a1a] bg-[#030303] flex flex-col justify-between overflow-hidden">
              {consoleTab === "audit" ? (
                <div className="flex-1 p-6 flex flex-col justify-between">
                  <div className="font-mono text-xs leading-relaxed space-y-2">
                    {/* Console Header */}
                    <div className="flex justify-between text-[10px] text-muted border-b border-[#1a1a1a] pb-2 mb-4">
                      <span>VMG-DIAGNOSTIC-TERM://LOCAL</span>
                      <span>STATUS: {auditState.toUpperCase()}</span>
                    </div>

                    {auditState === "idle" && (
                      <div className="text-muted italic py-12 text-center">
                        Select a diagnostic profile on the left and click &quot;Run AI Diagnostic Audit&quot; to begin.
                      </div>
                    )}

                    {auditLogs.map((log, index) => {
                      let color = "text-white";
                      if (log.includes("[ClickOps WARN]") || log.includes("[Native WARN]") || log.includes("[Observability WARN]")) {
                        color = "text-yellow-500 font-semibold";
                      } else if (log.includes("[Latency TRACE]") || log.includes("[Pipeline TRACE]")) {
                        color = "text-cyan-400";
                      } else if (log.includes("[SUCCESS]")) {
                        color = "text-green-500 font-bold";
                      } else if (log.includes("[VMG AUDIT]")) {
                        color = "text-white/40";
                      }
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -5 }}
                          animate={{ opacity: 1, x: 0 }}
                          className={`${color} py-0.5`}
                        >
                          {log}
                        </motion.div>
                      );
                    })}

                    {auditState === "running" && (
                      <div className="flex items-center gap-2 text-muted animate-pulse mt-4">
                        <Loader2 size={12} className="animate-spin" />
                        <span>Scanning layers...</span>
                      </div>
                    )}
                  </div>

                  {auditState === "completed" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="border-t border-[#1a1a1a] pt-4 mt-6"
                    >
                      <div className="bg-[#050505] border border-green-950 p-4 rounded-none">
                        <div className="flex items-center gap-2 text-green-500 font-bold text-[10px] uppercase tracking-wider mb-2">
                          <CheckCircle2 size={12} /> Clean Slate Architecture Plan Generated
                        </div>
                        <p className="text-white/80 text-xs font-mono leading-relaxed mb-4">
                          <span className="text-white font-bold">RESOLUTION ROADMAP:</span> {auditProfiles[selectedAuditProfile].outcome.action}
                        </p>
                        <div className="border-t border-[#1a1a1a] pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                          <div>
                            <span className="text-[9px] uppercase tracking-widest text-muted block font-bold">PROJECTED BUSINESS ROI</span>
                            <span className="text-xs font-bold text-white font-mono">{auditProfiles[selectedAuditProfile].outcome.roi}</span>
                          </div>
                          <Link href="/contact" className="shrink-0 inline-flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-black px-4 py-2 font-bold text-[10px] uppercase tracking-wider transition-colors">
                            Claim Audit <ArrowUpRight size={12} />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              ) : (
                <div className="flex-1 flex flex-col justify-between overflow-hidden">
                  <div className="flex justify-between text-[10px] text-muted border-b border-[#1a1a1a] p-4 bg-black/40">
                    <span className="font-mono">{CODE_FILES[selectedCodeFile].name}</span>
                    <span className="font-mono uppercase">{CODE_FILES[selectedCodeFile].lang}</span>
                  </div>
                  <div className="flex-1 p-6 overflow-auto max-h-[340px] no-scrollbar">
                    <pre className="text-[11px] font-mono leading-relaxed text-white/80 whitespace-pre">
                      {CODE_FILES[selectedCodeFile].content}
                    </pre>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Clean Slate Explainer */}
        <motion.div
          variants={item}
          className="glass-card col-span-1 md:col-span-4 p-6 md:p-8"
        >
          <p className="text-xs text-muted uppercase tracking-widest mb-2">The Methodology</p>
          <h2 className="text-lg font-semibold mb-3">What is Clean Slate?</h2>
          <p className="text-muted text-sm leading-relaxed max-w-4xl">
            Clean Slate is VMG&apos;s engineering methodology: every engagement starts with Infrastructure as Code from day one. No ClickOps, no legacy baggage. A monorepo structure gives AI agents and engineers full context across the stack, and a strict <span className="text-white font-medium">Plan → Act → Validate</span> loop prevents expensive mistakes before they ship. The result: resilient, production-ready systems built to last.
          </p>
        </motion.div>

        {/* Lead Magnet / Two-Tiered Value Exchange */}
        <motion.div
          variants={item}
          className="glass-card col-span-1 md:col-span-4 border border-[#1a1a1a] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div>
            <p className="text-xs text-muted uppercase tracking-widest mb-2">Two-Tiered Value Exchange</p>
            <h2 className="text-xl font-bold mb-2">Get Your Custom Architecture Audit</h2>
            <p className="text-white/60 text-sm max-w-xl leading-relaxed">
              Download our ungated 12-point checklist instantly, or submit your current repository outline/architectural issues for an async AI diagnostic and 1-on-1 review call.
            </p>
          </div>
          <div className="shrink-0 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href="/architecture-checklist.pdf"
              download
              className="flex items-center justify-center gap-2 border border-[#333] hover:border-white text-white px-5 py-3 font-bold transition-all duration-300 text-xs uppercase tracking-widest whitespace-nowrap"
            >
              Checklist PDF <ArrowUpRight size={14} />
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 bg-white text-black px-6 py-3 font-bold hover:bg-gray-200 transition-all duration-300 text-xs uppercase tracking-widest whitespace-nowrap"
            >
              Submit for Review <ArrowUpRight size={14} />
            </Link>
          </div>
        </motion.div>

        {/* CTA Card */}
        <motion.div
          variants={item}
          className="glass-card md:col-span-4 relative group/cta !p-0 overflow-hidden border border-[#1a1a1a] flex flex-col justify-between min-h-[220px]"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="/manifesto.png"
              alt="Clean Slate Architecture Blueprint"
              fill
              className="object-cover opacity-10 group-hover/cta:scale-105 group-hover/cta:opacity-20 transition-all duration-1000 ease-out grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70" />
          </div>
          <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 h-full">
            <div>
              <div className="flex items-center gap-2 text-white/40 uppercase tracking-widest text-xs font-bold mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Clean Slate Engagements
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight mb-3 text-white leading-tight">
                Ready to ship?
              </h2>
              <p className="text-white/60 text-sm md:text-base max-w-lg leading-relaxed">
                Your stack rebuilt. Production-ready and fully codified. No ClickOps. No shortcuts. Full IaC from day one.
              </p>
            </div>
            <div className="shrink-0 flex flex-col items-start md:items-end gap-2">
              <Link
                href="/contact"
                className="flex items-center gap-2 bg-white text-black px-8 py-4 min-h-[44px] font-bold hover:bg-gray-200 transition-all duration-300 ease-out group/btn text-sm whitespace-nowrap"
              >
                Inquire About an Audit <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
              </Link>
              <p className="text-white/30 text-xs uppercase tracking-widest">Limited availability · 1 engagement slot open Q3 2026</p>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </main>
  );
}
