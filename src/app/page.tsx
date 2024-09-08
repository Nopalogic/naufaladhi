import HeroSection from "@/components/HeroSection";
import Contact from "@/components/contact/Contact";
import ExperienceSection from "@/components/experience/ExperienceSection";
import ProjectSection from "@/components/project/ProjectSection";

export default function Home() {
  return (
    <>
      <main>
        <HeroSection />
        <ProjectSection />
        <ExperienceSection />

        <section id="contact" className="bg-[#0D1117] pt-20">
          <Contact />
        </section>
      </main>
    </>
  );
}
