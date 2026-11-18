
export default function DawnTransition() {
  return (
    <section
      id="amanhecer"
      className="
        relative
        w-full
        overflow-hidden
        bg-gradient-to-b
        from-[#031427]
        via-[#0b1c30]
        to-[#f4f8fb]
        px-6
        py-28
        text-[#D3E4FE]
        sm:px-12
        lg:px-20
      "
    >
      <div
        className="
          relative
          z-20
          mx-auto
          flex
          max-w-[1440px]
          flex-col
          items-center
          text-center
        "
      >
        {/* IDENTIFICADOR */}
        <div className="mb-6 flex items-center gap-2">
          <span
            className="
              font-mono
              text-[12px]
              font-medium
              leading-4
              tracking-[0.08em]
              text-[#5DE6FF]
              uppercase
            "
          >
            01 / O AMANHECER
          </span>
        </div>

        {/* FRASE PRINCIPAL */}
        <blockquote
          className="
            max-w-4xl
            font-heading
            text-[28px]
            leading-[34px]
            font-semibold
            tracking-[-0.02em]
            sm:text-[48px]
            sm:leading-[52px]
            sm:tracking-[-0.03em]
          "
        >
          “Da escuridão, produtos que funcionam à luz do dia.”
        </blockquote>

        {/* SUBTÍTULO TÉCNICO */}
        <p
          className="
            mt-6
            font-mono
            text-[10px]
            font-medium
            leading-[14px]
            tracking-[0.1em]
            text-[#8F9098]
            uppercase
          "
        >
          SILÊNCIO NOTURNO · ENGENHARIA DE PRECISÃO · IMPACTO DIURNO
        </p>

        {/* LINHA DE DESTAQUE */}
        <div
          className="mt-10 h-px w-16 bg-[#5DE6FF]/60"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
