# Rick and Morty Kanban

Frontend-only Kanban board (To Do, Doing, Done). Each card is assigned a Rick and Morty character from the public GraphQL API.

## Running locally

Requires Node (version in `.nvmrc`) and Bun.

    bun install
    bun run dev        # http://localhost:5180
    bun run check      # lint + types + tests

Use `bun run test`, not `bun test` (that starts Bun's own runner, not Vitest).

On WSL, keep the repo under `~/`, not `/mnt/c/`. If the Windows browser can't reach the dev server, run `bun run dev --host`.

## Decisions

See [docs/decisions](docs/decisions/) (MADR format).
