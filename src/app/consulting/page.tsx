"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Cloud,
  Cpu,
  BrainCircuit,
  CheckCircle2,
  ArrowLeft
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "AI Integration & Data Pipelines",
    icon: <BrainCircuit className="text-white" />,
    description: "Your data is already valuable. We build the pipelines and retrieval layers that make it usable by AI.",
    details: [
      "Vector Database implementation (PostgreSQL/pgvector)",
      "RAG workflows using Gemini Pro and Claude",
      "Voice AI data capture and processing pipelines"
    ],
    cta: "Request an AI/ML Strategy Review"
  },
  {
    title: "Cloud Infrastructure & Modernization",
    icon: <Cloud className="text-white" />,
    description: "We replace manual cloud configuration with Terraform-managed, reproducible infrastructure. GCP and AWS, built to last.",
    details: [
      "Custom GCP and AWS (S3) architecture",
      "Zero-trust infrastructure via Tailscale",
      "Docker-based containerization and migration"
    ],
    cta: "Request a Cloud Architecture Review"
  },
  {
    title: "Custom Platform & API Engineering",
    icon: <Cpu className="text-white" />,
    description: "FastAPI backends, React Native frontends, and the integration layer between them. Shipped in 28 days, not 6 months.",
    details: [
      "React Native with native background persistence",
      "High-throughput Python API architecture",
      "28-day production launch with full observability"
    ],
    cta: "Request a Platform Engineering Consultation"
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
    <main className="min-h-screen p-5 sm:p-8 md:p-12 lg:p-24 max-w-6xl mx-auto pt-36 md:pt-32">
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
      >
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
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white">
              <span className="hidden sm:inline">VMG Systems | <br/></span>
              <span className="text-white/60 text-3xl md:text-4xl">Technical Consulting & Architecture</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
              We come in, strip the technical debt, and ship a production system in 28 days. IaC from day one, zero ClickOps, full observability. Most recent engagement: Genubi (VMG client, Q1 2026) — 28-day rebuild, 4x latency reduction, 99.5% uptime from launch.{" "}
              <Link href="/case-studies/genubi" className="underline underline-offset-4 hover:text-white transition-colors">Read the case study →</Link>
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className={`glass-card flex flex-col justify-between group${index === services.length - 1 && services.length % 2 !== 0 ? " md:col-span-2" : ""}`}
            >
              <div>
                <div className="p-3 border border-[#1a1a1a] w-fit mb-6 group-hover:bg-[#111] transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs font-mono text-muted">
                      <CheckCircle2 size={14} className="text-white mt-0.5" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 pt-8 border-t border-[#1a1a1a]">
                <Link href="/contact" className="text-xs font-bold uppercase tracking-[0.2em] text-white hover:underline underline-offset-4 inline-block py-3">
                  {service.cta} →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* VMG Systems Core Philosophy & Standards */}
        <motion.div variants={item} className="mt-24 glass-card p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">VMG SYSTEMS, LLC</h2>
          <h3 className="text-xl text-muted mb-6">How we work.</h3>
          <p className="text-muted leading-relaxed mb-12 max-w-3xl">
            Most engineering failures are architectural, not technical. We fix the foundation first, then build on top of it.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h4 className="text-lg font-bold uppercase tracking-widest mb-6">Our Core Philosophy: The VMG Protocol</h4>
              <p className="text-muted text-sm leading-relaxed mb-6">
                Every engagement starts with rules. Before writing a line of code, we define how the system is built, tested, and observed. That upfront work is what makes 28 days possible.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-sm text-muted">
                  <CheckCircle2 size={16} className="text-white mt-1 shrink-0" />
                  <div><strong className="text-white">Monorepo Architecture:</strong> We start with a unified structure to provide AI agents and human developers full context across the entire stack.</div>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted">
                  <CheckCircle2 size={16} className="text-white mt-1 shrink-0" />
                  <div><strong className="text-white">Infrastructure as Code (IaC):</strong> &quot;ClickOps&quot; is banned. Every resource is codified via Terraform from the start to ensure security and reproducibility.</div>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted">
                  <CheckCircle2 size={16} className="text-white mt-1 shrink-0" />
                  <div><strong className="text-white">The &quot;Plan → Act → Validate&quot; Loop:</strong> We never write massive features in one go; we execute via documented specs and rigorous validation.</div>
                </li>
                <li className="flex items-start gap-3 text-sm text-muted">
                  <CheckCircle2 size={16} className="text-white mt-1 shrink-0" />
                  <div><strong className="text-white">LLM Output Testing:</strong> AI models drift. We build eval datasets on day one and run regression tests on every deployment to catch accuracy drops before users do.</div>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold uppercase tracking-widest mb-6">Technical Standards</h4>
              <div className="space-y-6">
                <div className="border-b border-[#1a1a1a] pb-4">
                  <div className="text-xs font-bold uppercase tracking-widest text-white mb-2">Security</div>
                  <div className="text-sm text-muted">Workload Identity Federation and strict, authenticated-only access from Day 1.</div>
                </div>
                <div className="border-b border-[#1a1a1a] pb-4">
                  <div className="text-xs font-bold uppercase tracking-widest text-white mb-2">Backend</div>
                  <div className="text-sm text-muted">Async Python (FastAPI) with clean LLM abstraction layers and structured output validation.</div>
                </div>
                <div className="border-b border-[#1a1a1a] pb-4">
                  <div className="text-xs font-bold uppercase tracking-widest text-white mb-2">Frontend</div>
                  <div className="text-sm text-muted">Accessible (WCAG 2.2 AA), type-safe interfaces built with Next.js and React Native.</div>
                </div>
                <div className="border-b border-[#1a1a1a] pb-4 border-b-0">
                  <div className="text-xs font-bold uppercase tracking-widest text-white mb-2">Observability</div>
                  <div className="text-sm text-muted">Real-time error tracking and full logging of every AI call, including inputs, outputs, and latency.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8 bg-transparent border border-[#1a1a1a]">
            <h4 className="text-lg font-bold uppercase tracking-widest mb-4">Observability on day one.</h4>
            <p className="text-muted text-sm leading-relaxed">
              We set up Langfuse before writing the first feature. Every AI call is logged with inputs, outputs, and latency from the first deployment. When something breaks, you know why before your users do.
            </p>
          </div>
        </motion.div>

        {/* Engagement Model & CTA */}
        <motion.div variants={item} className="mt-8 glass-card p-8 md:p-12 border border-[#1a1a1a] bg-[#050505]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Engagement Model</h2>
              <p className="text-muted leading-relaxed mb-6">
                Two modes: embedded or sprint. Embedded means I&apos;m your interim engineering lead. Sprint means a defined 28-day build with a fixed scope and a production handoff at the end.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-sm text-white/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" />
                  <div><strong>Architecture Audits:</strong> 1-2 week deep dives into existing codebases.</div>
                </li>
                <li className="flex items-start gap-3 text-sm text-white/80">
                  <div className="w-1.5 h-1.5 rounded-full bg-white mt-1.5 shrink-0" />
                  <div><strong>Canary Launches:</strong> 28-day MVP development cycles.</div>
                </li>
              </ul>
            </div>
            <div className="flex flex-col justify-center items-start md:items-end md:text-right border-t md:border-t-0 md:border-l border-[#1a1a1a] pt-8 md:pt-0 md:pl-12">
              <h3 className="text-2xl font-bold mb-4">Ready to rebuild?</h3>
              <p className="text-muted text-sm mb-8 max-w-sm">
                Tell me what&apos;s broken. I&apos;ll tell you if I can fix it.
              </p>
              <Link href="/contact" className="w-fit flex items-center gap-2 bg-white text-black px-8 py-4 font-bold hover:bg-gray-200 transition-all duration-300 ease-out group/cta text-sm uppercase tracking-widest">
                Initiate Contact <Cloud size={16} className="group-hover/cta:translate-y-[-2px] transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
