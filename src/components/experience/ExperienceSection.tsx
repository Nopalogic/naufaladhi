import ExperienceHeader from "./ExperienceHeader";
import ExpCashier from "./items/ExpCashier";

export default function ExperienceSection() {
  return (
    <>
      <section id="experiences" className="relative overflow-hidden">
        <div className="bg-top px-5 pt-32 sm:pt-[14rem]">
          <ExperienceHeader />
        </div>

        <div className="relative sm:space-y-16">
          <div className="relative z-10 px-0 sm:px-8 md:px-12 md:py-12 lg:py-24">
            <ExpCashier />
          </div>
        </div>
      </section>
    </>
  );
}
