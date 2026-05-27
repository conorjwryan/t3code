# Theme Background Selector

## Intent

Allow users to configure the application background from General settings with theme-appropriate choices: dark surfaces for resolved dark mode and light pastel surfaces for resolved light mode.

## Behavior Contract

- General settings includes a background selector near the existing Theme control.
- When the resolved theme is dark, the selector is labeled as dark background and only offers dark surface choices.
- When the resolved theme is light, including system-light mode, the selector is labeled as light background and only offers light pastel choices that preserve legibility with dark text.
- Dark and light background choices are persisted separately as client-only settings and survive reloads in browser and desktop contexts.
- The configured dark background only affects the application when the resolved theme is dark.
- The configured light background only affects the application when the resolved theme is light.
- Resetting the visible selector returns that theme's background to the default surface, and restoring all settings resets both theme background preferences.
- The selected background updates app surfaces and browser chrome theme color without requiring a reload.

## Implementation Notes

- Store the preference in `ClientSettingsSchema` so existing client settings persistence handles browser localStorage and desktop settings files.
- Apply the selected value in the theme hook because it already owns DOM theme synchronization.
- Use existing settings layout and shadcn/select components for a compact, predictable control.

## Verification

- Run `bun fmt`.
- Run `bun lint`.
- Run `bun typecheck`.
