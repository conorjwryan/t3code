# .patchee

This directory stores agent-readable customization state for this upstream repository.

Use `manifest.json` as the coordination index, `changes/<change>/patch.md` for durable change intent, and `changes/<change>/versions/<commit>/` for reference diffs and application notes.

Patchee is agent-first. Humans may review these files, but they are primarily here so Codex, Claude, or another coding agent can implement and refresh tracked customizations.

Reference diffs are evidence for AI agents. They should not be applied blindly when upstream code has changed.
