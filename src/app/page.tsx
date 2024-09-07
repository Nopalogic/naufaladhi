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

        <section
          id="experience"
          className="bg-gradient-to-b from-[#071F2B] from-55% to-teal-900 pt-36 md:pb-32"
        >
          <ExperienceSection />
        </section>

        <section id="contact" className="bg-[#0D1117] pt-20">
          <Contact />
        </section>
      </main>
    </>
  );
}
