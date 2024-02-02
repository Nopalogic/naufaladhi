import Link from "next/link";

type props = { url: string };

export default function ButtonLiveDemo({ url }: props) {
  return (
    <>
      <Link
        href={url}
        target="_blank"
        className="relative inline-flex w-full items-start justify-between rounded-2xl bg-cyan-900 p-5 pb-8 lg:w-[495px]"
      >
        <div>
          <div className="inline-flex items-center space-x-2">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <span className="text-base font-semibold tracking-tight text-green-500 md:text-2xl md:leading-10">
              Live in Production
            </span>
          </div>
          <span className="relative block pt-0 text-[24px] font-semibold lowercase leading-10 tracking-tight text-sky-50 md:text-[2.5rem] lg:pb-4">
            {url.slice(8)}
          </span>
        </div>
        <div className="rounded-lg border border-cyan-800 bg-cyan-900 p-2 shadow-[-2px_8px_12px_-5px_rgba(0,0,0,0.75)] lg:p-3">
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
