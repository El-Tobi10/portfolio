import { ArrowDownToLine, Compass, Gamepad2, Code2 } from "lucide-react";

export const AboutSection = ({ english }) => (
  <section id="about" className="about-section">
    <div className="section-wrap about-layout">
      <div className="about-heading">
        <p className="eyebrow"><span className="eyebrow-line" />{english ? "THE PERSON BEHIND THE WORLDS" : "LA PERSONA DETRÁS DE LOS MUNDOS"}</p>
        <h2>{english ? <>A developer by trade.<br /><em>A worldbuilder by instinct.</em></> : <>Desarrollador por oficio.<br /><em>Creador de mundos por instinto.</em></>}</h2>
        <p className="about-copy">{english
          ? "I'm a software developer with a growing focus on game development. I enjoy the point where systems, visual identity and storytelling meet — from a well-built interface to a strange world that feels alive."
          : "Soy desarrollador de software y estoy orientando cada vez más mi camino hacia los videojuegos. Me interesa el punto donde se cruzan los sistemas, la identidad visual y la narrativa: desde una interfaz bien construida hasta un mundo extraño que se sienta vivo."}</p>
        <p className="about-copy">{english
          ? "My software background helps me approach creative projects with structure, curiosity and a willingness to iterate. I'm learning by building, documenting the process and being honest about what is — and isn't — finished."
          : "Mi formación en software me ayuda a encarar proyectos creativos con estructura, curiosidad y ganas de iterar. Aprendo construyendo, documentando el proceso y siendo claro sobre lo que está —y lo que todavía no está— terminado."}</p>
        <a className="button-outline" href="/proyectos/TobiasAlfonsoCV.pdf" target="_blank" rel="noreferrer"><ArrowDownToLine size={16} /> {english ? "Open my CV" : "Ver mi CV"}</a>
      </div>
      <div className="about-principles">
        <article><span className="principle-icon"><Gamepad2 size={20} /></span><div><h3>{english ? "Games first" : "Videojuegos primero"}</h3><p>{english ? "Building interactive experiences with personality." : "Crear experiencias interactivas con personalidad."}</p></div></article>
        <article><span className="principle-icon"><Compass size={20} /></span><div><h3>{english ? "Curiosity as a compass" : "La curiosidad como brújula"}</h3><p>{english ? "Exploring mechanics, atmosphere and unusual ideas." : "Explorar mecánicas, atmósferas e ideas poco comunes."}</p></div></article>
        <article><span className="principle-icon"><Code2 size={20} /></span><div><h3>{english ? "Engineering with intent" : "Programar con intención"}</h3><p>{english ? "Using technical foundations to bring creative ideas to life." : "Usar bases técnicas para convertir ideas creativas en experiencias."}</p></div></article>
        <div className="studio-signature"><span className="signature-symbol">TTS</span><div><strong>THE TOTTO STUDIOS</strong><small>{english ? "PERSONAL CREATIVE LABEL" : "SELLO CREATIVO PERSONAL"}</small></div></div>
      </div>
    </div>
  </section>
);