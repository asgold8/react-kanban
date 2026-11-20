---
status: accepted
date: 2026-11-20
decision-makers: Alex
---

# Run CI on GitHub Actions with an Ubuntu + macOS matrix

## Context and Problem Statement

I develop on WSL (Linux); reviewers likely run macOS. A clean install, lint, type check, tests and build should be proven on both before anyone clones the repo.

## Considered Options

* GitHub Actions, Ubuntu + macOS matrix
* GitHub Actions, Ubuntu only
* No CI

## Decision Outcome

Chosen option: "Ubuntu + macOS matrix". Each job sets up Node from `.nvmrc` and Bun from `packageManager`, then runs `bun install --frozen-lockfile`, `bun run lint`, `bun run typecheck`, `bun run test` and `bun run build`.

### Consequences

* Good, because platform-specific binary or lockfile problems show up before a reviewer hits them.
* Good, because `tsc -b` catches type errors Vite's build ignores.
* Bad, because macOS runners are slower and use more Actions minutes.
* Neutral, because there is no deploy step; the demo runs locally.
