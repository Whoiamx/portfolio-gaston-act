"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getCopy } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
import { useLocale } from "@/components/locale-provider";

const navItemVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.3,
    },
  }),
};

const mobileMenuVariants = {
  hidden: { opacity: 0, y: "-0.75rem", scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.26,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
  exit: {
    opacity: 0,
    y: "-0.5rem",
    scale: 0.98,
    transition: {
      duration: 0.18,
    },
  },
};

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { locale, setLocale } = useLocale();
  const localizedCopy = getCopy(locale);

  const navLinks = [
    { href: "#projects", label: localizedCopy.nav.projects },
    { href: "#skills", label: localizedCopy.nav.technologies },
    { href: "#experience", label: localizedCopy.nav.experience },
    { href: "#contact", label: localizedCopy.nav.contact },
  ];

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="rounded-full border border-white/10 bg-white/5 px-5 backdrop-blur-xl shadow-[0_0.75rem_2.5rem_rgba(7,10,28,0.24)] sm:px-7">
          <div className="flex h-16 items-center justify-between gap-4">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              <Link href="#home" className="flex items-center gap-2">
                <span className="text-2xl font-black tracking-tight text-foreground">
                  {siteConfig.displayName}
                  <span className="text-primary">.</span>
                </span>
              </Link>
            </motion.div>

            <nav className="hidden items-center gap-1 md:flex">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  custom={i}
                  variants={navItemVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.15 }}
                >
                  <Link
                    href={link.href}
                    className="rounded-full px-3 py-2 text-sm font-semibold uppercase tracking-[0.16em] text-foreground/88 transition-colors duration-150 hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <div className="flex items-center rounded-full border border-white/10 bg-white/5 p-1">
                <button
                  type="button"
                  onClick={() => setLocale("es")}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] transition-colors ${
                    locale === "es"
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground/72 hover:text-primary"
                  }`}
                >
                  {localizedCopy.nav.langEs}
                </button>
                <button
                  type="button"
                  onClick={() => setLocale("en")}
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] transition-colors ${
                    locale === "en"
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground/72 hover:text-primary"
                  }`}
                >
                  {localizedCopy.nav.langEn}
                </button>
              </div>
            </div>

            <motion.button
              className="rounded-full border border-white/10 bg-white/10 p-2 text-muted-foreground transition-colors hover:bg-secondary/70 hover:text-foreground md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={
                mobileMenuOpen
                  ? localizedCopy.nav.closeMenu
                  : localizedCopy.nav.openMenu
              }
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="mt-3 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(37,43,72,0.92),rgba(19,24,44,0.94))] p-3 shadow-[0_1.5rem_3.5rem_rgba(4,8,24,0.38)] backdrop-blur-2xl md:hidden"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <nav className="flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.18 }}
                  >
                    <Link
                      href={link.href}
                      className="block rounded-[1.25rem] border border-transparent bg-white/[0.03] px-4 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-foreground/88 transition-colors duration-150 hover:border-white/10 hover:bg-white/[0.06] hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-4 rounded-[1.35rem] border border-white/8 bg-white/[0.035] p-3">
                <p className="mb-3 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-white/52">
                  {localizedCopy.nav.languageLabel}
                </p>
                <div className="flex items-center rounded-[1rem] border border-white/10 bg-white/[0.04] p-1">
                  <button
                    type="button"
                    onClick={() => {
                      setLocale("es");
                      setMobileMenuOpen(false);
                    }}
                    className={`flex-1 rounded-[0.8rem] px-3 py-2.5 text-center text-xs font-semibold uppercase tracking-[0.16em] transition-colors ${
                      locale === "es"
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground/72 hover:text-primary"
                    }`}
                  >
                    {localizedCopy.nav.langEs}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setLocale("en");
                      setMobileMenuOpen(false);
                    }}
                    className={`flex-1 rounded-[0.8rem] px-3 py-2.5 text-center text-xs font-semibold uppercase tracking-[0.16em] transition-colors ${
                      locale === "en"
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground/72 hover:text-primary"
                    }`}
                  >
                    {localizedCopy.nav.langEn}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
