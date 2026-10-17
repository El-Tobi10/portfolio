import { useState } from "react";
import { NavBar } from "@/components/NavBar.jsx";
import { HeroSection } from "@/components/HeroSection.jsx";
import { GameSection } from "@/components/GameSection.jsx";
import { LabSection } from "@/components/LabSection.jsx";
import { SoftwareSection } from "@/components/SoftwareSection.jsx";
import { AboutSection } from "@/components/AboutSection.jsx";
import { ContactSection } from "@/components/ContactSection.jsx";
import { Footer } from "@/components/Footer.jsx";

export const Home = () => {
  const [language, setLanguage] = useState("es");
  const english = language === "en";

  return (
    <div className="portfolio-shell">
      <div className="grain-overlay" aria-hidden="true" />
      <NavBar language={language} setLanguage={setLanguage} />
      <main>
        <HeroSection english={english} />
        <GameSection english={english} />
        <LabSection english={english} />
        <SoftwareSection english={english} />
        <AboutSection english={english} />
        <ContactSection english={english} />
      </main>
      <Footer english={english} />
    </div>
  );
};