export type Locale = "es" | "en";

export type LocalizedText = Record<Locale, string>;

export function t(text: LocalizedText, locale: Locale) {
  return text[locale];
}

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "es" || value === "en";
}

export function resolvePreferredLocale(preferred?: string | null): Locale {
  if (isLocale(preferred)) {
    return preferred;
  }

  if (preferred?.toLowerCase().startsWith("en")) {
    return "en";
  }

  return "es";
}

export const copy = {
  es: {
    metadata: {
      title: "Gastón Timchuk Bilik | Fullstack Developer & Creative Builder",
      description:
        "Portfolio de Gastón Timchuk Bilik, fullstack developer y creative builder enfocado en productos web modernos, escalables y visualmente sólidos.",
    },
    nav: {
      projects: "Proyectos",
      technologies: "Tecnologías",
      experience: "Experiencia",
      contact: "Contacto",
      cv: "Descargar CV",
      langEs: "ES",
      langEn: "EN",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
    },
    hero: {
      name: "Gastón Timchuk Bilik",
      titleTop: "Creative Builder",
      titleBottom: "Fullstack Developer",
      subtitle:
        "Diseño y desarrollo productos web claros, rápidos y listos para uso real.",
      primaryCta: "Ver proyectos",
      tertiaryCta: "Descargar CV",
    },
    projects: {
      eyebrow: "Proyectos",
      title: "PROYECTOS",
      description:
        "Una selección de productos donde tecnología, negocio y diseño se encuentran para resolver problemas reales.",
      viewRepo: "Ver repositorio de",
      viewProject: "Ver proyecto",
    },
    technologies: {
      eyebrow: "Tecnologías",
      titleTop: "STACK",
      titleBottom: "TECNOLÓGICO",
      description:
        "Trabajo con un stack moderno para construir experiencias web escalables, mantenibles y visualmente consistentes.",
    },
    experience: {
      eyebrow: "Experiencia",
      title: "EXPERIENCIA",
      description:
        "Recorrido profesional entre desarrollo, análisis funcional y QA, con foco en producto y ejecución técnica.",
    },
    contact: {
      eyebrow: "Contacto",
      title: "HABLEMOS",
      description:
        "Si tenés una idea o una oportunidad, podemos conversar y ver cómo llevarla a algo concreto.",
      prompt: "Elegí cómo querés contactarme",
      promptBody:
        "Podés escribirme directo por email o revisar mi perfil profesional en LinkedIn.",
      emailCta: "Enviar email",
      linkedinCta: "Ver LinkedIn",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      linkedin: "LinkedIn",
      github: "GitHub",
      downloadCv: "Descargar CV",
    },
  },
  en: {
    metadata: {
      title: "Gastón Timchuk Bilik | Fullstack Developer & Creative Builder",
      description:
        "Portfolio of Gastón Timchuk Bilik, a fullstack developer and creative builder focused on modern, scalable and visually solid web products.",
    },
    nav: {
      projects: "Projects",
      technologies: "Tech Stack",
      experience: "Experience",
      contact: "Contact",
      cv: "Download CV",
      langEs: "ES",
      langEn: "EN",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    hero: {
      name: "Gastón Timchuk Bilik",
      titleTop: "Creative Builder",
      titleBottom: "Fullstack Developer",
      subtitle:
        "I design and build clear, fast web products that are ready for real use.",
      primaryCta: "View projects",
      tertiaryCta: "Download CV",
    },
    projects: {
      eyebrow: "Projects",
      title: "PROJECTS",
      description:
        "A selection of products where technology, business and design come together to solve real problems.",
      viewRepo: "View repository for",
      viewProject: "View project",
    },
    technologies: {
      eyebrow: "Technologies",
      titleTop: "TECH",
      titleBottom: "STACK",
      description:
        "I work with a modern stack to build scalable, maintainable and visually consistent web experiences.",
    },
    experience: {
      eyebrow: "Experience",
      title: "EXPERIENCE",
      description:
        "Professional path across development, functional analysis and QA, with strong product and execution focus.",
    },
    contact: {
      eyebrow: "Contact",
      title: "LETS TALK",
      description:
        "If you have an idea or an opportunity, we can talk and see how to turn it into something real.",
      prompt: "Choose how you want to reach me",
      promptBody:
        "You can email me directly or check my professional profile on LinkedIn first.",
      emailCta: "Send email",
      linkedinCta: "View LinkedIn",
    },
    footer: {
      rights: "All rights reserved.",
      linkedin: "LinkedIn",
      github: "GitHub",
      downloadCv: "Download CV",
    },
  },
} as const;

export function getCopy(locale: Locale) {
  return copy[locale];
}
