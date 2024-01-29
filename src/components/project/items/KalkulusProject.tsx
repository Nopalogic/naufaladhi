import { LatexIcon, ReactIcon, SassIcon, BootstrapIcon } from "@/utils/icons";
import Image from "next/image";
import ButtonGithubRepo from "../ButtonGithubRepo";
import ButtonLiveDemo from "../ButtonLiveDemo";
import ImageSlider from "../ImageSlider";
import OurnamentImage from "/public/images/project-ournament-lines-btm.png";
import kalkulus1 from "/public/images/projects/kalkulus1.png";
import kalkulus2 from "/public/images/projects/kalkulus2.png";
import kalkulus3 from "/public/images/projects/kalkulus3.png";

export default function KalkulusProject() {
  return (
    <>
      <article className="relative mx-auto max-w-[1244px] overflow-hidden bg-gradient-to-br from-blue-400 from-10% via-transparent via-50% to-blue-300 to-90% px-[2px] py-[2px] sm:rounded-[17px]">
        <Image
          src={OurnamentImage}
          loading="lazy"
          width="1000"
          height="1000"
          alt=""
          className="pointer-events-none absolute bottom-0 right-0 z-10 min-w-[500px] sm:min-w-[1000px]"
        />
        <div className="relative rounded-2xl  bg-slate-800 px-5 pb-16 pt-10 sm:px-10 lg:px-16">
          <h2 className="text-5xl font-semibold uppercase text-neutral-300">
            Kalkul
            <span className="text-5xl font-semibold text-red-700">us</span>
          </h2>
          <p className="mt-10 text-lg !leading-10 text-slate-200 sm:text-2xl">
            <span className="font-semibold">Introducing Kalkulus</span> - A
            website for learning calculus that is easier to understand and more
            fun because it has interactive quizzes to test your knowledge.
          </p>

          <div>
            <ImageSlider
              images={[
                { url: kalkulus1, alt: "kalkulus" },
                { url: kalkulus2, alt: "kalkulus" },
                { url: kalkulus3, alt: "kalkulus" },
              ]}
            />
          </div>

          <p className="text-lg !leading-10 text-slate-200 sm:text-2xl">
            Why create this project? I want everyone to be able to learn
            calculus easily and enjoyable. In addition, this project is also the
            final assignment of the calculus course.
          </p>

          <div className="mb-10 mt-10 sm:mb-14 sm:mt-[4.4rem]">
            <ButtonLiveDemo url="https://kalkulus.vercel.app" />
          </div>

          <div className="flex items-start space-x-4 pl-5 sm:space-x-10 sm:pl-8">
            <ButtonGithubRepo
              name="kalkulus"
              url="https://github.com/Nopalogic/kalkulus-project"
            />
          </div>
          <div className="mt-20">
            <h4 className="text-2xl font-semibold leading-10 text-slate-200 sm:text-[32px]">
              Featured technologies used
            </h4>
            <div className="-ml-2 mt-6 flex flex-wrap gap-3 sm:ml-0">
              {[
                <ReactIcon key={1} />,
                <SassIcon key={2} />,
                <BootstrapIcon key={3} />,
                <LatexIcon key={4} />,
              ].map((icon, id) => (
                <div
                  key={id}
                  className="-ml-2 w-20 scale-[90%] sm:ml-0 sm:min-h-[100px] sm:min-w-[100px] sm:scale-100"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
