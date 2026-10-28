"use client";

import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Children, useCallback, useEffect, useRef, useState, type ReactNode } from "react";

type ProjectsCarouselProps = {
  children: ReactNode;
  label?: string;
  /** Tempo em cada posição antes de avançar sozinho, em milissegundos. */
  autoplayInterval?: number;
};

// Carrossel dos cards de projeto:
// - celular: 1 card por vez (com uma pontinha do próximo), arrastando com o dedo;
// - tablet: 2 cards; computador: 3 cards, com setas para avançar e voltar;
// - os pontinhos embaixo mostram a posição e levam direto a um projeto;
// - avança sozinho com o tempo e volta ao início no final. Pausa quando o mouse está em cima,
//   quando o visitante está usando o teclado ou tocando nele, quando sai da tela e no botão de pausa.
//   Quem ativou "reduzir movimento" no sistema não tem avanço automático.
export function ProjectsCarousel({ children, label = "Projetos", autoplayInterval = 3000 }: ProjectsCarouselProps) {
  const items = Children.toArray(children);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(items.length > 1);
  // Quantas posições existem: com 3 cards visíveis e 4 projetos, são 2 posições.
  const [positions, setPositions] = useState(items.length);
  const regionRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false); // pausado pelo botão
  const [hovering, setHovering] = useState(false);
  const [focused, setFocused] = useState(false);
  const [touching, setTouching] = useState(false);
  const [inView, setInView] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const update = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const first = track.firstElementChild as HTMLElement | null;
    const step = first ? first.offsetWidth + parseFloat(getComputedStyle(track).columnGap || "0") : track.clientWidth;
    const visible = Math.max(1, Math.round((track.clientWidth + parseFloat(getComputedStyle(track).columnGap || "0")) / step));
    const total = Math.max(1, items.length - visible + 1);
    setPositions(total);
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
    setActive(atEnd ? total - 1 : Math.min(total - 1, Math.round(track.scrollLeft / step)));
    setCanPrev(track.scrollLeft > 4);
    setCanNext(track.scrollLeft + track.clientWidth < track.scrollWidth - 4);
  }, [items.length]);

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  const goTo = (index: number) => {
    const track = trackRef.current;
    const target = track?.children[index] as HTMLElement | undefined;
    if (!track || !target) return;
    track.scrollTo({ left: target.offsetLeft - track.offsetLeft, behavior: "smooth" });
  };

  const move = (direction: 1 | -1) => goTo(Math.max(0, Math.min(positions - 1, active + direction)));

  // Respeita a preferência "reduzir movimento" do sistema.
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  // Só anda quando o carrossel está visível na tela.
  useEffect(() => {
    const region = regionRef.current;
    if (!region) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.4 });
    observer.observe(region);
    return () => observer.disconnect();
  }, []);

  const autoplay = positions > 1 && !reducedMotion && !paused && !hovering && !focused && !touching && inView;

  // Avança uma posição a cada intervalo; no final, volta ao início.
  // Como o timer reinicia a cada mudança de posição, mexer manualmente também reinicia a contagem.
  useEffect(() => {
    if (!autoplay) return;
    const timer = window.setTimeout(() => {
      if (document.hidden) return;
      goTo(active >= positions - 1 ? 0 : active + 1);
    }, autoplayInterval);
    return () => window.clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoplay, active, positions, autoplayInterval]);

  const arrowClass =
    "grid size-11 place-items-center rounded-full border border-border bg-background text-foreground transition hover:border-primary hover:text-primary disabled:pointer-events-none disabled:opacity-35";

  return (
    <div
      ref={regionRef}
      role="region"
      aria-roledescription="carrossel"
      aria-label={label}
      onPointerEnter={(event) => event.pointerType === "mouse" && setHovering(true)}
      onPointerLeave={(event) => event.pointerType === "mouse" && setHovering(false)}
      onFocus={(event) => event.target.matches(":focus-visible") && setFocused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setFocused(false);
      }}
    >
      <div className="mb-5 flex justify-end gap-2">
        {positions > 1 && !reducedMotion && (
          <button
            type="button"
            onClick={() => setPaused((value) => !value)}
            aria-label={paused ? "Retomar avanço automático" : "Pausar avanço automático"}
            className={arrowClass}
          >
            {paused ? <Play size={18} /> : <Pause size={18} />}
          </button>
        )}
        <button type="button" onClick={() => move(-1)} disabled={!canPrev} aria-label="Projeto anterior" className={arrowClass}>
          <ChevronLeft size={20} />
        </button>
        <button type="button" onClick={() => move(1)} disabled={!canNext} aria-label="Próximo projeto" className={arrowClass}>
          <ChevronRight size={20} />
        </button>
      </div>

      <div
        ref={trackRef}
        onScroll={update}
        onPointerDown={(event) => event.pointerType !== "mouse" && setTouching(true)}
        onPointerUp={() => setTouching(false)}
        onPointerCancel={() => setTouching(false)}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((child, index) => (
          <div
            key={index}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} de ${items.length}`}
            className="flex shrink-0 basis-[85%] snap-start md:basis-[calc((100%-1.5rem)/2)] lg:basis-[calc((100%-3rem)/3)] [&>*]:w-full"
          >
            {child}
          </div>
        ))}
      </div>

      {positions > 1 && (
        <div className="mt-6 flex justify-center gap-1">
          {Array.from({ length: positions }, (_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => goTo(index)}
              aria-label={`Ir para a posição ${index + 1} de ${positions}`}
              aria-current={index === active ? "true" : undefined}
              className="grid size-7 place-items-center"
            >
              <span
                className={`block h-2 rounded-full transition-all duration-300 ${
                  index === active ? "w-6 bg-primary" : "w-2 bg-border"
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
