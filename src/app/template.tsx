"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Github, Linkedin } from "lucide-react";

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Architecture" },
    { href: "/consulting", label: "Consulting" },
    { href: "/timeline", label: "Timeline" },
    { href: "/lab", label: "The Lab" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <nav className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6 flex flex-col md:flex-row justify-between items-center bg-black/80 backdrop-blur-md border-b border-[#1a1a1a] gap-4 md:gap-0">
        <Link href="/" className="flex items-center gap-3 font-bold tracking-tighter text-xl shrink-0 group">
          <div className="relative w-8 h-8 rounded-md overflow-hidden border border-[#1a1a1a] group-hover:border-[#333] transition-colors">
            <Image src="/logo.png" alt="VMG Systems Logo" fill className="object-cover" />
          </div>
          <div>VMG <span className="text-muted font-normal">Systems</span></div>
        </Link>
        <div className="flex gap-6 md:gap-8 text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold text-muted overflow-x-auto whitespace-nowrap w-full md:w-auto pb-2 md:pb-0 no-scrollbar justify-start md:justify-end items-center">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors relative py-3 md:py-1 ${isActive ? "text-white" : "hover:text-white"}`}
              >
                {link.label}
                {isActive && (
                  <motion.div 
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-[1px] bg-white"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
          <div className="w-[1px] h-3 bg-[#1a1a1a] mx-2 hidden md:block" />
          <a href="https://github.com/guarox" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-3 -m-3 md:p-0 md:m-0"><Github size={14} /></a>
          <a href="https://linkedin.com/in/gilpina" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-3 -m-3 md:p-0 md:m-0"><Linkedin size={14} /></a>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="flex-grow"
        >
          {children}
        </motion.div>
      </AnimatePresence>

      <footer className="p-8 flex flex-col items-center justify-center gap-4 text-xs text-muted uppercase tracking-widest border-t border-[#1a1a1a] mt-24">
        <div className="flex gap-6">
          <a href="https://github.com/guarox" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2"><Github size={12} /> GitHub</a>
          <a href="https://linkedin.com/in/gilpina" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-2"><Linkedin size={12} /> LinkedIn</a>
        </div>
        <div>© 2026 VMG Systems</div>
      </footer>
    </div>
  );
}
