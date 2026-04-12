"use client";

import { Button } from "@/components/ui/button";
import { Code2, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { getCopy } from "@/lib/i18n";
import { getMailtoHref, siteConfig } from "@/lib/site";
import { useLocale } from "@/components/locale-provider";

export function CTASection() {
  const { locale } = useLocale();
  const localizedCopy = getCopy(locale);
  const mailtoHref = getMailtoHref(locale);

  return (
    <section
      id="contact"
      className="section-anchor relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-primary/4 to-transparent" />

      <motion.div
        className="relative z-10 mx-auto max-w-7xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.p
          className="mb-3 text-center text-sm font-semibold uppercase tracking-[0.32em] text-primary"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {localizedCopy.contact.eyebrow}
        </motion.p>
        <motion.h2
          className="font-display text-center text-[clamp(4rem,10vw,7rem)] leading-[0.9] text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          {localizedCopy.contact.title}
        </motion.h2>
        <motion.p
          className="mx-auto mb-10 mt-5 max-w-2xl text-center text-lg text-muted-foreground sm:text-xl"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          {localizedCopy.contact.description}
        </motion.p>
        <motion.div
          className="mx-auto grid max-w-4xl items-center gap-8 rounded-[2.25rem] border border-white/10 bg-card/80 px-6 py-8 backdrop-blur-xl sm:px-8 md:grid-cols-[1.15fr_auto]"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.25 }}
          whileHover={{ scale: 1.01, y: -2 }}
        >
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary/90">
              {localizedCopy.contact.prompt}
            </p>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
              {localizedCopy.contact.promptBody}
            </p>
            <div className="mt-6 flex w-full flex-col justify-center gap-4 sm:max-w-[28rem] sm:flex-row md:justify-start">
              <Button
                asChild
                size="lg"
                className="h-[3.35rem] w-full rounded-full bg-primary px-8 text-sm font-bold uppercase tracking-[0.12em] text-primary-foreground shadow-[0_0.875rem_1.875rem_rgba(22,229,255,0.22)] hover:bg-primary/90 sm:flex-1"
              >
                <a href={mailtoHref}>
                  <Mail className="mr-2 h-4 w-4" />
                  {localizedCopy.contact.emailCta}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-[3.35rem] w-full rounded-full border-white/10 bg-white/5 px-8 text-sm font-bold uppercase tracking-[0.12em] text-foreground hover:border-primary/35 hover:bg-white/10 sm:flex-1"
              >
                <Link
                  href={siteConfig.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  {localizedCopy.contact.linkedinCta}
                </Link>
              </Button>
            </div>
          </div>

          <div className="hidden justify-center md:flex">
            <div className="flex h-36 w-36 items-center justify-center rounded-full border border-white/8 bg-white/4">
              <Code2 className="h-20 w-20 text-white/10" strokeWidth={1.2} />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
