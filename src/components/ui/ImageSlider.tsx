import Image from "next/image";

interface ImageSliderProps {
  images: {
    url: string;
    alt: string;
  }[];
  project: string;
}

export default function ImageSlider({ images, project }: ImageSliderProps) {
  return (
    <>
      <div className="relative">
        <div className="scrollbar-hide relative z-0 mx-[2px] grid snap-x snap-mandatory grid-flow-col overflow-y-hidden pl-5 sm:pl-10 lg:pl-16">
          {images.map((image, index) => (
            <div
              key={`project-slider-item-${project}-${index}`}
              className="w-[86vw] max-w-[86vw] snap-center py-10 pr-5 sm:w-[484px] sm:max-w-none sm:py-16"
            >
              <Image
                src={image.url}
                alt={image.alt}
                loading="lazy"
                height={484 * 1.5}
                width={484 * 1.5}
                className="rounded-3xl"
              />
            </div>
          ))}
          <div className="sm:pr-11" />
        </div>
      </div>
    </>
  );
}
