"use client";

import { projects } from "@/lib/projects";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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
  return (
    <section
      id="projects"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-card/30"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground lg:sticky lg:top-24">
              Proyectos
            </h2>
            <p className="mt-3 text-base text-muted-foreground lg:sticky lg:top-36">
              Una selección de mis trabajos más destacados
            </p>
          </motion.div>

          <div className="lg:col-span-8">
            <motion.div
              className="grid sm:grid-cols-2 gap-5 sm:gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              {projects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  whileHover={{
                    y: -6,
                    transition: { duration: 0.2, ease: "easeOut" },
                  }}
                  className="group hover:cursor-pointer rounded-xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-200 overflow-hidden"
                >
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-103"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />

                    <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <Link
                        href={project.repoUrl}
                        className="w-9 h-9 rounded-full bg-background/95 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-150"
                        aria-label="Ver repositorio"
                        target="_blank"
                      >
                        <Github className="w-4 h-4" />
                      </Link>
                      <Link
                        href={project.liveUrl}
                        className="w-9 h-9 rounded-full bg-background/95 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors duration-150"
                        aria-label="Ver proyecto en vivo"
                        target="_blank"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-2.5 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary/90 border border-primary/15"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
