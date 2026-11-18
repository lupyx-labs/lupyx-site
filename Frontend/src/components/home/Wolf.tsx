
import { useEffect, useRef } from "react";

type WolfProps = {
  light?: boolean;
};

export default function Wolf({ light = false }: WolfProps) {
  const headRef = useRef<SVGGElement>(null);
  const pupilRef = useRef<SVGGElement>(null);

  // Paleta utilizada em cada ambiente
  const colors = light
    ? {
        ear: "#204F73",
        side: "#337AA3",
        face: "#5CA5C8",
        cyan: "#22D3EE",
        eye: "#0B1B3A",
        white: "#FFFFFF",
      }
    : {
        ear: "#0b1c30",
        side: "#102034",
        face: "#1b2b3f",
        cyan: "#5de6ff",
        eye: "#031427",
        white: "#FFFFFF",
      };

  // Transição suave entre as duas paletas
  const colorTransition =
    "transition-[fill] duration-[1300ms] ease-in-out motion-reduce:transition-none";

  useEffect(() => {
    // Respeita a preferência por movimento reduzido
    const canAnimate = window.matchMedia(
      "(prefers-reduced-motion: no-preference)"
    ).matches;

    if (!canAnimate) return;

    // Configurações da animação
    const intensityX = 110;
    const intensityY = 70;
    const maxRotation = 9;
    const smoothness = 0.32;
    const eyeSmoothness = 0.48;

    // Posição atual da cabeça
    let currentX = 0;
    let currentY = 0;
    let currentRotation = 0;

    // Posição desejada da cabeça
    let targetX = 0;
    let targetY = 0;
    let targetRotation = 0;

    // Posição atual dos olhos
    let currentEyeX = 0;
    let currentEyeY = 0;

    // Posição desejada dos olhos
    let targetEyeX = 0;
    let targetEyeY = 0;

    let frameId: number | null = null;

    const animate = () => {
      // Movimento suave da cabeça
      currentX += (targetX - currentX) * smoothness;
      currentY += (targetY - currentY) * smoothness;

      currentRotation +=
        (targetRotation - currentRotation) * smoothness;

      // Movimento independente dos olhos
      currentEyeX +=
        (targetEyeX - currentEyeX) * eyeSmoothness;

      currentEyeY +=
        (targetEyeY - currentEyeY) * eyeSmoothness;

      // Aplica o movimento aos olhos
      pupilRef.current?.setAttribute(
        "transform",
        `translate(${currentEyeX} ${currentEyeY})`
      );

      // Aplica o movimento à cabeça
      headRef.current?.setAttribute(
        "transform",
        `translate(${currentX} ${currentY})
         rotate(${currentRotation} 500 500)`
      );

      // Calcula quanto falta para chegar ao destino
      const remaining =
        Math.abs(targetX - currentX) +
        Math.abs(targetY - currentY) +
        Math.abs(targetRotation - currentRotation) +
        Math.abs(targetEyeX - currentEyeX) +
        Math.abs(targetEyeY - currentEyeY);

      if (remaining > 0.03) {
        frameId = requestAnimationFrame(animate);
      } else {
        frameId = null;
      }
    };

    // Atualiza o destino conforme o mouse ou toque
    const updatePosition = (
      clientX: number,
      clientY: number
    ) => {
      const mouseX =
        (clientX / window.innerWidth) * 2 - 1;

      const mouseY =
        (clientY / window.innerHeight) * 2 - 1;

      // Cabeça
      targetX = mouseX * -intensityX;
      targetY = mouseY * intensityY;
      targetRotation = mouseX * -maxRotation;

      // Olhos
      targetEyeX = mouseX * -6;
      targetEyeY = mouseY * 3;

      if (frameId === null) {
        frameId = requestAnimationFrame(animate);
      }
    };

    // Movimento com o mouse
    const handleMouseMove = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;

      updatePosition(event.clientX, event.clientY);
    };

    // Movimento com o dedo no celular
    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];

      if (!touch) return;

      updatePosition(touch.clientX, touch.clientY);
    };

    window.addEventListener(
      "pointermove",
      handleMouseMove,
      { passive: true }
    );

    window.addEventListener(
      "touchmove",
      handleTouchMove,
      { passive: true }
    );

    // Limpeza dos eventos
    return () => {
      window.removeEventListener(
        "pointermove",
        handleMouseMove
      );

      window.removeEventListener(
        "touchmove",
        handleTouchMove
      );

      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <svg
      viewBox="0 0 1000 1000"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      className={`h-auto w-full wolf-svg ${
        light ? "wolf-svg--light" : ""
      }`}
      role="img"
      aria-label="Lobo geométrico da Lupyx"
    >
      {/* CABEÇA DO LOBO */}
      <g id="wolf-head" ref={headRef}>

        {/* Orelha esquerda */}
        <polygon
          className={colorTransition}
          style={{ fill: colors.ear }}
          opacity="0.9"
          points="410,160 540,320 240,520"
        />

        {/* Orelha direita */}
        <polygon
          className={colorTransition}
          style={{ fill: colors.side }}
          opacity="0.85"
          points="565,230 640,370 530,360"
        />

        {/* Região central do rosto */}
        <polygon
          className={colorTransition}
          style={{ fill: colors.face }}
          opacity="0.95"
          points="240,520 425,350 705,465 835,520 625,595 425,595"
        />

        {/* Região inferior */}
        <polygon
          className={colorTransition}
          style={{ fill: colors.ear }}
          opacity="0.9"
          points="205,580 370,835 520,670 425,670"
        />

        {/* Estrutura lateral do rosto */}
        <polygon
          className={colorTransition}
          style={{ fill: colors.side }}
          points="350,350 425,350 425,670 520,670 625,595 735,625 540,780 445,795"
        />

        {/* Detalhe ciano */}
        <polygon
          className={colorTransition}
          style={{ fill: colors.cyan }}
          opacity="0.85"
          points="445,795 540,780 735,625 565,650"
        />

        {/* OLHOS */}
        <g id="wolf-eyes">

          {/* Cavidade do olho */}
          <polygon
            className={colorTransition}
            style={{ fill: colors.eye }}
            points="560,425 655,470 580,472"
          />

          {/* Pupilas — movimento independente */}
          <g ref={pupilRef}>

            {/* Pupila principal */}
            <polygon
              id="eye-pupil-main"
              className={colorTransition}
              style={{
                fill: colors.cyan,
                filter: "drop-shadow(0 0 12px #5de6ff)",
              }}
              points="590,446 642,468 600,469"
            />

            {/* Reflexo branco do olho */}
            <polygon
              id="eye-pupil-glow"
              className={colorTransition}
              style={{
                fill: colors.white,
                filter: "drop-shadow(0 0 8px #ffffff)",
              }}
              points="598,452 630,466 605,467"
            />

          </g>
        </g>
      </g>
    </svg>
  );
}
