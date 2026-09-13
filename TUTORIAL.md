# Mini Systems Frontend Refresher

This repository is a hands-on refresher for experienced developers.

Each level contains a small broken or incomplete feature.

Your job is to make its tests pass.

## How the repository works

Every `exercises/level-NN` directory is a self-contained starter and test. Levels do **not** depend on earlier solutions. Run an explicit script, read the failure, change only that level's implementation, and rerun. The integrated, working application is in `src/`; consult the reference map in `solutions/README.md` only after attempting an exercise. We use directories rather than branches so all ten levels work immediately after a normal clone.

> Intentional failures are the curriculum. `pnpm test` excludes starters and checks the integrated code; `pnpm test:01` through `pnpm test:10` should begin red.

## The state placement map

```text
Local UI state                 → useState
Shareable navigation/filter   → URL/search params
Cross-application client state → Redux Toolkit
Remote/server state            → Apollo Client
```

Ask where state belongs before reaching for a library. This progression is a central lesson, not just a tooling tour.

## Working rhythm

1. Run the level command and read every test name and failure.
2. Inspect the two or three listed files and find the focused `TODO(level-NN)`.
3. Make the smallest behavioral change that turns the tests green.
4. Refactor while green, then optionally compare the integrated reference.
5. Commit your work and move to the next level.


## Level 1 — TypeScript

### Scenario

A license domain model needs safe, readable labels.

### What you'll practice

- type aliases and interfaces
- union types and exhaustive narrowing
- optional properties

### Start here

Run:

```bash
pnpm test:01
```

You should see **3 failing tests** (some tests can stop at the first missing accessible element).

### Your task

Implement `getLicenseLabel`, including status-specific text and an optional active expiry.

### Files to inspect

- `exercises/level-01/license.ts`
- `exercises/level-01/license.test.ts`


### Constraints

- Do not modify the tests.
- Do not widen the status to `string`.


### Done when

```bash
pnpm test:01
```

passes, and `pnpm typecheck` remains green.

### Think about

- How would adding a new status expose non-exhaustive code?
- When is an interface clearer than a type alias?


### Solution

Do not show the solution here. After completing the exercise, use `solutions/README.md` to find the corresponding integrated reference implementation.


## Level 2 — React Components and Props

### Scenario

The portal needs to display a small list of licenses.

### What you'll practice

- typed component props
- rendering arrays with stable keys
- conditional rendering

### Start here

Run:

```bash
pnpm test:02
```

You should see **2 failing tests** (some tests can stop at the first missing accessible element).

### Your task

Render each product, its status, and either its expiry or a friendly fallback.

### Files to inspect

- `exercises/level-02/LicenseList.tsx`
- `exercises/level-02/LicenseList.test.tsx`


### Constraints

- Do not modify the tests.
- Do not use array indexes as keys.


### Done when

```bash
pnpm test:02
```

passes, and `pnpm typecheck` remains green.

### Think about

- Which value is the stable domain identity?
- What belongs in a child row component?


### Solution

Do not show the solution here. After completing the exercise, use `solutions/README.md` to find the corresponding integrated reference implementation.


## Level 3 — Local State and Events

### Scenario

The license list is growing and users need a way to search it.

### What you'll practice

- `useState`
- controlled inputs and events
- derived state

### Start here

Run:

```bash
pnpm test:03
```

You should see **2 failing tests** (some tests can stop at the first missing accessible element).

### Your task

Add an accessible search input; filter product names case-insensitively and restore all items when cleared.

### Files to inspect

- `exercises/level-03/LicenseList.tsx`
- `exercises/level-03/LicenseList.test.tsx`


### Constraints

- Do not modify the tests.
- Do not add Redux or a search package.


### Done when

```bash
pnpm test:03
```

passes, and `pnpm typecheck` remains green.

### Think about

- Why does this state not need Redux?
- Why derive rather than store filtered results?


### Solution

Do not show the solution here. After completing the exercise, use `solutions/README.md` to find the corresponding integrated reference implementation.


## Level 4 — Fluent UI

### Scenario

Basic controls should become accessible application components.

