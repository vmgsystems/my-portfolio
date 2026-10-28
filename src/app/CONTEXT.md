# Context: app

## Overview
Core Next.js 16 App Router root segment defining the global HTML shell (`layout.tsx`), animated navigation chrome (`template.tsx`), monochromatic design tokens (`globals.css`), and the flagship 4-column bento grid homepage (`page.tsx`).

## Key Files & Modules
- `globals.css`: Global Tailwind CSS v4 stylesheet defining monochromatic design tokens (--background, --foreground, --card-border, --muted) and layout utilities (.glass-card, .bento-grid). Defines: `.no-scrollbar`, `.text-balance`, `.bento-grid`, `.glass-card`, `--background`, `--foreground`, `--accent`, `--card-bg`.
- `layout.tsx`: Root Next.js App Router layout configuring `Geist` and `Geist_Mono` typography, global SEO/OpenGraph/Twitter metadata (`https://www.vmg.systems`), and Schema.org JSON-LD (`LocalBusiness` and `Person` graph).
- `page.tsx`: Root homepage route (`/`) rendering the 4-column interactive bento grid, live America/Chicago telemetry clock, VMG Systems overview, Automotive Voice AI & QSR Drive-Thru Voice AI cards, Infrastructure Stack tags, Clean Slate methodology explainer, and diagnostic CTAs. Symbols: `Home`, `container`, `item`.
- `template.tsx`: Shared animated route template (`use client`) rendering the fixed top navigation bar (`Node Operational` status badge, active route underline via Framer Motion `layoutId`), `AnimatePresence` page transitions, and global footer.
- `icon.png`: Static visual/media asset (`PNG`) used by `src/app`.
- `case-studies/`: Subdirectory module within `app`.
- `consulting/`: Subdirectory module within `app`.
- `contact/`: Subdirectory module within `app`.
- `lab/`: Subdirectory module within `app`.
- `timeline/`: Subdirectory module within `app`.

## Architectural Role & Dependencies
- **Layer**: UI
- **Dependencies**: `tailwindcss`, `next`, `next/font/google`, `framer-motion`, `next/image`, `lucide-react`, `react`, `next/link`, `next/navigation`
- **Consumers**: Root route (`/`) and all child route segments (`/consulting`, `/timeline`, `/lab`, `/contact`, `/case-studies/automotive-ai`), Playwright homepage audit tests (`tests/portfolio.spec.ts`)

## Architectural Role & Key Conventions
- Enforce pure `#000000` background, `#1a1a1a` borders (`.glass-card`), and 4-column `.bento-grid` layout discipline.
- Use Framer Motion `staggerChildren` variants (`container` and `item`) for deterministic entry animations.
- Keep `Node Operational` status badge visible on desktop viewports (`hidden sm:inline-flex`) and hidden on narrow mobile viewports.

## AI Agent Guidelines
- Do not alter the monochromatic color palette or break responsive `md:col-span-*` bento grid breakpoints.
- Ensure headings, capability cards, and status indicators match E2E selectors in `tests/portfolio.spec.ts`.
- Use Lucide React icons exclusively; never use decorative emojis.

## AI Agent Guidance
- Read existing files carefully before making edits.
- Keep signatures intact and add tests where appropriate.
