# Context: automotive-ai

## Overview
Next.js App Router segment for `/case-studies/automotive-ai` documenting the clean-slate V1 rebuild of an enterprise Automotive Voice AI coaching platform (5-service monorepo, GCP Cloud Run, 100% Terraform IaC, 99.5% uptime SLA).

## Key Files & Modules
- `layout.tsx`: Route segment layout for `src/app/case-studies/automotive-ai` exporting segment-specific `Metadata` (OpenGraph, Twitter cards, canonical URL) and layout wrapper (`metadata`, `AutomotiveAILayout`).
- `page.tsx`: Case study route (`/case-studies/automotive-ai`) detailing the clean-slate V1 rebuild of the flagship Automotive Voice AI coaching platform (5-service monorepo, 100% Terraform IaC, 60% latency reduction, 40% cost reduction, 99.5% uptime SLA). Symbols: `AutomotiveAICaseStudy`, `container`, `item`.

## Architectural Role & Dependencies
- **Layer**: UI
- **Dependencies**: `next`, `framer-motion`, `next/image`, `lucide-react`, `next/link`
- **Consumers**: Homepage Automotive Voice AI card (`src/app/page.tsx`), Consulting page case study link (`src/app/consulting/page.tsx`)

## Architectural Role & Key Conventions
- Structure case study content into Hero metrics, The Brief, Legacy vs. Clean Slate comparison, 4 architectural pillars, and Production Outcomes.
- Sanitize proprietary client names while highlighting verifiable engineering metrics (60% latency reduction, 40% cost cut, 99.5% SLA).

## AI Agent Guidelines
- Maintain consistent monochromatic styling (`.glass-card`, `#1a1a1a` borders) and back-navigation links.

## AI Agent Guidance
- Read existing files carefully before making edits.
- Keep signatures intact and add tests where appropriate.
