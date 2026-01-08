"use client";

import { experiences } from "@/lib/experience";
import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground lg:sticky lg:top-28">
              Experiencia laboral
            </h2>
            <p className="mt-4 text-lg text-muted-foreground lg:sticky lg:top-40">
              Mi trayectoria profesional en el desarrollo de software
            </p>
          </motion.div>

          <div className="lg:col-span-8">
            <motion.div
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                  className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-6 sm:p-8 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 group"
                >
                  <div className="flex-shrink-0">
                    <motion.div
                      className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                      whileHover={{ rotate: 10 }}
                    >
                      <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                    </motion.div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                        {experience.title}
                      </h3>
                      <span className="text-base font-medium text-primary whitespace-nowrap">
                        {experience.period}
                      </span>
                    </div>
                    <p className="text-primary/90 font-semibold text-lg mb-4">
                      {experience.company}
                    </p>
                    <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
                      {experience.description}
                    </p>
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
