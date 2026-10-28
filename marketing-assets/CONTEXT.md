# Context: marketing-assets

## Overview
Brand identity and strategic collateral repository organizing VMG Systems executive documentation (`docs/`), multi-resolution logo rasters (`logos/`), and abstract circuit background patterns (`backgrounds/`).

## Key Files & Modules
- `backgrounds/`: Child module directory within `marketing-assets`.
- `docs/`: Child module directory within `marketing-assets`.
- `logos/`: Child module directory within `marketing-assets`.

## Architectural Role & Dependencies
- **Layer**: Data
- **Dependencies**: `markdown`
- **Consumers**: Brand alignment workflows, Public site copy and visual asset pipeline (`public/`), AI agent context ingestion

## Architectural Role & Key Conventions
- Partition marketing collateral into `docs/` (messaging & service specs), `logos/` (16px-1024px PNGs), and `backgrounds/` (patterns).

## AI Agent Guidelines
- Ensure messaging documents stay aligned with the Clean Slate methodology and current service tiers.

## AI Agent Guidance
- Read existing files carefully before making edits.
- Keep signatures intact and add tests where appropriate.
