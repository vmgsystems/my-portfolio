# Context: lab

## Overview
Next.js App Router segment for `/lab` (`The Builder's Lab`) showcasing 6 live dogfooded production systems (`EA Agent System`, `PD3board Terminal`, `Rambler Smart Bridge`, `n8n Automation Layer`, `VMG AI OS`, and `Langfuse Observability`).

## Key Files & Modules
- `layout.tsx`: Route segment layout for `src/app/lab` exporting segment-specific `Metadata` (OpenGraph, Twitter cards, canonical URL) and layout wrapper (`metadata`, `LabLayout`).
- `page.tsx`: The Builder's Lab route (`/lab`) showcasing 6 live production systems (`EA Agent System`, `PD3board Terminal`, `Rambler Smart Bridge`, `n8n Automation Layer`, `VMG AI OS`, `Langfuse Observability`) with real-time telemetry indicators. Symbols: `Lab`, `experiments`, `container`, `item`.

## Architectural Role & Dependencies
- **Layer**: UI
- **Dependencies**: `next`, `framer-motion`, `next/image`, `lucide-react`, `next/link`
- **Consumers**: Top navigation bar (`src/app/template.tsx`), Playwright Lab telemetry spec (`tests/portfolio.spec.ts`)

## Architectural Role & Key Conventions
- Render 4-metric telemetry grids per experiment card using camelCase-to-label key formatting and `tabular-nums` monospace values.
- Maintain exactly 5 telemetry cards exposing an `Uptime` metric (`uptime` or `apiUptime`) as asserted by E2E tests.

## AI Agent Guidelines
- Do not change the count of `Uptime` labels (must remain 5) or remove `PD3board Terminal`, `Rambler Smart Bridge`, or `VMG AI OS` titles.
- Keep background SVG index watermarks aria-hidden (`aria-hidden='true'`).

## AI Agent Guidance
- Read existing files carefully before making edits.
- Keep signatures intact and add tests where appropriate.
