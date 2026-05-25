# Patchee generic-llm Skill

Use this project-local skill when asked to apply or reconcile Patchee features.

# Patchee Agent Instructions

1. Read `.patchee/manifest.json` before changing code.
2. Use `patchee change status` before starting implementation work.
3. Start or resume one tracked change at a time.
4. Treat `changes/<change>/patch.md` as the behavioral contract.
5. Treat `reference-diff.patch` as implementation evidence, not a patch to apply blindly.
6. Preserve user-facing behavior, consistency rules, and tests over exact line matching.
7. Respect files listed under "Files to avoid changing" unless the change explicitly requires otherwise.
8. Run checks listed in `tests.md` or `patch.md` when available.
9. Record conflicts, deviations, files changed, and checks before finishing a change.
10. Use `patchee change outdated --json` and the refresh skill when updating tracked changes to a newer upstream commit.
