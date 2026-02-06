"use client";

import Link from "next/link";
import { Linkedin, Github } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <motion.footer
      className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 border-t border-border/60"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <motion.div
            className="flex items-center gap-2.5"
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">
                G
              </span>
            </div>
            <span className="text-sm text-muted-foreground">
              Copyright © {new Date().getFullYear()} · Gastón Timchuk Bilik
            </span>
          </motion.div>

          <motion.nav
            className="flex items-center gap-6"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <Link
              href="#experience"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-150"
            >
              Experiencia
            </Link>
            <Link
              href="#projects"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-150"
            >
              Proyectos
            </Link>
            <Link
              href="#contact"
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-150"
            >
              Contacto
            </Link>
          </motion.nav>

          <motion.div
            className="flex items-center gap-4"
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <motion.div
              whileHover={{ scale: 1.1, y: -2 }}
              transition={{ duration: 0.15 }}
            >
              <Link
                href="https://www.linkedin.com/in/gastontimchuk"
                className="text-muted-foreground hover:text-primary transition-colors duration-150"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, y: -2 }}
              transition={{ duration: 0.15 }}
            >
              <Link
                href="https://github.com/Whoiamx"
                className="text-muted-foreground hover:text-primary transition-colors duration-150"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}
