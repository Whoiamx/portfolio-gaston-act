import { projects } from "@/lib/projects";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-card/50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground lg:sticky lg:top-28">
              Proyectos
            </h2>
            <p className="mt-4 text-lg text-muted-foreground lg:sticky lg:top-40">
              Una selección de mis trabajos más destacados
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group hover:cursor-pointer rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 overflow-hidden"
                >
                  <div className="relative h-48 sm:h-56 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="absolute top-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Link
                        href={project.repoUrl}
                        className="w-10 h-10 rounded-full bg-background/90 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label="Ver repositorio"
                        target="_blank"
                      >
                        <Github className="w-5 h-5" />
                      </Link>
                      <Link
                        href={project.liveUrl}
                        className="w-10 h-10 rounded-full bg-background/90 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label="Ver proyecto en vivo"
                        target="_blank"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-base text-muted-foreground mb-5 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 text-sm font-medium rounded-lg bg-primary/10 text-primary border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
