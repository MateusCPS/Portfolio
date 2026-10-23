"use client";

import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";

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
  const wrapperRef = useRef<HTMLSpanElement>(null);
  const lastPointer = useRef("");
  const id = useId();

  // No celular, tocar fora da pílula fecha o balão.
  useEffect(() => {
    if (!open) return;
    const close = (event: PointerEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", close);
    return () => document.removeEventListener("pointerdown", close);
  }, [open]);

  // Mantém o balão dentro da tela quando a pílula está perto da borda.
  useLayoutEffect(() => {
    if (!open) {
      setShift(0);
      return;
    }
    if (!tooltipRef.current) return;
    const margin = 12;
    const rect = tooltipRef.current.getBoundingClientRect();
    const baseLeft = rect.left;
    const baseRight = rect.right;
    let next = 0;
    if (baseLeft < margin) next = margin - baseLeft;
    else if (baseRight > window.innerWidth - margin) next = window.innerWidth - margin - baseRight;
    setShift(next);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const pillClass =
    "rounded-full border border-border bg-background px-3 py-2 text-sm text-muted-foreground";

  if (!description) {
    return <span className={pillClass}>{label}</span>;
  }

  return (
    <span
      ref={wrapperRef}
      className="relative inline-flex"
      onPointerEnter={(event) => event.pointerType === "mouse" && setOpen(true)}
      onPointerLeave={(event) => event.pointerType === "mouse" && setOpen(false)}
    >
      <button
        type="button"
        aria-describedby={open ? id : undefined}
        onFocus={(event) => event.currentTarget.matches(":focus-visible") && setOpen(true)}
        onBlur={() => setOpen(false)}
        onPointerDown={(event) => (lastPointer.current = event.pointerType)}
        onClick={() => {
          // Com mouse o balão já abre no hover; o clique só alterna no toque e no teclado.
          if (lastPointer.current !== "mouse") setOpen((value) => !value);
          lastPointer.current = "";
        }}
        onKeyDown={(event) => event.key === "Escape" && setOpen(false)}
        className={`${pillClass} cursor-help transition hover:border-primary hover:text-foreground focus-visible:border-primary focus-visible:text-foreground focus-visible:outline-none`}
      >
        {label}
      </button>

      {open && (
        <span
          ref={tooltipRef}
          id={id}
          role="tooltip"
          style={{ transform: `translateX(calc(-50% + ${shift}px))` }}
          className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 w-64 max-w-[calc(100vw-1.5rem)] rounded-xl border border-border bg-background px-3.5 py-2.5 text-left text-xs leading-5 text-foreground shadow-xl"
        >
          <span className="mb-0.5 block font-semibold text-primary">{label}</span>
          {description}
        </span>
      )}
    </span>
  );
}
