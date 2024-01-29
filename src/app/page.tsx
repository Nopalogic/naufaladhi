import Contact from "@/components/contact/Contact";
import ExperienceSection from "@/components/experience/ExperienceSection";
import ProjectSection from "@/components/project/ProjectSection";
import Image from "next/image";
import OurnamentImage from "/public/images/hero-ournament.png";
import profilePicture from "/public/naufal-bg.png";

export default function Home() {
  return (
    <>
      <section id="home" className="flex h-screen items-center bg-slate-900">
        <Image
          src={OurnamentImage}
          loading="lazy"
          width="1000"
          height="1000"
          alt=""
          className="pointer-events-none absolute top-0 z-10 min-w-[500px] sm:min-w-[1000px]"
        />
        <div className="container">
          <div className="flex flex-wrap items-center">
            <div className="w-full self-center px-4 lg:w-1/2">
              <h1 className="text-base font-semibold text-blue-300 md:text-xl">
                Hi, Im
                <span className="mt-1 block text-4xl font-bold text-white lg:text-5xl">
                  Naufal Adhi
                </span>
              </h1>
              <h2 className="mb-5 text-lg font-medium text-neutral-300 lg:text-2xl">
                Student &{" "}
                <span className="text-gray-500">
                  Full Stack Web Developer Wanna be
                </span>
              </h2>
            </div>

            <div className="w-full self-end px-4 lg:w-1/2">
              <div className="relative mt-10 lg:right-0 lg:mt-0">
                <Image
                  src={profilePicture}
                  alt="Naufal Adhi"
                  className="mx-auto max-w-full lg:w-8/12"
                  width={500}
                  height={500}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="bg-slate-900 pb-28 pt-36">
        <ProjectSection />
      </section>

      <section
        id="experience"
        className="bg-gradient-to-b from-[#071F2B] from-55% to-teal-900 pb-32 pt-36"
      >
        <ExperienceSection />
      </section>

      <section id="contact" className="bg-[#0D1117] pt-20">
        <Contact />
      </section>
    </>
  );
}
