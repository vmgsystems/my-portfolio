# Context: src

## Overview
Primary application source root housing the Next.js 16 App Router hierarchy (`src/app/`). Separates executable TypeScript/React presentation logic and route layouts from root build configuration and static public assets.

## Key Files & Modules
- `app/`: Child module directory within `src`.

## Architectural Role & Dependencies
- **Layer**: UI
- **Dependencies**: `next`, `react`, `react-dom`, `framer-motion`, `lucide-react`, `tailwindcss`
- **Consumers**: Next.js build compiler (`next build`), Root `tsconfig.json` path alias (`@/* -> ./src/*`)

## Architectural Role & Key Conventions
- Organize all route segments under `src/app/` following Next.js App Router file-system conventions.
- Maintain strict TypeScript typing across all React Server and Client Components.

## AI Agent Guidelines
- Place shared route layouts and navigation templates in `src/app/layout.tsx` and `src/app/template.tsx`.
- Preserve the `@/*` import alias mapping to `./src/*`.

## AI Agent Guidance
- Read existing files carefully before making edits.
- Keep signatures intact and add tests where appropriate.
