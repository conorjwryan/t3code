# Patchee Install Skill (generic-llm)

Use this when adding Patchee tracking to an existing git repository.

## Workflow

1. Confirm the current directory is the repository root or run commands from the git root.
2. Run `patchee init`, optionally with `--upstream <remote>` and `--branch <branch>` when the user specifies them.
3. Inspect `.patchee/manifest.json` and confirm the upstream remote, branch, and observed commits are reasonable.
4. Leave `.patchee/` as normal project files unless the user asks to ignore or keep them private.
5. Explain that Patchee does not call an AI provider; it gives agents local state and workflow commands.

## Expected files

- `.patchee/manifest.json`
- `.patchee/agent-instructions.md`
- `.patchee/skills/generic-llm-implement-change.md`
- `.patchee/skills/generic-llm-refresh-changes.md`
