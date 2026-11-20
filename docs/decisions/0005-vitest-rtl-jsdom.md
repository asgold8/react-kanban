---
status: accepted
date: 2026-11-20
decision-makers: Alex
---

# Test with Vitest, React Testing Library and jsdom

## Context and Problem Statement

The board's move/reorder logic and the "character required" form rule need automated tests that run locally and in CI.

## Considered Options

* Vitest + React Testing Library + jsdom
* `bun test` + happy-dom
* Jest

## Decision Outcome

Chosen option: "Vitest + React Testing Library + jsdom", because Vitest reuses `vite.config.ts`, runs on Node as decided in ADR-0001, and Testing Library is the common way to test React behavior.

Tests target the pure `moveTask` logic, the store and form validation. Drag gestures are not unit-tested in jsdom; Playwright would be the next step.

### Consequences

* Good, because tests resolve imports and aliases exactly like the app.
* Bad, because it is slower than `bun test` on pure logic.
* Bad, because drag-and-drop behavior is verified manually, not by tests.
