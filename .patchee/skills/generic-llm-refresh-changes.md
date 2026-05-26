# Patchee Refresh Changes Skill (generic-llm)

Use this when updating existing tracked customizations to the latest upstream commit.

## Workflow

1. Read `.patchee/manifest.json`.
2. Confirm the configured upstream is the clean OSS upstream, not a customized fork branch. Prefer `upstream/main` for clean source tracking.
3. Run `patchee change outdated --json`.
4. Select one stale active change at a time unless the user explicitly asks for all changes.
5. Create a short-lived refresh branch from the clean upstream ref:

```bash
git fetch upstream
git switch -c patchee/refresh-<slug> upstream/main
```

6. Run `patchee change refresh <slug>`.
7. Read `.patchee/changes/<slug>/patch.md` as the source of truth.
8. Read the previous version's `application.md`, `reference-diff.patch`, `relevant-files.md`, and `tests.md` as implementation evidence.
9. Reapply the behavior to the current upstream checkout, adapting to upstream changes.
10. Run the listed tests/checks and any focused checks required by touched code.
11. Record conflicts, deviations, and verification results with `patchee change note`.
12. Run `patchee change capture <slug>`.
13. Run `patchee validate`.
14. Run `patchee change finish <slug>`.
15. Re-run `patchee change outdated --json` to confirm the change is current or verified.

## Rules

- Use the manifest to decide what is stale.
- Prefer a short-lived `patchee/refresh-<slug>` branch for refresh work.
- Merge or cherry-pick reviewed refresh work back into `patchee/main` when the project uses that maintained customization branch.
- Do not blindly apply an old reference diff.
- Preserve the behavior described in `patch.md` even when upstream code moved.
- Mark the change broken or unverified if it cannot be confidently refreshed.
- Leave explicit notes when upstream changes require a different implementation.
