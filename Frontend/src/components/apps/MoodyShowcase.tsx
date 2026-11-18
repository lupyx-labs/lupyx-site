
export default function MoodyShowcase() {
  return (
    <article
      id="moody"
      className="
        relative z-20 grid
        grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]
        items-center gap-3
        sm:gap-6
        md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]
        lg:grid-cols-12 lg:gap-16
      "
    >

      {/* COLUNA ESQUERDA — CAPA MOODY */}
      <div
        className="
          order-1 flex min-w-0 w-full
          items-center justify-center
          lg:col-span-5
        "
      >
        <img
          src="/images/apps/moody/moodylogo.png"
          alt="Prévia do aplicativo Moody"
          loading="lazy"
          className="
            block h-auto w-full
            max-w-[160px]
            object-contain
            sm:max-w-[250px]
            md:max-w-[300px]
            lg:max-w-[400px]
          "
        />
      </div>

      {/* COLUNA DIREITA — INFORMAÇÕES */}
      <div
        className="
          order-2 flex min-w-0
          flex-col items-start
          lg:col-span-7 lg:pl-8
        "
      >

        {/* NÚMERO E STATUS */}
        <div
          className="
            mb-3 flex flex-col
            items-start gap-2
            sm:flex-row sm:items-baseline
            sm:gap-4
          "
        >
          <span
            className="
              select-none font-heading
              text-[40px] font-bold leading-none
              text-slate-300
              sm:text-6xl
              lg:text-8xl
            "
          >
            02
          </span>

          <span
            className="
              inline-flex max-w-full
              items-center gap-2
              bg-slate-200/80
              px-2 py-1
              sm:px-3
            "
          >
            <span
              className="
                h-1.5 w-1.5 shrink-0
                bg-[#00CBE6]
              "
            />

            <span
              className="
                font-mono text-[9px]
                font-semibold leading-tight
                tracking-normal text-slate-800
                uppercase
                sm:text-[10px]
                sm:tracking-wide
              "
            >
              EM DESENVOLVIMENTO
            </span>
          </span>
        </div>

        {/* NOME */}
        <h3
          className="
            mt-1 font-heading
            text-2xl font-bold tracking-tight
            text-slate-950
            sm:text-3xl
            md:text-4xl
            lg:text-5xl
          "
        >
          Moody
        </h3>

        {/* DESCRIÇÃO COMPACTA PARA CELULARES */}
        <p
          className="
            mt-3 font-body text-sm
            leading-[1.5] text-slate-700
            md:hidden
          "
        >
          Descubra bares, festas e eventos
          com promoções e check-ins
          da comunidade.
        </p>

        {/* DESCRIÇÃO COMPLETA */}
        <p
          className="
            mt-6 hidden max-w-xl
            font-body text-base leading-relaxed
            text-slate-700
            md:block lg:text-lg
          "
        >
          Descubra para onde sair com mais confiança.
          O Moody está sendo desenvolvido para
          conectar pessoas a bares, baladas e eventos,
          reunindo promoções e informações sobre
          a vibe dos lugares por meio de check-ins
          da comunidade.
        </p>

        {/* INFORMAÇÕES TÉCNICAS */}
        <div
          className="
            my-8 hidden w-full max-w-xl
            grid-cols-3 gap-3
            border-y border-slate-300/80
            py-4
            md:grid
            lg:gap-6
          "
        >
          <div className="min-w-0">
            <span
              className="
                block font-mono text-[10px]
                text-slate-500 uppercase
              "
            >
              Plataforma
            </span>

            <span
              className="
                font-mono text-xs font-semibold
                text-slate-900
              "
            >
              MOBILE
            </span>
          </div>

          <div className="min-w-0">
            <span
              className="
                block font-mono text-[10px]
                text-slate-500 uppercase
              "
            >
              Segmento
            </span>

            <span
              className="
                font-mono text-xs font-semibold
                text-slate-900
              "
            >
              NIGHTLIFE
            </span>
          </div>

          <div className="min-w-0">
            <span
              className="
                block font-mono text-[10px]
                text-slate-500 uppercase
              "
            >
              Estágio
            </span>

            <span
              className="
                block break-words
                font-mono text-[10px]
                font-semibold
                text-slate-900
                lg:text-xs
              "
            >
              EM DESENVOLVIMENTO
            </span>
          </div>
        </div>

        {/* RODAPÉ */}
        <span
          className="
            hidden font-heading text-lg
            font-medium text-slate-600
            md:block
          "
        >
          Estamos construindo a próxima experiência.
        </span>

      </div>
    </article>
  );
}
