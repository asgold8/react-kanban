---
status: accepted
date: 2026-11-20
decision-makers: Alex
---

# Fetch characters with TanStack Query and graphql-request

## Context and Problem Statement

Every card needs a Rick and Morty character from the public GraphQL API. The app only reads from the API; it never writes. Results are paginated and filterable by name, so the picker should search, not load every character.

## Considered Options

* Apollo Client
* urql
* TanStack Query + graphql-request

## Decision Outcome

Chosen option: "TanStack Query + graphql-request", because the app sends one read-only query. Apollo's normalized cache and mutation tooling would go unused, and with board state in Zustand (ADR-0007) it would become a second store. The picker queries `characters(filter: { name })` with a short debounce.

### Consequences

* Good, because searches are cached and de-duplicated by query key.
* Good, because the fetch layer is small and easy to read in review.
* Bad, because the client is not schema-aware; response types are hand-written (codegen or gql.tada if queries grow).
* Bad, because adding mutations or subscriptions later would favor urql or Apollo.
