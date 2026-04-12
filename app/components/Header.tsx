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
  hidden: { opacity: 0, height: 0 },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.3,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
  exit: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.2,
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
      <div className="mx-auto max-w-7xl rounded-full border border-white/10 bg-white/5 px-5 backdrop-blur-xl shadow-[0_0.75rem_2.5rem_rgba(7,10,28,0.24)] sm:px-7">
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

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="overflow-hidden border-t border-white/10 py-4 md:hidden"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <nav className="flex flex-col gap-1 px-1 pb-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      className="block rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-foreground/88 transition-colors duration-150 hover:bg-white/5 hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-4 flex flex-col gap-3 px-3">
                <div className="flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-1">
                  <button
                    type="button"
                    onClick={() => setLocale("es")}
                    className={`flex-1 rounded-xl px-3 py-2 text-center text-xs font-semibold uppercase tracking-[0.16em] ${
                      locale === "es"
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground/72"
                    }`}
                  >
                    {localizedCopy.nav.langEs}
                  </button>
                  <button
                    type="button"
                    onClick={() => setLocale("en")}
                    className={`flex-1 rounded-xl px-3 py-2 text-center text-xs font-semibold uppercase tracking-[0.16em] ${
                      locale === "en"
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground/72"
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
