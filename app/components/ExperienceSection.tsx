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
    <section id="experience" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
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
              Experiencia laboral
            </h2>
            <p className="mt-3 text-base text-muted-foreground lg:sticky lg:top-36">
              Mi trayectoria profesional en el desarrollo de software
            </p>
          </motion.div>

          <div className="lg:col-span-8">
            <motion.div
              className="space-y-5"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              {experiences.map((experience, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.01,
                    transition: { duration: 0.15 },
                  }}
                  className="flex flex-col sm:flex-row gap-4 sm:gap-5 p-5 sm:p-6 rounded-xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-200 group"
                >
                  <div className="flex-shrink-0">
                    <motion.div
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors duration-200"
                      whileHover={{ rotate: 5 }}
                      transition={{ duration: 0.15 }}
                    >
                      <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </motion.div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 mb-2">
                      <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                        {experience.title}
                      </h3>
                      <span className="text-sm font-medium text-primary/90 whitespace-nowrap">
                        {experience.period}
                      </span>
                    </div>
                    <p className="text-primary font-semibold text-base mb-3">
                      {experience.company}
                    </p>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
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
