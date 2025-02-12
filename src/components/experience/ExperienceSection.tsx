import ExperienceHeader from "./ExperienceHeader";
import ExpBangkit from "./items/ExpBangkit";
import ExpCashier from "./items/ExpCashier";

export default function ExperienceSection() {
  return (
    <>
      <section id="experiences" className="relative overflow-hidden">
        <div className="bg-top px-5 pt-32 sm:pt-[14rem]">
          <ExperienceHeader />
        </div>

        <div className="relative sm:space-y-16">
          <div className="bg-bangkit relative">
            <div className="overlay-transition-top absolute z-0 hidden h-80 w-screen sm:block" />
            <div className="relative z-10 px-0 sm:px-8 md:px-12 pb-40">
              <ExpBangkit />
            </div>
            <div className="overlay-transition-bottom absolute z-0 bottom-0 hidden h-32 w-screen sm:block" />
          </div>

          <div className="px-0 sm:px-8 md:px-12 md:pb-12 lg:pb-42">
            <ExpCashier />
          </div>
        </div>
      </section>
    </>
  );
}
