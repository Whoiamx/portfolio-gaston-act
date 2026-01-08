"use client";

import Link from "next/link";
import { Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-border"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">
                G
              </span>
            </div>
            <span className="text-base text-muted-foreground">
              Copyright © {new Date().getFullYear()} · Gastón Timchuk Bilik
            </span>
          </motion.div>

          <motion.nav
            className="flex items-center gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="#experience"
              className="text-base text-muted-foreground hover:text-primary transition-colors"
            >
              Experiencia
            </Link>
            <Link
              href="#projects"
              className="text-base text-muted-foreground hover:text-primary transition-colors"
            >
              Proyectos
            </Link>
            <Link
              href="#contact"
              className="text-base text-muted-foreground hover:text-primary transition-colors"
            >
              Contacto
            </Link>
          </motion.nav>

          <motion.div
            className="flex items-center gap-5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <motion.div whileHover={{ scale: 1.2, rotate: 5 }}>
              <Link
                href="https://www.linkedin.com/in/gastontimchuk"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.2, rotate: -5 }}>
              <Link
                href="https://github.com/Whoiamx"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}
