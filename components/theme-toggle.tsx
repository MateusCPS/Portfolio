"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDarkTheme = resolvedTheme === "dark";
  const label = isDarkTheme ? "Ativar tema claro" : "Ativar tema escuro";

  return (
    <Button
      aria-label={label}
      title={label}
      size="icon"
      variant="ghost"
      onClick={() => setTheme(isDarkTheme ? "light" : "dark")}
    >
      {mounted && isDarkTheme ? <Sun size={18} /> : <Moon size={18} />}
    </Button>
  );
}
