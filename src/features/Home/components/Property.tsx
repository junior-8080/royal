"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { propertyVideoLinks } from "@/lib/data";
import YoutbeFrame from "@/features/Home/components/YoutbeFrame";

const Property = () => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 py-16"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 51, 0.7), rgba(0, 0, 51, 0.7)), url(/propertyLayout.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="w-full md:w-[80%] ml-auto text-white py-6 px-2">
        <p className="text-[24px] md:text-[40px] ">
          Need to discuss a property?
        </p>
        <p className="my-6 text-[16px]">
          Let us oversee the planning, design, and construction of your project,
          from start to finish.
        </p>
      </div>
      <div className="w-full md:w-[80%] mr-auto py-6 px-2">
        <div className="w-full md:w-[80%]">
          <Swiper
            modules={[Navigation]}
            navigation
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            {propertyVideoLinks.map((properVideoId, index) => (
              <SwiperSlide key={properVideoId}>
                <YoutbeFrame videoId={properVideoId} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Property;
