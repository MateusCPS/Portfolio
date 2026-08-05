"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  // O servidor e a primeira renderização do navegador
  // recebem exatamente o mesmo conteúdo.
  if (!mounted) {
    return (
      <Button
        type="button"
        variant="ghost"
        size="icon"
        aria-label="Alternar tema"
        title="Alternar tema"
      >
        <span className="h-5 w-5" aria-hidden="true" />
      </Button>
    );
  }

  const isDark = resolvedTheme === "dark";
  const accessibleLabel = isDark
    ? "Ativar tema claro"
    : "Ativar tema escuro";

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-label={accessibleLabel}
      title={accessibleLabel}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? (
        <Sun className="h-5 w-5" aria-hidden="true" />
      ) : (
        <Moon className="h-5 w-5" aria-hidden="true" />
      )}
    </Button>
  );
}