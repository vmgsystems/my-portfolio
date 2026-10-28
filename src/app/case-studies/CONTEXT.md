# Context: case-studies

## Overview
Next.js App Router parent namespace grouping deep-dive engineering case studies (`/case-studies/*`). Organizes production architecture rebuild documentation under dedicated sub-routes.

## Key Files & Modules
- `automotive-ai/`: Child module directory within `case-studies`.

## Architectural Role & Dependencies
- **Layer**: UI
- **Dependencies**: `next`, `react`
- **Consumers**: Homepage and Consulting case study links, Child route `/case-studies/automotive-ai`

## Architectural Role & Key Conventions
- Each case study resides in its own descriptive slug directory containing `layout.tsx` (SEO metadata) and `page.tsx` (case study view).

## AI Agent Guidelines
- Keep client venture references sanitized in compliance with advisory agreements.

## AI Agent Guidance
- Read existing files carefully before making edits.
- Keep signatures intact and add tests where appropriate.
