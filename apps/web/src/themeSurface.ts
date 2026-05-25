import { DEFAULT_DARK_MODE_BACKGROUND, type DarkModeBackground } from "@t3tools/contracts/settings";

const DARK_BACKGROUND_VALUES: Record<DarkModeBackground, string | null> = {
  default: null,
  black: "#000000",
  graphite: "oklch(0.16 0 0)",
  midnight: "oklch(0.15 0.026 264)",
};

function removeDarkBackgroundOverrides(root: HTMLElement): void {
  root.style.removeProperty("--background");
  root.style.removeProperty("--app-chrome-background");
}

export function applyDarkModeBackgroundPreference(
  background: DarkModeBackground = DEFAULT_DARK_MODE_BACKGROUND,
  isDark = typeof document !== "undefined" && document.documentElement.classList.contains("dark"),
): void {
  if (typeof document === "undefined") {
    return;
  }

  const root = document.documentElement;
  const backgroundValue = DARK_BACKGROUND_VALUES[background];
  if (!isDark || !backgroundValue) {
    removeDarkBackgroundOverrides(root);
    return;
  }

  root.style.setProperty("--background", backgroundValue);
  root.style.setProperty("--app-chrome-background", "var(--background)");
}
