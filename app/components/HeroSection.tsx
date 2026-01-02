"use client";

import { Button } from "@/components/ui/button";
import { Download, Linkedin } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 sm:pt-32 lg:pt-36">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="flex-1 max-w-2xl text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8">
              <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-base font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                <span className="text-primary">Disponible para trabajar</span>
              </span>
            </div>

            <p className="text-lg sm:text-xl text-muted-foreground mb-4 font-medium">
              Hola, soy Gastón 👋
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 leading-tight tracking-tight">
              <span className="text-primary">Desarrollador Fullstack</span>
            </h1>

            <p className="text-muted-foreground text-lg sm:text-xl mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Apasionado por la tecnología y la creación de experiencias web
              fluidas, modernas y atractivas.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <Button
                size="lg"
                className="bg-primary hover:cursor-pointer text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 font-semibold"
              >
                <Download className="w-5 h-5 mr-2" />
                Descargar CV
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:cursor-pointer text-foreground hover:bg-secondary bg-transparent text-base px-8 py-6 font-semibold"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                LinkedIn
              </Button>
            </div>
          </div>

          <div className="shrink-0 relative order-first lg:order-last">
            {/* Círculo decorativo de fondo */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/20 via-primary/5 to-transparent blur-2xl" />

            {/* Contenedor de imagen circular */}
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
              {/* Borde con gradiente */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-primary/50 to-primary/20 p-1">
                <div className="w-full h-full rounded-full bg-background" />
              </div>

              {/* Imagen */}
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

              {/* Efecto de brillo sutil */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
