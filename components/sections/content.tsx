"use client";

import Image from "next/image";
import { ArrowUpRight, Github, Mail, Plus, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/reveal";
import { journey, principles, profile, projects, skillGroups, specialties } from "@/lib/data";
import { Linkedin } from "lucide-react";

function SectionHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="eyebrow mb-4">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {description && <p className="mt-5 text-lg leading-8 text-muted-foreground">{description}</p>}
    </div>
  );
}

export function ContentSections() {
  return (
    <>
      <section id="sobre" className="section scroll-mt-20">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="eyebrow mb-4">Sobre mim</p>
              <h2 className="section-title">Criatividade, lógica e experiência trabalhando juntas.</h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-muted-foreground">
              <p>
                Sou um desenvolvedor em evolução contínua, interessado especialmente em jogos, aplicativos e experiências web interativas. Aprendo construindo: cada projeto é uma oportunidade de explorar novas tecnologias, resolver problemas e transformar uma ideia em algo que as pessoas realmente possam usar.
              </p>
              <p>
                Meu trabalho combina desenvolvimento e visão de produto. Não penso apenas no código, mas também na usabilidade e na forma como cada decisão afeta quem está usando a aplicação.
              </p>
              <p>
                Tenho interesse no desenvolvimento de jogos de entretenimento que vão além da diversão, utilizando mecânicas, narrativas e dinâmicas de jogo para transmitir mensagens, provocar reflexões e criar experiências marcantes. Gosto de explorar como a interação do jogador com o jogo pode dar significado à história e às ideias que ele busca comunicar, unindo criatividade, tecnologia e design.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {principles.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.08}>
              <article className="h-full rounded-3xl border border-border bg-card p-7 shadow-sm">
                <item.icon className="mb-6 text-primary" size={26} />
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="especialidades" className="border-y border-border bg-muted/35 scroll-mt-20">
        <div className="section">
          <Reveal><SectionHeader eyebrow="O que eu desenvolvo" title="Experiências digitais de ponta a ponta." description="Da primeira ideia à interface final, busco equilibrar lógica, design, desempenho e facilidade de manutenção." /></Reveal>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {specialties.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="specialty-card group h-full rounded-3xl border border-border bg-background p-7">
                  <div className="icon-box mb-6"><item.icon size={24} /></div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 leading-7 text-muted-foreground">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <Reveal><SectionHeader eyebrow="Conhecimentos" title="Tecnologias e competências que sustentam meus projetos." /></Reveal>
        <div className="grid gap-5 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.06}>
              <article className="rounded-3xl border border-border bg-card p-7">
                <div className="mb-6 flex items-center gap-3"><div className="icon-box"><group.icon size={22} /></div><h3 className="text-xl font-semibold">{group.title}</h3></div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => <span key={skill} className="rounded-full border border-border bg-background px-3 py-2 text-sm text-muted-foreground">{skill}</span>)}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="trajetoria" className="border-y border-border bg-muted/35 scroll-mt-20">
        <div className="section">
          <Reveal><SectionHeader eyebrow="Minha trajetória" title="Uma evolução construída através da prática." description="Minha história profissional ainda está sendo escrita, mas já possui uma direção clara: criar produtos digitais melhores a cada novo desafio." /></Reveal>
          <div className="relative ml-4 border-l border-border pl-8 md:ml-8 md:pl-12">
            {journey.map((item, index) => (
              <Reveal key={item.number} delay={index * 0.06}>
                <article className="relative mb-12 last:mb-0">
                  <span className="absolute -left-[3.15rem] grid size-9 place-items-center rounded-full border border-primary bg-background font-mono text-xs text-primary md:-left-[4.15rem]">{item.number}</span>
                  <h3 className="text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">{item.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="projetos" className="section scroll-mt-20">
        <Reveal><SectionHeader eyebrow="Portfólio" title="Projetos desenvolvidos" description="Esta seção serve para demonstrar minhas habilidades com os jogos que eu desempenhei como programador" /></Reveal>
        {projects.length === 0 ? (
          <Reveal>
            <div className="project-empty rounded-[2rem] border border-dashed border-border p-8 text-center sm:p-14">
              <div className="mx-auto grid size-16 place-items-center rounded-2xl bg-primary text-primary-foreground shadow-lg shadow-primary/20"><Plus size={28} /></div>
              <h3 className="mt-6 text-2xl font-semibold">Projetos</h3>
              <p className="mx-auto mt-3 max-w-xl leading-7 text-muted-foreground">
                A estrutura já suporta título, descrição, categoria, tecnologias, imagem, link do projeto e repositório. O README possui um exemplo pronto para copiar.
              </p>
              <div className="mt-7 inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 font-mono text-sm text-muted-foreground">lib/data.ts → projects</div>
            </div>
          </Reveal>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="overflow-hidden rounded-3xl border border-border bg-card">
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                <Image
                  src={project.image}
                  alt="Foto dos jogos"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
                <div className="p-6"><p className="eyebrow mb-3">{project.category}</p><h3 className="text-xl font-semibold">{project.title}</h3><p className="mt-3 leading-7 text-muted-foreground">{project.description}</p><Button asChild variant="outline"><a href={project.liveUrl}> Ver Jogo <ArrowUpRight size={16} /></a></Button><Button asChild variant="outline"><a href={project.repositoryUrl}> Ver Repositório <ArrowUpRight size={16} /></a></Button><div className="mt-5 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="rounded-full bg-muted px-3 py-1 text-xs">{tag}</span>)}</div></div>
              </article>
            ))}
          </div>
        )}
      </section>

      <section id="contato" className="section scroll-mt-20 pt-4">
        <Reveal>
          <div className="contact-panel relative overflow-hidden rounded-[2.5rem] border border-border p-8 sm:p-12 lg:p-16">
            <div className="relative z-10 max-w-3xl">
              <p className="eyebrow mb-4">Vamos criar algo</p>
              <h2 className="section-title">Tem uma ideia para jogo, aplicativo ou produto web?</h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">Estou aberto a projetos, oportunidades de aprendizado e colaborações que envolvam tecnologia, criatividade e experiências interativas.</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild><a href={`mailto:${profile.email}`}><Mail size={18} /> Enviar um e-mail</a></Button>
                <Button asChild variant="outline"><a href={profile.github}><Github size={18} /> Ver GitHub <ArrowUpRight size={16} /></a></Button>
                <Button asChild variant="outline"><a href={profile.linkedin}><Linkedin size={18} /> Ver Linkedin <ArrowUpRight size={16} /></a></Button>
              </div>
            </div>
            <Rocket className="absolute -bottom-16 -right-12 size-72 rotate-[-15deg] text-primary opacity-[0.07]" />
          </div>
        </Reveal>
      </section>
    </>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>© {new Date().getFullYear()} {profile.name}. Desenvolvido com Next.js e atenção aos detalhes.</p>
        <a href="#inicio" className="transition hover:text-foreground">Voltar ao início ↑</a>
      </div>
    </footer>
  );
}
