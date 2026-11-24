export default function BehindScenes() {
  return (
    <section
      id="bastidores"
      className="relative isolate w-full overflow-hidden bg-[#031427] px-4 pb-24 pt-36 text-[#D3E4FE] sm:px-8 sm:pb-28 sm:pt-40 lg:px-20 lg:py-36"
    >
      {/* Transição do fundo claro dos Apps para o ambiente noturno */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#F4F8FB] via-[#8DA3B7] to-transparent"
      />

      {/* Ambiente discreto no desktop, sem desfoques pesados no celular */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 top-12 hidden h-[480px] w-[480px] rounded-full bg-[#22D3EE]/[0.05] blur-[120px] lg:block"
      />

      <div className="relative z-20 mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        {/* APRESENTAÇÃO */}
        <div className="flex flex-col items-start lg:col-span-5">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-1.5 w-1.5 bg-[#22D3EE]" aria-hidden="true" />
            <span className="font-mono text-[11px] tracking-[0.16em] text-[#22D3EE] uppercase">
              Estúdio & Cultura
            </span>
          </div>

          <h2 className="font-heading text-[40px] leading-[1.05] font-bold tracking-[-0.04em] sm:text-[54px] lg:text-[64px]">
            Nos bastidores
          </h2>

          <p className="mt-6 max-w-lg font-body text-base leading-7 text-[#C5C6CF] sm:text-lg sm:leading-8">
            Veja como nasceu a Lupyx e como a gente constrói cada app.
            Dos primeiros rascunhos aos protótipos, cada detalhe faz parte
            do processo.
          </p>

          <a
            href="#bastidores-galeria"
            className="group mt-8 inline-flex items-center gap-3 font-heading text-base font-semibold text-[#22D3EE] transition-colors duration-150 hover:text-white"
          >
            <span className="border-b border-[#22D3EE] pb-1">
              Conhecer os bastidores
            </span>
            <span
              aria-hidden="true"
              className="transition-transform duration-150 group-hover:translate-x-1 motion-reduce:transition-none"
            >
              →
            </span>
          </a>
        </div>

        {/* GALERIA — DUAS FOTOS ORIGINAIS + UM RECORTE DE RASCUNHOS */}
        <div
          id="bastidores-galeria"
          className="relative mx-auto h-[405px] w-full max-w-[550px] scroll-mt-28 sm:h-[490px] lg:col-span-7 lg:h-[530px]"
        >
          {/* 01 — PROJETOS EM CONSTRUÇÃO */}
          <figure className="group absolute left-0 top-4 z-10 w-[57%] border border-white/15 bg-[#132A52] p-2 shadow-2xl transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-[#22D3EE]/60 motion-reduce:transition-none sm:w-[52%]">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#0B1B3A]">
              <img
                src="/images/bastidores/projetos-400.webp"
                srcSet="/images/bastidores/projetos-400.webp 400w, /images/bastidores/projetos-800.webp 800w"
                sizes="(min-width: 1024px) 320px, 54vw"
                width={400}
                height={500}
                alt="Mesa criativa com os aplicativos Pratik e Moody e desenhos de interfaces"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#031427]/25 to-transparent" />
            </div>
            <figcaption className="flex items-center justify-between gap-2 px-1 pt-2 pb-1">
              <span className="font-mono text-[9px] leading-4 tracking-wide text-[#22D3EE] sm:text-[10px]">
                01 // PRODUTOS EM CONSTRUÇÃO
              </span>
              <span className="hidden font-mono text-[9px] text-[#8F9098] sm:block">
                APPS
              </span>
            </figcaption>
          </figure>

          {/* 02 — LABORATÓRIO */}
          <figure className="group absolute right-0 top-14 z-20 w-[57%] border border-white/15 bg-[#132A52] p-2 shadow-2xl transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-[#22D3EE]/60 motion-reduce:transition-none sm:w-[52%]">
            <div className="relative aspect-[4/5] overflow-hidden bg-[#0B1B3A]">
              <img
                src="/images/bastidores/laboratorio-400.webp"
                srcSet="/images/bastidores/laboratorio-400.webp 400w, /images/bastidores/laboratorio-800.webp 800w"
                sizes="(min-width: 1024px) 320px, 54vw"
                width={400}
                height={500}
                alt="Bancada de prototipagem com computador, componentes eletrônicos e esboços de aplicativos"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#031427]/25 to-transparent" />
            </div>
            <figcaption className="flex items-center justify-between gap-2 px-1 pt-2 pb-1">
              <span className="font-mono text-[9px] leading-4 tracking-wide text-[#22D3EE] sm:text-[10px]">
                02 // BANCADA DE PROTÓTIPOS
              </span>
              <span className="hidden font-mono text-[9px] text-[#8F9098] sm:block">
                LAB
              </span>
            </figcaption>
          </figure>

          {/* 03 — RECORTE DOS PRIMEIROS RASCUNHOS */}
          <figure className="group absolute bottom-0 left-[15%] z-30 w-[70%] border border-[#22D3EE]/50 bg-[#031427] p-2 shadow-2xl transition-[border-color,transform] duration-300 hover:-translate-y-1 hover:border-[#22D3EE] motion-reduce:transition-none sm:left-[23%] sm:w-[55%]">
            <div className="relative aspect-[600/373] overflow-hidden bg-[#0B1B3A]">
              <img
                src="/images/bastidores/rascunhos-400.webp"
                srcSet="/images/bastidores/rascunhos-400.webp 400w, /images/bastidores/rascunhos-600.webp 600w"
                sizes="(min-width: 1024px) 300px, 65vw"
                width={600}
                height={373}
                alt="Detalhe do caderno com wireframes e esboços das primeiras telas dos aplicativos"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>
            <figcaption className="flex items-center justify-between gap-2 px-1 pt-2 pb-1">
              <span className="font-mono text-[9px] leading-4 tracking-wide text-[#22D3EE] sm:text-[10px]">
                03 // PRIMEIROS RASCUNHOS
              </span>
              <span className="hidden font-mono text-[9px] text-[#8F9098] sm:block">
                IDEIAS
              </span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
