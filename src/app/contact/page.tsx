"use client";

import { motion } from "framer-motion";
import { Send, ArrowLeft } from "lucide-react";
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
    <main className="min-h-screen p-8 md:p-12 lg:p-24 max-w-4xl mx-auto pt-32">
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={item} className="mb-12">
          <Link href="/" className="inline-flex items-center gap-2 text-muted hover:text-white transition-colors text-sm font-bold tracking-widest uppercase mb-8">
            <ArrowLeft size={16} /> Back to Architecture
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Let’s Architect Your <br/>
            <span className="text-muted">Next Phase.</span>
          </h1>
          <p className="text-muted text-lg leading-relaxed max-w-2xl">
            Whether you are navigating a complex platform migration, dealing with technical debt, or integrating AI pipelines, the right architecture is the difference between scaling and stalling. Tell me about the bottleneck you are currently facing.
          </p>
        </motion.div>

        <motion.div variants={item} className="glass-card">
          <form className="space-y-6 flex flex-col" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted">Name</label>
                <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-white/50 transition-colors" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted">Company / Organization</label>
                <input type="text" className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-white/50 transition-colors" placeholder="Acme Corp" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted">Email Address</label>
              <input type="email" className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-white/50 transition-colors" placeholder="john@example.com" />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted">Primary Challenge</label>
              <select className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-white/50 transition-colors appearance-none cursor-pointer">
                <option value="" disabled selected>Select a bottleneck...</option>
                <option value="gcp">GCP Migration & Infrastructure</option>
                <option value="legacy">Legacy App Rebuild</option>
                <option value="ai">AI Pipeline Integration (RAG/LLM)</option>
                <option value="leadership">Interim Tech Leadership / Canary Launch</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-muted">Project Details & Current Stack</label>
              <textarea rows={5} className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-white focus:outline-none focus:border-white/50 transition-colors resize-none" placeholder="We are currently running on..." />
            </div>

            <button className="flex items-center justify-center gap-2 bg-white text-black font-bold px-8 py-4 rounded-lg hover:bg-white/90 transition-all w-full md:w-auto self-end mt-4 group">
              Request Architectural Review <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </motion.div>
      </motion.div>
    </main>
  );
}
