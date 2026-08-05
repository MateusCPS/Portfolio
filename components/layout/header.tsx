"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navigation, profile } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => setIsOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3 font-semibold" aria-label="Voltar ao início">
          <span className="grid size-10 place-items-center rounded-xl bg-primary text-sm text-primary-foreground shadow-lg shadow-primary/20">
            {profile.shortName}
          </span>
          <span className="hidden sm:inline">{profile.name}</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
          {navigation.map((item) => (
            <a key={item.href} href={item.href} className="rounded-full px-4 py-2 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild className="hidden sm:inline-flex">
            <a href="#contato">Vamos conversar</a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {isOpen && (
        <nav className="border-t border-border bg-background px-5 py-4 lg:hidden" aria-label="Navegação mobile">
          <div className="mx-auto grid max-w-7xl gap-1">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setIsOpen(false)} className="rounded-xl px-4 py-3 text-sm text-muted-foreground hover:bg-muted hover:text-foreground">
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
