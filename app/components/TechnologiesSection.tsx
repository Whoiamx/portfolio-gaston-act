import { technologies } from "@/lib/technologies";

export function TechnologiesSection() {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-y border-border">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-center text-lg sm:text-xl font-medium text-muted-foreground mb-10">
          Tecnologías que utilizo
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-card border border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
            >
              <span className="text-xl sm:text-2xl">{tech.icon}</span>
              <span className="text-base font-medium text-foreground">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
