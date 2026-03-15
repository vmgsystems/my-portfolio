"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  ArrowUpRight, 
  Cpu, 
  Zap, 
  Anchor, 
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
    <main className="min-h-screen p-8 pt-32 md:p-12 md:pt-36 lg:p-24 lg:pt-40 max-w-7xl mx-auto">
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[180px]"
      >
        {/* Hero Card */}
        <motion.div 
          variants={item}
          className="md:col-span-3 md:row-span-2 glass-card !p-0 relative overflow-hidden group cursor-default flex flex-col justify-end min-h-[400px] border-0 ring-1 ring-white/10"
        >
          <div className="absolute inset-0 z-0">
            <Image 
              src="/hero.png" 
              alt="Gilberto Piña - VMG Systems" 
              fill
              className="object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
          </div>
          
          <div className="relative z-10 p-8 md:p-12 flex flex-col justify-end h-full mt-32 md:mt-48">
            <div className="flex items-center gap-2 text-white/80 mb-4 uppercase tracking-[0.2em] text-xs font-semibold backdrop-blur-md bg-black/20 w-fit px-4 py-2 rounded-full border border-white/10">
              <Zap size={14} className="text-white" />
              <span>Lead Architect & Head of Tech</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 text-white leading-[0.9]">
              The Architecture of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40">Momentum.</span>
            </h1>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl font-medium">
              Bridging the gap between complex engineering and scalable product strategy. Founder of VMG Systems.
            </p>
            <Link href="/consulting" className="w-fit flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 hover:bg-white/90 transition-all duration-300 ease-out group/btn shadow-[0_0_40px_rgba(255,255,255,0.15)]">
              Explore the Architecture <ArrowUpRight size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Chicago Clock Card */}
        <motion.div 
          variants={item}
          className="glass-card flex flex-col justify-between items-center text-center group cursor-default overflow-hidden"
        >
          <div className="flex items-center gap-2 text-muted uppercase tracking-widest text-[10px] font-bold">
            <Clock size={12} />
            <span>Chicago, IL</span>
          </div>
          <div className="text-4xl font-mono font-bold tracking-tighter tabular-nums">
            {time || "00:00:00"}
          </div>
          <div className="text-[10px] text-muted uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
            Velocity Made Good
          </div>
        </motion.div>

        {/* VMG Systems Card */}
        <motion.div 
          variants={item}
          className="glass-card md:row-span-2 flex flex-col justify-between group cursor-pointer hover:bg-white/5"
        >
          <div className="p-2 rounded-lg bg-white/5 w-fit mb-4">
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
        </motion.div>

        {/* Sailing / Lab Card */}
        <motion.div 
          variants={item}
          className="glass-card md:col-span-2 flex items-center justify-between group cursor-default relative overflow-hidden"
        >
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
              <Anchor size={20} /> Rambler
            </h3>
            <p className="text-muted text-sm max-w-xs">
              Active crew on a J/99. Racing where teamwork and real-time environmental adjustments are critical.
            </p>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
          <div className="font-mono text-[80px] leading-none font-black opacity-10 absolute right-4 bottom-4 select-none pointer-events-none">
            J/99
          </div>
        </motion.div>

        {/* Experience Timeline Mini */}
        <motion.div 
          variants={item}
          className="glass-card md:col-span-2 flex flex-col justify-between group"
        >
          <div className="flex justify-between items-start">
            <h3 className="text-lg font-bold uppercase tracking-tighter">Milestones</h3>
            <div className="flex gap-4">
               <div className="text-right">
                  <div className="text-[10px] text-muted uppercase font-bold tracking-widest">McDonald&apos;s</div>
                  <div className="text-xs">AI Architecture</div>
               </div>
               <div className="text-right">
                  <div className="text-[10px] text-muted uppercase font-bold tracking-widest">Genubi</div>
                  <div className="text-xs">Chief of Eng</div>
               </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="border-t border-white/10 pt-4 text-xs text-muted">
              Pioneered AI order architecture.
            </div>
            <div className="border-t border-white/10 pt-4 text-xs text-muted">
              28-day Canary Launch execution.
            </div>
          </div>
        </motion.div>

        {/* Tech Stack Card */}
        <motion.div 
          variants={item}
          className="glass-card md:col-span-2 flex flex-col justify-between overflow-hidden"
        >
          <div className="flex items-center gap-2 text-muted uppercase tracking-widest text-[10px] font-bold mb-4">
            <Terminal size={12} />
            <span>Infrastructure Stack</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {['GCP', 'AWS', 'Python', 'React Native', 'Docker', 'Tailscale', 'Postgres', 'Gemini'].map((tech) => (
              <span key={tech} className="px-3 py-1 rounded-full border border-white/10 text-xs font-mono hover:border-white/40 transition-colors">
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Manifesto Preview */}
        <motion.div 
          variants={item}
          className="glass-card md:col-span-2 flex flex-col justify-between hover:scale-[1.01] transition-all relative group/manifesto hover:border-white/40"
        >
          <Link href="/consulting" className="absolute inset-0 z-10" aria-label="Read Manifesto" />
          <div className="relative z-0 pointer-events-none">
            <h3 className="text-2xl font-black uppercase italic leading-none mb-2 tracking-tighter">Clean Slate</h3>
            <p className="text-sm leading-snug font-medium text-muted group-hover/manifesto:text-white transition-colors">
              &quot;We don&apos;t fight complexity; we design architectures that thrive on it.&quot;
            </p>
          </div>
          <div className="flex justify-between items-end mt-4 relative z-0 pointer-events-none">
            <div className="text-[10px] font-bold uppercase tracking-tighter underline underline-offset-4 opacity-50 group-hover/manifesto:opacity-100 transition-opacity">Read Manifesto</div>
            <Cpu size={24} strokeWidth={2.5} className="text-muted group-hover/manifesto:text-white transition-colors" />
          </div>
        </motion.div>

      </motion.div>
    </main>
  );
}
