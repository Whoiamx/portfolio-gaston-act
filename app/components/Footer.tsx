import Link from "next/link";
import { Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">
                G
              </span>
            </div>
            <span className="text-base text-muted-foreground">
              Copyright © {new Date().getFullYear()} · Gastón Timchuk Bilik
            </span>
          </div>

          <nav className="flex items-center gap-8">
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
          </nav>

          <div className="flex items-center gap-5">
            <Link
              href="https://www.linkedin.com/in/gastontimchuk"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link
              href="https://github.com/Whoiamx"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
