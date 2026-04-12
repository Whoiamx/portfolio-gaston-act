"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getCopy, resolvePreferredLocale, type Locale } from "@/lib/i18n";

const LOCALE_STORAGE_KEY = "preferred-locale";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function updateDocumentMetadata(locale: Locale) {
  const localizedCopy = getCopy(locale);

  document.documentElement.lang = locale;
  document.title = localizedCopy.metadata.title;

  const description = document.querySelector('meta[name="description"]');
  description?.setAttribute("content", localizedCopy.metadata.description);
}

function getInitialLocale(): Locale {
  if (typeof window === "undefined") {
    return "es";
  }

  const savedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY);

  if (savedLocale) {
    return resolvePreferredLocale(savedLocale);
  }

  return resolvePreferredLocale(window.navigator.language);
}

export function LocaleProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  useEffect(() => {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    updateDocumentMetadata(locale);
  }, [locale]);

  const value = useMemo(
    () => ({
      locale,
      setLocale: setLocaleState,
    }),
    [locale],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }

  return context;
}
