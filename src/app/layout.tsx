import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gilberto Pina | VMG Systems",
  description: "Lead Architect & Head of Technology. Clean Slate engineering and high-performance architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased selection:bg-white selection:text-black`}
      >
        <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center backdrop-blur-md bg-black/20 border-b border-white/5">
          <div className="font-bold tracking-tighter text-xl">
            VMG <span className="text-muted font-normal">Systems</span>
          </div>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.3em] font-bold text-muted">
            <Link href="/" className="hover:text-white transition-colors">Architecture</Link>
            <Link href="/consulting" className="hover:text-white transition-colors">Consulting</Link>
            <Link href="/timeline" className="hover:text-white transition-colors">Timeline</Link>
            <Link href="/lab" className="hover:text-white transition-colors">The Lab</Link>
            <Link href="/contact" className="hover:text-white transition-colors underline underline-offset-8 decoration-white">Contact</Link>
          </div>
        </nav>
        {children}
        <footer className="p-12 text-center text-[10px] text-muted uppercase tracking-widest border-t border-white/5">
          © 2026 VMG Systems
        </footer>
      </body>
    </html>
  );
}
