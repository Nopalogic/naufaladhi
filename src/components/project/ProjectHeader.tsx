export default function ProjectHeader() {
  return (
    <>
      <div className="relative z-10 mx-auto max-w-[1244px] px-5 sm:px-12 md:px-16 lg:px-12 xl:px-4">
        <h2
          id="title-highlighed-projects"
          className="text-cyan-dark sm:leading-150 relative inline text-4xl font-bold tracking-tight sm:text-5xl md:text-5xl lg:text-[64px]"
        >
          <span className="relative mt-2 inline-block sm:mt-0">
            <span className="relative z-[1]">Highlighted Projects</span>
            <span className="title-highlight absolute -bottom-1 left-0 z-0 hidden h-[15px] w-[250px] max-[350px]:w-[220px] min-[375px]:block sm:bottom-2 sm:w-[320px] md:bottom-1 lg:h-[20px] lg:w-[600px]"></span>
          </span>
        </h2>

        <p className="!leading-150 text-dark mt-9 max-w-[730px] text-xl sm:text-2xl">
          I've worked on a variety of projects, ranging from small MVPs to
          full-scale applications, also developed a wide array of features{" "}
          <br className="hidden lg:inline-block" /> and functionalities in
          projects.
        </p>
      </div>
    </>
  );
}
