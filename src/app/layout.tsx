import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
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
        <nav className="fixed top-0 left-0 right-0 z-50 p-4 md:p-6 flex flex-col md:flex-row justify-between items-center bg-black border-b border-[#1a1a1a] gap-4 md:gap-0">
          <Link href="/" className="flex items-center gap-3 font-bold tracking-tighter text-xl shrink-0 group">
            <div className="relative w-8 h-8 rounded-md overflow-hidden border border-[#1a1a1a] group-hover:border-[#333] transition-colors">
              <Image src="/logo.png" alt="VMG Systems Logo" fill className="object-cover" />
            </div>
            <div>VMG <span className="text-muted font-normal">Systems</span></div>
          </Link>
          <div className="flex gap-6 md:gap-8 text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] font-bold text-muted overflow-x-auto whitespace-nowrap w-full md:w-auto pb-2 md:pb-0 no-scrollbar justify-start md:justify-end">
            <Link href="/" className="hover:text-white transition-colors">Architecture</Link>
            <Link href="/consulting" className="hover:text-white transition-colors">Consulting</Link>
            <Link href="/timeline" className="hover:text-white transition-colors">Timeline</Link>
            <Link href="/lab" className="hover:text-white transition-colors">The Lab</Link>
            <Link href="/contact" className="hover:text-white transition-colors underline underline-offset-8 decoration-white">Contact</Link>
          </div>
        </nav>
        {children}
        <footer className="p-8 text-center text-[10px] text-muted uppercase tracking-widest border-t border-[#1a1a1a] mt-24">
          © 2026 VMG Systems
        </footer>
      </body>
    </html>
  );
}
