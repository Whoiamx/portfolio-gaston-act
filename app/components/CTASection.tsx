"use client";

import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section
      id="contact"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent" />

      <motion.div
        className="relative z-10 max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.p
          className="text-muted-foreground text-base sm:text-lg mb-4"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          ¿Tenes un proyecto en mente?
        </motion.p>
        <motion.h2
          className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Hablemos
          </span>
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-base sm:text-lg mb-8 max-w-md mx-auto"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          Estoy disponible para nuevos proyectos y colaboraciones.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.25 }}
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            size="lg"
            className="bg-primary hover:cursor-pointer text-primary-foreground hover:bg-primary/90 text-sm sm:text-base px-6 py-5 font-semibold shadow-lg shadow-primary/25"
          >
            <Mail className="w-4 h-4 mr-2" />
            <Link
              href="mailto:gaastontimchuk@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contactame
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
