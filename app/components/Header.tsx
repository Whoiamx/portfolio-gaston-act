"use client";

import Link from "next/link";
import { Menu, X, Linkedin, Github } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-base">
                G
              </span>
            </div>
            <span className="font-semibold text-foreground text-base sm:text-lg">
              Gastón Timchuk Bilik
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            <Link
              href="#experience"
              className="px-4 py-2 text-base font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Experiencia
            </Link>
            <Link
              href="#projects"
              className="px-4 py-2 text-base font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Proyectos
            </Link>
            <Link
              href="#contact"
              className="px-4 py-2 text-base font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              Contacto
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-5">
            <span className="flex items-center gap-2 text-base font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
              <span className="text-primary">Disponible</span>
            </span>
            <div className="flex items-center gap-3">
              <Link
                href="https://www.linkedin.com/in/gastontimchuk"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://github.com/Whoiamx"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <button
            className="md:hidden p-2 text-muted-foreground hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-border">
            <nav className="flex flex-col gap-2">
              <Link
                href="#experience"
                className="px-4 py-3 text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Experiencia
              </Link>
              <Link
                href="#projects"
                className="px-4 py-3 text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Proyectos
              </Link>
              <Link
                href="#contact"
                className="px-4 py-3 text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contacto
              </Link>
            </nav>
            <div className="mt-6 px-4 flex items-center gap-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
