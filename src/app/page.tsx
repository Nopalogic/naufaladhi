import HeroSection from "@/components/HeroSection";
import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/experience/ExperienceSection";
import ProjectSection from "@/components/project/ProjectSection";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <ProjectSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </>
  );
}
