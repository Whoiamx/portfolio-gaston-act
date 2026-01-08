"use client";

import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section
      id="contact"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <motion.div
        className="relative z-10 max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.p
          className="text-muted-foreground text-lg sm:text-xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          ¿Tenes un proyecto en mente?
        </motion.p>
        <motion.h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hablemos
        </motion.h2>
        <motion.p
          className="text-muted-foreground text-lg sm:text-xl mb-10 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Estoy disponible para nuevos proyectos y colaboraciones.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            size="lg"
            className="bg-primary hover:cursor-pointer text-primary-foreground hover:bg-primary/90 text-base sm:text-lg px-8 py-6 font-semibold"
          >
            <Mail className="w-5 h-5 mr-2" />
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
