# Patchee claude Skill

Use this project-local skill when asked to apply or reconcile Patchee features.

# Patchee Agent Instructions

1. Read `.patchee/manifest.json` before changing code.
2. Use `patchee change status` before starting implementation work.
3. Prefer branch-based work:
   - keep clean upstream separate from customized branches
   - use `patchee/main` as the maintained customized branch when the project follows that convention
   - use short-lived `patchee/<change-slug>` branches for new implementations or refreshes
4. Start or resume one tracked change at a time.
5. Treat `changes/<change>/patch.md` as the behavioral contract.
6. Treat `reference-diff.patch` as implementation evidence, not a patch to apply blindly.
7. Preserve user-facing behavior, consistency rules, and tests over exact line matching.
8. Respect files listed under "Files to avoid changing" unless the change explicitly requires otherwise.
9. Run checks listed in `tests.md` or `patch.md` when available.
10. Record conflicts, deviations, files changed, and checks before finishing a change.
11. Use `patchee change outdated --json` and the refresh skill when updating tracked changes to a newer upstream commit.


