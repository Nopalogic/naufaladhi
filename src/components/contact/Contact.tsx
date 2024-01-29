import Image from "next/image";
import Link from "next/link";
import ContactBackground from "/public/images/contact-bg.png";
import ProfilePicture from "/public/profile.jpg";

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
                      <svg
                        className="fill-current"
                        width="24px"
                        height="24px"
                        viewBox="0 0 24 24"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Instagram</title>
                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                      </svg>
                    </div>
                    <span>@nopalogic</span>
                  </Link>
                  <Link
                    href="https://twitter.com/@nopalogic"
                    target="_blank"
                    className="flex items-center space-x-4"
                  >
                    <div className="h-4 w-4">
                      <svg
                        className="fill-current"
                        width="24px"
                        height="24px"
                        role="img"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <title>Twitter</title>
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                      </svg>
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
