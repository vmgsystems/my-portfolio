# VMG Systems Portfolio (vmg.systems / gilbertopina.com)

## Overview

Production web platform and technical consulting portfolio for **Gilberto Pina** and **VMG Systems** (`https://www.vmg.systems` / `https://gilbertopina.com`). Engineered with a minimalist, monochromatic brutalist-clean design system (`#000000` canvas, `#1a1a1a` hairlines, tabular monospace telemetry) on Next.js 16 App Router.

---

## Architecture & Route Map

- `/` (`src/app/page.tsx`): 4-column interactive bento grid featuring the Hero manifesto ("Architecture of Momentum"), live `America/Chicago` clock and J/99 *Rambler* card, VMG Systems overview, Automotive Voice AI case study card, Global QSR Drive-Thru Voice AI metrics (`82%` accuracy across `14K+` locations), Infrastructure Stack tags, Core Consulting Capabilities, Clean Slate methodology explainer, and diagnostic CTAs.
- `/consulting` (`src/app/consulting/page.tsx`): VMG Systems service pillars (`AI Integration & Data Pipelines`, `Cloud Infrastructure & Modernization`, `Custom Platform & API Engineering`), **The Clean Slate Protocol**, Technical Standards, and Flexible Engagement Tiers (`Fixed-Scope Audits`, `Custom Product Sprints`, `Fractional AI/Data Lead`).
- `/timeline` (`src/app/timeline/page.tsx`): Chronological engineering track record covering the Automotive AI Platform Venture (Part Owner & V1 Lead Architect), VMG Systems (Founder & Principal Architect), Enterprise IAM Solutions Architecture, Fortune 100 Global QSR Voice AI Advisor, Issued Patent `WO2017177203A1`, Video Analytics leadership, and `B.S. Electrical Engineering` (UIC).
- `/lab` (`src/app/lab/page.tsx`): **The Builder's Lab** showcasing 6 live dogfooded production systems with real-time telemetry indicators:
  1. `EA Agent System` (Qdrant, Gemini, Claude CLI)
  2. `PD3board Terminal` (FastAPI, WebSockets, 60 FPS Canvas/WebGL Bloomberg emulator)
  3. `Rambler Smart Bridge` (10Hz NMEA 2000 CAN bus marine telemetry & NOAA HRRR routing)
  4. `n8n Automation Layer` (GCP, Linear, Slack, Firestore workflows)
  5. `VMG AI OS` (Sovereign cloud on Talos Linux Kubernetes, Proxmox VE, FluxCD GitOps, OPNsense, Tailscale)
  6. `Langfuse Observability` (Gemini, FastAPI, pgvector LLM trace gateway)
- `/contact` (`src/app/contact/page.tsx`): Direct, frictionless engagement channels (`Direct Email` at `mailto:hello@vmg.systems` and `LinkedIn Profile` at `https://linkedin.com/in/gilpina`) plus a 3-step architectural diagnostic roadmap.
- `/case-studies/automotive-ai` (`src/app/case-studies/automotive-ai/page.tsx`): Deep-dive engineering case study detailing the clean-slate V1 rebuild of a flagship Automotive Voice AI coaching platform (5-service monorepo, 100% Terraform IaC, 60% API latency reduction, 40% cost reduction, 99.5% uptime SLA on GCP Cloud Run).

---

## Tech Stack

- **Framework**: Next.js 16.1.6 (App Router) + React 19.2.3 + TypeScript 5
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`) + CSS Custom Properties (`src/app/globals.css`)
- **Animations**: Framer Motion 12 (`AnimatePresence`, staggered layout variants)
- **Icons & Typography**: Lucide React + Geist Sans & Geist Mono (`next/font/google`)
- **Verification**: Playwright E2E (`@playwright/test`) across Desktop (`chromium`, `firefox`, `webkit`) and Mobile (`Pixel 5`, `iPhone 12`) viewports
- **Context Documentation**: Deterministic AST & Regex documentation engine (`.agents/skills/update-docs/scripts/update_docs.py`)

---

## Getting Started

Run the local development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to inspect the application.

### Build, Lint & Verification Commands

```bash
# Compile production Next.js build
npm run build

# Start production server
npm run start

# Run ESLint static analysis
npm run lint

# Execute Playwright multi-viewport E2E test suite
npx playwright test

# Regenerate and verify directory CONTEXT.md documentation
python3 .agents/skills/update-docs/scripts/update_docs.py . --force
python3 .agents/skills/update-docs/scripts/update_docs.py . --verify
```

---

## Repository Context Documentation Index

Every tracked directory maintains a standardized `CONTEXT.md` adhering to the VMG Systems Context Schema:

- [`/CONTEXT.md`](./CONTEXT.md): Root workspace configuration and build pipeline context
- [`/src/CONTEXT.md`](./src/CONTEXT.md): Application source root context
- [`/src/app/CONTEXT.md`](./src/app/CONTEXT.md): Root App Router layout, navigation template, global styles, and homepage bento grid
- [`/src/app/consulting/CONTEXT.md`](./src/app/consulting/CONTEXT.md): Consulting services, Clean Slate Protocol, and engagement tiers
- [`/src/app/timeline/CONTEXT.md`](./src/app/timeline/CONTEXT.md): Chronological career timeline and patent milestones
- [`/src/app/lab/CONTEXT.md`](./src/app/lab/CONTEXT.md): The Builder's Lab live telemetry showcases
- [`/src/app/contact/CONTEXT.md`](./src/app/contact/CONTEXT.md): Direct email and LinkedIn contact channels
- [`/src/app/case-studies/CONTEXT.md`](./src/app/case-studies/CONTEXT.md): Case studies route namespace
- [`/src/app/case-studies/automotive-ai/CONTEXT.md`](./src/app/case-studies/automotive-ai/CONTEXT.md): Automotive Voice AI V1 rebuild case study
- [`/tests/CONTEXT.md`](./tests/CONTEXT.md): Playwright E2E verification suite
- [`/public/CONTEXT.md`](./public/CONTEXT.md): Static visual assets and Clean Slate Architecture Checklist PDF/HTML
- [`/marketing-assets/CONTEXT.md`](./marketing-assets/CONTEXT.md): Brand collateral, executive docs, logos, and background patterns
