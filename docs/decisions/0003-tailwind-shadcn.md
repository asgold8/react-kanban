---
status: accepted
date: 2026-11-20
decision-makers: Alex
---

# Style with Tailwind v4 and shadcn/ui

## Context and Problem Statement

The brief asks for a usable layout and considered styling, not polish. The app needs an accessible searchable picker for characters and a form dialog, built in limited time.

## Considered Options

* Tailwind v4 + shadcn/ui
* A packaged component library (MUI, Mantine)
* Plain CSS modules

## Decision Outcome

Chosen option: "Tailwind v4 + shadcn/ui", because the components are copied into the repo where they can be read and changed, they build on Radix primitives with keyboard and screen-reader support, and Popover + Command give a ready Combobox for character search.

### Consequences

* Good, because accessible primitives come without a heavy runtime dependency.
* Bad, because generated files in `src/components/ui/` add code to the repo; Biome skips that folder.
* Bad, because long Tailwind class lists can make JSX harder to scan.
