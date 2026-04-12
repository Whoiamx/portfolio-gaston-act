import type { Metadata } from "next";
import { Bebas_Neue, Poppins } from "next/font/google";
import "./globals.css";
import { copy } from "@/lib/i18n";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

export function generateMetadata(): Metadata {
  const localizedCopy = copy.es;

  return {
    title: localizedCopy.metadata.title,
    description: localizedCopy.metadata.description,
    keywords: [
      "fullstack developer",
      "creative builder",
      "frontend",
      "backend",
      "React",
      "Next.js",
      "TypeScript",
    ],
    authors: [{ name: "Gaston Timchuk Bilik" }],
    openGraph: {
      title: localizedCopy.metadata.title,
      description: localizedCopy.metadata.description,
      type: "website",
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${bebasNeue.variable} font-sans antialiased selection:bg-primary/20 selection:text-primary`}
      >
        {children}
      </body>
    </html>
  );
}
