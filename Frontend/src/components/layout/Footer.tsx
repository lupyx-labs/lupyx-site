
const CONTACT_EMAIL = "";

// Coloque seu e-mail institucional acima
// quando a caixa de entrada estiver funcionando.
// Exemplo: contato@seudominio.com

export default function Footer() {
  const hasEmail = CONTACT_EMAIL.trim().length > 0;

  return (
    <footer
      id="footer"
      className="relative z-20 w-full bg-[#0B1B3A] text-white"
    >
      {/* CONTATO */}
      <section
        id="contato"
        className="scroll-mt-20 border-t border-white/10"
      >
        <div
          className="
            mx-auto max-w-[1440px]
            px-4 py-20
            sm:px-8
            lg:px-20 lg:py-28
          "
        >
          <div className="max-w-3xl">

            {/* IDENTIFICADOR */}
            <div className="mb-6 flex items-center gap-3">
              <span
                className="h-1.5 w-1.5 bg-[#22D3EE]"
                aria-hidden="true"
              />

              <span
                className="
                  font-mono text-[11px]
                  tracking-[0.16em]
                  text-[#22D3EE] uppercase
                "
              >
                04 // CONTATO
              </span>
            </div>

            {/* TÍTULO */}
            <h2
              className="
                font-heading
                text-[40px] leading-[1.1]
                font-bold tracking-[-0.04em]
                sm:text-[54px]
                lg:text-[64px]
              "
            >
              Vamos conversar?
            </h2>

            {/* DESCRIÇÃO */}
            <p
              className="
                mt-6 max-w-2xl
                font-body text-base leading-7
                text-[#C5D2E0]
                sm:text-lg sm:leading-8
              "
            >
              A Lupyx cria e evolui seus próprios
              produtos digitais. Quer acompanhar
              nossos projetos ou conhecer mais
              sobre o estúdio?
            </p>

            {/* BOTÃO */}
            <div className="mt-9">
              {hasEmail ? (
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="
                    inline-flex min-h-12
                    items-center justify-center
                    gap-3 bg-[#F4F8FB]
                    px-7 py-3
                    font-heading font-semibold
                    text-[#0B1B3A]
                    transition-colors duration-150
                    hover:bg-[#22D3EE]
                    focus-visible:outline-2
                    focus-visible:outline-offset-4
                    focus-visible:outline-[#22D3EE]
                  "
                >
                  Enviar e-mail
                  <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <div>
                  <a
                    href="https://github.com/lupyx-labs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex min-h-12
                      items-center justify-center
                      gap-3 bg-[#F4F8FB]
                      px-7 py-3
                      font-heading font-semibold
                      text-[#0B1B3A]
                      transition-colors duration-150
                      hover:bg-[#22D3EE]
                      focus-visible:outline-2
                      focus-visible:outline-offset-4
                      focus-visible:outline-[#22D3EE]
                    "
                  >
                    Conhecer nosso GitHub
                    <span aria-hidden="true">↗</span>
                  </a>

                  <p
                    className="
                      mt-4 font-body text-sm
                      text-[#A6B4C5]
                    "
                  >
                    Canal institucional de contato
                    em preparação.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* RODAPÉ INSTITUCIONAL */}
      <div
        className="
          border-t border-white/10
          bg-[#031427]
        "
      >
        <div
          className="
            mx-auto max-w-[1440px]
            px-4 py-10
            sm:px-8
            lg:px-20
          "
        >
          <div
            className="
              flex flex-col gap-8
              md:flex-row
              md:items-center
              md:justify-between
            "
          >
            {/* MARCA */}
            <div className="flex items-center gap-3">
              <img
                src="/brand/lupyx-header.webp"
                alt=""
                width={44}
                height={44}
                loading="lazy"
                className="h-11 w-11 object-contain"
              />

              <div>
                <span
                  className="
                    block font-heading text-2xl
                    font-semibold tracking-tight
                    text-white lowercase
                  "
                >
                  lupyx
                </span>

                <p
                  className="
                    font-body text-xs
                    text-[#A6B4C5]
                  "
                >
                  Estúdio de produtos digitais
                </p>
              </div>
            </div>

            {/* NAVEGAÇÃO */}
            <nav
              aria-label="Navegação do rodapé"
              className="
                flex flex-wrap items-center
                gap-x-6 gap-y-3
              "
            >
              <a
                href="#apps"
                className="text-sm text-[#C5D2E0] hover:text-[#22D3EE]"
              >
                Apps
              </a>

              <a
                href="#bastidores"
                className="text-sm text-[#C5D2E0] hover:text-[#22D3EE]"
              >
                Bastidores
              </a>

              <a
                href="#contato"
                className="text-sm text-[#C5D2E0] hover:text-[#22D3EE]"
              >
                Contato
              </a>

              <a
                href="https://github.com/lupyx-labs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#C5D2E0] hover:text-[#22D3EE]"
              >
                GitHub ↗
              </a>
            </nav>
          </div>

          {/* LINHA FINAL */}
          <div
            className="
              mt-10 flex flex-col gap-3
              border-t border-white/10
              pt-6
              sm:flex-row
              sm:items-center
              sm:justify-between
            "
          >
            <p className="font-body text-xs text-[#8F9FB4]">
              © {new Date().getFullYear()} Lupyx.
              Todos os direitos reservados.
            </p>

            <p
              className="
                font-mono text-[10px]
                tracking-wider
                text-[#8F9FB4] uppercase
              "
            >
              São José dos Campos · SP
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
