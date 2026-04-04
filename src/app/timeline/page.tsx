"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  Briefcase, 
  Lightbulb, 
  GraduationCap, 
  ArrowLeft,
  Calendar
} from "lucide-react";
import Link from "next/link";

const milestones = [
  {
    year: "2022-Present",
    title: "Founder & Principal Architect",
    company: "VMG Systems",
    location: "Chicago, IL",
    description: "Independent AI infrastructure practice built around the Clean Slate methodology, shipping production-grade systems in 28 days. Built and operate a 10-service self-hosted AI OS as a proving ground for every system sold to clients. Current engagement: Interim Chief of Engineering at Genubi, where a 28-day Canary Launch achieved 4x latency reduction and 99.5% uptime from day one.",
    icon: <Briefcase className="text-white" />,
    current: true
  },
  {
    year: "2025-Present",
    title: "Interim Chief of Engineering",
    company: "Genubi",
    description: "Led a high-intensity 28-day ‘Canary Launch’ sprint to completely rebuild a legacy mobile data capture platform. Engineered native background audio persistence and secure GCP data pipelines, achieving a 4× reduction in end-to-end audio processing latency and 99.5% production uptime from day one.",
    icon: <Briefcase className="text-white" />
  },
  {
    year: "2018-2022",
    title: "Technology Advisor",
    company: "McDonald’s Corporation",
    description: "Core contributor to the Automated Order Taker (AOT), McDonald’s AI-powered drive-thru voice system, now patent-pending and deployed across 14,000+ locations globally. Led development contributing to an 82% improvement in order accuracy. Engineered edge-to-cloud pipelines allowing localized hardware to communicate instantly with centralized AI models.",
    icon: <Briefcase className="text-white" />
  },
  {
    year: "2008-2018",
    title: "Director of Technology",
    company: "Halverson Group, Inc.",
    description: "Led technology strategy for a firm specializing in video analytics and ethnographic research systems for Fortune 500 clients including McDonald’s and Timberland. Architected and deployed video ethnography systems for McDonald’s Innovation Center Laboratory. Directed international deployments in Singapore and Hong Kong.",
    icon: <Briefcase className="text-white" />
  },
  {
    year: "2017",
    title: "Inventor (Patent Pending)",
    company: "Voice Recognized Data Analysis",
    description: "Filed core patent for ‘Voice Recognized Data Analysis and Corrective Action System,’ outlining a proprietary framework for processing real-time audio input to trigger automated corrective actions.",
    icon: <Lightbulb className="text-white" />
  },
  {
    year: "Education",
    title: "B.S. Electrical Engineering",
    company: "University of Illinois at Chicago (UIC)",
    description: "First Place at the UIC Engineering EXPO for ‘Wireless Price Tag Display.’",
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
  return (
    <main className="min-h-screen p-8 md:p-12 lg:p-24 max-w-5xl mx-auto pt-32">
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
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white">
              Experience & <br/>
              <span className="text-white/60">Milestones.</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
              From engineering edge-compute AI at a global enterprise to executing architectural rebuilds for agile startups.
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
                <h3 className="text-xl font-bold tracking-tight">
                  {milestone.title} <span className="text-muted font-normal">at {milestone.company}</span>
                </h3>
              </div>

              <div className="glass-card group hover:bg-[#111] transition-colors">
                <div className="flex items-start gap-4">
                  <div className="p-2 border border-[#1a1a1a] group-hover:border-[#333] transition-colors shrink-0">
                    {milestone.icon}
                  </div>
                  <div>
                    {milestone.location && (
                      <p className="text-xs font-bold uppercase tracking-widest text-muted mb-2">{milestone.location}</p>
                    )}
                    <p className="text-muted text-sm leading-relaxed max-w-3xl">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div variants={item} className="mt-24 text-center">
            <p className="text-muted text-sm mb-6 uppercase tracking-[0.3em] font-bold">End of chronological log</p>
            <Link href="/contact" className="inline-block border border-white px-8 py-4 hover:bg-white hover:text-black transition-all font-bold">
              Discuss Your Architecture
            </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
