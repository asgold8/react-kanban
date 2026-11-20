---
status: accepted
date: 2026-11-20
decision-makers: Alex
---

# Keep board state in Zustand

## Context and Problem Statement

Tasks and column order exist only in the browser. The pairing session may add filtering or persistence, so the state shape should make those cheap.

## Considered Options

* Zustand
* `useReducer` + Context
* Redux Toolkit

## Decision Outcome

Chosen option: "Zustand", because it has a small API, selectors keep unrelated columns from re-rendering, and the `persist` middleware adds localStorage in a few lines.

State is normalized: `tasks: Record<id, Task>` plus `columns: Record<ColumnId, id[]>`. Each task stores a copy of its character (id, name, image).

### Consequences

* Good, because `moveTask` is a pure function that is easy to unit-test.
* Good, because filtering is a derived selector, not new state.
* Bad, because a stored character copy can drift from the API; acceptable for this static data.
* Bad, because it adds a dependency where `useReducer` would also work.
