---
status: accepted
date: 2026-11-20
decision-makers: Alex
---

# Celebrate Done with canvas-confetti

## Context and Problem Statement

The brief asks for something delightful when an item moves to Done. It must not interfere with drag-and-drop animations.

## Considered Options

* canvas-confetti
* Motion (formerly Framer Motion) animation on the card
* Hand-written CSS keyframes

## Decision Outcome

Chosen option: "canvas-confetti", because it is small, takes one function call, and draws on its own canvas, so it cannot fight dnd-kit's transforms. It fires only when a card enters Done from another column, with `disableForReducedMotion: true`.

Motion layout animations on cards would conflict with dnd-kit's sorting transforms. A small Motion "pop" (via `LazyMotion`) can be added later if wanted.

### Consequences

* Good, because the celebration is decoupled from rendering and easy to explain.
* Good, because users who prefer reduced motion see no animation.
* Bad, because the effect runs outside React; tests mock the module.
