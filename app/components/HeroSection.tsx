"use client";

import { Button } from "@/components/ui/button";
import { Download, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export function HeroSection() {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 sm:pt-28 lg:pt-32">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <motion.div
            className="flex-1 max-w-xl text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-3 mb-6"
            >
              <span className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="text-primary">Disponible para trabajar</span>
              </span>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-muted-foreground mb-3 font-medium tracking-wide"
            >
              Hola, soy Gastón 👋
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 leading-tight tracking-tight"
            >
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                Desarrollador Fullstack
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-muted-foreground text-base sm:text-lg mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Apasionado por la tecnología y la creación de experiencias web
              fluidas, modernas y atractivas.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3"
            >
              <motion.a
                href="/cvgaston.pdf"
                download
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
              >
                <Button
                  size="lg"
                  className="bg-primary hover:cursor-pointer text-primary-foreground hover:bg-primary/90 text-sm px-6 py-5 font-semibold shadow-lg shadow-primary/20"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Descargar CV
                </Button>
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border hover:cursor-pointer text-foreground hover:bg-secondary/80 bg-transparent text-sm px-6 py-5 font-semibold hover:border-primary/40"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  <Link
                    href="https://www.linkedin.com/in/gastontimchuk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Linkedin
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="shrink-0 relative order-first lg:order-last"
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-primary/25 via-accent/10 to-transparent blur-2xl" />

            <motion.div
              className="relative w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 xl:w-80 xl:h-80"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-primary/60 to-accent/40 p-[3px]">
                <div className="w-full h-full rounded-full bg-background" />
              </div>

              <div className="absolute inset-2 rounded-full overflow-hidden">
                <Image
                  src="/nobg-gaston.png"
                  alt="Gastón - Desarrollador Fullstack"
                  fill
                  className="object-cover object-top scale-110"
                  priority
                />
              </div>

              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-background/30 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
