
import Wolf from "./Wolf";

export default function Hero() {
  return (
    
    <section
      id="hero"
      className="
        relative
        flex
        min-h-[92vh]
        w-full
        flex-col
        justify-center
        overflow-hidden
        bg-[#031427]
        px-6
        pt-12
        pb-10

        sm:px-12

        lg:justify-end
        lg:px-20
        lg:pt-0
        lg:pb-16
      "
    >

      {/* EFEITOS DE FUNDO DO STITCH */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-[#0B1B3A] blur-[140px]" />

        <div className="absolute top-1/3 right-1/4 h-[500px] w-[500px] rounded-full bg-[#1B2B3F]/40 blur-[160px]" />

        <div className="absolute right-0 bottom-0 h-[400px] w-[600px] rounded-full bg-[#5DE6FF]/10 blur-[180px]" />
      </div>

      {/* LOBO INTERATIVO */}
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
        <div
          className="
            w-[110%]
            max-w-[440px]
            translate-x-[50px]
            -scale-x-100

            lg:w-[760px]
            lg:max-w-none
            lg:translate-x-[150px]

            xl:w-[980px]
            xl:translate-x-[250px]
          "
        >
          <Wolf />
        </div>
      </div>

      {/* IDENTIFICADOR SUPERIOR */}
      <div className="absolute top-8 left-6 z-10 flex items-center gap-3 sm:left-12 lg:left-20">
        <span className="h-2 w-2 animate-pulse bg-[#5DE6FF]" />

        <span className="font-mono text-[10px] tracking-widest text-[#8F9098] uppercase">
          LPX // MATILHA.V1 · SÃO JOSÉ DOS CAMPOS
        </span>
      </div>

      {/* CONTEÚDO À ESQUERDA */}
      <div className="relative z-10 flex max-w-3xl flex-col items-start">

        {/* ETIQUETA */}
        <div className="mb-6 inline-flex items-center gap-2 bg-[#102034]/60 px-3 py-1 backdrop-blur-md">
          <span className="h-1.5 w-1.5 bg-[#5DE6FF]" />

          <span className="font-mono text-[10px] tracking-widest text-[#5DE6FF] uppercase">
            Estúdio de Produtos Digitais
          </span>
        </div>

        {/* TÍTULO PRINCIPAL */}
        
        <h1
          className="
            font-heading
            text-[34px]
            leading-[38px]
            font-bold
            tracking-[-0.03em]
            text-[#D3E4FE]
            uppercase

            sm:text-[42px]
            sm:leading-[46px]

            lg:text-[76px]
            lg:leading-[80px]

            xl:text-[80px]
            xl:leading-[84px]
            xl:tracking-[-0.04em]
          "
        >
          Apps feitos por
          <br />
          uma matilha pequena.
        </h1>


        {/* DESCRIÇÃO */}
        <p className="mt-5 max-w-xl font-body text-[15px] leading-[24px] text-[#C5C6CF] sm:text-[17px] sm:leading-7 lg:mt-6 lg:max-w-[650px] lg:text-[20px] lg:leading-8">
          A Lupyx é um estúdio independente de produtos digitais.
          Criamos, lançamos e cuidamos de cada app, do código ao
          social media.
        </p>

        {/* BOTÃO E INDICADOR */}
        <div className="mt-8 flex flex-col gap-5 sm:mt-10 sm:flex-row sm:items-center sm:gap-8 lg:mt-12">

          <a
            href="#apps"
            className="inline-flex h-12 items-center justify-center bg-[#D3E4FE] px-8 font-heading text-[17px] sm:text-xl font-semibold tracking-tight text-[#0B1B3A] transition-colors duration-150 hover:bg-[#5DE6FF]"
          >
            Explorar Produtos
          </a>

          <div className="flex items-center gap-3">
            <div className="h-9 w-px bg-[#5DE6FF]" />

            <div className="flex flex-col">
              <span className="font-mono text-[10px] tracking-widest text-[#8F9098] uppercase">
                Role para baixo
              </span>

              <span className="font-mono text-[10px] tracking-wider text-[#5DE6FF]">
                01 // PRODUTOS
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
