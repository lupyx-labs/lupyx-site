import { useEffect, useRef, useState } from "react";
import Wolf from "./Wolf";

type WolfPose = {
  x: number;
  y: number;
  scale: number;
  opacity: number;
};

type ScrollPoint = WolfPose & { at: number };

const interpolate = (start: number, end: number, t: number) =>
  start + (end - start) * t;

export default function WolfExperience() {
  const motionRef = useRef<HTMLDivElement>(null);
  const [isLight, setIsLight] = useState(false);
  const [showWolf, setShowWolf] = useState(true);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const smoothness = reduceMotion ? 1 : 0.12;
    const initialPose: WolfPose = { x: 0, y: 0, scale: 1, opacity: 1 };

    let current: WolfPose = { ...initialPose };
    let target: WolfPose = { ...initialPose };
    let frameId: number | null = null;
    let initialized = false;

    const getSectionTop = (id: string): number | null => {
      const element = document.getElementById(id);
      return element
        ? element.getBoundingClientRect().top + window.scrollY
        : null;
    };

    const getScrollPoints = (): ScrollPoint[] => {
      const h = window.innerHeight;
      const desktop = window.innerWidth >= 1024;
      const dawn = getSectionTop("amanhecer");
      const pratik = getSectionTop("pratik");
      const moody = getSectionTop("moody");
      const behind = document.getElementById("bastidores");

      const points: ScrollPoint[] = [{ at: 0, ...initialPose }];

      const addPoint = (at: number, pose: WolfPose) => {
        const last = points[points.length - 1];
        points.push({ at: Math.max(last.at + 1, at), ...pose });
      };

      // Hero -> Amanhecer: preserva o percurso existente.
      if (dawn !== null) {
        addPoint(dawn - h * 0.9, initialPose);
        addPoint(dawn - h * 0.35, {
          x: desktop ? -180 : -50,
          y: 25,
          scale: 0.83,
          opacity: 0.75,
        });
      }

      // Pratik: esquerda, menor e discreto.
      if (pratik !== null) {
        addPoint(pratik - h * 0.55, {
          x: desktop ? -610 : -110,
          y: 60,
          scale: desktop ? 0.55 : 0.45,
          opacity: desktop ? 0.35 : 0.18,
        });
      }

      // Moody: atravessa para a direita de forma contínua.
      if (moody !== null) {
        addPoint(moody - h * 0.55, {
          x: desktop ? 100 : 20,
          y: 40,
          scale: desktop ? 0.55 : 0.45,
          opacity: desktop ? 0.35 : 0.18,
        });
      }

      if (behind) {
        const behindTop =
          behind.getBoundingClientRect().top + window.scrollY;
        const behindBottom = behindTop + behind.offsetHeight;

        // Bastidores: o lobo volta à paleta noturna e fica ao fundo.
        // Bastidores: lobo um pouco mais à esquerda.
        const behindPose: WolfPose = {
          x: desktop ? -340 : -65,
          y: 20,
          scale: desktop ? 0.48 : 0.38,
          opacity: desktop ? 0.38 : 0.16,
        };

        addPoint(behindTop - h * 0.35, behindPose);

        // Se Contato e Footer ainda não existirem, usa o fim
        // dos Bastidores para concluir o percurso.
        const nextSectionTop =
          getSectionTop("contato") ??
          getSectionTop("footer") ??
          behindBottom;

        // Segura o lobo nos Bastidores e depois o dissolve.
        addPoint(nextSectionTop - h * 0.65, behindPose);
        addPoint(nextSectionTop - h * 0.2, {
          ...behindPose,
          y: 45,
          scale: desktop ? 0.42 : 0.32,
          opacity: 0,
        });
      }

      return points;
    };

    const calculateTarget = (): WolfPose => {
      const points = getScrollPoints();
      const scroll = window.scrollY;

      if (scroll <= points[0].at) return { ...points[0] };

      for (let i = 1; i < points.length; i++) {
        const from = points[i - 1];
        const to = points[i];

        if (scroll <= to.at) {
          const rawProgress = (scroll - from.at) / (to.at - from.at);
          const progress = Math.max(0, Math.min(1, rawProgress));
          const t = progress * progress * (3 - 2 * progress);

          return {
            x: interpolate(from.x, to.x, t),
            y: interpolate(from.y, to.y, t),
            scale: interpolate(from.scale, to.scale, t),
            opacity: interpolate(from.opacity, to.opacity, t),
          };
        }
      }

      return { ...points[points.length - 1] };
    };

    const applyPose = () => {
      const element = motionRef.current;
      if (!element) return;

      element.style.transform =
        `translate3d(${current.x}px, ${current.y}px, 0) scale(${current.scale})`;
      element.style.opacity = String(current.opacity);
    };

    const animate = () => {
      const approach = (from: number, to: number) =>
        from + (to - from) * smoothness;

      current.x = approach(current.x, target.x);
      current.y = approach(current.y, target.y);
      current.scale = approach(current.scale, target.scale);
      current.opacity = approach(current.opacity, target.opacity);

      const remaining =
        Math.abs(target.x - current.x) +
        Math.abs(target.y - current.y) +
        Math.abs(target.scale - current.scale) +
        Math.abs(target.opacity - current.opacity);

      if (remaining < 0.04) current = { ...target };

      applyPose();

      // Depois do fade-out, remove o SVG e seus eventos de toque.
      if (current.opacity === 0 && target.opacity === 0) {
        setShowWolf(false);
      }

      if (remaining >= 0.04) {
        frameId = requestAnimationFrame(animate);
      } else {
        frameId = null;
      }
    };

    const updateScroll = () => {
      target = calculateTarget();

      const h = window.innerHeight;
      const dawn = getSectionTop("amanhecer");
      const behind = getSectionTop("bastidores");

      // Claro apenas entre o Amanhecer e a chegada aos Bastidores.
      const shouldBeLight =
        dawn !== null &&
        window.scrollY >= dawn - h * 0.55 &&
        (behind === null || window.scrollY < behind - h * 0.35);

      setIsLight((previous) =>
        previous === shouldBeLight ? previous : shouldBeLight
      );

      // Também funciona ao abrir a página direto em uma âncora.
      if (!initialized) {
        current = { ...target };
        applyPose();
        setShowWolf(target.opacity > 0);
        initialized = true;
        return;
      }

      // Ao subir o scroll, recoloca o SVG antes de fazê-lo aparecer.
      if (target.opacity > 0) setShowWolf(true);

      if (frameId === null) {
        frameId = requestAnimationFrame(animate);
      }
    };

    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateScroll);
    window.addEventListener("load", updateScroll);
    updateScroll();

    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
      window.removeEventListener("load", updateScroll);
      if (frameId !== null) cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-20 z-10 flex h-[calc(100dvh-5rem)] items-center justify-center"
    >
      {/* Posição original do Hero: preservada. */}
      <div className="w-[110%] max-w-[440px] translate-x-[50px] lg:w-[900px] lg:max-w-none lg:translate-x-[220px] xl:w-[980px] xl:translate-x-[250px]">
        <div ref={motionRef} className="will-change-transform">
          <div className="-scale-x-100">
            {showWolf && <Wolf light={isLight} />}
          </div>
        </div>
      </div>
    </div>
  );
}
