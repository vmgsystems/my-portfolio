"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Cloud,
  Cpu,
  BrainCircuit,
  CheckCircle2,
  ArrowLeft,
  ArrowUpRight,
  HelpCircle,
  Clock,
  Layers,
  Sparkles
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "AI Integration & Data Pipelines",
    icon: <BrainCircuit className="text-white" />,
    description: "Your data is already valuable. I build the highly resilient pipelines, retrieval layers, and semantic storage engines that make it useful to Large Language Models in production.",
    details: [
      "Vector Database implementation (PostgreSQL/pgvector, Qdrant)",
      "Structured output workflows via Gemini Pro, Claude 3.5, and OpenAI",
      "High-speed semantic caching (Redis) and embedding generation",
      "Automated prompt evaluation (Evals) and Golden Dataset benchmarking"
    ],
    cta: "Request an AI/ML Strategy Review"
  },
  {
    title: "Cloud Infrastructure & Modernization",
    icon: <Cloud className="text-white" />,
    description: "I replace manual cloud configuration and fragile infrastructure with robust, Terraform-managed, reproducible deployments. GCP and AWS engineered to standard, with zero ClickOps allowed.",
    details: [
      "100% Terraform-codified GCP and AWS infrastructure",
      "Secure zero-trust site-to-site networking via Tailscale",
      "VPC Service Controls and Workload Identity Federation",
      "Multi-environment deployment workflows (Dev/Staging/Prod)"
    ],
    cta: "Request a Cloud Architecture Review"
  },
  {
    title: "Custom Platform & API Engineering",
    icon: <Cpu className="text-white" />,
    description: "High-throughput asynchronous Python (FastAPI) backends and accessible Next.js dashboards / React Native frontends built around strict typed standards.",
    details: [
      "Async FastAPI backends with Pydantic structured schemas",
      "React Native mobile apps with native offline/background persistence",
      "High-performance Next.js admin & telemetry web dashboards",
      "Full end-to-end type safety across the entire engineering stack"
    ],
    cta: "Request a Platform Engineering Consultation"
  }
];

