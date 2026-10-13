"use client";

import { motion } from "framer-motion";
import { ArrowDownRight, Code2, Gamepad2, Github, Linkedin, MonitorSmartphone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/data";

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden pt-18">
      <div className="hero-grid absolute inset-0 -z-20" />
      <div className="hero-glow absolute -right-40 top-24 -z-10 size-[34rem] rounded-full blur-3xl" />

      <div className="mx-auto grid min-h-[calc(100vh-4.5rem)] max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.08fr_.92fr] lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground shadow-sm">
            <span className="size-2 rounded-full bg-emerald-500" />
            {profile.availability}
          </div>

          <p className="eyebrow mb-5">{profile.role}</p>
          <h1 className="heading max-w-4xl">
            Transformando ideias em experiências digitais.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">
            Desenvolvedor focado em experiências interativas, combinando código, design e pensamento criativo.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <a href="#projetos">Explorar projetos <ArrowDownRight size={18} /></a>
            </Button>
            <Button asChild variant="outline">
              <a href="#sobre">Conhecer minha trajetória</a>
            </Button>
          </div>

          <div className="mt-9 flex items-center gap-3">
            <a href={profile.github} aria-label="GitHub" className="social-link"><Github size={19} /></a>
            <a href={profile.linkedin} aria-label="LinkedIn" className="social-link"><Linkedin size={19} /></a>
            <span className="ml-2 text-sm text-muted-foreground">{profile.location}</span>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15, duration: 0.7 }} className="relative">
          <div className="experience-board rounded-[2rem] border border-border bg-card p-4 shadow-2xl shadow-primary/10 sm:p-6">
            <div className="mb-5 flex items-center justify-between border-b border-border pb-4">
              <div className="flex gap-2"><span /><span /><span /></div>
              <p className="font-mono text-xs text-muted-foreground">experiencia-digital.tsx</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="feature-tile sm:col-span-2">
                <div className="icon-box"><Sparkles size={22} /></div>
                <div><span className="tile-label">Objetivo</span><p>Criar produtos que sejam simples de usar e interessantes de explorar.</p></div>
              </div>
              <div className="feature-tile">
                <div className="icon-box"><Gamepad2 size={22} /></div>
                <div><span className="tile-label">Jogos</span><p>Mecânicas, progressão e feedback.</p></div>
              </div>
              <div className="feature-tile">
                <div className="icon-box"><MonitorSmartphone size={22} /></div>
                <div><span className="tile-label">Apps e web</span><p>Interfaces responsivas e intuitivas.</p></div>
              </div>
              <div className="feature-tile sm:col-span-2">
                <div className="icon-box"><Code2 size={22} /></div>
                <div><span className="tile-label">Fundação</span><p>Código organizado, acessibilidade e atenção aos detalhes.</p></div>
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between rounded-2xl bg-muted/70 px-4 py-3 text-xs text-muted-foreground">
              <span className="font-mono">status: em constante evolução</span>
              <span className="size-2 animate-pulse rounded-full bg-emerald-500" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
