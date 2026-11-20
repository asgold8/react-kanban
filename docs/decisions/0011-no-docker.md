---
status: accepted
date: 2026-11-20
decision-makers: Alex
---

# Run the app natively instead of in Docker Compose

## Context and Problem Statement

The concern is that the app runs differently on WSL than on reviewers' Macs. Docker Compose is a common answer to "works on my machine."

## Considered Options

* Native, with pinned Node and Bun, a committed lockfile and macOS CI
* Docker Compose dev container
* VS Code devcontainer

## Decision Outcome

Chosen option: "Native", because this is a client-only app. Bind-mounting the project mixes platform-specific binaries (Biome, esbuild, Rollup) between host and container, and file watching across mounts often needs slower polling. Version pinning plus the macOS CI job (ADR-0010) covers the real risk.

### Consequences

* Good, because setup is `bun install` then `bun run dev`.
* Good, because hot reload works without polling workarounds.
* Bad, because reviewers install Node and Bun themselves.
