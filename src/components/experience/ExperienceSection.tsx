import RoboticsExperience from "./items/RoboticsExperience";
import PyProgExperience from "./items/CashierProgExperience";

export default function ExperienceSection() {
  return (
    <>
      <div className="md:container">
        <div className="w-full px-0 md:px-4">
          <div className="mx-auto mb-16 text-center">
            <h2 className="mb-8 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Experiences
            </h2>
            <p className="text-md px-4 font-medium text-cyan-50 md:text-xl">
              {
                "I have previously studied software engineering, and I'm currently studying informatics engineering."
              }
            </p>
          </div>
        </div>

        <div className="w-full px-0 md:px-4">
          <div className="mb-0 md:mb-10">
            <RoboticsExperience />
          </div>
          <PyProgExperience />
        </div>
      </div>
    </>
  );
}
