# Context: contact

## Overview
Next.js App Router segment for `/contact` providing direct, frictionless inquiry channels (`Direct Email` at `hello@vmg.systems` and `LinkedIn Profile`) alongside a 3-stage engagement roadmap.

## Key Files & Modules
- `layout.tsx`: Route segment layout for `src/app/contact` exporting segment-specific `Metadata` (OpenGraph, Twitter cards, canonical URL) and layout wrapper (`metadata`, `ContactLayout`).
- `page.tsx`: Contact route (`/contact`) providing direct engagement channels (`mailto:hello@vmg.systems` and LinkedIn `in/gilpina`) plus a 3-step architectural diagnostic roadmap. Symbols: `Contact`, `container`, `item`.

## Architectural Role & Dependencies
- **Layer**: UI
- **Dependencies**: `next`, `framer-motion`, `next/image`, `lucide-react`, `next/link`
- **Consumers**: Top navigation bar (`src/app/template.tsx`), All consultation and audit CTAs across the site, Playwright contact spec (`tests/portfolio.spec.ts`)

## Architectural Role & Key Conventions
- Enforce direct email and LinkedIn communication channels without third-party booking widgets or embedded forms.
- Maintain high-contrast hover states and accessible touch targets (`min-h-[240px]` cards).

## AI Agent Guidelines
- Preserve `Direct Email` and `LinkedIn Profile` headings required by `tests/portfolio.spec.ts`.
- Never re-introduce Calendly links or legacy form dependencies.

## AI Agent Guidance
- Read existing files carefully before making edits.
- Keep signatures intact and add tests where appropriate.
