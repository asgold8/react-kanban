---
status: accepted
date: 2026-11-20
decision-makers: Alex
---

# Record architecture decisions with MADR

## Context and Problem Statement

The interview starts with a review of the component structure and the choices made. The rationale and the rejected alternatives need to live in the repo, not only in my head.

## Considered Options

* MADR 4 records in `docs/decisions/`
* A "Decisions" section in the README only
* No written record

## Decision Outcome

Chosen option: "MADR 4 records in `docs/decisions/`", because it captures options and consequences in a standard format, and one file per decision keeps each change small. The README links to the folder.

### Consequences

* Good, because rejected alternatives are explicit and easy to discuss.
* Good, because a decision made while pairing (e.g. persistence) can supersede an existing record.
* Bad, because a dozen short files is more ceremony than a small app usually carries.
