'use client'

import Image from "next/image";

type props = {
  images: {
    url: any;
    alt: string;
  }[];
};

export default function ImageSlider({ images }: props) {
  return (
    <>
      <div className="relative">
        <div className="scrollbar-hide mx-[2px] grid snap-x grid-flow-col overflow-y-hidden">
          {images.map((image, id) => (
            <div
              key={id}
              className="w-[484px] max-w-none snap-center py-16 pr-5 lg:py-10"
            >
              <Image
                width={484}
                height={484}
                loading="lazy"
                property="true"
                className="rounded-lg"
                src={image.url}
                alt={image.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
