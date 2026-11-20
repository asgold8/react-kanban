---
status: accepted
date: 2026-11-20
decision-makers: Alex
---

# Use dnd-kit (core + sortable) for drag and drop

## Context and Problem Statement

Cards move between three columns and reorder within a column. Keyboard users should be able to move cards too.

## Considered Options

* `@dnd-kit/core` + `@dnd-kit/sortable`
* `@dnd-kit/react` (newer API, pre-1.0)
* Pragmatic Drag and Drop (Atlassian)
* react-beautiful-dnd

## Decision Outcome

Chosen option: "`@dnd-kit/core` + `@dnd-kit/sortable`", because it is stable, has a keyboard sensor, and has many multi-column examples. The newer API is still 0.x. Pragmatic is smaller but leaves all animation to the app. react-beautiful-dnd is deprecated.

### Consequences

* Good, because sorting animations and keyboard support come built in.
* Bad, because cross-column moves need custom `onDragOver` handling and a `DragOverlay`.
* Bad, because the classic packages may eventually be superseded by `@dnd-kit/react`.
