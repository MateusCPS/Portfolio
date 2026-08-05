import { Header } from "@/components/layout/header";
import { ContentSections, Footer } from "@/components/sections/content";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ContentSections />
      </main>
      <Footer />
    </>
  );
}
