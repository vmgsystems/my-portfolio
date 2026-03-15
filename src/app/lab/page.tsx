"use client";

import { motion } from "framer-motion";
import { 
  Anchor, 
  Leaf, 
  Flame, 
  Settings2, 
  ArrowLeft,
  Gauge
} from "lucide-react";
import Link from "next/link";

const experiments = [
  {
    title: "Competitive Sailing",
    subtitle: "Rambler | J/99",
    icon: <Anchor className="text-white" />,
    description: "Experienced in high-stakes offshore racing, including the Bayview Mackinac Race. Success depends on real-time environmental adjustments and tight-loop communication.",
    tag: "Fluid Dynamics"
  },
  {
    title: "Horticulture & Climate Systems",
    subtitle: "Spectrum Optimization",
    icon: <Leaf className="text-white" />,
    description: "Utilizing light meters and SANSI grow-light spectrums to fine-tune indoor climate variables for optimal plant health. Engineering growth in controlled environments.",
    tag: "Precision Growth"
  },
  {
    title: "Culinary Precision",
    subtitle: "Masterbuilt 545 Log",
    icon: <Flame className="text-white" />,
    description: "Mastering the 'low and slow' parameters of temperature and airflow. Treating the smoking process as a thermodynamic system to be optimized.",
    tag: "Thermodynamics"
  },
  {
    title: "Mechanical Restoration",
    subtitle: "Harley-Davidson & Tesla",
    icon: <Settings2 className="text-white" />,
    description: "Maintaining a deep respect for legacy machinery while embracing the innovation of the Tesla Model 3. A balance of wrenching and high-voltage systems.",
    tag: "Mechanical/Electric"
  }
];

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

export default function Lab() {
  return (
    <main className="min-h-screen p-8 md:p-12 lg:p-24 max-w-7xl mx-auto pt-32">
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
            The Builder’s <br/>
            <span className="text-muted">Mindset.</span>
          </h1>
          <p className="text-muted text-lg leading-relaxed max-w-2xl">
            An engineering mindset isn&apos;t something you can just clock out of. It is a fundamental way of interacting with the world. Everything is a system; everything can be optimized.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiments.map((exp, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="glass-card flex flex-col justify-between group overflow-hidden relative"
            >
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 border border-[#1a1a1a] group-hover:bg-[#111] transition-colors">
                    {exp.icon}
                  </div>
                  <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] px-3 py-1 border border-[#1a1a1a] bg-black">
                    {exp.tag}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                <p className="text-sm text-muted font-bold uppercase tracking-widest mb-4">{exp.subtitle}</p>
                <p className="text-muted text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
              
              <div className="mt-8 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <Gauge size={14} className="text-white" />
                <span className="text-[10px] font-bold uppercase tracking-widest">Optimizing...</span>
              </div>

              {/* Decorative Background Element */}
              <div className="absolute -right-8 -bottom-8 font-mono text-[120px] font-black opacity-[0.02] select-none pointer-events-none group-hover:opacity-[0.04] transition-opacity">
                0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
