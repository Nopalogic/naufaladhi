import Image from "next/image";
import GithubButton from "../../ui/GithubButton";
import ImageSlider from "../../ui/ImageSlider";
import LiveProdButton from "../../ui/LiveProdButton";

export default function ProjectKalkulus() {
  return (
    <article className="project-1 relative z-10 mx-auto max-w-[1244px] overflow-hidden py-20 sm:rounded-3xl">
      <Image
        src="/images/project-ournament-lines-btm.png"
        alt=""
        loading="lazy"
        width="1000"
        height="1000"
        className="pointer-events-none absolute bottom-0 right-0 z-0 min-w-[500px] sm:min-w-[1000px]"
      />

      <div className="relative z-10 px-5 sm:px-10 lg:px-16">
        <h3 className="text-[4rem] font-bold text-cyan-950">Kalkulus</h3>
        <p className="mt-10 text-lg !leading-150 text-dark sm:text-2xl">
          <strong className="font-semibold">Introducing Kalkulus</strong> - a
          website for learning calculus that is easier to understand and more
          fun because it has interactive quizzes to test your knowledge.
        </p>
      </div>

      <div>
        <ImageSlider
          project="kalkulus"
          images={[
            { url: "/images/projects/kalkulus1.png", alt: "kalkulus" },
            { url: "/images/projects/kalkulus2.png", alt: "kalkulus" },
            { url: "/images/projects/kalkulus3.png", alt: "kalkulus" },
          ]}
        />
      </div>

      <div className="relative z-10 px-5 sm:px-10 lg:px-16">
        <p className="text-lg !leading-150 text-dark sm:text-2xl">
          Why create this project?{" "}
          <span className="font-semibold">
            I want everyone to be able to learn calculus easily and enjoyable.
          </span>{" "}
          I believe that learning calculus shouldn&apos;t be a struggle, but rather
          an exciting journey of discovery. By providing engaging resources and
          interactive tools, I hope to empower learners to grasp the fundamental
          concepts of calculus with ease.
          <br />
          <br />
          Additionally, this project serves as{" "}
          <span className="font-semibold">
            the final assignment for my calculus course
          </span>, allowing me to apply my knowledge and creativity to a meaningful
          endeavor.
        </p>

        <div className="mb-10 mt-10 sm:mb-14 sm:mt-[4.4rem]">
          <LiveProdButton
            url="https://kalkulus.vercel.app/"
            name="kalkulus.vercel.app"
          />
        </div>

        <div className="flex items-start space-x-4 pl-5 sm:space-x-10 sm:pl-8">
          <GithubButton
            url="https://github.com/Nopalogic/kalkulus-project"
            name="kalkulus-project"
          />
        </div>
      </div>

      <div className="mt-20 px-5 sm:px-10 lg:px-16">
        <h4 className="text-2xl font-semibold leading-140 text-dark sm:text-[32px]">
          Featured technologies used
        </h4>
        <div className="-ml-2 mt-6 flex flex-wrap gap-3 sm:ml-0">
          {[
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/latex/latex-original.svg",
          ].map((icon, i) => (
            <div
              key={i}
              className="-ml-2 w-20 scale-[90%] sm:ml-0 sm:min-h-[100px] sm:min-w-[100px] sm:scale-100"
            >
              <Image src={icon} alt="icon" width={500} height={500} />
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
