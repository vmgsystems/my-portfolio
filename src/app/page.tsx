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
  ChevronRight
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

export default function Home() {
  const [time, setTime] = useState("");

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
          className="md:col-span-3 md:row-span-2 glass-card !p-0 relative overflow-hidden group cursor-default flex flex-col justify-end min-h-[400px] border border-[#1a1a1a]"
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
              <Zap size={14} className="text-white" />
              <span>AI Infrastructure · Clean Slate</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 text-white leading-tight md:leading-tight">
              Architecture of <br />
              <span className="text-white">Momentum.</span>
            </h1>
            <p className="text-white/70 text-sm md:text-base lg:text-lg leading-relaxed mb-4 max-w-xl font-medium">
              AI infrastructure architect shipping production-grade systems in 28 days — IaC-first, zero ClickOps, built to last.
            </p>
            <div className="flex items-center gap-2 text-white/35 text-[10px] uppercase tracking-widest font-bold mb-8">
              <span>ex-McDonald&apos;s Global Technology</span>
              <span>·</span>
              <span>14,000+ Locations</span>
              <span>·</span>
              <span>Patent-Pending AOT</span>
            </div>
            <Link href="/consulting" className="w-fit flex items-center gap-2 bg-white text-black px-6 py-3 font-bold hover:bg-gray-200 transition-all duration-300 ease-out group/btn text-sm">
              Explore the Architecture <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Chicago Clock Card */}
        <motion.div 
          variants={item}
          className="glass-card flex flex-col justify-between items-center text-center group cursor-default overflow-hidden p-6 md:p-8"
        >
          <div className="flex items-center gap-2 text-muted uppercase tracking-widest text-[10px] font-bold mb-4 md:mb-0">
            <Clock size={12} />
            <span>Chicago, IL</span>
          </div>
          <div className="text-3xl sm:text-4xl font-mono font-bold tracking-tighter tabular-nums my-4 md:my-0">
            {time || "00:00:00"}
          </div>
          <div className="text-[10px] text-muted uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
            Velocity Made Good
          </div>
        </motion.div>

        {/* VMG Systems Card */}
        <motion.div 
          variants={item}
          className="glass-card md:row-span-2 flex flex-col justify-between group cursor-pointer hover:bg-[#111] !p-0 relative overflow-hidden border border-[#1a1a1a]"
        >
          <div className="absolute inset-0 z-0">
            <Image 
              src="/vmg-pattern.png" 
              alt="VMG Systems Technical Architecture" 
              fill
              className="object-cover opacity-10 group-hover:scale-105 group-hover:opacity-20 transition-all duration-1000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-transparent" />
          </div>
          <Link href="/consulting" className="absolute inset-0 z-20" aria-label="View VMG Services" />
          
          <div className="relative z-10 p-6 md:p-8 flex flex-col justify-between h-full pointer-events-none">
            <div className="p-2 border border-[#1a1a1a] w-fit mb-4 bg-black/50 backdrop-blur-sm">
              <Code2 className="text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">VMG Systems</h3>
              <p className="text-muted text-sm leading-relaxed">
                Technical consulting specializing in &quot;Clean Slate&quot; architecture and resilient infrastructure.
              </p>
            </div>
            <div className="mt-4 flex items-center text-xs font-bold uppercase tracking-widest gap-1 text-muted group-hover:text-white transition-colors">
              View Services <ChevronRight size={14} />
            </div>
          </div>
        </motion.div>

        {/* Genubi Highlight Card */}
        <motion.div 
          variants={item}
          className="glass-card md:col-span-2 flex flex-col justify-between group cursor-pointer hover:bg-[#111] relative overflow-hidden !p-0 border border-[#1a1a1a] min-h-[180px]"
        >
          <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-gradient-to-br from-[#111] to-black" />
             <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
             <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/5 blur-[80px] rounded-full group-hover:bg-white/10 transition-colors duration-700" />
          </div>
          <Link href="/lab" className="absolute inset-0 z-20" aria-label="View Genubi Project" />
          <div className="relative z-10 p-6 md:p-8 flex flex-col justify-between h-full pointer-events-none">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-bold uppercase tracking-tighter flex items-center gap-2 text-white">
                Genubi <ArrowUpRight size={16} className="text-white/50 group-hover:text-white transition-colors" />
              </h3>
              <div className="text-right">
                  <div className="text-[10px] text-muted uppercase font-bold tracking-widest">Current</div>
                  <div className="text-xs text-white">Chief of Eng</div>
              </div>
            </div>
            <div className="mt-8">
              <div className="border-t border-[#1a1a1a] pt-4 text-sm text-white/70 leading-relaxed font-medium">
                AI coaching platform for automotive dealerships. 28-day clean-slate rebuild across 5 services: React Native, FastAPI, Gemini AI, Next.js, GCP.
              </div>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                <span className="text-[10px] uppercase tracking-widest font-bold text-white">Prod • 99.5% Uptime</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* McDonald's Credential Card */}
        <motion.div
          variants={item}
          className="glass-card md:col-span-2 flex flex-col justify-between group cursor-default relative overflow-hidden border border-[#1a1a1a] p-6 md:p-8"
        >
          <div>
            <div className="flex items-center gap-2 text-muted uppercase tracking-widest text-[10px] font-bold mb-4">
              <Cpu size={12} />
              <span>Past Engagement · Global Technology</span>
            </div>
            <h3 className="text-xl font-bold mb-2">McDonald&apos;s AOT</h3>
            <p className="text-muted text-sm leading-relaxed">
              Core contributor to the Automated Order Taker — McDonald&apos;s AI-powered drive-thru voice system, now patent-pending and deployed globally.
            </p>
          </div>
          <div className="flex gap-6 mt-6">
            <div>
              <div className="text-3xl font-black tabular-nums">82%</div>
              <div className="text-[10px] text-muted uppercase tracking-widest mt-1">Order Accuracy</div>
            </div>
            <div className="w-[1px] bg-[#1a1a1a]" />
            <div>
              <div className="text-3xl font-black tabular-nums">14K+</div>
              <div className="text-[10px] text-muted uppercase tracking-widest mt-1">Locations</div>
            </div>
          </div>
        </motion.div>

        {/* Tech Stack Card */}
        <motion.div
          variants={item}
          className="glass-card md:col-span-2 flex flex-col justify-between overflow-hidden p-6 md:p-8"
        >
          <div className="flex items-center gap-2 text-muted uppercase tracking-widest text-[10px] font-bold mb-4">
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
              <div className="flex items-center gap-2 text-white/40 uppercase tracking-widest text-[10px] font-bold mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                Clean Slate Engagements
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight mb-3 text-white leading-tight">
                Ready to ship?
              </h3>
              <p className="text-white/60 text-sm md:text-base max-w-lg leading-relaxed">
                Your stack rebuilt. Production-ready in 28 days. No ClickOps. No shortcuts. Full IaC from day one.
              </p>
            </div>
            <Link
              href="/contact"
              className="shrink-0 flex items-center gap-2 bg-white text-black px-8 py-4 font-bold hover:bg-gray-200 transition-all duration-300 ease-out group/btn text-sm whitespace-nowrap"
            >
              Start the Conversation <ArrowUpRight size={16} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

      </motion.div>
    </main>
  );
}
