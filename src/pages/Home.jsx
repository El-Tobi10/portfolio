import { ThemeToggle } from "@/components/ThemeToggle.jsx";
import { StarBackground } from "@/components/StarBackground.jsx";
import { NavBar } from "@/components/NavBar.jsx";
import { HeroSection } from "@/components/HeroSection.jsx";
import { Footer } from "@/components/Footer.jsx";
import { AboutSection } from "@/components/AboutSection.jsx";
import { SkillsSection } from "@/components/SkillsSection.jsx";
import { ProyectsSection } from "@/components/ProyectsSection.jsx";
import { ContactSection } from "@/components/ContactSection.jsx";

export const Home = () => {
    return <div className="min-h-screen bg-backgroud text-foreground overflow-x-hidden"> 
            {/*  Theme Toggle */}
            <ThemeToggle />        
            {/* Background effect */}
            <StarBackground/>

            {/* NavBar */}
            <NavBar />
            {/* Main content */}
            <main>
                <HeroSection/>
                <AboutSection/>
                <SkillsSection/>
                <ProyectsSection/>
                <ContactSection/>
            </main>

            {/* footer */}
            <Footer/>
        </div>
} 