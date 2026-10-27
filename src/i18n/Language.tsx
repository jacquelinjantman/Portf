"use client";

import { createContext, useContext, useState } from "react";
import { translations, type Locale } from "@/i18n/Translations";

type Translation =
  (typeof translations)[keyof typeof translations];

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translation;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === "undefined") {
      return "es";
    }

    const saved = window.localStorage.getItem("locale") as Locale | null;

    return saved && saved in translations ? saved : "es";
  });

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem("locale", next);
  };

  return (
    <LanguageContext.Provider
      value={{
        locale,
        setLocale,
        t: translations[locale],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);

  if (!ctx) {
    throw new Error(
      "useLanguage debe usarse dentro de <LanguageProvider>"
    );
  }

  return ctx;
}