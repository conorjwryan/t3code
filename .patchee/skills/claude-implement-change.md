# Patchee Implement Change Skill (claude)

Use this when implementing a new tracked customization.

## Workflow

1. Read `.patchee/manifest.json` and `.patchee/agent-instructions.md`.
2. Run `patchee change status`.
3. If no active session exists, run `patchee change start <slug> --name "<name>" --intent "<intent>"`.
4. Fill or refine `.patchee/changes/<slug>/patch.md` before substantial source edits.
5. Implement the requested source change.
6. Run focused tests or checks for touched code.
7. Record test results with `patchee change note <slug> --type test --message "<result>"`.
8. Run `patchee change capture <slug>`.
9. Run `patchee validate`.
10. Run `patchee change finish <slug>`.

## Rules

- Keep one active change per session.
- Do not mix unrelated dirty files into the source implementation.
- Treat `patch.md` as the durable behavior contract.
- Treat `reference-diff.patch` as evidence, not the source of truth.
- Preserve user changes outside the active scope.
- Summarize source files changed, Patchee artifacts captured, and verification.
