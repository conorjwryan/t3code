# Application: dark-background-selector

## Version anchor
- Upstream commit: `1e63952fca6b6dd42257d541ad2def85f97814fe`
- Target upstream commit: `1e63952fca6b6dd42257d541ad2def85f97814fe`
- Base ref: `0537a061bcbfde54ef014c6fc34f281081f95aa9`
- Head ref: `(working tree)`
- Captured from working tree: `true`
- Captured at: `2026-05-27T04:07:37.811Z`
- Session kind: `refresh`

## Files changed
- `apps/desktop/src/settings/DesktopClientSettings.test.ts`
- `apps/web/src/components/settings/SettingsPanels.tsx`
- `apps/web/src/hooks/useSettings.ts`
- `apps/web/src/hooks/useTheme.ts`
- `apps/web/src/localApi.test.ts`
- `apps/web/src/routes/__root.tsx`
- `apps/web/src/themeSurface.ts`
- `packages/contracts/src/settings.test.ts`
- `packages/contracts/src/settings.ts`

## Notes
- Captured from refresh session started at 2026-05-27T04:01:52.203Z.

## 2026-05-26T10:38:59.236Z (implementation)

Refresh tested against simulated upstream commit 1e63952fca6b6dd42257d541ad2def85f97814fe. The dark background behavior reapplied cleanly and preserved the upstream Theme wording change.

## 2026-05-27T04:07:37.603Z (implementation)

Refined the background selector to be resolved-theme aware: dark mode only offers dark background choices, light/system-light offers separate pastel light choices, both persisted as client settings, and browser chrome sync now runs when background settings change.

## Conflicts encountered
- None recorded yet.

## Deviations from reference implementation
- None recorded yet.

## Tests run
- Not recorded yet.

## Result
- Not reviewed yet.
