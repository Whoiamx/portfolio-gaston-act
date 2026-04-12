import type { LocalizedText } from "@/lib/i18n";

export const technologyGroups: Array<{
  title: LocalizedText;
  description: LocalizedText;
  items: string[];
}> = [
  {
    title: {
      es: "Frontend",
      en: "Frontend",
    },
    description: {
      es: "Interfaces rápidas, responsive y pensadas para conversión.",
      en: "Fast, responsive interfaces designed for clarity and conversion.",
    },
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: {
      es: "Backend",
      en: "Backend",
    },
    description: {
      es: "Arquitectura de producto, APIs y persistencia para apps reales.",
      en: "Product architecture, APIs and persistence for real-world apps.",
    },
    items: [
      "Node.js",
      "NestJS",
      "Express.js",
      "Java",
      "Python",
      "PostgreSQL",
      "MongoDB",
      "Prisma",
    ],
  },
  {
    title: {
      es: "Integraciones, IA y herramientas",
      en: "Integrations, AI and tools",
    },
    description: {
      es: "Integración de pagos, modelos de IA y herramientas clave para productos listos para producción.",
      en: "Integration of payments, AI models and key tools for production-ready products.",
    },
    items: [
      "Mercado Pago",
      "OpenAI API",
      "Gemini API",
      "Figma",
      "Git",
      "Vercel",
      "Claude Code",
      "Cursor",
    ],
  },
];

export const technologyHighlights: Array<{
  title: LocalizedText;
  description: LocalizedText;
}> = [
  {
    title: {
      es: "Rápido",
      en: "Fast",
    },
    description: {
      es: "Optimización de UX, performance y tiempos de entrega.",
      en: "Strong UX, performance and faster delivery cycles.",
    },
  },
  {
    title: {
      es: "Escalable",
      en: "Scalable",
    },
    description: {
      es: "Base sólida para productos que crecen con el negocio.",
      en: "Solid foundations for products that grow with the business.",
    },
  },
  {
    title: {
      es: "Orientado a negocio",
      en: "Business-driven",
    },
    description: {
      es: "Soluciones pensadas para resolver procesos reales.",
      en: "Solutions designed to solve real operational problems.",
    },
  },
];
