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
    <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 sm:pt-32 lg:pt-36">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <motion.div
            className="flex-1 max-w-2xl text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center justify-center lg:justify-start gap-4 mb-8"
            >
              <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-base font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                <span className="text-primary">Disponible para trabajar</span>
              </span>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-muted-foreground mb-4 font-medium"
            >
              Hola, soy Gastón 👋
            </motion.p>
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 leading-tight tracking-tight"
            >
              <span className="text-primary">Desarrollador Fullstack</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-muted-foreground text-lg sm:text-xl mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Apasionado por la tecnología y la creación de experiencias web
              fluidas, modernas y atractivas.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4"
            >
              <motion.a
                href="/cvgaston.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-primary hover:cursor-pointer text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 font-semibold"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Descargar CV
                </Button>
              </motion.a>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border hover:cursor-pointer text-foreground hover:bg-secondary bg-transparent text-base px-8 py-6 font-semibold"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
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
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/20 via-primary/5 to-transparent blur-2xl" />

            <motion.div
              className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-primary/50 to-primary/20 p-1">
                <div className="w-full h-full rounded-full bg-background" />
              </div>

              <div className="absolute inset-2 rounded-full overflow-hidden">
                <Image
                  src="/nobg-gaston.png"
                  alt="Gastón - Desarrollador Fullstack"
                  fill
                  className="object-cover object-top scale-110"
                  priority
                  sizes="(max-width: 640px) 224px, (max-width: 1024px) 288px, 384px"
                />
              </div>

              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
