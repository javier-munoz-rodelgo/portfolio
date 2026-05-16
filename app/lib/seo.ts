import type { Locale } from "@/app/i18n/get-dictionary";

export const SITE_URL = "https://javiermunoz.dev";
export const SITE_NAME = "Javier Munoz Portfolio";

export const SUPPORTED_LOCALES: Locale[] = ["es", "en"];

export const getLocalePath = (lang: Locale, path = "") => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `/${lang}${normalizedPath === "/" ? "" : normalizedPath}`;
};

export const getAbsoluteUrl = (lang: Locale, path = "") =>
  `${SITE_URL}${getLocalePath(lang, path)}`;

export const getLanguageAlternates = (path = "") => ({
  es: `${SITE_URL}${getLocalePath("es", path)}`,
  en: `${SITE_URL}${getLocalePath("en", path)}`,
  "x-default": `${SITE_URL}/es${path.startsWith("/") ? path : path ? `/${path}` : ""}`,
});