### What you'll practice

- Fluent UI v9 `Input`, `Button`, `Badge`, and `Card`
- `makeStyles`
- Fluent design tokens

### Start here

Run:

```bash
pnpm test:04
```

You should see **3 failing tests** (some tests can stop at the first missing accessible element).

### Your task

Replace the starter markup with semantic Fluent controls and add a small token-based layout style.

### Files to inspect

- `exercises/level-04/FluentLicenseList.tsx`
- `exercises/level-04/FluentLicenseList.test.tsx`
- `src/features/licenses/LicenseList.tsx`


### Constraints

- Do not query Fluent implementation classes.
- Do not test exact CSS values.


### Done when

```bash
pnpm test:04
```

passes, and `pnpm typecheck` remains green.

### Think about

- Why are role/name queries resilient?
- What benefit do design tokens provide?


### Solution

Do not show the solution here. After completing the exercise, use `solutions/README.md` to find the corresponding integrated reference implementation.


## Level 5 — React Router

### Scenario

Users need list-to-detail navigation inside a shared layout.

### What you'll practice

- nested route configuration and `Outlet`
- `NavLink` and relative links
- route parameters with `useParams`

### Start here

Run:

```bash
pnpm test:05
```

You should see **2 failing tests** (some tests can stop at the first missing accessible element).

### Your task

Make Camera Station navigate to `/licenses/lic-123` and render a parameterized details screen.

### Files to inspect

- `exercises/level-05/App.tsx`
- `exercises/level-05/router.test.tsx`


### Constraints

- Keep the test on a memory router.
- Do not use `window.location`.


### Done when

```bash
pnpm test:05
```

passes, and `pnpm typecheck` remains green.

### Think about

- Why are relative links useful in feature routes?
- What should happen for an unknown ID?


### Solution

Do not show the solution here. After completing the exercise, use `solutions/README.md` to find the corresponding integrated reference implementation.


## Level 6 — URL State

### Scenario

Filters should survive refresh and be shareable.

### What you'll practice

- `useSearchParams`
- URL search parameters as state
- removing default/empty parameters

### Start here

Run:

```bash
pnpm test:06
```

You should see **3 failing tests** (some tests can stop at the first missing accessible element).

### Your task

Initialize both controls from the URL, update parameters on interaction, and delete empty filters.

### Files to inspect

- `exercises/level-06/Filters.tsx`
- `exercises/level-06/Filters.test.tsx`


### Constraints

- Do not duplicate parameters in local state.
- Do not add Redux.


### Done when

```bash
pnpm test:06
```

passes, and `pnpm typecheck` remains green.

### Think about

- Which UI state deserves a URL?
- Why remove defaults from a URL?


### Solution

Do not show the solution here. After completing the exercise, use `solutions/README.md` to find the corresponding integrated reference implementation.


## Level 7 — Redux Toolkit

### Scenario

The chosen organization is needed throughout the application.

### What you'll practice

- `configureStore` and `createSlice`
- typed selector and dispatch hooks
- React Redux Provider

### Start here

Run:

```bash
pnpm test:07
```

You should see **2 failing tests** (some tests can stop at the first missing accessible element).

### Your task

Create organization state with `org-1` selected, dispatch selection changes, and show only that organization's licenses.

### Files to inspect

- `exercises/level-07/OrganizationApp.tsx`
- `exercises/level-07/OrganizationApp.test.tsx`
- `src/app/store.ts`


### Constraints

- Verify behavior through the UI.
- Do not move search text into Redux.


### Done when

```bash
pnpm test:07
```

passes, and `pnpm typecheck` remains green.

### Think about

- Why is organization global while search can remain in the URL?
- What does `PayloadAction<string>` buy us?


### Solution

Do not show the solution here. After completing the exercise, use `solutions/README.md` to find the corresponding integrated reference implementation.


## Level 8 — Derived State and Selectors

### Scenario

The dashboard needs trustworthy summary statistics.

### What you'll practice

- selectors and derived state
- memoization with `createSelector`
- avoiding duplicated state

### Start here

Run:

