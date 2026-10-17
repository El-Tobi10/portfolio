import { FlaskConical, ArrowUpRight } from "lucide-react";

const experiments = [
  { id: "A", titleEs: "Mecánicas y prototipos", titleEn: "Mechanics & prototypes", textEs: "Pruebas pequeñas para entender el movimiento, el ritmo, la respuesta del jugador y las ideas que merecen crecer.", textEn: "Small experiments to understand movement, pacing, player feedback and which ideas deserve to grow.", tags: ["GAMEPLAY", "ITERATION"] },
  { id: "B", titleEs: "Mundos y narrativa", titleEn: "Worlds & narrative", textEs: "Lore, personajes, diseño de niveles y narrativa ambiental para construir lugares que cuenten historias sin explicarlo todo.", textEn: "Lore, characters, level design and environmental storytelling for places that tell stories without explaining everything.", tags: ["LORE", "LEVEL DESIGN"] },
  { id: "C", titleEs: "Arte técnico", titleEn: "Technical art", textEs: "Exploraciones con Unreal Engine, Blender, materiales, iluminación y recursos visuales para encontrar una identidad propia.", textEn: "Explorations with Unreal Engine, Blender, materials, lighting and visual assets to find a distinct identity.", tags: ["UNREAL", "BLENDER"] }
];

export const LabSection = ({ english }) => (
  <section id="lab" className="lab-section">
    <div className="section-wrap content-section">
      <div className="section-heading">
        <div><p className="eyebrow"><span className="eyebrow-line" />{english ? "FIELD NOTES" : "NOTAS DE CAMPO"}</p><h2>{english ? "The workshop" : "El laboratorio"}<span className="heading-period">.</span></h2></div>
        <p className="section-intro">{english ? "Not everything starts as a game. Some things start as a question, a sketch or a broken prototype." : "No todo empieza como un juego. Algunas cosas empiezan como una pregunta, un boceto o un prototipo que no funciona."}</p>
      </div>
      <div className="lab-grid">
        {experiments.map((item) => <article className="lab-card" key={item.id}>
          <div className="lab-card-top"><span className="lab-index">FILE / {item.id}</span><FlaskConical size={18} /></div>
          <h3>{english ? item.titleEn : item.titleEs}</h3>
          <p>{english ? item.textEn : item.textEs}</p>
          <div className="lab-tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
        </article>)}
      </div>
      <div className="lab-footnote"><span className="red-rule" />{english ? "This section will grow alongside the projects." : "Esta sección va a crecer junto con los proyectos."}<ArrowUpRight size={15} /></div>
    </div>
  </section>
);