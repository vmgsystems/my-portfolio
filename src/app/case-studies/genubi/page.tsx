"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowUpRight,
  CheckCircle2
} from "lucide-react";
import Link from "next/link";

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

export default function GenubiCaseStudy() {
  return (
    <main className="min-h-screen p-5 sm:p-8 md:p-12 lg:p-24 max-w-6xl mx-auto pt-36 md:pt-32">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
      >
        {/* Hero */}
        <motion.div variants={item} className="mb-16 relative overflow-hidden glass-card !p-0 border border-[#1a1a1a]">
          <div className="absolute inset-0 z-0">
            <Image
              src="/timeline-bg.png"
              alt="Genubi Case Study"
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
            <div className="text-xs text-muted uppercase tracking-widest font-bold mb-4">Case Study · VMG Engagement · 2026</div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white">
              Genubi: 28 Days<br />
              <span className="text-white/60">to Production.</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
              A legacy mobile platform rebuilt from scratch. 4x faster. 99.5% uptime from launch.
            </p>
          </div>
        </motion.div>

        {/* The Brief */}
        <motion.div variants={item} className="glass-card p-8 md:p-12 mb-8 border border-[#1a1a1a]">
          <p className="text-xs text-muted uppercase tracking-widest font-bold mb-4">The Brief</p>
          <p className="text-white/70 text-sm leading-relaxed max-w-3xl mb-4">
            Genubi&apos;s existing platform was a duct-tape stack: fragile data capture, unreliable audio pipelines, and no observability. The founding team needed a production-grade rebuild — fast — without disrupting the live product.
          </p>
          <p className="text-white/70 text-sm leading-relaxed max-w-3xl">
            VMG Systems came in as Interim Chief of Engineering. The mandate: strip it down and ship something that lasts.
          </p>
        </motion.div>

        {/* The Build */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <motion.div variants={item} className="glass-card p-8 md:p-10 border border-[#1a1a1a]">
            <p className="text-xs text-muted uppercase tracking-widest font-bold mb-4">The Scope</p>
            <h3 className="text-xl font-bold mb-6">5 services. 28 days. Zero ClickOps.</h3>
            <ul className="space-y-3">
              {[
                "React Native with native background audio persistence",
                "FastAPI backend — async Python, clean LLM abstraction",
                "Gemini AI pipeline with Langfuse observability from day one",
                "Next.js admin dashboard",
                "GCP infrastructure — Terraform-managed, zero manual config"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-xs font-mono text-muted">
                  <CheckCircle2 size={14} className="text-white mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={item} className="glass-card p-8 md:p-10 border border-[#1a1a1a]">
            <p className="text-xs text-muted uppercase tracking-widest font-bold mb-4">The Method</p>
            <h3 className="text-xl font-bold mb-6">Clean Slate Protocol</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Every service started from a codified spec. IaC before any feature code. A{" "}
              <span className="text-white font-medium">Plan → Act → Validate</span> loop on every task. AI eval datasets built on day one so accuracy regressions surface before users do.
            </p>
            <div className="mt-6 pt-6 border-t border-[#1a1a1a]">
              <p className="text-white/70 text-sm leading-relaxed">
                Langfuse was deployed before the first feature shipped. Every Gemini call logged with inputs, outputs, and latency from day one.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Results */}
        <motion.div variants={item} className="glass-card p-8 md:p-12 mb-8 border border-[#1a1a1a]">
          <p className="text-xs text-muted uppercase tracking-widest font-bold mb-8">What Shipped</p>
          <div className="flex gap-8 md:gap-16 mb-8 flex-wrap">
            <div>
              <div className="text-4xl font-black tabular-nums">4×</div>
              <div className="text-xs text-muted uppercase tracking-widest mt-1">Latency Reduction</div>
            </div>
            <div className="w-[1px] bg-[#1a1a1a] hidden md:block" />
            <div>
              <div className="text-4xl font-black tabular-nums">99.5%</div>
              <div className="text-xs text-muted uppercase tracking-widest mt-1">Production Uptime (Day 1)</div>
            </div>
            <div className="w-[1px] bg-[#1a1a1a] hidden md:block" />
            <div>
              <div className="text-4xl font-black tabular-nums">28d</div>
              <div className="text-xs text-muted uppercase tracking-widest mt-1">Zero to Launch</div>
            </div>
          </div>
          <p className="text-white/70 text-sm leading-relaxed max-w-3xl">
            The rebuilt platform shipped a Canary Launch in 28 days. Background audio persistence — previously unreliable — runs natively. Every AI call is logged with inputs, outputs, and latency. The stack is fully reproducible: any engineer can tear it down and redeploy from Terraform.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div variants={item} className="glass-card p-8 md:p-12 border border-[#1a1a1a] bg-[#050505] flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-2">Your infrastructure. Same standard.</h3>
            <p className="text-muted text-sm">Tell me what&apos;s broken.</p>
          </div>
          <div className="shrink-0 flex flex-col items-start md:items-end gap-2">
            <a
              href="https://calendly.com/gilpina/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white text-black px-8 py-4 font-bold hover:bg-gray-200 transition-all duration-300 ease-out text-sm whitespace-nowrap"
            >
              Book a Free Architecture Call <ArrowUpRight size={16} />
            </a>
            <p className="text-white/30 text-xs uppercase tracking-widest">Or email hello@vmg.systems</p>
          </div>
        </motion.div>

      </motion.div>
    </main>
  );
}
