# Patchee Implement Change Skill (claude)

Use this when implementing a new tracked customization.

## Workflow

1. Read `.patchee/manifest.json` and `.patchee/agent-instructions.md`.
2. Run `patchee change status`.
3. Check the current branch. Prefer starting from the maintained customized branch, commonly `patchee/main`, unless the user tells you otherwise.
4. Before source edits, create or switch to a short-lived work branch:

```bash
git switch patchee/main
git switch -c patchee/<slug>
```

5. If no active session exists, run `patchee change start <slug> --name "<name>" --intent "<intent>"`.
6. Fill or refine `.patchee/changes/<slug>/patch.md` before substantial source edits.
7. Implement the requested source change.
8. Run focused tests or checks for touched code.
9. Record test results with `patchee change note <slug> --type test --message "<result>"`.
10. Run `patchee change capture <slug>`.
11. Run `patchee validate`.
12. Run `patchee change finish <slug>`.

## Rules

- Keep one active change per session.
- Prefer one git branch per tracked change.
- Do not mix unrelated dirty files into the source implementation.
- Treat `patch.md` as the durable behavior contract.
- Treat `reference-diff.patch` as evidence, not the source of truth.
- Preserve user changes outside the active scope.
- Summarize source files changed, Patchee artifacts captured, and verification.
