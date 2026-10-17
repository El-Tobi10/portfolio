import { ArrowUpRight, Gamepad2, ScrollText, Wrench } from "lucide-react";

const games = [
  {
    number: "01",
    title: "Crimson Faith: The Heretic",
    typeEs: "SOULSLIKE · FANTASÍA OSCURA",
    typeEn: "SOULSLIKE · DARK FANTASY",
    descriptionEs: "Un mundo marcado por un culto antiguo, profetas exiliados y una verdad enterrada bajo las raíces del bosque. Un proyecto centrado en atmósfera, narrativa ambiental y combate.",
    descriptionEn: "A world shaped by an ancient cult, exiled prophets and a truth buried beneath the forest roots. A project focused on atmosphere, environmental storytelling and combat.",
    statusEs: "En desarrollo conceptual",
    statusEn: "Concept development",
    cover: "qlifot-cover",
    tools: "UNREAL ENGINE · WORLD BUILDING"
  },
  {
    number: "02",
    title: "Migajerismo",
    typeEs: "PLATAFORMAS · COMEDIA INCÓMODA",
    typeEn: "PLATFORMER · UNCOMFORTABLE COMEDY",
    descriptionEs: "Un humanoide con cabeza de paloma debe rescatar a una mujer atrapada por su ex. Migajas como puntuación, controles que se invierten y mecánicas inspiradas en vínculos tóxicos.",
    descriptionEn: "A pigeon-headed humanoid must rescue a woman trapped by her ex. Crumbs as score, reversed controls and mechanics inspired by toxic relationships.",
    statusEs: "Prototipo en desarrollo",
    statusEn: "Prototype in development",
    cover: "crumbs-cover",
    tools: "UNREAL ENGINE 5 · GAMEPLAY PROTOTYPING"
  }
];

export const GameSection = ({ english }) => (
  <section id="games" className="section-wrap content-section">
    <div className="section-heading">
      <div><p className="eyebrow"><span className="eyebrow-line" />{english ? "THE MAIN QUEST" : "LA MISIÓN PRINCIPAL"}</p><h2>{english ? "Worlds in the making" : "Mundos en construcción"}<span className="heading-period">.</span></h2></div>
      <p className="section-intro">{english ? "Games are where my technical side meets the strange stories I want to tell." : "Los videojuegos son el lugar donde mi lado técnico se encuentra con las historias extrañas que quiero contar."}</p>
    </div>
    <div className="game-list">
      {games.map((game) => <article className="game-card" key={game.number}>
        <div className={"game-cover " + game.cover}>
          <div className="cover-grain" />
          <span className="cover-index">PROJECT {game.number}</span>
          {game.number === "01" ? 
          <>
            <img src="../proyectos/ilustracionCFH.png" alt="Crimson Faith: The Heretic" className="cover-image" />
            <div className="cover-wordmark">{english ? "Crimson Faith".toUpperCase() : "LA FÉ CARMESÍ"}</div>
            <span className="cover-subtitle">{english ? "THE HERETIC" : "EL HEREJE"}</span>
          </>
//                      <div className="qlifot-sun" />
//
//            <div className="qlifot-spire spire-one" />
//
//            <div className="qlifot-spire spire-two" />
//
//            <div className="qlifot-forest" />
//
//            <div className="background" href="../proyectos/ilustracionCFH.png" />
//
          : 
          
          <>
            <div className="crumb-moon" />
            <div className="pigeon-shape">✦</div>
            <div className="crumb crumb-one">✳</div>
            <div className="crumb crumb-two">✳</div>
            <div className="crumb crumb-three">✳</div>
            <div className="cover-wordmark crumb-wordmark">MIGAJERISMO</div>
            <span className="cover-subtitle">{english ? "LOVE LEAVES CRUMBS" : "EL AMOR DEJA MIGAJAS"}</span>
          </>}
          <span className="cover-status">{english ? "WORK IN PROGRESS" : "EN DESARROLLO"}</span>
        </div>
        <div className="game-details">
          <div className="project-meta"><span>{game.number}</span><span>{english ? game.typeEn : game.typeEs}</span></div>
          <h3>{game.title}</h3>
          <p>{english ? game.descriptionEn : game.descriptionEs}</p>
          <div className="project-footer"><span className="project-status"><span className="status-dot" />{english ? game.statusEn : game.statusEs}</span><span className="project-tools"><Wrench size={13} /> {game.tools}</span></div>
        </div>
      </article>)}
    </div>
    <p className="honesty-note"><ScrollText size={15} />{english ? "Visuals on this page are portfolio concept art, not screenshots of finished gameplay." : "Las imágenes de esta sección son composiciones conceptuales del portfolio, no capturas de gameplay terminado."}</p>
  </section>
);