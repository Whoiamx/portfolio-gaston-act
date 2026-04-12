import type { LocalizedText } from "@/lib/i18n";

export const experiences: Array<{
  title: LocalizedText;
  company: string;
  period: LocalizedText;
  description: LocalizedText;
}> = [
  {
    title: {
      es: "Desarrollador Full Stack",
      en: "Full Stack Developer",
    },
    company: "Freelance",
    period: {
      es: "Diciembre 2025 - Actualidad",
      en: "December 2025 - Present",
    },
    description: {
      es: "Desarrollo de aplicaciones web personalizadas para clientes de distintos sectores, usando tecnologías modernas como Next.js y Node.js para mejorar presencia digital y operación.",
      en: "Custom web application development for clients across different industries, using modern technologies such as Next.js and Node.js.",
    },
  },
  {
    title: {
      es: "Analista Técnico Funcional SSR",
      en: "SSR Functional Technical Analyst",
    },
    company: "Universal Assistance",
    period: {
      es: "Noviembre 2022 - Actualidad",
      en: "November 2022 - Present",
    },
    description: {
      es: "Análisis y diseño de soluciones tecnológicas para optimizar procesos operativos, trabajando junto a desarrollo y gestión de proyectos.",
      en: "Analysis and design of technology solutions to optimize operational processes in collaboration with development and project teams.",
    },
  },
  {
    title: {
      es: "Analista QA",
      en: "QA Analyst",
    },
    company: "UPEX",
    period: {
      es: "Mayo 2022 - Noviembre 2022",
      en: "May 2022 - November 2022",
    },
    description: {
      es: "Planificación y ejecución de pruebas de calidad para productos mobile y web, asegurando entregas confiables antes del lanzamiento.",
      en: "Quality assurance planning and test execution for web and mobile products, ensuring reliable releases.",
    },
  },
];
