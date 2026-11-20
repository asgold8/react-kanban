---
status: accepted
date: 2026-11-20
decision-makers: Alex
---

# Use Bun as package manager and script runner, Node as runtime

## Context and Problem Statement

The app must install and run the same way on my WSL machine and on reviewers' Macs. Bun is the preferred package manager. Bun can also run code itself, but Vite and Vitest are built and tested on Node.

## Decision Drivers

* Install speed and a single committed lockfile
* Identical behavior on WSL and macOS
* Compatibility with Vite and Vitest

## Considered Options

* Bun for installs and scripts, Node runs Vite and Vitest
* Bun for everything (`bunx --bun vite`, Vitest on the Bun runtime)
* pnpm with Node
* npm with Node

## Decision Outcome

Chosen option: "Bun for installs and scripts, Node runs Vite and Vitest", because it keeps Bun's install speed while the tools execute on the runtime they are tested against. Vitest does not officially support the Bun runtime.

### Consequences

* Good, because installs are fast and `bun.lock` is a readable text file.
* Good, because switching the dev server to Bun later is a one-line script change.
* Bad, because contributors install both Node and Bun.
* Bad, because `bun test` runs Bun's own runner, not Vitest; the README and CI use `bun run test`.
* Neutral, because Bun skips dependencies' install scripts unless they are listed in `trustedDependencies`.

### Confirmation

CI runs `bun install --frozen-lockfile` with Node pinned from `.nvmrc` on Ubuntu and macOS.
