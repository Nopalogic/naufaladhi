import Image from "next/image";
import Ournament from "/public/images/experience-ournament-blue.png";

export default function RoboticsExperience() {
  const responsibilities = [
    "Leading the circuit design process, including component selection and schematic development.",
    "Overseeing the assembly of robots, including component placement, wiring, and soldering where necessary.",
    "Scripting robotics behavior in C++ while leveraging relevant Arduino libraries.",
    "Collaborate with science teachers to develop robots using solar panels for self-powered operation.",
  ];

  return (
    <>
      <article className="relative mx-auto max-w-[1244px] overflow-hidden rounded-none bg-gradient-to-br from-blue-400 via-transparent to-blue-400 px-0 py-[2px] md:rounded-2xl md:px-[2px]">
        <Image
          src={Ournament}
          width={1000}
          height={1000}
          loading="lazy"
          alt="ournament"
          className="pointer-events-none absolute bottom-0 right-0 z-0 min-w-[500px] lg:min-w-[1000px]"
        />
        <div className="rounded-none bg-slate-900 px-4 py-20 md:rounded-[14px] lg:px-[5.4rem]">
          <header className="flex flex-col items-start justify-between md:flex-row">
            <div className="flex space-x-4 lg:space-x-6">
              <div>
                <h3 className="text-3xl font-semibold leading-10 text-cyan-50 md:text-[40px]">
                  Robotics Project
                </h3>
                <span className="text-md inline-block pt-1 font-semibold text-sky-500 md:pt-2 md:text-2xl lg:text-base">
                  @Fatahillah Vocational High School
                </span>
              </div>
            </div>

            <div className="relative mt-5 rounded-lg bg-gradient-to-b lg:bg-gradient-to-br from-blue-300 from-10% px-[2px] py-[7px] lg:py-2">
              <span className="rounded-md bg-slate-900 px-4 py-2 text-lg font-bold text-cyan-50 md:text-xl">
                Team Leader
              </span>
            </div>
          </header>

          <div className="mt-16 md:mt-20">
            <h4 className="text-xl font-semibold text-sky-300 md:text-lg">
              July 2021 - January 2022
            </h4>
            <p className="mt-8 max-w-[570px] text-xl font-medium leading-10 text-sky-50 md:text-2xl">
              Lead of the robotics team focused on design circuits, assembly of
              components, cable wiring, and even some soldering components.
            </p>
            <h4 className="mt-10 flex items-center space-x-3 space-y-0 text-xl font-semibold text-sky-300 md:mt-16 md:text-2xl">
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
                  fill="#A5F3FC"
                ></path>
              </svg>
              <span>Responsibilities and things I did</span>
            </h4>
            <ul className="mt-10 max-w-[774px] space-y-5 px-4 text-lg !leading-[180%] text-sky-50 md:text-xl">
              {responsibilities.map((responsibility: string, id: number) => (
                <li
                  key={id}
                  className="before:mb-1 before:mr-2 before:inline-block before:h-1.5 before:w-1.5 before:rounded-full before:bg-sky-50"
                >
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </article>
    </>
  );
}
