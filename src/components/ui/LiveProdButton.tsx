import { cn } from "@/utils";
import Link from "next/link";

interface LiveProdButtonProps {
  url: string;
  name: string;
}

export default function LiveProdButton({ url, name }: LiveProdButtonProps) {
  const id = `btn-live-in-production-${name.replace(/\./g, "-").toLowerCase()}`;

  const buttonStyle = {
    boxShadow:
      "22px 17px 11px rgba(0, 0, 0, 0.01), 13px 10px 9px rgba(0, 0, 0, 0.05), 6px 4px 7px rgba(0, 0, 0, 0.09), 1px 1px 4px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)",
    border: "1.5px solid transparent",
  };

  return (
    <Link
      href={url}
      target="_blank"
      className={cn(
        buttonStyle,
        "relative inline-flex w-full items-start justify-between rounded-2xl px-5 py-5 pb-8",
        "sm:w-fit sm:min-w-[495px] sm:px-8 sm:py-6",
      )}
      style={{
        background:
          "radial-gradient(94.57% 1117.67% at 2.02% 94.57%, rgba(34, 211, 238, 0.2) 0%, rgba(0, 0, 0, 0) 100%), #123E4F",
      }}
    >
      <div>
        <div className="inline-flex items-center space-x-2 sm:space-x-3">
          <div className="relative">
            <div className="bg-green-light absolute size-[8px] animate-ping rounded-full sm:size-[10px]" />
            <div className="bg-green-light size-[8px] rounded-full sm:size-[10px]" />
          </div>
          <span className="leading-100 text-green-light text-base font-semibold tracking-tight sm:text-2xl">
            Live in Production
          </span>
        </div>

        <span className="leading-100 block text-[32px] font-semibold tracking-tight text-sky-50 sm:text-[3.5rem]">
          {name}
        </span>
      </div>

      <div className="rounded-lg bg-cyan-900 p-3 shadow-xl">
        <svg
          id={`${id}-arrow`}
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
  );
}
