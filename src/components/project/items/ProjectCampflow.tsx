import Image from "next/image";
import GithubButton from "../../ui/GithubButton";
import ImageSlider from "../../ui/ImageSlider";
import LiveProdButton from "../../ui/LiveProdButton";

export default function ProjectCampflow() {
  return (
    <article className="project-campflow relative z-10 mx-auto max-w-[1244px] overflow-hidden py-20 sm:rounded-3xl">
      <Image
        src="/images/project-ournament-lines-btm.png"
        alt=""
        loading="lazy"
        width="1000"
        height="1000"
        className="pointer-events-none absolute bottom-0 right-0 z-0 min-w-[500px] sm:min-w-[1000px]"
      />

      <div className="relative z-10 px-5 sm:px-10 lg:px-16">
        <h3 className="text-[4rem] font-bold text-cyan-950">Campflow</h3>
        <p className="mt-10 text-lg !leading-150 text-dark sm:text-2xl">
          <strong className="font-semibold">Campflow</strong> a seamless camping
          reservation platform designed to simplify your outdoor adventure
          planning. Discover exclusive campsite options, reserve your spot in
          minutes, and experience nature without the hassle &#45; all from the
          convenience of your web browser.
        </p>
      </div>

      <div>
        <ImageSlider
          project="campflow"
          images={[
            {
              url: "/images/projects/campflow/campflow-1.jpg",
              alt: "campflow",
            },
            {
              url: "/images/projects/campflow/campflow-2.jpg",
              alt: "campflow",
            },
            {
              url: "/images/projects/campflow/campflow-3.jpg",
              alt: "campflow",
            },
          ]}
        />
      </div>

      <div className="relative z-10 px-5 sm:px-10 lg:px-16">
        <p className="text-lg !leading-150 text-dark sm:text-2xl">
          Most camping reservation systems are cumbersome and outdated. Campflow
          makes it effortless. Just browse available campsites, choose your
          preferred dates, and confirm your reservation in a few clicks.
          <br />
          <br />
          <strong className="font-semibold">What makes Campflow different?</strong> It offers a
          user-friendly interface, personalized campsite recommendations, and a
          secure payment process powered by Midtrans. No downloads are needed &#45;
          simply visit campflow.com and start planning. Plus, with real-time
          availability, you can manage your bookings
          from anywhere and anytime.
        </p>

        <div className="mb-10 mt-10 sm:mb-14 sm:mt-[4.4rem]">
          <LiveProdButton
            url="https://campflow-fawn.vercel.app"
            name="campflow-fawn.vercel.app"
          />
        </div>

        <div className="flex items-start space-x-4 pl-5 sm:space-x-10 sm:pl-8">
          <GithubButton
            url="https://github.com/Nopalogic/campflow"
            name="campflow"
          />
        </div>
      </div>

      <div className="mt-20 px-5 sm:px-10 lg:px-16">
        <h4 className="text-2xl font-semibold leading-140 text-dark sm:text-[32px]">
          Featured technologies used
        </h4>
        <div className="-ml-2 mt-6 flex flex-wrap gap-3 sm:ml-0">
          {[
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
            "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
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
