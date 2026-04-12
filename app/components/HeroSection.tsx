"use client";

import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { getCopy } from "@/lib/i18n";
import { getMailtoHref, siteConfig } from "@/lib/site";
import { useLocale } from "@/components/locale-provider";

const imageVariants = {
  hidden: { opacity: 0, x: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const contentVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function HeroSection() {
  const { locale } = useLocale();
  const localizedCopy = getCopy(locale);
  const mailtoHref = getMailtoHref(locale);
  const titleWords = localizedCopy.hero.titleBottom.split(" ");

  const socialLinks = [
    {
      href: siteConfig.githubUrl,
      label: "GitHub",
      icon: Github,
      external: true,
    },
    {
      href: siteConfig.linkedinUrl,
      label: "LinkedIn",
      icon: Linkedin,
      external: true,
    },
    {
      href: mailtoHref,
      label: "Email",
      icon: Mail,
      external: false,
    },
  ];

  return (
    <section
      id="home"
      className="section-anchor relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid min-h-[calc(100svh-7rem)] max-w-7xl items-center gap-14 lg:grid-cols-[1fr_0.95fr] lg:gap-18">
        <motion.div
          className="relative z-10 max-w-3xl text-left"
          variants={contentVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="inline-flex items-center gap-3" variants={itemVariants}>
            <span className="h-px w-10 bg-white/28" />
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.42em] text-white sm:text-[0.8rem]">
              {localizedCopy.hero.titleTop}
            </p>
          </motion.div>

          <motion.h1
            className="mt-6 font-display leading-[0.84] tracking-[0.015em] text-primary"
            variants={itemVariants}
          >
            <span className="block text-[clamp(4.6rem,9vw,8rem)]">
              {titleWords[0]}
            </span>
            <span className="mt-1 block text-[clamp(4.6rem,9vw,8rem)]">
              {titleWords.slice(1).join(" ")}
            </span>
          </motion.h1>

          <motion.p
            className="mt-6 text-base font-medium uppercase tracking-[0.24em] text-white sm:text-[1.08rem]"
            variants={itemVariants}
          >
            {localizedCopy.hero.name}
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-4"
            variants={itemVariants}
          >
            <Button
              asChild
              size="lg"
              className="h-[3.2rem] rounded-full bg-primary px-8 text-sm font-bold uppercase tracking-[0.12em] text-primary-foreground shadow-[0_0.875rem_1.875rem_rgba(22,229,255,0.18)] hover:bg-primary/90"
            >
              <Link href="#projects">{localizedCopy.hero.primaryCta}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-[3.2rem] rounded-full border-white/10 bg-white/5 px-6 text-sm font-bold uppercase tracking-[0.12em] text-foreground hover:border-primary/35 hover:bg-white/10"
            >
              <a href={siteConfig.cvUrl} download>
                <Download className="mr-2 h-4 w-4" />
                {localizedCopy.hero.tertiaryCta}
              </a>
            </Button>
          </motion.div>

          <motion.div
            className="mt-10 flex items-center gap-3"
            variants={itemVariants}
          >
            {socialLinks.map(({ href, label, icon: Icon, external }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-white/6 text-foreground/86 transition-colors hover:border-primary/35 hover:text-primary"
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="relative z-0 mx-auto flex w-full max-w-[28rem] items-center justify-center sm:max-w-[32rem] lg:max-w-[34rem]"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="absolute h-[17rem] w-[17rem] rounded-full border border-primary/20 sm:h-[22rem] sm:w-[22rem] lg:h-[25rem] lg:w-[25rem]" />
          <div className="absolute h-[20rem] w-[20rem] rounded-full border border-white/8 sm:h-[26rem] sm:w-[26rem] lg:h-[29rem] lg:w-[29rem]" />
          <div className="absolute h-[15rem] w-[15rem] rounded-full bg-[radial-gradient(circle_at_center,rgba(96,224,255,0.3),rgba(28,69,106,0.18),rgba(8,12,30,0))] blur-2xl sm:h-[19rem] sm:w-[19rem] lg:h-[22rem] lg:w-[22rem]" />

          <div className="relative h-[15rem] w-[15rem] overflow-hidden rounded-full border border-white/10 bg-gradient-to-b from-white/10 to-white/5 shadow-[0_2.1875rem_5rem_rgba(8,12,30,0.28)] sm:h-[19rem] sm:w-[19rem] lg:h-[21rem] lg:w-[21rem]">
            <Image
              src="/nobg-gaston.png"
              alt={siteConfig.fullName}
              fill
              className="object-cover object-top scale-[1.14]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/28 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
