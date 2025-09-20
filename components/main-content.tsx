"use client";

import Image from "next/image";
import Carousel from "react-bootstrap/Carousel";

const MainContent = () => {
  return (
    <div className="w-full">
      <Carousel className="w-full max-w-6xl mx-auto" interval={5000} fade>
        <Carousel.Item>
          <div className="relative w-full h-64 sm:h-96 md:h-[500px] flex items-center justify-center bg-white">
            <Image
              src="/images/saturday-cleanUp-voluntary-work-picture.jpg"
              alt="Saturday activity"
              fill
              className="rounded-lg object-cover object-center"
            />
          </div>

          <Carousel.Caption className="bg-black/40 rounded p-2">
            <h3 className="text-white text-lg sm:text-2xl font-semibold">
              Saturday activities
            </h3>
            <p className="text-white">Cleaning the trash</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="relative w-full h-64 sm:h-96 md:h-[500px] flex items-center justify-center bg-white">
            <Image
              src="/images/saturday-cleanUp-voluntary-work.jpg"
              alt="Saturday activity"
              fill
              className="rounded-lg object-cover object-center"
            />
          </div>

          <Carousel.Caption className="bg-black/40 rounded p-2">
            <h3 className="text-white text-lg sm:text-2xl font-semibold">
              Saturday activities
            </h3>
            <p className="text-white">Cleaning the trash</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <div className="relative w-full h-64 sm:h-96 md:h-[500px] flex items-center justify-center bg-white">
            <Image
              src="/images/saturday-voluntary-work.jpg"
              alt="Saturday activity"
              fill
              className="rounded-lg object-cover object-center"
            />
          </div>

          <Carousel.Caption className="bg-black/40 rounded p-2">
            <h3 className="text-white text-lg sm:text-2xl font-semibold">
              Saturday activities
            </h3>
            <p className="text-white">Cleaning the trash</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MainContent;
