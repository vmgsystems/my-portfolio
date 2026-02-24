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
                <div className="p-3 rounded-xl bg-white/5 w-fit mb-6 group-hover:bg-white/10 transition-colors">
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
              <div className="mt-8 pt-8 border-t border-white/5">
                <Link href="/contact" className="text-[10px] font-bold uppercase tracking-[0.2em] text-white hover:underline underline-offset-4">
                  Request Review for {service.title.split(' ')[0]} →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
