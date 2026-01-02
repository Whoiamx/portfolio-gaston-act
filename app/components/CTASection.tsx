import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

export function CTASection() {
  return (
    <section
      id="contact"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p className="text-muted-foreground text-lg sm:text-xl mb-6">
          ¿Tenes un proyecto en mente?
        </p>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
          Hablemos
        </h2>
        <p className="text-muted-foreground text-lg sm:text-xl mb-10 max-w-xl mx-auto">
          Estoy disponible para nuevos proyectos y colaboraciones.
        </p>
        <Button
          size="lg"
          className="bg-primary hover:cursor-pointer text-primary-foreground hover:bg-primary/90 text-base sm:text-lg px-8 py-6 font-semibold"
        >
          <Mail className="w-5 h-5 mr-2" />
          Contactame
        </Button>
      </div>
    </section>
  );
}
