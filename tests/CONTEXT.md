# Context: tests

## Overview
End-to-End (E2E) verification suite powered by Playwright (`@playwright/test`). Validates desktop and mobile rendering, navigation state, and content invariants across all core portfolio routes.

## Key Files & Modules
- `portfolio.spec.ts`: Playwright E2E suite 'VMG Systems Portfolio Audit' with 5 verification specs. Specs: `test("Homepage loads and has active components")`, `test("Consulting page has pricing and methodology")`, `test("Timeline has milestones")`, `test("The Lab page features telemetry monitors")`, `test("Contact page highlights direct channels")`.

## Architectural Role & Dependencies
- **Layer**: Utility
- **Dependencies**: `@playwright/test`
- **Consumers**: CI/CD pipeline, `Dockerfile.test` container runner, `playwright.config.ts`

## Architectural Role & Key Conventions
- Test every primary route (`/`, `/consulting`, `/timeline`, `/lab`, `/contact`) across both desktop and mobile viewport breakpoints.
- Assert semantic text locators and exact telemetry metric counts.

## AI Agent Guidelines
- Keep E2E assertions synchronized with UI copy and responsive visibility classes (e.g., `Node Operational` hidden below `640px`).
- Run `npx playwright test` after any layout or copy modification.

## AI Agent Guidance
- Read existing files carefully before making edits.
- Keep signatures intact and add tests where appropriate.
