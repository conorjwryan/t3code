# Dark Background Selector

## Intent

Allow users to configure the dark-mode application background from General settings so the app can use a true black background instead of only the built-in dark neutral surface.

## Behavior Contract

- General settings includes a dark-mode background selector near the existing Theme control.
- The selector is persisted as a client-only setting and survives reloads in browser and desktop contexts.
- The configured background only affects the application when the resolved theme is dark.
- Light mode and system-light mode keep the existing light background behavior.
- Resetting the individual selector or restoring all settings returns the dark background to the default surface.
- The selected background updates app surfaces and browser chrome theme color without requiring a reload.

## Implementation Notes

- Store the preference in `ClientSettingsSchema` so existing client settings persistence handles browser localStorage and desktop settings files.
- Apply the selected value in the theme hook because it already owns DOM theme synchronization.
- Use existing settings layout and shadcn/select components for a compact, predictable control.

## Verification

- Run `bun fmt`.
- Run `bun lint`.
- Run `bun typecheck`.
