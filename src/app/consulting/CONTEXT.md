# Context: consulting

## Overview
Next.js App Router segment for `/consulting` presenting VMG Systems technical consulting capabilities, The Clean Slate Protocol methodology, Technical Standards, and Flexible Engagement Tiers.

## Key Files & Modules
- `layout.tsx`: Route segment layout for `src/app/consulting` exporting segment-specific `Metadata` (OpenGraph, Twitter cards, canonical URL) and layout wrapper (`metadata`, `ConsultingLayout`).
- `page.tsx`: Consulting route (`/consulting`) rendering VMG Systems services (`AI Integration & Data Pipelines`, `Cloud Infrastructure & Modernization`, `Custom Platform & API Engineering`), The Clean Slate Protocol, Technical Standards, and Flexible Engagement Tiers (`Fixed-Scope Audits`, `Custom Product Sprints`, `Fractional AI/Data Lead`). Symbols: `Consulting`, `services`, `engagementTiers`, `container`, `item`.

## Architectural Role & Dependencies
- **Layer**: UI
- **Dependencies**: `next`, `framer-motion`, `next/image`, `lucide-react`, `next/link`
- **Consumers**: Top navigation bar (`src/app/template.tsx`), Homepage CTA links (`src/app/page.tsx`), Playwright consulting spec (`tests/portfolio.spec.ts`)

## Architectural Role & Key Conventions
- Render structured service pillars (`services`) and engagement models (`engagementTiers`: Diagnostic, Development, Advisory).
- Provide route-level SEO and OpenGraph metadata in `layout.tsx`.

## AI Agent Guidelines
- Preserve key headings verified by E2E tests (`The Clean Slate Protocol`, `Fixed-Scope Audits`, `Custom Product Sprints`).
- Route all conversion CTAs directly to `/contact` or `/case-studies/automotive-ai`.

## AI Agent Guidance
- Read existing files carefully before making edits.
- Keep signatures intact and add tests where appropriate.
