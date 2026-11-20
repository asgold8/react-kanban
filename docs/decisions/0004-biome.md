---
status: accepted
date: 2026-11-20
decision-makers: Alex
---

# Lint and format with Biome

## Context and Problem Statement

The repo needs consistent formatting and lint checks locally and in CI, with as little configuration as possible.

## Considered Options

* Biome
* ESLint + Prettier
* Oxlint + Prettier

## Decision Outcome

Chosen option: "Biome", because one fast tool and one config file cover both jobs, and `biome ci` gives a single CI step.

### Consequences

* Good, because there is no ESLint/Prettier rule overlap to manage.
* Bad, because Biome has fewer React-specific rules than the ESLint plugin ecosystem.
* Bad, because Tailwind v4 CSS needs `css.parser.tailwindDirectives` enabled to parse.
* Neutral, because shadcn's generated components are excluded from checks.
