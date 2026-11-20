---
status: accepted
date: 2026-11-20
decision-makers: Alex
---

# Build with Vite using the react-ts template

## Context and Problem Statement

The app is frontend-only: no server rendering, no API routes, one page. It needs a dev server, a production build and a test runner that shares its config.

## Considered Options

* Vite (`react-ts` template)
* Next.js
* Bun's built-in bundler (HTML imports)

## Decision Outcome

Chosen option: "Vite", because a single-page app needs nothing server-side, and Vite has first-class setups for Tailwind, shadcn and Vitest. Next.js adds server concepts the task does not use. Bun's bundler would tie the build to the Bun runtime, against ADR-0001.

### Consequences

* Good, because Vitest reuses `vite.config.ts` (aliases, plugins).
* Bad, because Vite does not type-check; CI adds a `tsc -b` type-check step (ADR-0010).
