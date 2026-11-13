import { useState } from "react";
import { Menu, X } from "lucide-react";

import {
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
  FaGithub,
} from "react-icons/fa6";



const links = [
  { label: "Apps", href: "#apps" },
  { label: "Bastidores", href: "#bastidores" },
  { label: "Contato", href: "#contato" },
];

const socialLinks = [
  { label: "Instagram", Icon: FaInstagram },
  { label: "LinkedIn", Icon: FaLinkedin },
  { label: "X", Icon: FaXTwitter },
  { label: "YouTube", Icon: FaYoutube },
  {
    label: "GitHub",
    Icon: FaGithub,
    href: "https://github.com/lupyx-labs",
  },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#45464e]/30 bg-[#031427]/80 backdrop-blur-xl">

      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-4 sm:px-8">

        {/* LOGO */}
        
        {/* LOGO OFICIAL LUPYX */}
        
{/* LOGO */}
        
{/* LOGO */}
<a
  href="/"
  aria-label="Lupyx - Página inicial"
  className="group flex items-center gap-3"
>
  <div className="flex h-14 w-14 items-center justify-center">
    <img
      src="/brand/escuro-semfundo.png"
      alt=""
      className="h-14 w-14 object-contain transition-transform duration-150 group-hover:scale-105"
    />
  </div>

  <span className="font-heading text-[34px] leading-[32px] font-medium tracking-tight text-[#D3E4FE] lowercase">
    lupyx
  </span>
</a>




        {/* LADO DIREITO */}
        <div className="hidden items-center gap-8 lg:flex">

          {/* NAVEGAÇÃO */}
          <nav
            className="flex items-center gap-8"
            aria-label="Navegação principal"
          >
            {links.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                aria-current={index === 0 ? "page" : undefined}
                className={
                  index === 0
                    ? "border-b-2 border-[#5de6ff] pb-1 font-body text-[15px] text-[#5de6ff]"
                    : "font-body text-[15px] text-[#c5c6cf] transition-colors hover:text-[#d3e4fe]"
                }
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* DIVISÓRIA */}
          <div className="h-4 w-px bg-[#45464e]/50" />

          {/* REDES SOCIAIS */}
          <div className="flex items-center gap-2">
            {socialLinks.map(({ label, Icon, href }) => {
              const style =
                "flex h-8 w-8 items-center justify-center border border-[#45464e]/40 text-[#c5c6cf] transition-colors hover:border-[#5de6ff] hover:text-[#5de6ff]";

              return href ? (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={style}
                >
                  <Icon size={16} />
                </a>
              ) : (
                <span
                  key={label}
                  title={`${label} — em breve`}
                  className={style}
                >
                  <Icon size={16} />
                </span>
              );
            })}
          </div>

          {/* AVATAR PROVISÓRIO */}
          <div
            aria-label="Identificador visual provisório"
            className="flex h-8 w-8 items-center justify-center border border-[#5de6ff]/40 bg-[#d3e4fe] font-mono text-[9px] font-bold text-[#031427]"
          >
            LPX
          </div>
        </div>

        {/* BOTÃO MOBILE */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center border border-[#45464e] text-[#d3e4fe] lg:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="lupyx-mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* NAVEGAÇÃO MOBILE */}
      {menuOpen && (
        <nav
          id="lupyx-mobile-menu"
          className="flex flex-col gap-6 border-t border-[#45464e]/30 bg-[#031427] px-6 py-8 lg:hidden"
          aria-label="Navegação móvel"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-body text-base text-[#d3e4fe] hover:text-[#5de6ff]"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
