import { useState } from 'react';
import { cn } from "@/lib/utils";

const skills = [
    // Frontend 
    { name: 'HTML', level: 95, category: "Frontend" },
    { name: 'CSS', level: 95, category: "Frontend" },
    { name: 'JavaScript', level: 40, category: "Frontend" },
    { name: "TypeScript", level: 30, category: "frontend" },
    { name: 'React', level: 60, category: "Frontend" },
    { name: "NextJS", level: 50, category: "Frontend" },
    { name: "Tailwind CSS", level: 80, category: "Frontend" },
    { name: "Boostrap", level: 95, category: "Frontend" },
    
    // Backend 
    { name: 'Java', level: 50, category: "Backend" },
    { name: 'Python', level: 50, category: "Backend" },
    { name: "PHP", level: 70, category: "Backend" },
    { name: "PostgreSQL", level: 70, category: "Backend" },
    { name: "MySQL", level: 70, category: "Backend" },
    { name: "MongoDB", level: 10, category: "Backend" },
    { name: "NodeJS", level: 30, category: "backend" },
    
    // Herramientas
    { name: "Git/Github", level: 80, category: "Herramientas" },
    { name: "Figma", level: 90, category: "Herramientas" },
    { name: "VS Code", level: 95, category: "Herramientas" },
    { name: "Linux", level: 50, category: "Herramientas" },
]

const categorias = ["Todas", "Frontend", "Backend", "Herramientas"]

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("Todas");

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "Todas" || skill.category === activeCategory
    );
    return(
        
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Mis <span className="text-primary">Habilidades</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categorias.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
                                activeCategory === category
                                ? "bg-primary text-primary-foreground"
                                : "bg-secondary/70 text-forefround hover:bd-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div
                        key={key}
                        className="bg-card p-6 rounded-lg shadow-xs card-hover"
                        >
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg"> {skill.name}</h3>
                        </div>
                        <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div
                            className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                            style={{ width: skill.level + "%" }}
                            />
                        </div>

                        <div className="text-right mt-1">
                            <span className="text-sm text-muted-foreground">
                            {skill.level}%
                            </span>
                        </div>
                        </div>
                    ))}
                </div>
        </div>
        </section>
    )
}