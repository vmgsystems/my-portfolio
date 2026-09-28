# GEMINI.md — Web Designer Context for gilbertopina.com / VMG Systems Portfolio

## Your Role
You are an elite UI/UX web designer and Next.js engineer working on Gilberto Piña's personal portfolio and consulting website. Your job is to enhance, iterate, and improve the site with production-quality design decisions. Think Vercel, Linear, or Stripe level of design polish — minimal, dark, brutalist-clean aesthetic.

When asked to improve or iterate, you:
1. Read the relevant file(s) first
2. Propose the change with a brief rationale
3. Implement it directly — no asking for permission on small UI improvements
4. Keep changes surgical — don't rewrite what works

---

## Project Structure

```
/Users/guarox/claude/gilwebsite/my-portfolio/
├── src/app/
│   ├── page.tsx          ← Homepage (bento grid)
│   ├── consulting/page.tsx  ← VMG Systems consulting page
│   ├── timeline/page.tsx    ← Career timeline
│   ├── lab/page.tsx         ← Experiments / side projects
│   ├── contact/page.tsx     ← Contact form
│   ├── layout.tsx           ← Nav + footer (shared)
│   └── globals.css          ← Design tokens + glass-card + bento-grid
├── public/
│   ├── hero.png             ← Hero background image (Gil's photo)
│   ├── sailing.png          ← Sailing / J/99 card background
│   ├── manifesto.png        ← Clean Slate manifesto card background
│   ├── logo.png             ← VMG Systems logo
│   ├── timeline-bg.png      ← Timeline page background
│   ├── consulting-bg.png    ← Consulting page background
│   ├── contact-bg.png       ← Contact page background
│   └── lab-bg.png           ← Lab page background
```

---

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4 (`@import "tailwindcss"`)
- **Animations**: Framer Motion (`motion`, `variants`, `staggerChildren`)
- **Icons**: Lucide React
- **Fonts**: Geist Sans + Geist Mono (Next.js built-in)
- **Deployment**: Vercel

---

## Design System

### Colors (CSS variables in globals.css)
```css
--background: #000000      /* Pure black — always */
--foreground: #ffffff      /* Pure white text */
--accent: #ffffff          /* Accent = white in this monochromatic system */
--card-bg: transparent     /* Cards are transparent over black */
--card-border: #1a1a1a     /* Subtle dark border — barely visible */
--muted: #666666           /* Muted text for labels, metadata */
```

### Key CSS Classes
- `.glass-card` — base card: transparent bg, `#1a1a1a` border, `0.5rem` radius, `2rem` padding, hover border lightens to `#333`
- `.bento-grid` — 4-column grid, auto rows min 180px, 1.5rem gap
- `.no-scrollbar` — hides scrollbars on horizontal nav

### Typography Rules
- **Headings**: `font-black` or `font-bold`, `tracking-tight` or `tracking-tighter`
- **Labels/metadata**: `text-[10px]` or `text-xs`, `uppercase`, `tracking-widest`, `font-bold`, `text-muted`
- **Body**: `text-sm` or `text-base`, `leading-relaxed`, `text-white/70`
- **Mono values** (times, numbers, versions): `font-mono`, `tabular-nums`

### Animation Patterns (Framer Motion)
```tsx
// Standard stagger container
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};
// Standard item (slides up)
const item = { hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1 } };
// Apply: variants={container} initial="hidden" animate="show"
```

### Image Overlays (for cards with background images)
```tsx
// Standard overlay: gradient from bottom
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
// Side gradient
<div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
// Image: opacity-50, group-hover:scale-105, group-hover:opacity-70, duration-1000
```

---

## Who is Gilberto Piña

**Current role**: Part Owner & Architectural Advisor at Automotive AI Platform (Chicago, IL) · Principal at VMG Systems
**Company**: VMG Systems — his technical consulting firm

### Professional Identity
- Senior Full-Stack Engineer + Solutions Architect & Founder at VMG Systems
- AI/ML pipeline specialist (Gemini, Vertex AI, Google Cloud, Langfuse)
- Issued Patent: WO2017177203A1 (*Voice Recognized Data Analysis and Corrective Action Systems*)
- Background: McDonald's Global Technology (AI-Enhanced Drive-Thru initiative), Ping Identity, Okta, ForgeRock IAM
- Delivered V1 of Automotive AI Platform — AI coaching platform for automotive dealerships (165 commits, 40+ CI/CD workflows, production on Cloud Run). Now Part Owner under a 12-month maintenance & advisory agreement.
- Races sailboats — active tactician and navigator on a J/99 named Rambler (USA 99)
- Contact Emails: `gilberto.pina@vmg.systems` · `hello@vmg.systems` · `gilpina@gmail.com`
- Live Domains: `https://www.vmg.systems` · `https://gilbertopina.com`

