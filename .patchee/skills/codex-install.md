# Patchee Install Skill (codex)

Use this when adding Patchee tracking to an existing git repository.

## Workflow

1. Confirm the current directory is the repository root or run commands from the git root.
2. Run `patchee init`, optionally with `--upstream <remote>` and `--branch <branch>` when the user specifies them.
3. Inspect `.patchee/manifest.json` and confirm the upstream remote, branch, and observed commits are reasonable.
4. Confirm whether the repo uses branch separation:
   - clean upstream ref, usually `upstream/main`
   - maintained customized branch, commonly `patchee/main`
   - short-lived work branches named `patchee/<change-slug>`
5. If `origin/main` is a customized fork branch, do not treat it as clean upstream. Recommend adding or using a separate `upstream` remote.
6. Leave `.patchee/` as normal project files unless the user asks to ignore or keep them private.
7. Explain that Patchee does not call an AI provider; it gives agents local state and workflow commands.

## Expected files

- `.patchee/manifest.json`
- `.patchee/agent-instructions.md`
- `.patchee/skills/codex-implement-change.md`
- `.patchee/skills/codex-refresh-changes.md`
