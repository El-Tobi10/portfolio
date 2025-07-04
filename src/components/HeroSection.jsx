import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    return(
        <section 
        id="hero"
        className="relative min-h-screen flex flex-col items-start justify-center px-4 z-10">
            <div className="container max-w-4xl mx-auto text-left md:ml-10 space-y-6">

                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in">¡Hola! soy </span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1">
                    {" "}
                    Tobias
                    </span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
                    {" "}
                    Alfonso
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl opacity-0 animate-fade-in-delay-3">
                    Soy desarrollador de software en formación, apasionado por la
                    tecnología y con muchas ganas de seguir creciendo en el mundo IT.
                    Actualmente finalizo la Tecnicatura en Desarrollo de Software en
                    UADE, donde adquirí experiencia en bases de datos (creación,
                    mantenimiento y edición), diseño web y desarrollo de aplicaciones.
                </p>

                <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                    <a href="#projects" className="cosmic-button">
                    Mira mi trabajo
                    </a>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
            <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    )
}