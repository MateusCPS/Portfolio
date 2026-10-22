import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.mateuscosta.site"),
  title: {
    default: "Mateus Costa — Jogos, aplicativos e experiências web",
    template: "%s | Mateus Costa",
  },
  description:
    "Portfólio de Mateus Costa, desenvolvedor de jogos, aplicativos e aplicações web. Conheça minha trajetória, meus projetos e entre em contato.",
  keywords: ["Mateus Costa", "desenvolvedor de jogos", "desenvolvedor web", "Unity", "aplicativos", "Next.js", "portfólio"],
  authors: [{ name: "Mateus Costa", url: "https://www.mateuscosta.site" }],
  openGraph: {
    title: "Mateus Costa — Jogos, aplicativos e experiências web",
    description:
      "Desenvolvedor de jogos e aplicações web. Conheça minha trajetória, meus projetos e entre em contato.",
    url: "https://www.mateuscosta.site",
    siteName: "Mateus Costa",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mateus Costa — Jogos, aplicativos e experiências web",
    description: "Desenvolvedor de jogos e aplicações web. Conheça minha trajetória e meus projetos.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
