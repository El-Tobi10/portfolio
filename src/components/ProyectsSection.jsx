import { ArrowRight, ExternalLink, Github } from "lucide-react";

const proyects = [
    {
        id: 1,
        title: "Ecommerce de hardware",
        description:"Tienda de ecommerce con mapa para venta local, modelo 3D interactivo didáctico, chat con IA (en producción, se agregará carrito de compras).",
        image: "./proyectos/pczone.png",
        tags: ["Next", "TailwindCSS", "Supabase", "Prisma", "TypeScript"],
        demoUrl: "#",
        githubUrl: "https://github.com/pcZone-org/pczone-web",
    },
    {
        id: 2,
        title: "Eclipse",
        description:"Eclipse es una aplicación Android desarrollada con Kotlin y Jetpack Compose, pensada para los verdaderos fanáticos del anime y manga. Permite explorar títulos populares, ver detalles, personajes, trailers, openings, y gestionar tus favoritos.",
        image: "./proyectos/eclipse_index.png",
        tags: ["Kotlin", "Android Studio"],
        demoUrl: "#",
        githubUrl: "https://github.com/El-Tobi10/eclipseAnime",
    },
    {
        id: 3,
        title: "Best Gamer",
        description:"En BestGamer puedes encontrar informacion sobre algunos Videojuegos, donde puedes ver de que se trata, un trailer oficial, donde puedes comprarlo y los requisitos minimos y recomendados para jugarlos.",
        image: "./proyectos/BestGamer.png",
        tags: ["HTML", "CSS", "JavaScript", "PHP", "Bootstrap", "xampp", "Ajax", "Jquery"],
        demoUrl: "#",
        githubUrl: "https://github.com/El-Tobi10/repo",
    }
]

export const ProyectsSection = () => {
    return(
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    <span className="text-primary">Proyectos</span> destacados
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Aquí algunos de mis proyectos más destacados, donde he aplicado mis
                    habilidades y conocimientos en desarrollo web y mobile.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {proyects.map((project, key) => (
                        <div
                            key={key}
                            className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                        >
                            <div className="relative aspect-video overflow-hidden">
                                <img
                                src={project.image}
                                alt={project.title}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4">
                                    {project.description}
                                </p>
                                <div className="flex justify-between items-center">
                                    <div className="flex space-x-3">
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <ExternalLink size={20} />
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                        >
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        className="cosmic-button w-fit flex items-center mx-auto gap-2"
                        target="_blank"
                        href="https://github.com/El-Tobi10"
                    >
                        Revisa mi GitHub <ArrowRight size={16} />
                    </a>
                </div>
            </div>

        </section>
    )
}