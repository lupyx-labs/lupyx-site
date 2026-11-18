
import { useEffect, useRef, useState } from "react";
import Wolf from "./Wolf";

// Posição visual do lobo
type WolfPose = {
  x: number;
  y: number;
  scale: number;
  opacity: number;
};

// Ponto de referência na rolagem
type ScrollPoint = WolfPose & {
  at: number;
};

export default function WolfExperience() {
  const motionRef = useRef<HTMLDivElement>(null);
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Quanto menor, mais suavemente o lobo
    // acompanha o destino durante o scroll
    const smoothness = reduceMotion ? 1 : 0.12;

    // Estado inicial: mantém o Hero original
    let current: WolfPose = {
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
    };

    let target: WolfPose = { ...current };
    let frameId: number | null = null;

    // Encontra a posição real de uma seção
    const getSectionTop = (id: string): number | null => {
      const element = document.getElementById(id);

      if (!element) return null;

      return (
        element.getBoundingClientRect().top +
        window.scrollY
      );
    };

    // Calcula a trajetória a partir das seções
    const getScrollPoints = (): ScrollPoint[] => {
      const viewportHeight = window.innerHeight;
      const desktop = window.innerWidth >= 1024;

      const dawnTop = getSectionTop("amanhecer");
      const pratikTop = getSectionTop("pratik");
      const moodyTop = getSectionTop("moody");

      const points: ScrollPoint[] = [
        {
          at: 0,
          x: 0,
          y: 0,
          scale: 1,
          opacity: 1,
        },
      ];

      const addPoint = (
        at: number,
        pose: WolfPose
      ) => {
        const last = points[points.length - 1];

        points.push({
          at: Math.max(last.at + 1, at),
          ...pose,
        });
      };

      // HERO -> AMANHECER
      // O lobo começa a sair do estado original
      // quando o amanhecer se aproxima da tela
      if (dawnTop !== null) {
        addPoint(
          dawnTop - viewportHeight * 0.9,
          {
            x: 0,
            y: 0,
            scale: 1,
            opacity: 1,
          }
        );

        addPoint(
          dawnTop - viewportHeight * 0.35,
          {
            x: desktop ? -180 : -50,
            y: 25,
            scale: 0.83,
            opacity: 0.75,
          }
        );
      }

      // AMANHECER -> PRATIK
      // Desloca para a esquerda e diminui
      if (pratikTop !== null) {
        addPoint(
          pratikTop - viewportHeight * 0.55,
          {
            x: desktop ? -610 : -110,
            y: 60,
            scale: desktop ? 0.55 : 0.45,
            opacity: desktop ? 0.35 : 0.18,
          }
        );
      }

      // PRATIK -> MOODY
      // Atravessa gradualmente para a direita
      if (moodyTop !== null) {
        addPoint(
          moodyTop - viewportHeight * 0.55,
          {
            x: desktop ? 100 : 20,
            y: 40,
            scale: desktop ? 0.55 : 0.45,
            opacity: desktop ? 0.35 : 0.18,
          }
        );
      }

      return points;
    };

    // Descobre a posição desejada em qualquer
    // ponto da rolagem, não apenas nas seções
    const calculateTarget = (): WolfPose => {
      const points = getScrollPoints();
      const scroll = window.scrollY;

      if (scroll <= points[0].at) {
        return { ...points[0] };
      }

      for (let i = 1; i < points.length; i++) {
        const previous = points[i - 1];
        const next = points[i];

        if (scroll <= next.at) {
          const distance = next.at - previous.at;

          const progress = Math.max(
            0,
            Math.min(
              (scroll - previous.at) / distance,
              1
            )
          );

          // Suaviza o começo e o final
          // de cada trecho da trajetória
          const t =
            progress * progress *
            (3 - 2 * progress);

          const interpolate = (
            start: number,
            end: number
          ) => start + (end - start) * t;

          return {
            x: interpolate(previous.x, next.x),
            y: interpolate(previous.y, next.y),
            scale: interpolate(
              previous.scale,
              next.scale
            ),
            opacity: interpolate(
              previous.opacity,
              next.opacity
            ),
          };
        }
      }

      // Depois do Moody, mantém sua última
      // posição até definirmos outras seções
      return { ...points[points.length - 1] };
    };

    // Desenho suave usando requestAnimationFrame
    const animate = () => {
      const approach = (
        from: number,
        to: number
      ) => {
        return from + (to - from) * smoothness;
      };

      current.x = approach(current.x, target.x);
      current.y = approach(current.y, target.y);

      current.scale = approach(
        current.scale,
        target.scale
      );

      current.opacity = approach(
        current.opacity,
        target.opacity
      );

      const remaining =
        Math.abs(target.x - current.x) +
        Math.abs(target.y - current.y) +
        Math.abs(target.scale - current.scale) +
        Math.abs(target.opacity - current.opacity);

      // Evita animação infinita por
      // diferenças numéricas muito pequenas
      if (remaining < 0.04) {
        current = { ...target };
      }

      if (motionRef.current) {
        motionRef.current.style.transform =
          `translate3d(${current.x}px, ${current.y}px, 0)
           scale(${current.scale})`;

        motionRef.current.style.opacity =
          String(current.opacity);
      }

      if (remaining >= 0.04) {
        frameId = requestAnimationFrame(animate);
      } else {
        frameId = null;
      }
    };

    // Atualiza a animação ao rolar
    const updateScroll = () => {
      target = calculateTarget();

      // Altera a paleta ao aproximar-se
      // da seção do amanhecer
      const dawnTop = getSectionTop("amanhecer");

      const shouldBeLight =
        dawnTop !== null &&
        window.scrollY >=
          dawnTop - window.innerHeight * 0.55;

      setIsLight((previous) =>
        previous === shouldBeLight
          ? previous
          : shouldBeLight
      );

      if (frameId === null) {
        frameId = requestAnimationFrame(animate);
      }
    };

    window.addEventListener(
      "scroll",
      updateScroll,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      updateScroll
    );

    updateScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        updateScroll
      );

      window.removeEventListener(
        "resize",
        updateScroll
      );

      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <div
      className="
        pointer-events-none
        fixed
        inset-x-0
        top-20
        z-10
        flex
        h-[calc(100dvh-5rem)]
        items-center
        justify-center
      "
    >
      {/* POSIÇÃO ORIGINAL NO HERO */}
      <div
        className="
          w-[110%]
          max-w-[440px]
          translate-x-[50px]

          lg:w-[900px]
          lg:max-w-none
          lg:translate-x-[220px]

          xl:w-[980px]
          xl:translate-x-[250px]
        "
      >
        {/* TRAJETÓRIA CONTROLADA PELO SCROLL */}
        <div
          ref={motionRef}
          className="will-change-transform"
        >
          {/* ESPELHAMENTO ORIGINAL */}
          <div className="-scale-x-100">
            <Wolf light={isLight} />
          </div>
        </div>
      </div>
    </div>
  );
}
