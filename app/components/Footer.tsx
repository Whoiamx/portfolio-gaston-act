"use client";

import Link from "next/link";
import { Download, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { getCopy } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
import { useLocale } from "@/components/locale-provider";

export function Footer() {
  const { locale } = useLocale();
  const localizedCopy = getCopy(locale);

  return (
    <motion.footer
      className="border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8 lg:py-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-5 md:flex-row">
          <motion.div
            className="flex items-center gap-2.5"
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <span className="text-xl font-black tracking-tight text-white">
              {siteConfig.displayName}
              <span className="text-primary">.</span>
            </span>
            <span className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {siteConfig.fullName}.{" "}
              {localizedCopy.footer.rights}
            </span>
          </motion.div>

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
                href={siteConfig.linkedinUrl}
                className="text-muted-foreground transition-colors duration-150 hover:text-primary"
                aria-label={localizedCopy.footer.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, y: -2 }}
              transition={{ duration: 0.15 }}
            >
              <Link
                href={siteConfig.githubUrl}
                className="text-muted-foreground transition-colors duration-150 hover:text-primary"
                aria-label={localizedCopy.footer.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1, y: -2 }}
              transition={{ duration: 0.15 }}
            >
              <a
                href={siteConfig.cvUrl}
                download
                className="text-muted-foreground transition-colors duration-150 hover:text-primary"
                aria-label={localizedCopy.footer.downloadCv}
              >
                <Download className="h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
}
