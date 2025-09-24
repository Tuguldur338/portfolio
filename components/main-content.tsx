"use client";

import Image from "next/image";
import { Button } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const MainContent = () => {
  return (
    <div className="w-full">
      <div className="flex mb-[100px] justify-center">
        <h1 className="absolute left-[30%] text-black"></h1>

        <Image
          src="/images/orkhon-khasu-hero-image.avif"
          alt="src.name"
          width={500}
          height={500}
          className="max-w-screen h-auto w-[100%] fade-in"
        />
      </div>

      <div className="flex flex-col items-center mb-[100px]">
        <div>
          <h1 className="font-serif">Three types of schools</h1>
        </div>

        <Carousel
          className="w-full max-w-6xl mx-auto"
          pause={false}
          interval={3000}
          fade
        >
          <Carousel.Item>
            <div className="relative w-full h-64 sm:h-96 md:h-[500px] flex items-center justify-center bg-white">
              <Image
                src="/images/primary-school.avif"
                alt="Saturday activity"
                fill
                className="rounded-lg object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
            </div>

            <Carousel.Caption className="bg-black/40 rounded p-2">
              <h3>Primary school</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <div className="relative w-full h-64 sm:h-96 md:h-[500px] flex items-center justify-center bg-white">
              <Image
                src="/images/middle-school.avif"
                alt="Saturday activity"
                fill
                className="rounded-lg object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
            </div>

            <Carousel.Caption className="bg-black/40 rounded p-2">
              <h3>Middle school</h3>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <div className="relative w-full h-64 sm:h-96 md:h-[500px] flex items-center justify-center bg-white">
              <Image
                src="/images/high-school.avif"
                alt="Saturday activity"
                fill
                className="rounded-lg object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
            </div>

            <Carousel.Caption className="bg-black/40 rounded p-2">
              <h3>Primary school</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="flex justify-center items-center">
        <h1 className="font-serif">Activities</h1>
      </div>

      <div className="flex gap-[5px] mb-[100px]">
        <Carousel
          className="w-full max-w-6xl mx-auto"
          pause={false}
          interval={3000}
          fade
        >
          <Carousel.Item>
            <div className="relative w-full h-64 sm:h-96 md:h-[500px] flex items-center justify-center bg-white">
              <Image
                src="/images/saturday-cleanUp-voluntary-work-picture.jpg"
                alt="Saturday activity"
                fill
                className="rounded-lg object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
            </div>

            <Carousel.Caption className="bg-black/40 rounded p-2">
              <h3 className="text-white text-lg sm:text-2xl font-semibold">
                Voluntary job
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
              <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
            </div>

            <Carousel.Caption className="bg-black/40 rounded p-2">
              <h3 className="text-white text-lg sm:text-2xl font-semibold">
                Voluntary job
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
              <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
            </div>

            <Carousel.Caption className="bg-black/40 rounded p-2">
              <h3 className="text-white text-lg sm:text-2xl font-semibold">
                Voluntary job
              </h3>
              <p className="text-white">Cleaning the trash</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Carousel
          className="w-full max-w-6xl mx-auto"
          pause={false}
          interval={3000}
          fade
        >
          <Carousel.Item>
            <div className="relative w-full h-64 sm:h-96 md:h-[500px] flex items-center justify-center bg-white">
              <Image
                src="/images/national-sports-day.jpg"
                alt="src.name"
                fill
                className="rounded-lg object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
            </div>

            <Carousel.Caption className="bg-black/40 rounded p-2">
              <h3 className="text-white">National sports day</h3>
              <p className="text-white">2025 09.06</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <div className="relative w-full h-64 sm:h-96 md:h-[500px] flex items-center justify-center bg-white">
              <Image
                src="/images/national-sports-day-2.jpg"
                alt="src.name"
                fill
                className="rounded-lg object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
            </div>

            <Carousel.Caption className="bg-black/40 rounded p-2">
              <h3 className="text-white">National sports day</h3>
              <p className="text-white">2025 09.06</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <div className="relative w-full h-64 sm:h-96 md:h-[500px] flex items-center justify-center bg-white">
              <Image
                src="/images/national-sports-day-3.jpg"
                alt="src.name"
                fill
                className="rounded-lg object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
            </div>

            <Carousel.Caption className="bg-black/40 rounded p-2">
              <h3 className="text-white">National sports day</h3>
              <p className="text-white">2025 09.06</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <div className="relative w-full h-64 sm:h-96 md:h-[500px] flex items-center justify-center bg-white">
              <Image
                src="/images/national-sports-day-4.jpg"
                alt="src.name"
                fill
                className="rounded-lg object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
            </div>

            <Carousel.Caption className="bg-black/40 rounded p-2">
              <h3 className="text-white">National sports day</h3>
              <p className="text-white">2025 09.06</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <div className="relative w-full h-64 sm:h-96 md:h-[500px] flex items-center justify-center bg-white">
              <Image
                src="/images/national-sports-day-5.jpg"
                alt="src.name"
                fill
                className="rounded-lg object-cover object-center"
              />
              <div className="absolute inset-0 bg-black/50 rounded-lg"></div>
            </div>

            <Carousel.Caption className="bg-black/40 rounded p-2">
              <h3 className="text-white">National sports day</h3>
              <p className="text-white">2025 09.06</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="flex h-[715px] flex-col bg-blue-400">
        <div className="mx-auto mb-[50px]">
          <h1 className="text-white font-sserif">What we achieved</h1>
        </div>

        <div className="flex items-end">
          <Image
            src="/images/what-we-achieved.avif"
            alt="What we achieved"
            width={500}
            height={700}
            className=""
          />

          <div className="bg-gray-300">
            <div className=" h-[300px] flex items-center justify-center">
              <h4 className="!text-blue-800">
                Orkhon KhaSu School Basketball Team Wins Khan-Uul District
                Championship for the 4th Consecutive Year! 🏆🏀
              </h4>
            </div>

            <div className="flex justify-center items-center pb-[50px]">
              <Button variant="warning" className="!rounded-[50px]">
                Read more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
