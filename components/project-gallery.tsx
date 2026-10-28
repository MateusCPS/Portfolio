"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

type ProjectGalleryProps = {
  title: string;
  images: string[];
  /** Tempo de cada imagem, em milissegundos. */
  interval?: number;
};

const sizes = "(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw";

// Capa do projeto que vira um carrossel:
// - no computador, as imagens trocam enquanto o mouse está em cima e voltam para a capa ao sair;
// - no celular (sem mouse), trocam sozinhas enquanto o card está visível na tela;
// - quem ativou "reduzir movimento" no sistema vê só a capa e troca pelos pontinhos.
export function ProjectGallery({ title, images, interval = 1400 }: ProjectGalleryProps) {
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(false);
  // As imagens extras só carregam depois da primeira interação, para não pesar o site.
  const [activated, setActivated] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasGallery = images.length > 1;

  const canAnimate = useCallback(
    () => !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    [],
  );

  // Avança para a próxima imagem enquanto estiver tocando.
  useEffect(() => {
    if (!playing || !hasGallery) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % images.length);
    }, interval);
    return () => window.clearInterval(timer);
  }, [playing, hasGallery, images.length, interval]);

  // No celular, toca automaticamente quando o card está visível.
  useEffect(() => {
    const element = containerRef.current;
    if (!element || !hasGallery) return;
    if (!window.matchMedia("(hover: none)").matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && canAnimate()) {
          setActivated(true);
          setPlaying(true);
        } else {
          setPlaying(false);
        }
      },
      { threshold: 0.6 },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [hasGallery, canAnimate]);

  const start = (event: React.PointerEvent) => {
    if (event.pointerType !== "mouse" || !hasGallery) return;
    setActivated(true);
    // A primeira troca acontece depois de um intervalo, dando tempo das imagens carregarem.
    if (canAnimate()) setPlaying(true);
  };

  const stop = (event: React.PointerEvent) => {
    if (event.pointerType !== "mouse") return;
    setPlaying(false);
    setIndex(0);
  };

  const select = (target: number) => {
    setActivated(true);
    setPlaying(false);
    setIndex(target);
  };

  return (
    <div
      ref={containerRef}
      onPointerEnter={start}
      onPointerLeave={stop}
      className="group relative aspect-[16/10] overflow-hidden bg-muted"
    >
      {images.map((src, i) => {
        if (i > 0 && !activated) return null;
        return (
          <Image
            key={src}
            src={src}
            alt={i === 0 ? `Captura de tela do projeto ${title}` : ""}
            aria-hidden={i === index ? undefined : true}
            fill
            sizes={sizes}
            className={`object-cover transition-[opacity,transform] duration-500 group-hover:scale-105 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        );
      })}

      {hasGallery && (
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-0.5 rounded-full bg-black/40 px-1.5">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => select(i)}
              aria-label={`Mostrar imagem ${i + 1} de ${images.length} de ${title}`}
              aria-current={i === index ? "true" : undefined}
              className="grid size-6 place-items-center"
            >
              <span
                className={`block h-1.5 rounded-full shadow transition-all duration-300 ${
                  i === index ? "w-5 bg-white" : "w-1.5 bg-white/60"
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