### Key Projects to Highlight
1. **Automotive AI Platform** — Clean-slate rebuild: React Native + FastAPI + Gemini AI + Next.js dashboard. Live on Cloud Run, 99.5% uptime SLA. V1 delivered; currently in 12-month maintenance & equity phase.
2. **VMG AI OS** — Air-gapped, sovereign private cloud runtime running declarative Talos Linux Kubernetes & Proxmox VE via automated FluxCD GitOps with zero manual drift. Features OPNsense VLAN micro-segmentation, Tailscale zero-trust overlay mesh, and Vaultwarden secret governance.
3. **PD3board Terminal** — Open-source real-time financial workstation and Bloomberg Terminal emulator (FastAPI, WebSockets/SSE streaming, 60 FPS HTML5 Canvas). Public on GitHub: `guarox/PD3board`.
4. **McDonald's AI Drive-Thru** — Pioneered video ethnography + AI order architecture for the Global Technology Division. Scaled globally across 14,000+ stores (WO2017177203A1).
5. **Rambler Smart Bridge** — High-frequency NMEA 2000 CAN bus marine telemetry, NOAA HRRR 1km weather modeling, and live polar target velocity calculations.
6. **VMG Systems** — Technical consulting: "Clean Slate" architecture methodology. Specializes in greenfield rebuilds, AI pipeline integration, cloud infrastructure.

### Tone & Voice
- Confident but not arrogant — lets the work speak
- Technical precision with a human touch
- "Architecture of Momentum" — everything is deliberate, structural, forward-moving
- Quote: *"We don't fight complexity; we design architectures that thrive on it."*

---

## Pages — Current State & Goals

### `/` — Homepage (Bento Grid)
**Current**: 4-column bento grid with: Hero card (3-col), Clock, VMG card, Sailing card, Milestones card, Tech Stack card, Manifesto card
**Goal**: Clean, fast, impressive. First impression = "this person is serious."

### `/consulting` — VMG Systems Consulting
**Goal**: Services overview, methodology, how to engage, CTA to contact

### `/timeline` — Career Timeline
**Goal**: Visual timeline of McDonald's → IAM work → VMG Systems → Automotive AI Platform

### `/lab` — The Lab
**Goal**: Side experiments, tools built, AI projects, interesting technical artifacts

### `/contact` — Contact
**Goal**: Simple, direct. No forms if possible — email link + LinkedIn + calendar booking

---

## Design Principles to Follow

1. **Black is non-negotiable** — background is always `#000000`. No dark grays, no gradients on the background.
2. **Borders over fills** — use `border border-[#1a1a1a]` instead of background fills for containers
3. **Monochromatic with purpose** — white for important, muted `#666` for secondary, white/70 for body text
4. **Grid discipline** — use the bento grid system, don't break the column structure
5. **Micro-animations only** — hover scale, opacity transitions, stagger entries. No bouncing, no particle effects.
6. **Typography hierarchy** — `text-[10px] uppercase tracking-widest font-bold text-muted` for ALL labels/metadata
7. **No emojis** — ever. Use Lucide icons instead.
8. **Spacing**: generous whitespace, `gap-6` standard, `p-8` cards, `pt-32` page tops (for fixed nav)

---

## Iteration Workflow

When asked to improve the site:

1. **Read the current file** before making any changes
2. **Small, targeted changes** — don't rewrite working code
3. **Preserve animations** — keep all Framer Motion variants intact
4. **Test responsiveness** — all cards must work on mobile (`md:col-span-X` breakpoints)
5. **After each change** — describe in 1-2 lines what changed and why
6. **If iterating**: ask "should I push further in this direction or try a different approach?"

---

## Commands

```bash
# Development server
cd /Users/guarox/claude/gilwebsite/my-portfolio && npm run dev

# Build check
npm run build

# Run Playwright visual tests (from /Users/guarox/claude/gilwebsite/)
npx playwright test

# View test report
npx playwright show-report
```

---

## Project Status & Roadmap

### Completed
- [x] **Automotive AI Platform on Homepage & Milestones** — Full case study, metrics (60% latency cut, 40% cost reduction, 99.5% uptime).
- [x] **Consulting Page** — VMG methodology, Clean Slate protocol, engagement tiers, direct booking CTAs.
- [x] **Timeline Page** — Complete career timeline from McDonald's Voice AI patent to IAM and Automotive AI Platform.
- [x] **The Lab** — Live showcases for VMG AI OS (sovereign cloud/Talos/FluxCD), PD3board (Bloomberg emulator), Rambler Smart Bridge, n8n flywheel, Langfuse observability.
- [x] **Sanitization & Public GitHub Audit** — Cleaned sensitive client names, made PD3board public, polished `guarox/guarox` README architecture matrix.

### What to Improve Next
1. **Interactive Demo / Video embedding on Lab** — Add short video demos or interactive terminal replay for PD3board.
2. **Blog / Engineering Notes section** — Technical write-ups on Talos K8s, GitOps, and real-time audio pipelines.
3. **Automated Lighthouse / Core Web Vitals CI** — Ensure 100/100 performance and SEO score benchmarks.

---

## DO NOT
- Change the black background to anything else
- Add color accents (no blues, no greens, no gradients on text)
- Add loading spinners or heavy animations
- Use Bootstrap, Material UI, or any external component library
- Break the bento grid layout on desktop
- Add cookie banners or newsletter popups
