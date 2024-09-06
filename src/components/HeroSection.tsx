export default function HeroSection() {
  return (
    <section
      id="header"
      className="relative w-full pb-16 pt-8 lg:pb-32 xl:pb-36 2xl:pb-[11rem]"
    >
      <div className="header-overlay absolute inset-0 sm:max-w-full" />

      <div className="relative z-20 mx-auto mt-8 px-5 sm:mt-16 sm:px-10 md:max-w-[1244px] md:px-16 lg:mt-16 lg:px-12 xl:mt-24 xl:px-4 2xl:mt-[12rem]">
        <div className="relative z-20">
          <h1 className="header-title mob:text-[2.6rem] z-10 text-[2rem] font-bold tracking-tighter md:text-[4rem]">
            Naufal Adhi
          </h1>

          <p className="header-subtitle mob:text-[3.4rem] mt-1 text-[2.2rem] font-bold lowercase leading-[100%] tracking-tight sm:mt-3 sm:text-[4rem] md:mt-1.5 md:text-[5rem] md:leading-[5rem] md:tracking-[-0.06em] lg:max-w-[850px] xl:max-w-[1200px] xl:text-[5.9rem] xl:leading-[6.25rem]">
            <span className="md:min-w-none max-mob:max-w-[310px] max-mob:text-[70px] max-md:block max-md:max-w-[420px] max-md:text-[90px] max-md:leading-[85%] max-md:tracking-[-0.06em] max-sm:max-w-[360px] max-sm:text-[85px]">
              a{" "}
              <span className="relative">
                <span
                  className="happy-bg mob:top-7 mob:h-[48px] absolute inset-0 -left-1 top-6 -z-10 block h-[42px] w-[17.2rem] rotate-[-2.2deg] sm:top-8 sm:h-[54px] md:-left-2 md:top-7 md:h-[50px] md:w-[23.3rem] lg:top-6 lg:h-[56px] xl:top-8 xl:h-[60px]"
                  style={{
                    background:
                      "linear-gradient(85.27deg, #57E9F9 0.78%, rgba(165, 243, 252, 0) 123.9%)",
                  }}
                ></span>
              </span>
              full-stack developer
            </span>
            <br className="hidden xl:block" />

            <span className="max-md:leading-100 max-md:mt-8 max-md:inline-block max-md:max-w-[300px] max-md:text-[38px] max-md:font-semibold max-md:tracking-tighter max-sm:mt-6 max-sm:max-w-[261px] max-sm:text-[32px]">
              who strives to help others grow in web development
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
