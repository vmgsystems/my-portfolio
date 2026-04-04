"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, Mail, Linkedin, Calendar } from "lucide-react";
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
    <main className="min-h-screen p-8 md:p-12 lg:p-24 max-w-5xl mx-auto pt-32">
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
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-white">
              Let’s Architect Your <br/>
              <span className="text-white/60">Next Phase.</span>
            </h1>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
              Whether you are navigating a complex platform migration, dealing with technical debt, or integrating AI pipelines, the right architecture is the difference between scaling and stalling. Tell me about the bottleneck you are currently facing.
            </p>
          </div>
        </motion.div>

        <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <a href="mailto:hello@vmg.systems" className="glass-card flex flex-col items-center justify-center text-center group hover:bg-[#111] transition-colors border border-[#1a1a1a] p-12">
            <div className="p-4 border border-[#1a1a1a] mb-6 group-hover:border-[#333] transition-colors">
              <Mail className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Direct Email</h3>
            <p className="text-muted text-xs uppercase tracking-widest font-bold">hello@vmg.systems</p>
          </a>

          <a href="https://linkedin.com/in/gilpina" target="_blank" rel="noopener noreferrer" className="glass-card flex flex-col items-center justify-center text-center group hover:bg-[#111] transition-colors border border-[#1a1a1a] p-12">
            <div className="p-4 border border-[#1a1a1a] mb-6 group-hover:border-[#333] transition-colors">
              <Linkedin className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
            <p className="text-muted text-xs uppercase tracking-widest font-bold">Connect & Message</p>
          </a>

          <a href="https://calendly.com/gilpina/30min" target="_blank" rel="noopener noreferrer" className="glass-card flex flex-col items-center justify-center text-center group hover:bg-[#111] transition-colors border border-[#1a1a1a] p-12">
            <div className="p-4 border border-[#1a1a1a] mb-6 group-hover:border-[#333] transition-colors">
              <Calendar className="text-white" size={24} />
            </div>
            <h3 className="text-xl font-bold mb-2">Book a Call</h3>
            <p className="text-muted text-xs uppercase tracking-widest font-bold">Schedule via Calendly</p>
          </a>
        </motion.div>

        <motion.div variants={item} className="glass-card border border-[#1a1a1a] p-8 md:p-12">
          <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-muted mb-8">What happens next</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col gap-3">
              <div className="text-2xl font-black text-white">01</div>
              <h4 className="font-bold text-white">Intro Call</h4>
              <p className="text-muted text-sm leading-relaxed">30 minutes. You walk me through the problem. I ask the hard questions about your stack, timeline, and constraints.</p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-2xl font-black text-white">02</div>
              <h4 className="font-bold text-white">Architecture Audit</h4>
              <p className="text-muted text-sm leading-relaxed">1–2 week deep dive into your codebase. You get a full remediation roadmap — whether we work together or not.</p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-2xl font-black text-white">03</div>
              <h4 className="font-bold text-white">Canary Launch</h4>
              <p className="text-muted text-sm leading-relaxed">28-day clean-slate rebuild. IaC from day one, full observability, production-ready on delivery.</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </main>
  );
}