# Reference implementations

The repository deliberately keeps starters in `exercises/` and the completed, integrated examples in `src/`. This avoids branch switching and lets every level be inspected independently after a clone.

| Level | Reference |
| --- | --- |
| 1 | `src/features/licenses/types.ts` and status presentation in `LicenseList.tsx` |
| 2–4 | `src/features/licenses/LicenseList.tsx` |
| 5 | `src/app/router.tsx`, `src/components/AppLayout.tsx`, `LicenseDetails.tsx` |
| 6 | `src/features/licenses/LicenseList.tsx` |
| 7 | `src/app/store.ts`, `src/features/organizations/OrganizationSelector.tsx` |
| 8 | `src/features/dashboard/Dashboard.tsx` |
| 9 | `src/graphql/operations.ts`, `src/features/licenses/RemoteLicenseList.tsx` |
| 10 | `src/features/licenses/AddLicenseDialog.tsx` |

These are reference designs, not files to copy mechanically. Compare them only after making your level green; integrated components sometimes combine several levels.
