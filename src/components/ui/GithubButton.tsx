import Link from "next/link";

interface GithubButtonProps {
  url: string;
  name: string;
}

export default function GithubButton({ url, name }: GithubButtonProps) {
  return (
    <>
      <Link
        href={url}
        target="_blank"
        className="font-semibold leading-6 tracking-tight"
      >
        <span className="text-dark sm:!leading-100 block text-xl leading-4 sm:text-[32px]">
          {name}
        </span>
        <span className="inline-flex space-x-[6px] text-sm text-slate-700 sm:pt-2 sm:text-xl">
          <span>on</span>
          <span>
            <svg
              className="w-[18px] sm:size-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_67_250)">
                <path
                  d="M12.5 0.297119C5.87 0.297119 0.5 5.67012 0.5 12.2971C0.5 17.6001 3.938 22.0971 8.705 23.6821C9.305 23.7951 9.525 23.4241 9.525 23.1051C9.525 22.8201 9.515 22.0651 9.51 21.0651C6.172 21.7891 5.468 19.4551 5.468 19.4551C4.922 18.0701 4.133 17.7001 4.133 17.7001C3.046 16.9561 4.217 16.9711 4.217 16.9711C5.422 17.0551 6.055 18.2071 6.055 18.2071C7.125 20.0421 8.864 19.5121 9.55 19.2051C9.658 18.4291 9.967 17.9001 10.31 17.6001C7.645 17.3001 4.844 16.2681 4.844 11.6701C4.844 10.3601 5.309 9.29012 6.079 8.45012C5.944 8.14712 5.539 6.92712 6.184 5.27412C6.184 5.27412 7.189 4.95212 9.484 6.50412C10.444 6.23712 11.464 6.10512 12.484 6.09912C13.504 6.10512 14.524 6.23712 15.484 6.50412C17.764 4.95212 18.769 5.27412 18.769 5.27412C19.414 6.92712 19.009 8.14712 18.889 8.45012C19.654 9.29012 20.119 10.3601 20.119 11.6701C20.119 16.2801 17.314 17.2951 14.644 17.5901C15.064 17.9501 15.454 18.6861 15.454 19.8101C15.454 21.4161 15.439 22.7061 15.439 23.0961C15.439 23.4111 15.649 23.7861 16.264 23.6661C21.065 22.0921 24.5 17.5921 24.5 12.2971C24.5 5.67012 19.127 0.297119 12.5 0.297119"
                  fill="#334155"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_67_250">
                  <rect width="24" height="24" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </span>
          <span>github.com</span>
        </span>
      </Link>
    </>
  );
}
