"use client";

import { useId, useLayoutEffect, useRef, useState } from "react";

type SkillTooltipProps = {
  label: string;
  description?: string;
};

// Pílula de competência que mostra uma explicação ao passar o mouse,
// ao focar com o teclado (Tab) ou ao tocar no celular.
export function SkillTooltip({ label, description }: SkillTooltipProps) {
  const [open, setOpen] = useState(false);
  const [shift, setShift] = useState(0);
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const id = useId();

  // Mantém o balão dentro da tela quando a pílula está perto da borda.
  useLayoutEffect(() => {
    if (!open || !tooltipRef.current) return;
    const margin = 12;
    const rect = tooltipRef.current.getBoundingClientRect();
    const baseLeft = rect.left - shift;
    const baseRight = rect.right - shift;
    let next = 0;
    if (baseLeft < margin) next = margin - baseLeft;
    else if (baseRight > window.innerWidth - margin) next = window.innerWidth - margin - baseRight;
    if (next !== shift) setShift(next);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const pillClass =
    "rounded-full border border-border bg-background px-3 py-2 text-sm text-muted-foreground";

  if (!description) {
    return <span className={pillClass}>{label}</span>;
  }

  return (
    <span
      className="relative inline-flex"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-describedby={open ? id : undefined}
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        onClick={() => setOpen((value) => !value)}
        onKeyDown={(event) => event.key === "Escape" && setOpen(false)}
        className={`${pillClass} cursor-help transition hover:border-primary hover:text-foreground focus-visible:border-primary focus-visible:text-foreground focus-visible:outline-none`}
      >
        {label}
      </button>

      <span
        ref={tooltipRef}
        id={id}
        role="tooltip"
        style={{ transform: `translateX(calc(-50% + ${shift}px))` }}
        className={`pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 w-64 max-w-[calc(100vw-1.5rem)] rounded-xl border border-border bg-background px-3.5 py-2.5 text-left text-xs leading-5 text-foreground shadow-xl transition-opacity duration-150 ${open ? "opacity-100" : "invisible opacity-0"}`}
      >
        <span className="mb-0.5 block font-semibold text-primary">{label}</span>
        {description}
      </span>
    </span>
  );
}
