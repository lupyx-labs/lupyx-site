
export default function MoodyShowcase() {
  return (
    <article
      id="moody"
      className="
        relative z-20
        grid grid-cols-1
        items-center gap-12
        lg:grid-cols-12 lg:gap-16
      "
    >

      
        {/* COLUNA ESQUERDA — CAPA MOODY */}
        <div
        className="
            order-2 flex w-full justify-center
            lg:order-1 lg:col-span-5
        "
        >
        <img
            src="/images/apps/moody/moodylogo.png"
            alt="Prévia do aplicativo Moody"
            loading="lazy"
            className="
            block h-auto w-full
            max-w-[320px]
            object-contain
            lg:max-w-[400px]
            "
        />
        </div>


      {/* COLUNA DIREITA — INFORMAÇÕES */}
      <div
        className="
          order-1 flex flex-col items-start
          lg:order-2 lg:col-span-7
          lg:pl-8
        "
      >

        {/* NUMERAÇÃO E STATUS */}
        <div className="mb-4 flex items-baseline gap-4">
          <span
            className="
              select-none font-heading
              text-6xl font-bold leading-none
              text-slate-300
              sm:text-7xl lg:text-8xl
            "
          >
            02
          </span>

          <span
            className="
              inline-flex items-center gap-2
              bg-slate-200/80 px-3 py-1
            "
          >
            <span className="h-2 w-2 bg-[#00CBE6]" />

            <span
              className="
                font-mono text-[10px]
                font-semibold tracking-widest
                text-slate-800 uppercase
              "
            >
              EM DESENVOLVIMENTO
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
          Moody
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
            my-8 grid w-full max-w-xl
            grid-cols-3 gap-3
            border-y border-slate-300/80
            py-4 sm:gap-6
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
              NIGHTLIFE
            </span>
          </div>

          <div>
            <span className="block font-mono text-[10px] text-slate-500 uppercase">
              Estágio
            </span>
            <span className="font-mono text-xs font-semibold text-slate-900">
              EM DESENVOLVIMENTO
            </span>
          </div>
        </div>

        {/* RODAPÉ DO PRODUTO */}
        <span className="font-heading text-lg font-medium text-slate-600">
          Estamos construindo a próxima experiência.
        </span>

      </div>
    </article>
  );
}
