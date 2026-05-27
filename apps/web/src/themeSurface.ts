import {
  DEFAULT_DARK_MODE_BACKGROUND,
  DEFAULT_LIGHT_MODE_BACKGROUND,
  type DarkModeBackground,
  type LightModeBackground,
} from "@t3tools/contracts/settings";

const DARK_BACKGROUND_VALUES: Record<DarkModeBackground, string | null> = {
  default: null,
  black: "#000000",
  graphite: "oklch(0.16 0 0)",
  midnight: "oklch(0.15 0.026 264)",
};

const LIGHT_BACKGROUND_VALUES: Record<LightModeBackground, string | null> = {
  default: null,
  powder: "oklch(0.97 0.028 235)",
  mint: "oklch(0.97 0.032 165)",
  peach: "oklch(0.96 0.04 55)",
  lavender: "oklch(0.96 0.034 300)",
};

const THEME_COLOR_META_NAME = "theme-color";
const DYNAMIC_THEME_COLOR_SELECTOR = `meta[name="${THEME_COLOR_META_NAME}"][data-dynamic-theme-color="true"]`;

function removeBackgroundOverrides(root: HTMLElement): void {
  root.style.removeProperty("--background");
  root.style.removeProperty("--app-chrome-background");
}

function ensureThemeColorMetaTag(): HTMLMetaElement {
  let element = document.querySelector<HTMLMetaElement>(DYNAMIC_THEME_COLOR_SELECTOR);
  if (element) {
    return element;
  }

  element = document.createElement("meta");
  element.name = THEME_COLOR_META_NAME;
  element.setAttribute("data-dynamic-theme-color", "true");
  document.head.append(element);
  return element;
}

function normalizeThemeColor(value: string | null | undefined): string | null {
  const normalizedValue = value?.trim().toLowerCase();
  if (
    !normalizedValue ||
    normalizedValue === "transparent" ||
    normalizedValue === "rgba(0, 0, 0, 0)" ||
    normalizedValue === "rgba(0 0 0 / 0)"
  ) {
    return null;
  }

  return value?.trim() ?? null;
}

function resolveBrowserChromeSurface(): HTMLElement {
  return (
    document.querySelector<HTMLElement>("main[data-slot='sidebar-inset']") ??
    document.querySelector<HTMLElement>("[data-slot='sidebar-inner']") ??
    document.body
  );
}

export function syncBrowserChromeTheme(): void {
  if (typeof document === "undefined" || typeof getComputedStyle === "undefined") return;
  const surfaceColor = normalizeThemeColor(
    getComputedStyle(resolveBrowserChromeSurface()).backgroundColor,
  );
  const fallbackColor = normalizeThemeColor(getComputedStyle(document.body).backgroundColor);
  const backgroundColor = surfaceColor ?? fallbackColor;
  if (!backgroundColor) return;

  document.documentElement.style.backgroundColor = backgroundColor;
  document.body.style.backgroundColor = backgroundColor;
  ensureThemeColorMetaTag().setAttribute("content", backgroundColor);
}

export function applyThemeBackgroundPreference(
  backgrounds: {
    darkModeBackground?: DarkModeBackground | undefined;
    lightModeBackground?: LightModeBackground | undefined;
  } = {},
  isDark = typeof document !== "undefined" && document.documentElement.classList.contains("dark"),
): void {
  if (typeof document === "undefined") {
    return;
  }

  const root = document.documentElement;
  const backgroundValue = isDark
    ? DARK_BACKGROUND_VALUES[backgrounds.darkModeBackground ?? DEFAULT_DARK_MODE_BACKGROUND]
    : LIGHT_BACKGROUND_VALUES[backgrounds.lightModeBackground ?? DEFAULT_LIGHT_MODE_BACKGROUND];
  if (!backgroundValue) {
    removeBackgroundOverrides(root);
    return;
  }

  root.style.setProperty("--background", backgroundValue);
  root.style.setProperty("--app-chrome-background", "var(--background)");
}
