import Image from "next/image";
import Link from "next/link";

const SOCIAL_MEDIA = [
  {
    id: 1,
    img: "/icons/git.svg",
    url: "https://github.com/Nopalogic",
  },
  {
    id: 2,
    img: "/icons/insta.svg",
    url: "https://instagram.com/nopalogic",
  },
  {
    id: 3,
    img: "/icons/twit.svg",
    url: "https://twitter.com/Nopalogic",
  },
  {
    id: 4,
    img: "/icons/link.svg",
    url: "https://linkedin.com/in/naufaladhiramadhan",
  },
];

export default function ContactSection() {
  return (
    <>
      <section
        id="contact"
        className="relative flex w-full overflow-hidden pb-10 pt-20"
        style={{
          background:
            "linear-gradient(115.24deg, rgba(27, 69, 91, 0.2) -16.72%, rgba(0, 0, 0, 0) 49.18%), #040d11",
        }}
      >
        <Image
          src="/images/contact-bg.png"
          alt=""
          width={1100}
          height={1100}
          className="absolute -right-24 bottom-0 z-0 aspect-auto w-[800px] min-w-[800px] sm:right-0 sm:min-w-[1200px]"
        />

        <div className="z-20 mx-5 h-full md:mx-auto">
          <h2 className="text-3xl font-semibold !leading-140 tracking-tight text-cyan-300 md:font-bold 2xl:text-4xl">
            Let&apos;s get in touch
          </h2>

          <div className="mt-12 text-5xl font-semibold tracking-tighter text-[#bae1f7] md:text-6xl lg:text-[68px] xl:text-[84px] 2xl:mt-16 2xl:text-[92px]">
            <p className="mt-5 leading-[90%] lg:mt-2 xl:-mt-5 xl:leading-[120%] 2xl:-mt-4">
              Suka kopi, mau ngopi bareng?
            </p>
            <p className="mt-5 leading-[90%] lg:mt-2 xl:-mt-5 xl:leading-[120%] 2xl:-mt-4">
              Have any project ideas?
            </p>
            <p className="mt-5 pb-2 leading-[90%] lg:mt-2 xl:-mt-5 xl:pb-0 xl:leading-[120%] 2xl:-mt-4">
              Ask something?
            </p>
          </div>

          <footer className="mt-40 flex flex-col-reverse items-center justify-between gap-2 text-slate-200 md:flex-row 2xl:mt-24">
            <p className="text-sm font-light md:text-base md:font-normal">
              Copyright &copy; 2024 Naufal Adhi
            </p>

            <div className="my-1 h-[1px] w-full bg-white/50 md:hidden" />

            <div className="flex items-center gap-6 md:gap-3">
              {SOCIAL_MEDIA.map((info) => (
                <Link
                  key={info.id}
                  href={info.url}
                  className="flex size-10 cursor-pointer items-center justify-center rounded-lg border border-white/15 bg-black/15 bg-opacity-75 saturate-150 backdrop-blur-lg backdrop-filter"
                >
                  <Image src={info.img} alt="icons" width={20} height={20} />
                </Link>
              ))}
            </div>
          </footer>
        </div>
      </section>
    </>
  );
}
