import { ArrowDown, ArrowUpRight, Sparkles } from "lucide-react";

export const HeroSection = ({ english }) => (
  <section id="hero" className="hero-section section-wrap">
    <div className="hero-copy">
      <div className="eyebrow"><span className="eyebrow-line" />{english ? "INDEPENDENT GAME DEVELOPER · SOFTWARE DEVELOPER" : "DESARROLLO DE VIDEOJUEGOS · DESARROLLO DE SOFTWARE"}</div>
      <p className="hero-pretitle">{english ? "A PERSONAL ARCHIVE OF WORLDS YET TO BE" : "UN ARCHIVO PERSONAL DE MUNDOS POR NACER"}</p>
      <h1>{english ? <>Dark worlds.<br /><em>Strange ideas.</em></> : <>Mundos oscuros.<br /><em>Ideas extrañas.</em></>}</h1>
      <p className="hero-description">{english
        ? "I build interactive experiences, experiment with unusual mechanics and turn ideas into worlds worth getting lost in."
        : "Creo experiencias interactivas, experimento con mecánicas poco convencionales y convierto ideas en mundos donde vale la pena perderse."}</p>
      <div className="hero-actions">
        <a className="button-primary" href="#games">{english ? "Explore my games" : "Explorar videojuegos"} <ArrowUpRight size={17} /></a>
        <a className="text-link" href="#about">{english ? "A little about me" : "Un poco sobre mí"}</a>
      </div>
      <div className="hero-note"><Sparkles size={15} /><span>{english ? "Currently building · Learning by making" : "Creando en proceso · Aprender haciendo"}</span></div>
    </div>
    <div className="hero-art" aria-label={english ? "Abstract dark fantasy artwork" : "Composición abstracta de fantasía oscura"}>
      <div className="art-halo" />
      <div className="art-moon" />
      <div className="art-cathedral art-cathedral-back" />
      <div className="art-cathedral art-cathedral-front" />
      <div className="art-foreground" />
      <div className="art-frame"><span>FIG. 001</span><span>THE UNKNOWN</span></div>
      <div className="art-caption"><span className="caption-number">01 / 05</span><span>{english ? "THE ARCHIVE OF UNFINISHED WORLDS" : "EL ARCHIVO DE LOS MUNDOS INACABADOS"}</span></div>
      <div className="art-seal">T<span>✳</span>S</div>
    </div>
    <a className="scroll-cue" href="#games"><span>{english ? "DESCEND INTO THE ARCHIVE" : "DESCENDER AL ARCHIVO"}</span><ArrowDown size={15} /></a>
  </section>
);