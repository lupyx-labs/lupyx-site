import { useEffect, useRef } from "react";


export default function Wolf() {

const headRef = useRef<SVGGElement>(null);

useEffect(() => {
  // Evita animações em dispositivos sem mouse
  // e respeita a preferência por movimento reduzido.
  const canAnimate = window.matchMedia(
  "(prefers-reduced-motion: no-preference)"
).matches;  

  if (!canAnimate) return;

  // Configurações da animação
  const intensityX = 110;
  const intensityY = 70;
  const maxRotation = 9;
  const smoothness = 0.32;

  // Posição atual
  let currentX = 0;
  let currentY = 0;
  let currentRotation = 0;

  // Posição desejada
  let targetX = 0;
  let targetY = 0;
  let targetRotation = 0;

  let frameId: number | null = null;

  const animate = () => {
    // Aproxima a posição atual do destino
    currentX += (targetX - currentX) * smoothness;
    currentY += (targetY - currentY) * smoothness;

    currentRotation +=
      (targetRotation - currentRotation) * smoothness;

    // Movimenta o grupo SVG
    headRef.current?.setAttribute(
      "transform",
      `translate(${currentX} ${currentY})
       rotate(${currentRotation} 500 500)`
    );

    const remaining =
      Math.abs(targetX - currentX) +
      Math.abs(targetY - currentY) +
      Math.abs(targetRotation - currentRotation);

    // Continua animando apenas enquanto necessário
    if (remaining > 0.03) {
      frameId = requestAnimationFrame(animate);
    } else {
      frameId = null;
    }
  };

  
  // Atualiza o destino do movimento do lobo
  const updatePosition = (
    clientX: number,
    clientY: number
  ) => {
    const mouseX =
      (clientX / window.innerWidth) * 2 - 1;

    const mouseY =
      (clientY / window.innerHeight) * 2 - 1;

    targetX = mouseX * -intensityX;
    targetY = mouseY * intensityY;
    targetRotation = mouseX * -maxRotation;

    if (frameId === null) {
      frameId = requestAnimationFrame(animate);
    }
  };

  // Movimento com mouse no computador
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

  // Remove os eventos quando o componente é desmontado
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
      className="h-auto w-full"
      role="img"
      aria-label="Lobo geométrico da Lupyx"
    >
      {/* CABEÇA DO LOBO */}
      <g id="wolf-head" ref={headRef}>

        {/* Orelha esquerda */}
        <polygon
          fill="#0b1c30"
          opacity="0.9"
          points="410,160 540,320 240,520"
        />

        {/* Orelha direita */}
        <polygon
          fill="#102034"
          opacity="0.85"
          points="565,230 640,370 530,360"
        />

        {/* Região central do rosto */}
        <polygon
          fill="#1b2b3f"
          opacity="0.95"
          points="240,520 425,350 705,465 835,520 625,595 425,595"
        />

        {/* Região inferior */}
        <polygon
          fill="#0b1c30"
          opacity="0.9"
          points="205,580 370,835 520,670 425,670"
        />

        {/* Estrutura lateral do rosto */}
        <polygon
          fill="#102034"
          points="350,350 425,350 425,670 520,670 625,595 735,625 540,780 445,795"
        />

        {/* Detalhe ciano */}
        <polygon
          fill="#5de6ff"
          opacity="0.85"
          points="445,795 540,780 735,625 565,650"
        />

        {/* OLHOS */}
        <g id="wolf-eyes">

          {/* Cavidade do olho */}
          <polygon
            fill="#031427"
            points="560,425 655,470 580,472"
          />

          {/* Brilho ciano */}
          <polygon
            id="eye-pupil-main"
            fill="#5de6ff"
            points="590,446 642,468 600,469"
            style={{
              filter: "drop-shadow(0 0 12px #5de6ff)"
            }}
          />

          {/* Reflexo branco */}
          <polygon
            id="eye-pupil-glow"
            fill="#ffffff"
            points="598,452 630,466 605,467"
            style={{
              filter: "drop-shadow(0 0 8px #ffffff)"
            }}
          />

        </g>
      </g>
    </svg>
  );
}
