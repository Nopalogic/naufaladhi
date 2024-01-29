import Image from "next/image";
import Ournament from "/public/images/work-ournament-green.png";

export default function CashierProgExperience() {
  const responsibilities = [
    "Lead or actively participated in designing the program's flowchart, code structure, and functionality.",
    "Made key decisions during development, ensuring the program functioned efficiently and met all requirements.",
    "Deployed the program using best practices for learned modules, showcasing mastery of acquired skills.",
    "Utilized Python's List and Dictionaries to store and manage inputted data in a JSON-like structure for efficient retrieval and manipulation.",
  ];

  return (
    <>
      <article className="relative mx-auto max-w-[1244px] overflow-hidden bg-gradient-to-br from-green-400 via-transparent to-green-400 px-[2px] py-[2px] sm:rounded-2xl">
        <Image
          src={Ournament}
          width={1000}
          height={1000}
          loading="lazy"
          alt="ournament"
          className="pointer-events-none absolute right-0 z-0 min-w-[500px] sm:min-w-[1000px]"
        />
        <div className="rounded-[14px] bg-emerald-950 py-20 lg:px-[5.4rem]">
          <header className="flex flex-col items-start justify-between sm:flex-row">
            <div className="flex space-x-4 sm:space-x-6">
              <div>
                <h3 className="text-2xl font-semibold leading-10 text-cyan-50 sm:text-3xl md:text-[40px]">
                  Python Cashier Program
                </h3>
                <span className="inline-block pt-1 text-sm font-semibold leading-10 text-emerald-500 sm:text-base md:pt-2 md:text-2xl">
                  @Dian Nusantara University
                </span>
              </div>
            </div>

            <div className="relative mt-5 rounded-lg bg-gradient-to-br from-green-300 from-10% px-[2px] py-2 sm:mt-0">
              <span className="rounded-md bg-emerald-950 px-4 py-2 font-bold text-cyan-50 sm:text-lg md:text-xl">
                Team Leader
              </span>
            </div>
          </header>

          <div className="mt-20">
            <h4 className="text-lg font-semibold text-emerald-300 sm:text-xl">
              June 2023 - July 2023
            </h4>
            <p className="leading-140 mt-8 max-w-[600px] text-xl font-medium text-sky-50 md:text-2xl">
              Lead the development of a Python cashier program for my final
              project, focused on applying
              syntax and code fundamentals learned throughout the course
            </p>
            <h4 className="mt-10 flex flex-col space-y-3 text-xl font-semibold text-emerald-300 sm:mt-16 sm:flex-row sm:items-center sm:space-x-3 sm:space-y-0 md:text-2xl">
              <svg
                width="19"
                height="17"
                viewBox="0 0 19 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.8692 0.612197C13.5928 1.79879 10.4777 6.24644 8.64977 10.9197C8.45276 11.4236 8.27445 11.8428 8.25357 11.8514C8.23275 11.8599 7.83875 11.6166 7.37808 11.3105C6.04837 10.4273 3.65416 9.31041 2.48703 9.02896C0.618402 8.57838 -0.282493 11.2487 1.50513 11.9397C1.69094 12.0116 2.20597 12.2085 2.64964 12.3774C4.3462 13.0235 5.86528 13.9227 7.45943 15.2246C8.62064 16.1729 8.91336 16.2977 9.57143 16.1246C10.2673 15.9415 10.5938 15.5146 10.758 14.5726C11.3577 11.1335 14.7034 5.34067 17.2272 3.37189C18.2933 2.54017 18.5 2.15079 18.2905 1.36866C17.9909 0.250603 17.0979 -0.0283695 15.8692 0.612197Z"
                  fill="#6EE7b7"
                ></path>
              </svg>
              <span>Responsibilities and things I did</span>
            </h4>
            <ul className="mt-10 max-w-[774px] translate-x-6 list-disc space-y-5 !leading-[180%] text-sky-50 sm:text-lg md:text-xl">
              {responsibilities.map((responsibility: string, id: number) => (
                <li key={id}>{responsibility}</li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </>
  );
}
