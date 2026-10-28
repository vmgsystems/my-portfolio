# Context: public

## Overview
Static public asset directory served at the root URL path (`/`) by Next.js. Contains dark-mode background visuals (`hero.png`, `sailing.png`, `manifesto.png`, `*-bg.png`), brand logos (`vmg-logo-new.png`), and the Clean Slate Architecture Checklist (`architecture-checklist.html` / `.pdf`).

## Key Files & Modules
- `architecture-checklist.html`: Print-ready A4 dark-mode HTML template for the VMG Systems Clean Slate Architecture Checklist lead magnet.
- `architecture-checklist.pdf`: Compiled high-fidelity A4 PDF version of the VMG Systems Clean Slate Architecture Checklist.
- `consulting-bg.png`: Static visual/media asset (`PNG`) used by `public`.
- `contact-bg.png`: Static visual/media asset (`PNG`) used by `public`.
- `file.svg`: Static visual/media asset (`SVG`) used by `public`.
- `globe.svg`: Static visual/media asset (`SVG`) used by `public`.
- `hero.png`: Static visual/media asset (`PNG`) used by `public`.
- `lab-bg.png`: Static visual/media asset (`PNG`) used by `public`.
- `logo.png`: Static visual/media asset (`PNG`) used by `public`.
- `manifesto.png`: Static visual/media asset (`PNG`) used by `public`.
- `next.svg`: Static visual/media asset (`SVG`) used by `public`.
- `sailing.png`: Static visual/media asset (`PNG`) used by `public`.
- `timeline-bg.png`: Static visual/media asset (`PNG`) used by `public`.
- `vercel.svg`: Static visual/media asset (`SVG`) used by `public`.
- `vmg-logo-new.png`: Static visual/media asset (`PNG`) used by `public`.
- `vmg-pattern.png`: Static visual/media asset (`PNG`) used by `public`.

## Architectural Role & Dependencies
- **Layer**: Utility
- **Dependencies**: `next/image`
- **Consumers**: All Next.js page and layout components (`src/app/**`), OpenGraph and Twitter social preview metadata

## Architectural Role & Key Conventions
- Serve optimized high-contrast visuals designed for grayscale/monochromatic overlay composition.
- Keep filenames stable to prevent broken `next/image` references or OpenGraph metadata links.

## AI Agent Guidelines
- Do not delete or rename referenced image assets (`hero.png`, `sailing.png`, `manifesto.png`, `vmg-logo-new.png`, `consulting-bg.png`, `timeline-bg.png`, `lab-bg.png`, `contact-bg.png`).

## AI Agent Guidance
- Read existing files carefully before making edits.
- Keep signatures intact and add tests where appropriate.
