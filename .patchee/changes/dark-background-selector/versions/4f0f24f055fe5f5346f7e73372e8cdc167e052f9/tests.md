# Tests / Checks

- TODO: Add commands or manual checks that verify this feature still works.

## 2026-05-26T10:38:59.160Z (test)

Refresh verification on 2026-05-26: bun fmt passed; bun lint passed with 9 existing warnings and 0 errors; first bun typecheck failed because the previous captured reference diff omitted apps/web/src/themeSurface.ts, then passed after restoring that file from patchee/main.
