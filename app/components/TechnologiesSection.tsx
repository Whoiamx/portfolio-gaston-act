"use client";

import { technologyGroups, technologyHighlights } from "@/lib/technologies";
import { Bolt, BriefcaseBusiness, Layers3 } from "lucide-react";
import { motion } from "framer-motion";
import { getCopy, t } from "@/lib/i18n";
import { useLocale } from "@/components/locale-provider";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.96, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const stackCardVariants = {
  hidden: { opacity: 0, x: 72 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function TechnologiesSection() {
  const { locale } = useLocale();
  const localizedCopy = getCopy(locale);
  const highlightIcons = [Bolt, Layers3, BriefcaseBusiness];

  return (
    <section
      id="skills"
      className="section-anchor px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="mb-3 text-sm font-semibold uppercase tracking-[0.32em] text-primary"
          >
            {localizedCopy.technologies.eyebrow}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="font-display text-[clamp(3.6rem,8vw,6.3rem)] leading-[0.9] text-white"
          >
            {localizedCopy.technologies.titleTop}
            <br />
            <span className="text-primary">
              {localizedCopy.technologies.titleBottom}
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.45, delay: 0.05, ease: "easeOut" }}
            className="mt-6 max-w-xl text-xl leading-relaxed text-muted-foreground"
          >
            {localizedCopy.technologies.description}
          </motion.p>
          <motion.div
            className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
          >
            {technologyHighlights.map((highlight, index) => {
              const Icon = highlightIcons[index];

              return (
                <motion.div
                  key={highlight.title.es}
                  variants={itemVariants}
                  className="rounded-[1.6rem] border border-white/10 bg-white/5 p-4 backdrop-blur"
                >
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {t(highlight.title, locale)}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {t(highlight.description, locale)}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
        >
          {technologyGroups.map((group) => (
            <motion.div
              key={group.title.es}
              variants={stackCardVariants}
              whileHover={{
                y: -4,
                transition: { duration: 0.2 },
              }}
              className="rounded-[2rem] border border-white/10 bg-card/80 p-7 backdrop-blur-xl"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-primary">
                {t(group.title, locale)}
              </p>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
                {t(group.description, locale)}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={`${group.title.es}-${item}`}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-white/92"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
