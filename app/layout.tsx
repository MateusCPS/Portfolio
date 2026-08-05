import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  metadataBase: new URL("https://seu-dominio.com"),
  title: {
    default: "Mateus Costa — Jogos, aplicativos e experiências web",
    template: "%s | Seu Nome",
  },
  description: "Portfólio de desenvolvimento de jogos, aplicativos e aplicações web com foco em UX, responsividade e código limpo.",
  keywords: ["desenvolvedor de jogos", "desenvolvedor web", "aplicativos", "Next.js", "React", "UX", "jogos web"],
  openGraph: {
    title: "Seu Nome — Jogos, aplicativos e experiências web",
    description: "Produtos digitais interativos construídos com criatividade, experiência do usuário e tecnologia.",
    type: "website",
    locale: "pt_BR",
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
