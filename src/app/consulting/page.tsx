"use client";

import { motion } from "framer-motion";
import { 
  Cloud, 
  Cpu, 
  BrainCircuit, 
  Users, 
  CheckCircle2, 
  ArrowLeft 
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Cloud Infrastructure & Modernization",
    icon: <Cloud className="text-white" />,
    description: "Legacy technical debt is the anchor slowing down modern businesses. We design and deploy high-performance, cloud-native environments.",
    details: [
      "Custom GCP and AWS (S3) architecture",
      "Zero-trust infrastructure via Tailscale",
      "Docker-based containerization and migration"
    ]
  },
  {
    title: "Custom Platform & API Engineering",
    icon: <Cpu className="text-white" />,
    description: "We build the engines that power your products, focusing on robust backend logic and seamless frontend execution.",
    details: [
      "React Native with native background persistence",
      "High-throughput Python API architecture",
      "28-day 'Canary Launch' rapid prototyping"
    ]
  },
  {
    title: "AI Integration & Data Pipelines",
    icon: <BrainCircuit className="text-white" />,
    description: "Turn proprietary data into a strategic asset using modern LLM frameworks and vector databases.",
    details: [
      "Vector Database implementation (PostgreSQL/pgvector)",
      "RAG workflows using Gemini Pro and Claude",
      "Voice-Recognized Data Analysis methodologies"
    ]
  },
  {
    title: "Interim Technical Leadership",
    icon: <Users className="text-white" />,
    description: "Stepping in as Interim Chief of Engineering to realign teams, reset technical roadmaps, and ensure execution.",
    details: [
      "Translating business goals into engineering sprints",
      "Nearshore/Offshore team management",
      "Rigorous code-quality standards enforcement"
    ]
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
    <main className="min-h-screen p-8 md:p-12 lg:p-24 max-w-6xl mx-auto pt-32">
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item} className="mb-16">
          <Link href="/" className="inline-flex items-center gap-2 text-muted hover:text-white transition-colors text-sm font-bold tracking-widest uppercase mb-8">
            <ArrowLeft size={16} /> Back to Architecture
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            VMG Systems | <br/>
            <span className="text-muted text-3xl md:text-4xl">Technical Consulting & Architecture</span>
          </h1>
          <p className="text-muted text-lg leading-relaxed max-w-2xl">
            At VMG Systems, we specialize in bridging the gap between ambitious product vision and production-ready, highly resilient infrastructure. We architect &quot;Clean Slate&quot; solutions designed for scale, speed, and absolute stability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="glass-card flex flex-col justify-between group"
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
                <Link href="/contact" className="text-[10px] font-bold uppercase tracking-[0.2em] text-white hover:underline underline-offset-4">
                  Request Review for {service.title.split(' ')[0]} →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* VMG Systems Core Philosophy & Standards */}
        <motion.div variants={item} className="mt-24 glass-card p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">VMG SYSTEMS, LLC</h2>
          <h3 className="text-xl text-muted mb-6">Precision Engineering for the AI-Native Era</h3>
          <p className="text-muted leading-relaxed mb-12 max-w-3xl">
            Modern problems require more than just code—they require a foundational strategy that prevents expensive mistakes before they happen.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h4 className="text-lg font-bold uppercase tracking-widest mb-6">Our Core Philosophy: The Alfred Protocol</h4>
              <p className="text-muted text-sm leading-relaxed mb-6">
                We don&apos;t just build software; we build systems designed for human-AI collaboration. By establishing strict &quot;Rules of Engagement&quot; on Day 0, we ensure that every project is scalable, observable, and resilient.
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
                  <div><strong className="text-white">Stochastic Reliability:</strong> We treat LLM outputs as variables that must be tested against &quot;Golden Datasets&quot; to prevent performance degradation.</div>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold uppercase tracking-widest mb-6">Technical Standards</h4>
              <div className="space-y-6">
                <div className="border-b border-[#1a1a1a] pb-4">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white mb-2">Security</div>
                  <div className="text-sm text-muted">Workload Identity Federation and strict, authenticated-only access from Day 1.</div>
                </div>
                <div className="border-b border-[#1a1a1a] pb-4">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white mb-2">Backend</div>
                  <div className="text-sm text-muted">Modular, asynchronous Python (FastAPI) with abstracted LLM orchestration.</div>
                </div>
                <div className="border-b border-[#1a1a1a] pb-4">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white mb-2">Frontend</div>
                  <div className="text-sm text-muted">Accessible (WCAG 2.2 AA), type-safe interfaces built with Next.js and React Native.</div>
                </div>
                <div className="border-b border-[#1a1a1a] pb-4 border-b-0">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-white mb-2">Observability</div>
                  <div className="text-sm text-muted">Real-time error tracking and full logging of every AI call, including inputs, outputs, and latency.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8 bg-transparent border border-[#1a1a1a]">
            <h4 className="text-lg font-bold uppercase tracking-widest mb-4">&quot;The VMG Secret Sauce&quot;</h4>
            <p className="text-muted text-sm leading-relaxed">
              We believe observability is not a &quot;Phase 2&quot; task. From the first line of code, we implement automated triage, AI-driven PR reviews, and &quot;Destruction Guards&quot; to protect your production data.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}
