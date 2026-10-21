# VMG Systems — Architecture & Engineering Portfolio (`www.vmg.systems`)

Production web platform for **VMG Systems** (`https://www.vmg.systems`), showcasing the **Clean Slate** engineering methodology, production case studies, architectural milestones, and live telemetry from the VMG Sovereign AI Operating System.

---

## Architectural Highlights

| Pillar | Implementation |
| :--- | :--- |
| **Framework & Runtime** | Next.js 16 (App Router), React 19, TypeScript 5, Tailwind CSS v4 |
| **Motion & Typography** | Framer Motion deterministic stagger transitions, Geist Sans + Geist Mono (`next/font`) |
| **Structured SEO & Metadata** | Route-scoped OpenGraph metadata + Schema.org `JSON-LD` (`LocalBusiness` & `Person`) |
| **Dogfooded Lab Showcase (`/lab`)** | **Alfred (`Hermes`) SRE Agent** (`Qdrant` + `Ollama` `768-dim` RAG), **VMG AI OS** (`Talos K8s`, `FluxCD`, `VMG Viento v0.3.0`, 3-Way E2EE Vaultwarden Sync), **Langfuse v2 Observability** (`92.04%` nightly eval score), **PD3board Terminal**, and **Rambler Smart Bridge** |
| **Verification & CI Gate** | GitHub Actions CI (`.github/workflows/ci.yml`), ESLint 9, Next.js production build verification, and Playwright E2E suite (`tests/portfolio.spec.ts`) |

---

## Repository Structure

```text
.
├── .github/workflows/ci.yml              # Automated lint, sanitization, & build gate
├── public/                               # Static assets & Clean Slate Architecture Checklist
├── src/app/
│   ├── layout.tsx                        # Root layout + Schema.org JSON-LD graph
│   ├── template.tsx                      # Navigation bar & route transition wrapper
│   ├── page.tsx                          # Homepage 4-column Bento Grid
│   ├── consulting/                       # Clean Slate Protocol & engagement tiers
│   ├── case-studies/automotive-ai/       # Production Voice AI V1 rebuild case study
│   ├── timeline/                         # Career & patent (WO2017177203A1) timeline
│   ├── lab/                              # Live sovereign AI OS & engineering experiments
│   └── contact/                          # Direct consultation channels
└── tests/portfolio.spec.ts               # Playwright E2E regression assertions
```

---

## Local Development & Verification

```bash
# Install dependencies
npm ci

# Start local development server (http://localhost:3000)
npm run dev

# Run static linting and production build check
npm run lint
npm run build

# Run Playwright E2E verification suite
npx playwright test
```

---

## License & Ownership

Copyright © 2026 VMG Systems. All rights reserved.
