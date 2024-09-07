import Link from "next/link";
import ProjectHeader from "./ProjectHeader";
import ProjectKalkulus from "./items/ProjectKalkulus";

export default function ProjectSection() {
  return (
    <>
      <section
        id="projects"
        className="relative py-16 lg:py-32 xl:py-36 2xl:py-[11rem]"
      >
        <ProjectHeader />

        <div className="mt-20 px-0 sm:px-8 md:px-12 lg:mt-24 xl:mt-32">
          <ProjectKalkulus />
          <div className="red-overlay absolute bottom-0 right-0 hidden w-screen sm:block sm:h-[2050px] xl:h-[2000px]" />
        </div>

        <div className="px-5 pt-32">
          <div className="mb-10 flex w-full justify-center sm:mb-10 sm:mt-12">
            <div className="btn-blog relative mx-auto flex w-full flex-col items-center rounded-xl px-5 py-6 text-center sm:w-[550px] sm:rounded-[32px] sm:px-10 sm:py-9 md:w-[650px] lg:w-[865px]">
              <h3 className="text-2xl font-semibold text-slate-900 sm:text-3xl sm:leading-[120%]">
                Check out my github
              </h3>
              <p className="leading-140 mt-2.5 max-w-[300px] text-sm text-slate-900 text-opacity-80 sm:max-w-none sm:text-lg md:max-w-[506px]">
                Stay informed about my other projects by following my github.
              </p>

              <Link
                href="https://github.com/Nopalogic"
                className="mt-6 text-cyan-600 hover:underline"
              >
                <p className="text-2xl font-semibold text-cyan-800 md:text-3xl lg:text-[46px]">
                  github.com/Nopalogic
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
