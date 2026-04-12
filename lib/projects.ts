import type { LocalizedText } from "@/lib/i18n";

export const projects: Array<{
  id: number;
  category: LocalizedText;
  title: string;
  description: LocalizedText;
  technologies: string[];
  image: string;
  repoUrl?: string;
  liveUrl: string;
}> = [
  {
    id: 1,
    category: {
      es: "SaaS / Operaciones",
      en: "SaaS / Operations",
    },
    title: "Lavalo App",
    description: {
      es: "Aplicación SaaS para lavanderías enfocada en pedidos, seguimiento de prendas y administración de entregas desde una sola plataforma.",
      en: "SaaS app for laundries focused on order management, garment tracking and delivery operations in one platform.",
    },
    technologies: [
      "Next.js",
      "TypeScript",
      "NestJS",
      "Tailwind CSS",
      "Express.js",
      "PostgreSQL",
      "Node.js",
    ],
    image: "/lavaloapp.png",
    repoUrl: "https://github.com/Whoiamx",
    liveUrl: "https://lavaloapp.vercel.app/",
  },
  {
    id: 2,
    category: {
      es: "Eventos / Ticketing",
      en: "Events / Ticketing",
    },
    title: "Andino Tickets",
    description: {
      es: "Boletería online para eventos culturales con cartelera pública, reservas y pagos integrados para organizadores y asistentes.",
      en: "Online ticketing platform for cultural events with public listings, reservations and integrated payments.",
    },
    technologies: ["Next.js", "Node.js", "Mercado Pago", "PostgreSQL"],
    image: "/andino-tickets.svg",
    liveUrl: "https://andinotickets.com/",
  },
  {
    id: 3,
    category: {
      es: "IA / Empleo",
      en: "AI / Jobs",
    },
    title: "Fit 2 Work",
    description: {
      es: "Aplicación orientada a búsqueda laboral con asistencia de IA.",
      en: "Job-search product enhanced with AI assistance.",
    },
    technologies: ["Next.js", "TypeScript", "NestJS", "Tailwind CSS"],
    image: "/fit2work.png",
    repoUrl: "https://github.com/Whoiamx/fit-2-work",
    liveUrl: "https://fit-2-work.vercel.app/",
  },
  {
    id: 4,
    category: {
      es: "Productividad / Recordatorios",
      en: "Productivity / Reminders",
    },
    title: "Sup Today",
    description: {
      es: "Aplicación para gestionar recordatorios con notificaciones por WhatsApp y email.",
      en: "Reminder management app with WhatsApp and email notifications.",
    },
    technologies: [
      "Next.js",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
    ],
    image: "/suptoday.png",
    repoUrl: "https://github.com/Whoiamx/sup-today-app",
    liveUrl: "https://sup-today-app.vercel.app/",
  },
  {
    id: 5,
    category: {
      es: "Media / Entretenimiento",
      en: "Media / Entertainment",
    },
    title: "Film Zone",
    description: {
      es: "Aplicación para descubrir y guardar películas favoritas.",
      en: "Application to discover and save favorite movies.",
    },
    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/moviefinder.png",
    repoUrl: "https://github.com/Whoiamx/movies-finder",
    liveUrl: "https://movies-finder-six.vercel.app/",
  },
  {
    id: 6,
    category: {
      es: "Finanzas / Dashboard",
      en: "Finance / Dashboard",
    },
    title: "Cuánto Tengo",
    description: {
      es: "Aplicación para controlar finanzas personales con cotizaciones en tiempo real.",
      en: "Personal finance app with real-time exchange and market quotes.",
    },
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
    ],
    image: "/cuantotengo2.png",
    repoUrl: "https://github.com/Whoiamx/cuanto-tengo",
    liveUrl: "https://cuanto-tengo.vercel.app/",
  },
];
