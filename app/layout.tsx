import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gastón Timchuk Bilik | Desarrollador Fullstack",
  description:
    "Portfolio profesional de Gastón Timchuk Bilik - Desarrollador Fullstack especializado en React, Next.js, Node.js y TypeScript. Disponible para nuevas oportunidades laborales.",
  keywords: [
    "desarrollador fullstack",
    "frontend",
    "backend",
    "React",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Gastón Timchuk Bilik" }],
  openGraph: {
    title: "Gastón Timchuk Bilik | Desarrollador Fullstack",
    description:
      "Portfolio profesional - Desarrollador Fullstack disponible para nuevas oportunidades",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${poppins.variable} font-sans antialiased selection:bg-primary/20 selection:text-primary`}
      >
        {children}
      </body>
    </html>
  );
}
