"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Send, ArrowLeft, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

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
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Web3Forms Access Key
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || ""); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        console.error("Form submission failed:", data.message);
      }
    } catch (error) {
      setStatus("error");
      console.error("Form submission error:", error);
    }
  };

  return (
    <main className="min-h-screen p-8 md:p-12 lg:p-24 max-w-4xl mx-auto pt-32">
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

        <motion.div variants={item} className="glass-card relative overflow-hidden">
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <div className="w-16 h-16 border border-[#1a1a1a] flex items-center justify-center mb-6">
                <CheckCircle2 size={32} className="text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Transmission Received.</h2>
              <p className="text-muted max-w-md">
                Your architectural review request has been sent successfully. I will review the details and respond shortly.
              </p>
              <button 
                onClick={() => setStatus("idle")}
                className="mt-8 text-xs font-bold uppercase tracking-widest text-muted hover:text-white transition-colors underline underline-offset-4"
              >
                Send Another Request
              </button>
            </div>
          ) : (
            <form className="space-y-6 flex flex-col" onSubmit={handleSubmit}>
              <input type="hidden" name="subject" value="New Architectural Review Request from VMG Systems" />
              <input type="hidden" name="from_name" value="VMG Systems Contact Form" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted">Name</label>
                  <input type="text" name="name" required className="w-full bg-black border border-[#1a1a1a] p-4 text-white focus:outline-none focus:border-white/50 transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-muted">Company / Organization</label>
                  <input type="text" name="company" className="w-full bg-black border border-[#1a1a1a] p-4 text-white focus:outline-none focus:border-white/50 transition-colors" placeholder="Acme Corp" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted">Email Address</label>
                <input type="email" name="email" required className="w-full bg-black border border-[#1a1a1a] p-4 text-white focus:outline-none focus:border-white/50 transition-colors" placeholder="john@example.com" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted">Primary Challenge</label>
                <select name="challenge" required defaultValue="" className="w-full bg-black border border-[#1a1a1a] p-4 text-white focus:outline-none focus:border-white/50 transition-colors appearance-none cursor-pointer rounded-none">
                  <option value="" disabled>Select a bottleneck...</option>
                  <option value="gcp">GCP Migration & Infrastructure</option>
                  <option value="legacy">Legacy App Rebuild</option>
                  <option value="ai">AI Pipeline Integration (RAG/LLM)</option>
                  <option value="leadership">Interim Tech Leadership / Canary Launch</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-muted">Project Details & Current Stack</label>
                <textarea rows={5} name="details" required className="w-full bg-black border border-[#1a1a1a] p-4 text-white focus:outline-none focus:border-white/50 transition-colors resize-none" placeholder="We are currently running on..." />
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 p-4 border border-red-400/20">
                  <AlertCircle size={16} />
                  <span>There was an error sending your request. Please check your Access Key in the code.</span>
                </div>
              )}

              <button 
                disabled={status === "submitting"}
                className="flex items-center justify-center gap-2 bg-white text-black font-bold px-8 py-4 hover:bg-white/90 transition-all w-full md:w-auto self-end mt-4 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" /> Transmitting...
                  </>
                ) : (
                  <>
                    Request Architectural Review <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </motion.div>
    </main>
  );
}
