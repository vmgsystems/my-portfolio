# Context: workspace

## Overview
Root workspace directory for the VMG Systems portfolio and technical consulting platform (`vmg.systems` / `gilbertopina.com`). Coordinates Next.js 16 App Router configuration, TypeScript compilation, Tailwind CSS v4 PostCSS pipelines, and Playwright multi-viewport E2E verification.

## Key Files & Modules
- `CHANGELOG.md`: Documentation module 'Changelog' covering [0.1.7](https://github.com/guarox/my-portfolio/compare/v0.1.6...HEAD) (2026-10-28), Features, Bug Fixes.
- `Dockerfile.test`: Containerized E2E test environment definition (`mcr.microsoft.com/playwright:v1.45.0-jammy`) that installs dependencies, builds the Next.js production app, and executes `npx playwright test`.
- `GEMINI.md`: Documentation module 'GEMINI.md -- Web Designer Context for gilbertopina.com / VMG Systems Portfolio' covering Your Role, Project Structure, Tech Stack.
- `README.md`: Documentation module 'VMG Systems Portfolio (vmg.systems / gilbertopina.com)' covering Overview, Architecture & Route Map, Tech Stack.
- `eslint.config.mjs`: ESLint 9 flat configuration integrating `eslint-config-next/core-web-vitals` and TypeScript linting rules.
- `next.config.ts`: Next.js 16 configuration module exporting typed `NextConfig` settings.
- `package-lock.json`: Deterministic npm dependency lockfile pinning exact package versions and integrity hashes.
- `package.json`: Node.js package manifest for 'my-portfolio' (v0.1.6) defining build/test scripts (dev, build, start, lint, release) and runtime dependencies.
- `playwright.config.ts`: Playwright E2E test runner configuration targeting `http://localhost:3000` across Desktop (`chromium`, `firefox`, `webkit`) and Mobile (`Pixel 5`, `iPhone 12`) viewports.
- `postcss.config.mjs`: PostCSS configuration registering `@tailwindcss/postcss` for Tailwind CSS v4 compilation.
- `tsconfig.json`: TypeScript compiler configuration targeting ES2017+ with strict type checking, bundler module resolution, and '@/*' path aliases.
- `marketing-assets/`: Subdirectory module within `workspace`.
- `nanobanana-output/`: Subdirectory module within `workspace`.
- `public/`: Subdirectory module within `workspace`.
- `src/`: Subdirectory module within `workspace`.
- `tests/`: Subdirectory module within `workspace`.

## Architectural Role & Dependencies
- **Layer**: Config
- **Dependencies**: `docker`, `playwright`, `nextjs`, `eslint/config`, `eslint-config-next/core-web-vitals`, `eslint-config-next/typescript`, `next`, `clsx`, `framer-motion`, `lucide-react`, `react`, `react-dom`, `tailwind-merge`, `@playwright/test`, `@tailwindcss/postcss`, `@types/node`, `@types/react`, `@types/react-dom`, `eslint`
- **Consumers**: Vercel production deployment pipeline, Playwright E2E test harness, Next.js App Router (`src/app/*`)

## Architectural Role & Key Conventions
- Maintain strict zero-ClickOps configuration and deterministic lockfile hygiene (`package-lock.json`).
- Exclude test suites (`tests/`, `playwright.config.ts`) from production TypeScript compilation paths in `tsconfig.json`.
- Enforce strict 7-bit ASCII documentation hygiene and monochromatic `#000000` design system invariants.

## AI Agent Guidelines
- Run `npm run build` and `npx playwright test` to validate changes across Desktop and Mobile viewports.
- Never introduce external UI component libraries (Bootstrap, Material UI) or non-monochromatic color tokens.
- Keep root configuration files (`next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, `playwright.config.ts`) minimal and strictly typed.

## AI Agent Guidance
- Read existing files carefully before making edits.
- Keep signatures intact and add tests where appropriate.
