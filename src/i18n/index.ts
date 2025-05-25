import translations from "./translations";

let currentLang = "en";

export const setLanguage = (lang: string) => {
  currentLang = lang;
};

export const t = (key: string): string => {
  return translations[currentLang]?.[key] || key;
};
