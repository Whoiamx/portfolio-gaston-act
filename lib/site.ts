import type { Locale } from "@/lib/i18n";

export const siteConfig = {
  firstName: "Gastón",
  displayName: "GASTÓN",
  fullName: "Gastón Timchuk Bilik",
  email: "gaastontimchuk@gmail.com",
  linkedinUrl: "https://www.linkedin.com/in/gastontimchuk",
  githubUrl: "https://github.com/Whoiamx",
  cvUrl: "/cvgaston.pdf",
};

export function getMailtoHref(locale: Locale) {
  const subject =
    locale === "en" ? "Lets talk about your project" : "Hablemos de tu proyecto";

  const body =
    locale === "en"
      ? "Hi Gastón, I saw your portfolio and I would like to talk about an idea or opportunity."
      : "Hola Gastón, vi tu portfolio y me gustaría conversar sobre una idea o propuesta.";

  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
