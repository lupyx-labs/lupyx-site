import { useEffect, useRef } from "react";
import Wolf from "./Wolf";

export default function WolfExperience() {

  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) return;

    // Configurações da animação
    const maxScrollMovement = 60;
    const smoothness = 0.20;

    let currentY = 0;
    let targetY = 0;
    let frameId: number | null = null;

    const animate = () => {
      // Aproxima o lobo da posição desejada
      currentY += (targetY - currentY) * smoothness;

      if (Math.abs(targetY - currentY) < 0.2) {
        currentY = targetY;
      }

      // Move a camada inteira do lobo
      if (layerRef.current) {
        layerRef.current.style.transform =
          `translate3d(0, ${currentY}px, 0)`;
      }

      if (Math.abs(targetY - currentY) >= 0.2) {
        frameId = requestAnimationFrame(animate);
      } else {
        frameId = null;
      }
    };

    const updateScroll = () => {
      const hero = document.getElementById("hero");
      if (!hero) return;

      const heroTop =
        hero.getBoundingClientRect().top + window.scrollY;

      const scrollDistance = hero.offsetHeight * 0.8;

      // Progresso de 0 até 1
      const progress = Math.max(
        0,
        Math.min(
          (window.scrollY - heroTop) / scrollDistance,
          1
        )
      );

      targetY = progress * maxScrollMovement;

      if (frameId === null) {
        frameId = requestAnimationFrame(animate);
      }
    };

    window.addEventListener("scroll", updateScroll, {
      passive: true,
    });

    window.addEventListener("resize", updateScroll);

    updateScroll();

    return () => {
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);

      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <div
      ref={layerRef}
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

      <div
        className="
          w-[110%]
          max-w-[440px]
          translate-x-[50px]
          -scale-x-100

          lg:w-[900px]
          lg:max-w-none
          lg:translate-x-[220px]

          xl:w-[980px]
          xl:translate-x-[250px]
        "
      >
        <Wolf />
      </div>
    </div>
  );
}
