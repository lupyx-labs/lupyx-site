import { useEffect, useRef, useState } from "react";
import MoodyShowcase from "./MoodyShowcase";

export default function AppsSection() {

const pratikImageRef = useRef<HTMLDivElement>(null);
const [isPratikVisible, setIsPratikVisible] = useState(false);
const [isPratikLoaded, setIsPratikLoaded] = useState(false);

useEffect(() => {
  const element = pratikImageRef.current;

  if (!element) return;

  // Respeita a preferência do usuário
  // por animações reduzidas
  const reduceMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  if (reduceMotion) {
    setIsPratikVisible(true);
    return;
  }

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsPratikVisible(true);

        // A entrada acontece somente uma vez
        observer.disconnect();
      }
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -5% 0px",
    }
  );

  observer.observe(element);

  return () => observer.disconnect();
}, []);

  return (
    <section
      id="apps"
      className="
        relative w-full overflow-hidden
        bg-[#F4F8FB] text-slate-900
        px-6 py-24
        sm:px-12
        lg:px-20 lg:py-32
      "
    >
      <div className="relative mx-auto max-w-[1440px]">

        {/* MARCA D'ÁGUA DO STITCH */}
        <span
          aria-hidden="true"
          className="
            pointer-events-none absolute
            -top-16 -left-6
            select-none
            font-heading text-[68px] font-bold
            leading-none tracking-tighter
            text-slate-900/[0.04] uppercase
            sm:text-[110px]
            lg:-top-24 lg:text-[160px]
          "
        >
          EM DESENVOLVIMENTO
        </span>

        {/* CABEÇALHO DA SEÇÃO */}
        <div
          className="
            relative z-20 flex flex-col
            justify-between gap-6 pb-16
            md:flex-row md:items-end
            lg:pb-20
          "
        >
          <div>
            <span
              className="
                mb-2 block font-mono text-xs
                tracking-widest text-slate-500
                uppercase
              "
            >
              02 // PORTFÓLIO PROPRIETÁRIO
            </span>

            <h2
              className="
                max-w-3xl font-heading
                text-[32px] leading-[38px]
                font-semibold tracking-tight
                text-slate-950
                sm:text-[48px] sm:leading-[52px]
              "
            >
              Produtos que concebemos e mantemos
            </h2>
          </div>

          <span
            className="
              font-mono text-[10px]
              tracking-wider text-slate-500
              uppercase
            "
          >
            STATUS: CICLO DE LABS 2026.Q4
          </span>
        </div>

        {/* APP 01 — PRATIK */}
        <article
          id="pratik"
          className="
            relative z-20 grid grid-cols-1
            items-center gap-12
            lg:grid-cols-12 lg:gap-16
          "
        >
          {/* COLUNA ESQUERDA — INFORMAÇÕES */}
          <div
            className="
              flex flex-col items-start
              lg:col-span-7
            "
          >
            {/* NÚMERO E STATUS */}
            <div className="mb-4 flex items-baseline gap-4">
              <span
                className="
                  select-none font-heading
                  text-6xl font-bold leading-none
                  text-slate-300
                  sm:text-7xl lg:text-8xl
                "
              >
                01
              </span>

              <span
                className="
                  inline-flex items-center gap-2
                  bg-slate-200/80 px-3 py-1
                "
              >
                <span
                  className="h-2 w-2 bg-[#00CBE6]"
                />

                <span
                  className="
                    font-mono text-[10px]
                    font-semibold tracking-widest
                    text-slate-800 uppercase
                  "
                >
                  EM BREVE
                </span>
              </span>
            </div>

            {/* NOME */}
            <h3
              className="
                mt-2 font-heading text-4xl
                font-bold tracking-tight
                text-slate-950
                sm:text-5xl
              "
            >
              Pratik
            </h3>

            {/* DESCRIÇÃO */}
            <p
              className="
                mt-6 max-w-xl font-body
                text-base leading-relaxed
                text-slate-700
                sm:text-lg
              "
            >
              Encontre profissionais para serviços
              do dia a dia de forma simples e rápida.
              O Pratik conecta clientes a prestadores
              próximos, facilitando a busca por
              categoria, distância e preço.
            </p>

            {/* INFORMAÇÕES TÉCNICAS */}
            <div
              className="
                my-8 grid w-full max-w-xl
                grid-cols-3 gap-3 border-y
                border-slate-300/80 py-4
                sm:gap-6
              "
            >
              <div>
                <span className="block font-mono text-[10px] text-slate-500 uppercase">
                  Plataforma
                </span>
                <span className="font-mono text-xs font-semibold text-slate-900">
                  MOBILE
                </span>
              </div>

              <div>
                <span className="block font-mono text-[10px] text-slate-500 uppercase">
                  Segmento
                </span>
                <span className="font-mono text-xs font-semibold text-slate-900">
                  SERVIÇOS
                </span>
              </div>

              <div>
                <span className="block font-mono text-[10px] text-slate-500 uppercase">
                  Estágio
                </span>
                <span className="font-mono text-xs font-semibold text-slate-900">
                  EM BREVE
                </span>
              </div>
            </div>

            <span
              className="
                font-heading text-lg font-medium
                text-slate-600
              "
            >
              Novidades em breve.
            </span>
          </div>

          {/* COLUNA DIREITA — CAPA */}
        
{/* COLUNA DIREITA — CAPA PRATIK */}
        <div
        ref={pratikImageRef}
        className={`
            flex w-full justify-center
            lg:col-span-5

            transition-[opacity,transform]
            duration-[1700ms]
            delay-[200ms]
            ease-[cubic-bezier(0.22,1,0.36,1)]

            ${
            isPratikVisible && isPratikLoaded
                ? "translate-x-0 opacity-100"
                : "translate-x-[100px] opacity-0 lg:translate-x-[260px]"
            }
        `}
        >
        <img
            src="/images/apps/pratik/logopratik.png"
            alt="Prévia do aplicativo Pratik"
            loading="eager"
            onLoad={() => setIsPratikLoaded(true)}
            className={`
            block h-auto w-full
            max-w-[460px]
            object-contain
            lg:max-w-[540px]

            ${
                isPratikVisible && isPratikLoaded
                ? "pratik-float"
                : ""
            }
            `}
        />
        </div>


        </article>

{/* DIVISÓRIA ENTRE OS APLICATIVOS */}
<div
  aria-hidden="true"
  className="
    relative z-20
    my-20 h-px w-full
    bg-slate-300
    lg:my-24
  "
/>

{/* APP 02 — MOODY */}
<MoodyShowcase />


      </div>
    </section>
  );
}
