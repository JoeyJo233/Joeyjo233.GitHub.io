import { translations, defaultLang, type Lang, languages } from "./translations";

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split("/");
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

export function t(lang: Lang, key: string): string {
  return translations[lang][key] ?? translations[defaultLang][key] ?? key;
}

export function getLocalePath(lang: Lang, path: string): string {
  return `/${lang}${path}`;
}

export function switchLangPath(currentPath: string, targetLang: Lang): string {
  const parts = currentPath.split("/");
  if (parts[1] in languages) {
    parts[1] = targetLang;
  } else {
    parts.splice(1, 0, targetLang);
  }
  return parts.join("/") || "/";
}

export { type Lang, languages, defaultLang } from "./translations";
