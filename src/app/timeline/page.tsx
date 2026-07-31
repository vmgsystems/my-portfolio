"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Briefcase,
  Lightbulb,
  GraduationCap,
  ArrowLeft,
  Calendar,
  ShieldAlert,
  Terminal,
  Layers
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const milestones = [
  {
    year: "2024-Present",
    title: "Lead Architect & Head of Technology",
    company: "Automotive AI Platform Venture",
    location: "Chicago, IL",
    description: "Architecting and spearheading development of the flagship AI coaching, analysis, and evaluation platform for automotive dealerships. Engineered a 5-service monorepo leveraging React Native with native audio background persistence, async FastAPI backends, Next.js dashboards, and Gemini AI. Successfully managed 165+ commits and 40+ automated CI/CD pipelines, establishing a robust system live on GCP Cloud Run under a strict 99.5% uptime SLA and sub-second endpoint responses.",
    icon: <Layers className="text-white" />,
    current: true
  },
  {
    year: "2022-Present",
    title: "Founder & Principal Architect",
    company: "VMG Systems",
    location: "Chicago, IL",
    description: "Formulated and operate an elite technical consulting practice built around the 'Clean Slate' methodology: 100% Terraform-codified infrastructure, zero ClickOps, async Python services, and comprehensive observability. Built and dogfood a 10-service self-hosted AI operating system as an experimental proving ground for client builds. Advising multiple startups and growth-stage enterprises on migrating high-cost unmanaged SaaS stacks to modular, async, fully observable cloud-native platforms.",
    icon: <Briefcase className="text-white" />,
    current: true
  },
  {
    year: "2018-2022",
    title: "Enterprise IAM Solutions Architect",
    company: "Leading Enterprise Identity Platforms (IAM)",
    location: "Remote / Chicago, IL",
    description: "Designed, federated, and audited high-scale secure authentication systems and user-identity lifecycles for fortune-level enterprises. Configured complex custom OAuth 2.0 / OIDC flows, SAML federation hubs, and fine-grained API authorization tokens. This deep security background is the foundation of the strict 'Security on Day 1' protocol built into every single VMG Systems engagement today.",
    icon: <Briefcase className="text-white" />
  },
  {
    year: "2018-2022",
    title: "Core Technology Advisor",
    company: "Fortune 100 Global QSR Brand",
    location: "Chicago, IL",
    description: "Pioneered architectural contributions to the Automated Order Taker (AOT), a flagship AI-powered drive-thru voice recognition platform. Deployed across 14,000+ locations globally and patent-pending. Directed video ethnography research pipelines, edge-to-cloud analytics integrations, and optimized real-time speech processing topologies that improved automated order accuracy to 82%.",
    icon: <Terminal className="text-white" />
  },
  {
    year: "2017",
    title: "Patent Filed: Voice recognized data analysis",
    company: "USPTO Patent Core",
    location: "Chicago, IL",
    description: "Filed core utility patent outlining a proprietary, low-latency framework for processing voice-recognized real-time audio inputs to trigger automatic corrective systems in business execution pipelines. Deployed aspects of this core IP in both drive-thru AI structures and active venture backends.",
    icon: <Lightbulb className="text-white" />
  },
  {
    year: "2008-2018",
    title: "Director of Technology",
    company: "Specialized Research & Video Analytics Firm",
    location: "Chicago, IL · Singapore · Hong Kong",
    description: "Directed full-scale technical design and operations for a specialized video analytics and ethnographic research firm servicing high-profile Fortune 500 accounts. Spearheaded video collection pipelines for a Global QSR Brand's Innovation Center Laboratory, supervising deployments across key markets in South-East Asia.",
    icon: <Briefcase className="text-white" />
  },
  {
    year: "Education",
    title: "B.S. Electrical Engineering",
    company: "University of Illinois at Chicago (UIC)",
    location: "Chicago, IL",
    description: "Awarded First Place at the UIC Engineering EXPO for the design and firmware implementation of an innovative 'Wireless Price Tag Display' system.",
    icon: <GraduationCap className="text-white" />
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const item = {
  hidden: { x: -20, opacity: 0 },
  show: { x: 0, opacity: 1 }
};

export default function Timeline() {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  return (
    <main className="min-h-screen p-5 sm:p-8 md:p-12 lg:p-24 max-w-5xl mx-auto pt-36 md:pt-32">
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item} className="mb-16 relative overflow-hidden glass-card !p-0 border border-[#1a1a1a]">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/timeline-bg.png" 
              alt="Experience Timeline" 
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
              Experience & <br/>
              <span className="text-white/60">Milestones.</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
              From enterprise AI drive-thrus and security architectures to early-stage SaaS ventures. Fully codified from day one.
            </p>
          </div>
        </motion.div>

        <div className="relative border-l border-[#1a1a1a] ml-4 md:ml-8 pl-8 md:pl-12 space-y-16">
          {milestones.map((milestone, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className={`absolute -left-[41px] md:-left-[57px] top-0 w-4 h-4 rounded-none border border-white ${milestone.current ? 'bg-white' : 'bg-black'}`} />
              
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 mb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-muted flex items-center gap-2">
                  <Calendar size={12} /> {milestone.year}
                </span>
                <span className="hidden md:block text-muted opacity-30">•</span>
                <h2 className="text-xl font-bold tracking-tight text-white">
                  {milestone.title} <span className="text-muted font-normal">at {milestone.company}</span>
                </h2>
              </div>

              <div className="glass-card group hover:bg-[#111] transition-colors border border-[#1a1a1a]">
                <div className="flex items-start gap-4">
                  <div className="p-2 border border-[#1a1a1a] group-hover:border-[#333] transition-colors shrink-0 bg-black">
                    {milestone.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    {milestone.location && (
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-2">{milestone.location}</p>
                    )}
                    <p className={`text-muted text-sm leading-relaxed max-w-3xl ${!expanded[index] ? "line-clamp-3 md:line-clamp-none" : ""}`}>
                      {milestone.description}
                    </p>
                    <button
                      onClick={() => setExpanded(prev => ({ ...prev, [index]: !prev[index] }))}
                      className="mt-2 text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white transition-colors md:hidden"
                    >
                      {expanded[index] ? "Show less" : "Read more"}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={item} className="mt-24 text-center">
            <p className="text-muted text-sm mb-6 uppercase tracking-[0.3em] font-bold">End of chronological log</p>
            <Link href="/contact" className="inline-block border border-white px-8 py-4 hover:bg-white hover:text-black text-black bg-white transition-all font-bold text-xs uppercase tracking-widest">
              Discuss Your Architecture
            </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
