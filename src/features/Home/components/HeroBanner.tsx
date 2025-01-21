"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { bannerData } from "@/lib/data";
import Button from "@/features/components/Button";

const HeroBanner = () => {
  return (
    <div className="flex w-full h-full flex-col relative">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full h-[90vh]  -z-10"
      >
        {bannerData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${slide.bgImage})`,
              }}
            >
              <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24 text-white">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                  {slide.title}
                </h1>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-orange-500 mb-6">
                  {slide.subtitle}
                </h2>
                <p className="max-w-2xl text-lg md:text-xl mb-8">
                  {slide.description}
                </p>
                {/*<button className="bg-orange-500 border-none hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-md w-fit transition-colors">*/}
                {/*  {slide.buttonText}*/}
                {/*</button>*/}
                  <Button text={slide.buttonText} className="bg-primary-default border-none  text-white font-bold w-fit transition-colors rounded-md" size="sm"/>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-0 z-10 w-full">
        <img
          src="/svgs/waves.svg"
          alt=""
          className="bg-transparent w-full h-full"
        />
      </div>
      {/*<div className="py-8 bg-white"></div>*/}
    </div>
  );
};

export default HeroBanner;
