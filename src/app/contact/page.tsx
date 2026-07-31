"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, Mail, Linkedin, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

export default function Contact() {
  return (
    <main className="min-h-screen p-5 sm:p-8 md:p-12 lg:p-24 max-w-6xl mx-auto pt-36 md:pt-32">
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item} className="mb-12 relative overflow-hidden glass-card !p-0 border border-[#1a1a1a]">
          <div className="absolute inset-0 z-0">
            <Image 
              src="/contact-bg.png" 
              alt="Communication Network" 
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
              Let&apos;s talk about <br/>
              <span className="text-white/60">what&apos;s broken.</span>
            </h1>
            <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl">
              Describe your current cloud setups, database sync delays, or high-cost AI prompt chains. We will assess the root cause and advise if a clean-slate rebuild is your fastest path forward.
            </p>
          </div>
        </motion.div>

        {/* Direct Channels (2-Column Layout) */}
        <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Channel 1: Email */}
          <a href="mailto:hello@vmg.systems" className="glass-card flex flex-col items-center justify-between text-center group hover:bg-[#080808] transition-colors border border-[#1a1a1a] p-10 min-h-[240px]">
            <div className="p-4 border border-[#1a1a1a] bg-black group-hover:border-[#333] transition-colors">
              <Mail className="text-white" size={24} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white mb-2">Direct Email</h2>
              <p className="text-muted text-[10px] uppercase tracking-widest font-bold">hello@vmg.systems</p>
            </div>
            <div className="mt-4 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">
              Send Email <ArrowUpRight size={12} />
            </div>
          </a>

          {/* Channel 2: LinkedIn */}
          <a href="https://linkedin.com/in/gilpina" target="_blank" rel="noopener noreferrer" className="glass-card flex flex-col items-center justify-between text-center group hover:bg-[#080808] transition-colors border border-[#1a1a1a] p-10 min-h-[240px]">
            <div className="p-4 border border-[#1a1a1a] bg-black group-hover:border-[#333] transition-colors">
              <Linkedin className="text-white" size={24} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white mb-2">LinkedIn Profile</h2>
              <p className="text-muted text-[10px] uppercase tracking-widest font-bold">Direct Messaging</p>
            </div>
            <div className="mt-4 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-white/50 group-hover:text-white transition-colors">
              Connect on LinkedIn <ArrowUpRight size={12} />
            </div>
          </a>
        </motion.div>

        {/* Process Roadmap Card */}
        <motion.div variants={item} className="glass-card border border-[#1a1a1a] p-8 md:p-12">
          <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-muted mb-8">What happens next</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-3">
              <div className="text-2xl font-black text-white">01</div>
              <h3 className="font-bold text-white">Alignment Inquiry</h3>
              <p className="text-muted text-xs leading-relaxed">Send an email or message detailing your current systems bottleneck. We review it and establish alignment on feasibility.</p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-2xl font-black text-white">02</div>
              <h3 className="font-bold text-white">Architecture Audit</h3>
              <p className="text-muted text-xs leading-relaxed">1 to 2 week deep dive into your codebase. You get a full remediation roadmap, whether we work together or not.</p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-2xl font-black text-white">03</div>
              <h3 className="font-bold text-white">Canary Launch</h3>
              <p className="text-muted text-xs leading-relaxed">Clean-slate rebuild. IaC from day one, full observability, production-ready on delivery.</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}