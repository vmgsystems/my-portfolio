# Context: timeline

## Overview
Next.js App Router segment for `/timeline` displaying Gilberto Pina's chronological engineering track record, issued patent (`WO2017177203A1`), enterprise QSR Voice AI and IAM architecture leadership, and current venture roles.

## Key Files & Modules
- `layout.tsx`: Route segment layout for `src/app/timeline` exporting segment-specific `Metadata` (OpenGraph, Twitter cards, canonical URL) and layout wrapper (`metadata`, `TimelineLayout`).
- `page.tsx`: Career timeline route (`/timeline`) rendering expandable chronological engineering milestones from UIC Electrical Engineering and Patent `WO2017177203A1` to Fortune 100 QSR Drive-Thru Voice AI, Enterprise IAM, VMG Systems, and Automotive AI Platform Venture. Symbols: `Timeline`, `milestones`, `container`, `item`.

## Architectural Role & Dependencies
- **Layer**: UI
- **Dependencies**: `next`, `framer-motion`, `next/image`, `lucide-react`, `next/link`, `react`
- **Consumers**: Top navigation bar (`src/app/template.tsx`), Playwright timeline spec (`tests/portfolio.spec.ts`)

## Architectural Role & Key Conventions
- Support responsive mobile line clamping (`line-clamp-3 md:line-clamp-none`) with interactive expand/collapse state (`expanded`).
- Highlight active roles (`current: true`) with solid white timeline node markers.

## AI Agent Guidelines
- Preserve milestone titles verified by E2E tests (`Automotive AI Platform Venture`, `WO2017177203A1`, `B.S. Electrical Engineering`).
- Keep external patent links pointing to official Google Patents records (`WO2017177203A1`).

## AI Agent Guidance
- Read existing files carefully before making edits.
- Keep signatures intact and add tests where appropriate.