const engagementTiers = [
  {
    title: "Fixed-Scope Audits",
    duration: "1 - 2 Weeks",
    focus: "Comprehensive diagnostic of your existing repositories, cloud setup, and AI pipeline bottlenecks.",
    deliverables: [
      "Detailed ClickOps inventory & uncodified asset catalog",
      "AI inference costs, prompt engineering, & observability assessment",
      "Vulnerability assessment & VPC security analysis",
      "Complete remediation blueprint & step-by-step rebuilding roadmap"
    ],
    cta: "Book an Architecture Audit",
    tierType: "Diagnostic"
  },
  {
    title: "Custom Product Sprints",
    duration: "4 - 6 Weeks",
    focus: "Greenfield, clean-slate production builds of core APIs, backend platforms, or mobile components.",
    deliverables: [
      "100% Terraform-managed GCP/AWS infrastructure",
      "Async FastAPI backend with structured Pydantic data schemas",
      "Next.js web dashboard or React Native client implementation",
      "Full Langfuse observability, telemetry, and error tracking out-of-the-box"
    ],
    cta: "Initiate Product Sprint",
    tierType: "Development"
  },
  {
    title: "Fractional AI/Data Lead",
    duration: "Monthly Retainer",
    focus: "Ongoing, embedded leadership providing high-leverage guidance for your engineering and data teams.",
    deliverables: [
      "Architecture, data governance, and AI pipelines design advisory",
      "Implementation of automated CI/CD and secure container workflows",
      "Prompt caching, evaluation datasets, and semantic caching optimization",
      "Continuous optimization of infrastructure costs and platform reliability"
    ],
    cta: "Inquire About Fractional retainers",
    tierType: "Advisory"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

export default function Consulting() {
  return (
    <main className="min-h-screen p-5 sm:p-8 md:p-12 lg:p-24 max-w-7xl mx-auto pt-36 md:pt-32">
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Banner Hero */}
        <motion.div variants={item} className="mb-16 relative overflow-hidden glass-card !p-0 border border-[#1a1a1a]">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/consulting-bg.png" 
              alt="Cloud Infrastructure" 
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
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4 text-white leading-tight">
              VMG Systems | <br/>
              <span className="text-white/60 text-2xl sm:text-3xl md:text-4xl font-bold">Technical Consulting & Clean Slate Engineering</span>
            </h1>
            <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-3xl">
              We eliminate complex technical debt, strip unmanaged infrastructure, and ship production-ready, fully observable architectures using our Clean Slate methodology. 
              <br /><br />
              <span className="text-white font-medium">Flagship Rebuild Case Study:</span> Automotive Voice AI Platform Rebuild — complete full-stack refactor, migrating high-latency legacy services to a 5-service monorepo with sub-second API latency, 100% Terraform coverage, and a 99.5% uptime SLA.{" "}
              <Link href="/case-studies/automotive-ai" className="underline underline-offset-4 hover:text-white transition-colors font-semibold whitespace-nowrap">Read the case study →</Link>
            </p>
          </div>
        </motion.div>

        {/* Core Services Section */}
        <motion.div variants={item} className="mb-12">
          <p className="text-xs text-muted uppercase tracking-[0.2em] font-bold mb-4">ENGINEERING CAPABILITIES</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-8 tracking-tight">Services Overview</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="glass-card flex flex-col justify-between group border border-[#1a1a1a]"
            >
              <div>
                <div className="p-3 border border-[#1a1a1a] w-fit mb-6 bg-black group-hover:bg-[#111] transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-muted text-xs leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-[11px] font-mono text-muted">
                      <CheckCircle2 size={13} className="text-white mt-0.5 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-[#1a1a1a]">
                <Link href="/contact" className="text-[10px] font-bold uppercase tracking-[0.2em] text-white hover:underline underline-offset-4 inline-flex items-center gap-1">
                  {service.cta} <ArrowUpRight size={12} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Clean Slate Protocol Section */}
        <motion.div variants={item} className="mt-24 glass-card p-8 md:p-12 border border-[#1a1a1a] bg-[#020202]">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-2 text-white">VMG SYSTEMS</h2>
          <h3 className="text-lg text-muted uppercase tracking-widest mb-6 font-mono font-bold">The Clean Slate Protocol</h3>
          <p className="text-muted leading-relaxed mb-12 max-w-3xl text-sm md:text-base">
            Most engineering platforms fail because of architectural foundation choices, not because of coding skills. We establish rigorous discipline across four core parameters to ensure that what we build thrives on complexity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white mb-6 border-b border-[#1a1a1a] pb-2">Methodology Focus</h4>
              <ul className="space-y-6">
                <li className="flex items-start gap-3 text-xs md:text-sm text-muted">
                  <CheckCircle2 size={16} className="text-white mt-1 shrink-0" />
                  <div>
                    <strong className="text-white block mb-1">Unified Monorepo Architecture:</strong> 
                    Consolidating services into a single context. This allows developers and advanced AI coding agents to have full context across UI layers, database definitions, and pipeline workflows, drastically speeding up velocity.
                  </div>
                </li>
                <li className="flex items-start gap-3 text-xs md:text-sm text-muted">
                  <CheckCircle2 size={16} className="text-white mt-1 shrink-0" />
                  <div>
                    <strong className="text-white block mb-1">Zero-ClickOps Infrastructure (IaC):</strong> 
                    No configuring things in browser consoles. Every cloud database, firewall rule, storage bucket, or API service account is strictly codified in Terraform. This ensures security, repeatability, and instant environments tear-down.
                  </div>
                </li>
                <li className="flex items-start gap-3 text-xs md:text-sm text-muted">
                  <CheckCircle2 size={16} className="text-white mt-1 shrink-0" />
                  <div>
                    <strong className="text-white block mb-1">Strict Plan → Act → Validate Loop:</strong> 
                    Every single feature deployment is designed as a modular spec. No manual commands, no raw hacking in live environments. Every step is automated, evaluated, and validated prior to merge.
                  </div>
                </li>
                <li className="flex items-start gap-3 text-xs md:text-sm text-muted">
                  <CheckCircle2 size={16} className="text-white mt-1 shrink-0" />
                  <div>
                    <strong className="text-white block mb-1">Inference Regression Testing:</strong> 
                    We build eval dataset baselines on Day 1. Every model tweak or prompt adjustment is evaluated against test baselines before shipping, ensuring that prompt drift does not degrade user UX.
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-white mb-6 border-b border-[#1a1a1a] pb-2">Technical Standards</h4>
              <div className="space-y-6">
                <div className="border-b border-[#1a1a1a] pb-4">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white mb-2 font-mono">01 / Network & Security</div>
                  <div className="text-xs text-muted leading-relaxed">Workload Identity Federation, zero shared secret keys in source repos, and secure site-to-site tunnels via Tailscale zero-trust.</div>
                </div>
                <div className="border-b border-[#1a1a1a] pb-4">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white mb-2 font-mono">02 / Backend Execution</div>
                  <div className="text-xs text-muted leading-relaxed">Async Python (FastAPI Engine) with strictly validated Pydantic models for highly predictable structured outputs.</div>
                </div>
                <div className="border-b border-[#1a1a1a] pb-4">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white mb-2 font-mono">03 / User Interface</div>
                  <div className="text-xs text-muted leading-relaxed">Modern, accessible (WCAG 2.2 AA standards), type-safe reactive systems built with Next.js App Router and React Native.</div>
                </div>
                <div className="border-b border-[#1a1a1a] pb-4 border-b-0">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white mb-2 font-mono">04 / Observability Gateway</div>
                  <div className="text-xs text-muted leading-relaxed">Full execution trace telemetry wrapping LLM requests via Langfuse, capturing input, outputs, latency, tokens, and accurate cost metrics on Day 1.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8 bg-black border border-[#1a1a1a] flex items-center gap-4">
            <Sparkles size={24} className="text-white shrink-0 animate-pulse" />
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-white mb-1">Production Observability on Day 1</h4>
              <p className="text-muted text-xs leading-relaxed">
                Langfuse telemetry is running before your first customer feature ships. Every LLM call, prompt completion, and database fetch is fully traced. When something fails or experiences high latency, you receive slack alerts detailing the exact root cause before users notice.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Engagement Models (Flexible Tiers) */}
        <motion.div variants={item} className="mt-24 mb-12">
          <p className="text-xs text-muted uppercase tracking-[0.2em] font-bold mb-4">HOW TO WORK WITH VMG SYSTEMS</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">Flexible Engagement Tiers</h2>
          <p className="text-muted text-sm max-w-2xl mt-2 leading-relaxed">
            Choose the engagement layout that aligns with your timeline, budget, and business constraints. All models strictly enforce the VMG Clean Slate methodology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {engagementTiers.map((tier, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="glass-card flex flex-col justify-between border border-[#1a1a1a] hover:bg-[#030303] transition-colors p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 font-mono text-[9px] text-white/30 uppercase font-bold tracking-widest border-l border-b border-[#1a1a1a]">
                {tier.tierType}
              </div>
              
              <div>
                <span className="text-xs font-mono font-bold text-white/50 block mb-1 uppercase tracking-widest flex items-center gap-1.5">
                  <Clock size={12} /> {tier.duration}
                </span>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{tier.title}</h3>
                <p className="text-muted text-xs leading-relaxed mb-6">
                  {tier.focus}
                </p>
                <div className="border-t border-[#1a1a1a] pt-4 mb-6">
                  <span className="text-[10px] uppercase font-bold text-white tracking-wider block mb-3">Key Deliverables:</span>
                  <ul className="space-y-3">
                    {tier.deliverables.map((del, i) => (
                      <li key={i} className="flex items-start gap-2 text-[11px] font-mono text-white/75">
                        <span className="text-white mt-0.5">•</span>
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-[#1a1a1a]">
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 bg-white text-black py-3 font-bold hover:bg-gray-200 transition-all text-xs uppercase tracking-widest"
                >
                  {tier.cta} <ArrowUpRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Final CTA */}
        <motion.div variants={item} className="glass-card p-8 md:p-12 border border-[#1a1a1a] bg-[#050505]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black text-white tracking-tight mb-4">Ready to rebuild?</h2>
              <p className="text-muted text-sm leading-relaxed mb-4">
                Let&apos;s stop fighting complexity and configure an architecture that thrives on it. 
              </p>
              <p className="text-muted text-sm leading-relaxed">
                Reach out to schedule a diagnostic session. Tell us what is broken in your current cloud setup or AI pipeline, and we will formulate a clean-slate roadmap to resolve it.
              </p>
            </div>
            <div className="flex flex-col justify-center items-start md:items-end md:text-right border-t md:border-t-0 md:border-l border-[#1a1a1a] pt-8 md:pt-0 md:pl-12">
              <h3 className="text-xl font-bold mb-2 text-white">Initiate Consultation</h3>
              <p className="text-muted text-xs mb-8 max-w-sm">
                Diagnostic audits have limited availability. Secure your Q3 2026 onboarding slot.
              </p>
              <Link href="/contact" className="w-fit flex items-center gap-2 bg-white text-black px-8 py-4 font-bold hover:bg-gray-200 transition-all duration-300 ease-out group/cta text-xs uppercase tracking-widest">
                Get In Touch <Cloud size={14} className="group-hover/cta:translate-y-[-2px] transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
