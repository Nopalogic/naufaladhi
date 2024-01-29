import Link from "next/link";

type props = { url: string };

export default function ButtonLiveDemo({url}: props) {
  return (
    <>
      <Link
        href={url}
        target="_blank"
        className="relative inline-flex w-full items-start justify-between rounded-2xl bg-cyan-900 p-5 pb-8 sm:w-[495px] sm:px-8 sm:py-6"
      >
        <div>
          <div className="inline-flex items-center space-x-2 sm:space-x-3">
            <div className="relative">
              <div className="h-2 w-2 rounded-full bg-green-500 sm:h-[10px] sm:w-[10px]"></div>
            </div>
            <span className="text-base font-semibold leading-10 tracking-tight text-green-500 sm:text-2xl">
              Live in Production
            </span>
          </div>
          <span className="relative block pb-4 pt-2 text-[32px] font-semibold lowercase leading-10 tracking-tight text-sky-50 sm:text-[2.5rem]">
            {url.slice(8)}
          </span>
        </div>
        <div className="rounded-lg border border-cyan-800 bg-cyan-900 p-3 shadow-[-2px_8px_12px_-5px_rgba(0,0,0,0.75)]">
          <svg
            style={{ transform: "translate(0, 10%)" }}
            width="17"
            height="18"
            viewBox="0 0 17 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 16.5L16 1.5M16 1.5H4.75M16 1.5V12.75"
              stroke="#ECFEFF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </div>
      </Link>
    </>
  );
}
