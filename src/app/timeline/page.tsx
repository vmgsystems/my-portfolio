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
  Layers,
  ArrowUpRight
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const milestones = [
  {
    year: "2025–2026",
    title: "Principal AI & Cloud Architect (V1 Delivered · 12-Mo Maintenance SLA)",
    company: "Automotive Voice AI Platform (Genubi.ai)",
    location: "Chicago, IL",
    description: "Spearheaded and delivered the 90-day clean-slate production rebuild of an enterprise AI coaching, audio ingestion, and evaluation platform for automotive dealerships. Engineered a 5-service monorepo leveraging React Native with native background audio persistence, async FastAPI backends, Next.js dashboards, and Vertex AI / Gemini (165+ commits, 40+ automated CI/CD pipelines live on GCP Cloud Run under a 99.5% uptime SLA, tracked end-to-end in Linear). Cut API latency by 60% and reduced Day-1 cloud infrastructure spend by 40%.",
    icon: <Layers className="text-white" />,
    current: true
  },
  {
    year: "2022–Present",
    title: "Founder & Principal Architect",
    company: "VMG Systems (Clients: Genubi.ai, Spacebot.ai, 1871 Mentorship)",
    location: "Chicago, IL",
    description: "Lead an enterprise AI and cloud architecture practice built around the 'Clean Slate' methodology: 100% Terraform-codified infrastructure across GCP, AWS, and bare-metal Talos Linux Kubernetes, zero ClickOps, Hub-and-Spoke Model Context Protocol (MCP) & Agent-to-Agent (A2A) orchestration, and full Langfuse/Prometheus observability. Served as Startup Mentor & Technical Advisor at 1871 (2023–2025), advising growth-stage ventures on migrating unmanaged SaaS stacks to deterministic, zero-trust cloud-native platforms.",
    icon: <Briefcase className="text-white" />,
    current: true
  },
  {
    year: "2018–2022",
    title: "Core Solutions Architect & Technology Advisor",
    company: "McDonald's Corporation (Global Technology — Fortune 100 Global QSR)",
    location: "Chicago, IL",
    description: "Led core architecture and the 10-store Chicagoland live pilot for the Automated Order Taker (AOT) drive-thru Voice AI platform, engineered to scale across 14,000+ restaurants and achieving 82%+ automated order accuracy before transitioning to Google Cloud. Architected zero-trust identity federation (OAuth 2.0 / OIDC / SAML), edge-to-cloud telemetry pipelines, and real-time speech processing topologies across global restaurant technology.",
    icon: <Terminal className="text-white" />
  },
  {
    year: "2017",
    title: "Co-Inventor, U.S. / WIPO Patent WO2017177203A1",
    company: "WIPO / USPTO (WO2017177203A1)",
    location: "Chicago, IL",
    description: "Co-invented Patent WO2017177203A1 ('Voice Recognized Real-Time Audio Decision and Corrective Action Systems and Methods'). Formulated acoustic frequency analysis algorithms, confidence-scoring gates, and real-time audio processing topologies to trigger automated corrective workflows in mission-critical enterprise voice pipelines.",
    icon: <Lightbulb className="text-white" />,
    link: "https://patents.google.com/patent/WO2017177203A1/en",
    linkText: "View Patent WO2017177203A1"
  },
  {
    year: "2008–2018",
    title: "Technology Director & Systems Engineering Lead",
    company: "Halverson Group",
    location: "Chicago, IL · Singapore · Hong Kong",
    description: "Directed global technology operations and systems engineering across North America, Europe, and Asia-Pacific (Oak Park, Singapore, Hong Kong) for a specialized retail behavioral analytics and video ethnography firm servicing Fortune 500 accounts including McDonald's Innovation Center Labs. Engineered multi-site video ingestion pipelines, VMware/SAN virtualization, and high-availability network infrastructure.",
    icon: <Briefcase className="text-white" />
  },
  {
    year: "2000–2004",
    title: "Senior Network Engineer",
    company: "United Parcel Service (UPS)",
    location: "Chicago, IL",
    description: "Engineered and maintained mission-critical Cisco routing/switching, LAN/WAN infrastructure, and high-availability warehouse telemetry networks supporting 24x7 logistics operations.",
    icon: <Briefcase className="text-white" />
  },
  {
    year: "Education",
    title: "B.S. Electrical Engineering (BSEE)",
    company: "University of Illinois at Chicago (UIC)",
    location: "Chicago, IL",
    description: "Awarded 1st Place at the UIC Engineering EXPO for the hardware and embedded firmware design of an innovative Wireless Price Tag Display system.",
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
                    {milestone.link && (
                      <div className="mt-3">
                        <a
                          href={milestone.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-widest text-white/70 hover:text-white transition-colors"
                        >
                          {milestone.linkText || "View Official Record"} <ArrowUpRight size={13} />
                        </a>
                      </div>
                    )}
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
