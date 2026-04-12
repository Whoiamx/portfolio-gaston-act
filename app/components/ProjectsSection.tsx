"use client";

import { projects } from "@/lib/projects";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export function ProjectsSection() {
  const { locale } = useLocale();
  const localizedCopy = getCopy(locale);

  return (
    <section
      id="projects"
      className="section-anchor px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl lg:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.32em] text-primary">
              {localizedCopy.projects.eyebrow}
            </p>
            <h2 className="font-display text-[clamp(4rem,10vw,7rem)] leading-[0.9] text-white">
              {localizedCopy.projects.title}
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {localizedCopy.projects.description}
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
        >
          {projects.map((project) => {
            const hasRepo = Boolean(project.repoUrl?.includes("github.com"));

            return (
              <motion.article
                key={project.id}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.2, ease: "easeOut" },
                }}
                className="group overflow-hidden rounded-[2rem] border border-white/10 bg-card/80 backdrop-blur-xl shadow-[0_1.25rem_5rem_rgba(9,12,32,0.2)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent" />
                </div>

                <div className="flex flex-col gap-5 p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-primary">
                        {t(project.category, locale)}
                      </p>
                      <h3 className="text-3xl font-bold leading-none text-white">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2">
                      {hasRepo ? (
                        <Link
                          href={project.repoUrl!}
                          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground/90 transition-colors hover:border-primary/35 hover:text-primary"
                          aria-label={`${localizedCopy.projects.viewRepo} ${project.title}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4" />
                        </Link>
                      ) : null}
                      <Link
                        href={project.liveUrl}
                        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-foreground/90 transition-colors hover:border-primary/35 hover:text-primary"
                        aria-label={`${localizedCopy.projects.viewProject} ${project.title}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>

                  <p className="min-h-20 text-base leading-relaxed text-muted-foreground">
                    {t(project.description, locale)}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={`${project.id}-${tech}`}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-foreground/86"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
