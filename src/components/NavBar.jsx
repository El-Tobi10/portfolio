import { useState } from "react";
import { Menu, X, Languages } from "lucide-react";

export const NavBar = ({ language, setLanguage }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const english = language === "en";
  const items = english
    ? [["Home", "#hero"], ["Games", "#games"], ["Lab", "#lab"], ["Software", "#software"], ["About", "#about"], ["Contact", "#contact"]]
    : [["Inicio", "#hero"], ["Videojuegos", "#games"], ["Laboratorio", "#lab"], ["Software", "#software"], ["Sobre mí", "#about"], ["Contacto", "#contact"]];

  return (
    <header className="site-header fixed">
      <nav className="nav-inner" aria-label={english ? "Main navigation" : "Navegación principal"}>
        <a className="brand-mark" href="#hero" onClick={() => setMenuOpen(false)}>
          <span className="brand-monogram">T</span>
          <span className="brand-name">TOBIAS ALFONSO<small>THE TOTTO STUDIOS · CREATIVE ARCHIVE</small></span>
        </a>
        <div className="desktop-nav">
          {items.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        </div>
        <div className="nav-actions">
          <button className="language-toggle" onClick={() => setLanguage(english ? "es" : "en")} aria-label={english ? "Cambiar idioma a español" : "Switch language to English"}>
            <Languages size={15} /> {english ? "EN" : "ES"} <span className="language-divider">/</span>{english ? "ES" : "EN"}
          </button>
          <button className="mobile-menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>
      {menuOpen && <div className="mobile-nav">
        {items.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
      </div>}
    </header>
  );
};