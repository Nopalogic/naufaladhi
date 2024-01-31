import KalkulusProject from "./items/KalkulusProject";

export default function ProjectSection() {
  return (
    <>
      <div className="md:container">
        <div className="w-full px-0 md:px-4">
          <div className="mx-auto mb-16 text-center">
            <h2 className="mb-8 text-3xl font-bold text-slate-200 sm:text-4xl lg:text-5xl">
              Highlighted Projects
            </h2>
            <p className="text-md font-medium text-slate-400 md:text-xl">
              I am currently studying informatics engineering, learning from
              various sources, as well as working on some course projects.
            </p>
          </div>
        </div>

        <div className="w-full px-0 md:px-4">
          <KalkulusProject />
        </div>
      </div>
    </>
  );
}
