# Patchee Refresh Changes Skill (codex)

Use this when updating existing tracked customizations to the latest upstream commit.

## Workflow

1. Read `.patchee/manifest.json`.
2. Run `patchee change outdated --json`.
3. Select one stale active change at a time unless the user explicitly asks for all changes.
4. Run `patchee change refresh <slug>`.
5. Read `.patchee/changes/<slug>/patch.md` as the source of truth.
6. Read the previous version's `application.md`, `reference-diff.patch`, `relevant-files.md`, and `tests.md` as implementation evidence.
7. Reapply the behavior to the current upstream checkout, adapting to upstream changes.
8. Run the listed tests/checks and any focused checks required by touched code.
9. Record conflicts, deviations, and verification results with `patchee change note`.
10. Run `patchee change capture <slug>`.
11. Run `patchee validate`.
12. Run `patchee change finish <slug>`.
13. Re-run `patchee change outdated --json` to confirm the change is current or verified.

## Rules

- Use the manifest to decide what is stale.
- Do not blindly apply an old reference diff.
- Preserve the behavior described in `patch.md` even when upstream code moved.
- Mark the change broken or unverified if it cannot be confidently refreshed.
- Leave explicit notes when upstream changes require a different implementation.
