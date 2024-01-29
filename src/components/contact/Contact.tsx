import Image from "next/image";
import ContactBackground from "/public/images/contact-bg.png";
import ProfilePicture from "/public/profile.jpg";
import Link from "next/link";
import { InstagramIcon, TwitterIcon } from "@/utils/icons";

export default function Contact() {
  return (
    <>
      <div className="relative flex items-center overflow-hidden">
        <Image
          width={1100}
          height={1100}
          src={ContactBackground}
          alt=""
          className="pointer-events-none absolute bottom-0 w-[800px] min-w-[800px] sm:right-0 sm:min-w-[1200px]"
        />

        <div className="z-10 mx-auto h-full px-5 text-[#CFFAFE] max-lg:py-20 max-lg:pb-36 sm:px-10 md:px-16 lg:px-0 lg:pb-16 xl:max-w-[1244px] xl:px-4 xl:pb-10 2xl:pb-32">
          <h2 className="text-3xl font-semibold !leading-10 tracking-tight md:font-bold 2xl:text-4xl">
            {"Let's get in touch"}
          </h2>

          <div className="mt-4 text-5xl font-semibold tracking-tighter sm:text-6xl lg:text-[68px] xl:text-[84px] 2xl:mt-16 2xl:text-[92px]">
            <p className="mt-5 leading-[90%] lg:mt-2 xl:-mt-2 xl:leading-[120%]">
              Suka kopi, mau ngopi bareng?
            </p>
            <p className="mt-5 leading-[90%] lg:mt-2 xl:-mt-2 xl:leading-[120%]">
              Have any project ideas?
            </p>
            <p className="mt-5 pb-2 leading-[90%] lg:mt-2 xl:-mt-2 xl:pb-0 xl:leading-[120%]">
              Ask something?
            </p>
          </div>

          <div className="mt-10">
            <div className="flex flex-col items-start sm:flex-row sm:space-x-8">
              <div className="relative inline-flex aspect-square h-24 max-h-24 items-center justify-center rounded-full sm:min-h-[32px] sm:min-w-[32px] md:h-28 xl:h-32 xl:max-h-32">
                <Image
                  width={500}
                  height={500}
                  src={ProfilePicture}
                  alt="Helmi Satria"
                  loading="lazy"
                  className="h-24 max-h-24 w-24 max-w-[96px] rounded-full object-cover sm:h-32 sm:min-h-[32px] sm:w-32 sm:min-w-[32px] md:h-28 xl:h-32 xl:max-h-32 xl:max-w-[128px]"
                />
                <span className="absolute -bottom-1 right-0 text-4xl xl:text-5xl">
                  🔥
                </span>
              </div>

              <div className="mt-6 sm:mt-0">
                <p className="text-xl font-medium text-[#38BDF8] xl:text-2xl">
                  Contact me via
                </p>

                <div className="mt-4 space-y-1 text-[#CFFAFE] sm:space-y-0 md:mt-6 lg:text-base xl:mt-8 xl:text-2xl">
                  <Link
                    href="https://instagram.com/@nopalogic"
                    className="flex items-center space-x-4"
                  >
                    <div className="h-4 w-4">
                      <InstagramIcon />
                    </div>
                    <span>@nopalogic</span>
                  </Link>
                  <Link
                    href="https://twitter.com/@nopalogic"
                    target="_blank"
                    className="flex items-center space-x-4"
                  >
                    <div className="h-4 w-4">
                      <TwitterIcon />
                    </div>
                    <span>@nopalogic</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-28">
            <p className="text-cyan-700 xl:text-lg">
              Made with NextJS and Tailwindcss{" "}
              <br className="inline-block sm:hidden" /> by Naufal Adhi
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
