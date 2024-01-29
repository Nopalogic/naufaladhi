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
        <div className="scrollbar-hide relative mx-[2px] grid snap-x grid-flow-col overflow-y-hidden  ">
          {images.map((image, id) => (
            <div
              key={id}
              className="w-[86vw] max-w-[86vw] snap-center py-10 pr-5 sm:w-[484px] sm:max-w-none sm:py-16"
            >
              <Image
                width={500}
                height={500}
                loading="lazy"
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
