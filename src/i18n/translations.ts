import de from "./de.json";
import en from "./en.json";

export const languages = {
  de: "Deutsch",
  en: "English",
};

export const defaultLang = "de";

type NestedRecord = { [key: string]: string | NestedRecord };

function flatten(obj: NestedRecord, prefix = ""): Record<string, string> {
  const result: Record<string, string> = {};
  for (const [key, value] of Object.entries(obj)) {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (typeof value === "string") {
      result[fullKey] = value;
    } else {
      Object.assign(result, flatten(value, fullKey));
    }
  }
  return result;
}

export const translations = {
  de: flatten(de as NestedRecord),
  en: flatten(en as NestedRecord),
} as const;

export type Lang = keyof typeof languages;

export function t(lang: Lang, key: string): string {
  return translations[lang]?.[key] || translations[defaultLang]?.[key] || key;
}

export function getLocalizedPath(lang: Lang, path: string): string {
  return `/${lang}${path}`;
}
