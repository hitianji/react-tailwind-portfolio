import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "/Users/nautilus/Desktop/Portfolio/vite-project/src/components/StarBackground.jsx";
import { Navbar } from "@/components/Navbar";
import { HomeSection } from "../components/HomeSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";


export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
        <ThemeToggle />
        {/* Background Effects */}
        <StarBackground />

        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <main>
            <HomeSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
        </main>
        {/* Footer */}
            <Footer />
    </div>);
};