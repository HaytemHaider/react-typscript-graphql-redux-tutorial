# Mini Systems Frontend Refresher

A compact, test-driven tutorial for experienced developers refreshing React, TypeScript, routing, state management, Fluent UI, and GraphQL. The fictional **Mini Systems** administration portal provides realistic but deliberately small exercises.

## Prerequisites

- Node.js current LTS
- pnpm
- Git

## Install and begin

```bash
git clone <repository-url>
cd react-typscript-graphql-redux-tutorial
pnpm install
pnpm test:01
```

That last command is expected to fail: the focused failure is your first task. Open **[TUTORIAL.md](TUTORIAL.md)** for the requirements and repeat the red → green → refactor loop through `pnpm test:10`.

## Useful commands

```bash
pnpm dev
pnpm test
pnpm test:watch
pnpm test:01          # also test:02 through test:10
pnpm test:solutions
pnpm typecheck
pnpm lint
pnpm build
```

Each level is self-contained, so levels work in any order. Completed integrated references are mapped in `solutions/README.md`; no special Git branches are required.
