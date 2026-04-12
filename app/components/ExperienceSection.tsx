"use client";

import { experiences } from "@/lib/experience";
import { BriefcaseBusiness } from "lucide-react";
import { motion } from "framer-motion";
import { getCopy, t } from "@/lib/i18n";
import { useLocale } from "@/components/locale-provider";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.55,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export function ExperienceSection() {
  const { locale } = useLocale();
  const localizedCopy = getCopy(locale);

  return (
    <section
      id="experience"
      className="section-anchor px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.32em] text-primary">
              {localizedCopy.experience.eyebrow}
            </p>
            <h2 className="font-display text-[clamp(3.5rem,8vw,6rem)] leading-[0.9] text-white">
              {localizedCopy.experience.title}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {localizedCopy.experience.description}
            </p>
          </motion.div>
        </div>

        <motion.div
          className="space-y-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
        >
          {experiences.map((experience, index) => (
            <motion.article
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.01,
                transition: { duration: 0.15 },
              }}
              className="group rounded-[2rem] border border-white/10 bg-card/70 p-6 backdrop-blur-xl transition-all duration-200 hover:border-primary/20"
            >
              <div className="flex flex-col gap-5">
                <div className="flex w-full gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <BriefcaseBusiness className="h-5 w-5" />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-white">
                          {t(experience.title, locale)}
                        </h3>
                        <p className="mt-1 text-base font-semibold text-primary">
                          {experience.company}
                        </p>
                      </div>
                      <span className="w-fit rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-foreground/84 md:ml-auto">
                        {t(experience.period, locale)}
                      </span>
                    </div>
                    <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                      {t(experience.description, locale)}
                    </p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
