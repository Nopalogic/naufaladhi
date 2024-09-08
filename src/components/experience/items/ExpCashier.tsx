import { CheckIcon } from "@heroicons/react/16/solid";
import Image from "next/image";

export default function ExpCashier() {
  const responsibilities = [
    "Lead or actively participated in designing the program's flowchart, code structure, and functionality.",
    "Made key decisions during development, ensuring the program functioned efficiently and met all requirements.",
    "Deployed the program using best practices for learned modules, showcasing mastery of acquired skills.",
    "Utilized Python's List and Dictionaries to store and manage inputted data in a JSON-like structure for efficient retrieval and manipulation.",
  ];

  return (
    <article className="experience-1 relative z-10 mx-auto max-w-[1244px] overflow-hidden px-5 py-20 pb-40 sm:rounded-2xl sm:px-10 lg:px-[5.4rem]">
      <Image
        width={800}
        height={1100}
        loading="lazy"
        className="pointer-events-none absolute bottom-0 right-0 z-0"
        src="/images/experience-ournament-green.png"
        alt=""
      />
      <header className="z-10 flex flex-col items-start justify-between sm:flex-row">
        <div className="flex space-x-4 sm:space-x-6">
          <div>
            <h3 className="text-3xl font-semibold leading-100 text-cyan-50 md:text-[40px]">
              Python Cashier Program
            </h3>
            <span className="inline-block pt-1 text-base font-semibold leading-100 text-sky-300 md:pt-2 md:text-2xl">
              @Dian Nusantara University
            </span>
          </div>
        </div>

        <div className="role-label relative mt-5 rounded-2xl px-4 py-3 sm:mt-0">
          <span className="font-bold text-cyan-50 sm:text-lg md:text-xl">
            Team Leader
          </span>
        </div>
      </header>

      <div className="z-10 mt-20">
        <h4 className="text-lg font-semibold text-sky-300 sm:text-xl">
          Jun 2023 - Jul 2023
        </h4>

        <p className="mt-8 max-w-[570px] text-xl font-medium leading-140 text-sky-50 md:text-2xl">
          Lead the development of a python cashier program for my final project,
          focused on applying syntax and code fundamentals learned throughout
          the course.
        </p>

        <h4 className="mt-10 flex max-w-[200px] flex-col space-y-3 text-xl font-semibold text-sky-300 mob:max-w-none sm:mt-16 sm:flex-row sm:items-center sm:space-x-3 sm:space-y-0 md:text-2xl">
          <CheckIcon className="size-8" />
          <span>Responsibilities and things I did</span>
        </h4>

        <ul className="experience-list mt-10 max-w-[774px] space-y-5 !leading-[180%] text-[#CCEEFF] mob:pl-4 sm:text-lg md:text-xl">
          {responsibilities.map((item: string, index: number) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
