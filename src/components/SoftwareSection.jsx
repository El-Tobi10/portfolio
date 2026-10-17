import { ArrowUpRight, Code2, Github } from "lucide-react";

const projects = [
  {
    title: "Eclipse",
    category: "ANDROID · KOTLIN",
    descriptionEs: "Aplicación para descubrir anime y manga, consultar información y guardar favoritos. Integra Jikan API, Firebase y almacenamiento local.",
    descriptionEn: "An app to discover anime and manga, explore details and save favourites. Integrates Jikan API, Firebase and local storage.",
    image: "/proyectos/eclipse_index.png",
    url: "https://github.com/El-Tobi10/eclipseAnime",
    tags: ["Kotlin", "Jetpack Compose", "Firebase"]
  },
  {
    title: "PCZone",
    category: "WEB · E-COMMERCE",
    descriptionEs: "Concepto de tienda de hardware con catálogo, filtros y una experiencia pensada para explorar componentes y armar una PC.",
    descriptionEn: "A hardware-store concept with a catalogue, filters and an experience designed to explore components and build a PC.",
    image: "/proyectos/pczone.png",
    url: "https://github.com/pcZone-org/pczone-web",
    tags: ["Next.js", "TypeScript", "Prisma"]
  },
  {
    title: "Best Gamer",
    category: "WEB · VIDEOJUEGOS",
    descriptionEs: "Sitio informativo de videojuegos con sinopsis, tráilers oficiales, tiendas y requisitos técnicos.",
    descriptionEn: "An informational games site with summaries, official trailers, store links and system requirements.",
    image: "/proyectos/BestGamer.png",
    url: "https://github.com/El-Tobi10/repo",
    tags: ["JavaScript", "PHP", "Bootstrap"]
  }
];

export const SoftwareSection = ({ english }) => (
  <section id="software" className="section-wrap content-section software-section">
    <div className="section-heading">
      <div><p className="eyebrow"><span className="eyebrow-line" />{english ? "THE TOOLBOX" : "LA CAJA DE HERRAMIENTAS"}</p><h2>{english ? "Software & systems" : "Software y sistemas"}<span className="heading-period">.</span></h2></div>
      <p className="section-intro">{english ? "The engineering behind the experience: apps, interfaces, data and the systems that make things work." : "La ingeniería detrás de la experiencia: aplicaciones, interfaces, datos y sistemas que hacen que las cosas funcionen."}</p>
    </div>
    <div className="software-grid">
      {projects.map((project) => <article className="software-card" key={project.title}>
        <a className="software-image" href={project.url} target="_blank" rel="noreferrer" aria-label={(english ? "Open repository for " : "Abrir repositorio de ") + project.title}>
          <img src={project.image} alt={project.title} loading="lazy" />
          <span className="software-image-link"><ArrowUpRight size={17} /></span>
        </a>
        <div className="software-copy">
          <span className="software-category"><Code2 size={13} />{project.category}</span>
          <h3>{project.title}</h3>
          <p>{english ? project.descriptionEn : project.descriptionEs}</p>
          <div className="software-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
          <a className="repository-link" href={project.url} target="_blank" rel="noreferrer"><Github size={15} /> {english ? "View repository" : "Ver repositorio"} <ArrowUpRight size={14} /></a>
        </div>
      </article>)}
    </div>
  </section>
);