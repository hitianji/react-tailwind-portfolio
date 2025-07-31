import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "/Users/nautilus/Desktop/Portfolio/vite-project/src/components/StarBackground.jsx";
import { Navbar } from "@/components/Navbar";
import { HomeSection } from "../components/HomeSection";
import { AboutSection } from "../components/AboutSection";
import { EducationSection } from "../components/EducationSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { AwardsSection } from "../components/AwardsSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import  { TravelSection } from "../components/TravelSection";
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
            <EducationSection />
            <ExperienceSection />
            <AwardsSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
            <TravelSection />
        </main>
        {/* Footer */}
            <Footer />
    </div>);
};