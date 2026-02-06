"use client";

import { technologies } from "@/lib/technologies";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export function TechnologiesSection() {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-y border-border/60">
      <div className="max-w-5xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center text-base sm:text-lg font-medium text-muted-foreground mb-8"
        >
          Tecnologías que utilizo
        </motion.h3>
        <motion.div
          className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -3,
                transition: { duration: 0.15 },
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-card/70 backdrop-blur-sm border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
            >
              <span className="text-lg sm:text-xl">{tech.icon}</span>
              <span className="text-sm font-medium text-foreground">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