```bash
pnpm test:08
```

You should see **1 failing test** (some tests can stop at the first missing accessible element).

### Your task

Derive total and per-status counts from license data for the selected organization.

### Files to inspect

- `exercises/level-08/Dashboard.tsx`
- `exercises/level-08/Dashboard.test.tsx`
- `src/features/dashboard/Dashboard.tsx`


### Constraints

- Do not store counts independently.
- Do not mutate license data.


### Done when

```bash
pnpm test:08
```

passes, and `pnpm typecheck` remains green.

### Think about

- When does memoization help?
- What bugs arise from duplicated totals?


### Solution

Do not show the solution here. After completing the exercise, use `solutions/README.md` to find the corresponding integrated reference implementation.


## Level 9 — GraphQL and Apollo Client

### Scenario

Licenses now arrive from a server boundary.

### What you'll practice

- GraphQL queries and variables
- Apollo `useQuery`
- loading, success, and error states

### Start here

Run:

```bash
pnpm test:09
```

You should see **3 failing tests** (some tests can stop at the first missing accessible element).

### Your task

Define the licenses query, pass `organizationId`, and render all three remote-data states.

### Files to inspect

- `exercises/level-09/RemoteLicenses.tsx`
- `exercises/level-09/RemoteLicenses.test.tsx`
- `src/graphql/operations.ts`


### Constraints

- Use `MockedProvider`; no real backend.
- Do not copy Apollo results into Redux.


### Done when

```bash
pnpm test:09
```

passes, and `pnpm typecheck` remains green.

### Think about

- Why does server state belong in Apollo?
- What user-visible loading semantics matter?


### Solution

Do not show the solution here. After completing the exercise, use `solutions/README.md` to find the corresponding integrated reference implementation.


## Level 10 — Mutation and Complete UX State

### Scenario

An administrator needs to add a license without losing context.

### What you'll practice

- GraphQL mutations
- form validation and loading state
- Fluent UI Dialog
- cache refresh and error recovery

### Start here

Run:

```bash
pnpm test:10
```

You should see **4 failing tests** (some tests can stop at the first missing accessible element).

### Your task

Open an accessible dialog, require both fields, submit values, close after success, expose errors, and refresh the displayed data.

### Files to inspect

- `exercises/level-10/AddLicense.tsx`
- `exercises/level-10/AddLicense.test.tsx`
- `src/features/licenses/AddLicenseDialog.tsx`


### Constraints

- Do not call a real server.
- Keep the dialog open on error.
- Do not enable an invalid submit.


### Done when

```bash
pnpm test:10
```

passes, and `pnpm typecheck` remains green.

### Think about

- Should fields reset after success?
- When would a cache update beat refetching?
- Where should mutation errors appear for assistive technology?


### Solution

Do not show the solution here. After completing the exercise, use `solutions/README.md` to find the corresponding integrated reference implementation.


## Running the complete application

```bash
pnpm dev
```

Visit the URL Vite prints. Exercise Dashboard, Organizations, Licenses, a license detail link, Products, and Settings. Filters are URL-backed; organization selection is Redux-backed. The GraphQL components are isolated for mocked tests because this tutorial deliberately has no backend.

## Verification and command reference

```bash
pnpm test             # integrated regression suite; starter exercises excluded
pnpm test:watch       # watch integrated tests
pnpm test:01          # replace 01 with 02…10
pnpm test:solutions   # reference checks
pnpm typecheck
pnpm lint
pnpm build
```

When checking the pristine teaching state, each explicit level command should fail for its TODO—not because of missing imports, configuration, or network access. After solving a level, only that command changes from red to green.

## Optional practice

### Accessibility audit

Use only keyboard navigation in the integrated app. Check focus order, control names, heading hierarchy, status announcements, and dialog dismissal. Add a behavioral test before repairing anything you find.

### Testing existing code

Find a boundary case not covered by a test (for example whitespace-only search). Write the failing behavioral test yourself, fix the defect, and refactor while green.

### Refactoring

Extract duplicated status presentation while preserving accessible output. This is a green → refactor exercise: existing tests are the safety net.
