# Context: logos

## Overview
Multi-resolution raster logo suite (`logo-black-16x16.png` through `logo-black-1024x1024.png`) for VMG Systems brand identity across favicons, application icons, and social headers.

## Key Files & Modules
- `logo-black-1024x1024.png`: Static visual/media asset (`PNG`) used by `marketing-assets/logos`.
- `logo-black-128x128.png`: Static visual/media asset (`PNG`) used by `marketing-assets/logos`.
- `logo-black-16x16.png`: Static visual/media asset (`PNG`) used by `marketing-assets/logos`.
- `logo-black-256x256.png`: Static visual/media asset (`PNG`) used by `marketing-assets/logos`.
- `logo-black-32x32.png`: Static visual/media asset (`PNG`) used by `marketing-assets/logos`.
- `logo-black-512x512.png`: Static visual/media asset (`PNG`) used by `marketing-assets/logos`.
- `logo-black-64x64.png`: Static visual/media asset (`PNG`) used by `marketing-assets/logos`.

## Architectural Role & Dependencies
- **Layer**: Utility
- **Dependencies**: None (self-contained)
- **Consumers**: Application icons (`src/app/icon.png`, `public/vmg-logo-new.png`), External brand profiles

## Architectural Role & Key Conventions
- Maintain square 1:1 aspect ratios across standard power-of-two pixel dimensions (16, 32, 64, 128, 256, 512, 1024).

## AI Agent Guidelines
- Preserve pure black background (`#000000`) and crisp geometric vector-derived rendering.

## AI Agent Guidance
- Read existing files carefully before making edits.
- Keep signatures intact and add tests where appropriate.
