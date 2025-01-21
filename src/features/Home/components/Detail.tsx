import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, Navigation} from "swiper/modules";
import Image from "next/image";
import {AiFillStar} from "react-icons/ai";
import "swiper/css";

type Props = {
    data: {
        tag: string;
        title: string;
        subtitle: string;
        details: string[];
        images: string[];
        price: number;
        discount_price?: number;
        currency:string
    },
    className: string

};

const Detail = ({data, className}: Props) => {
    return <section className={className}>
        <div className="w-full md:w-[80%] ml-auto ">
            <p className="text-base text-primary-default">{data.tag}</p>
            <p className="text-4xl">{data.title}</p>
            <div className="w-full md:w-[80%]">
                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                >
                    {data.images.map((luxaptImage, index) => (
                        <SwiperSlide key={luxaptImage + index}>
                            <Image
                                src={luxaptImage}
                                alt="luxAp"
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
        <div className="w-full md:w-[80%] mr-auto">
            <div className="flex flex-wrap items-center justify-between my-4">
                <div>
                    {data.discount_price && <span className="text-2xl line-through mr-4 text-gray-400">
              {data.currency}{data.price}
            </span>}
                    <span className="text-2xl">{data.currency} {data.discount_price || data.price}</span>
                </div>
                <div className="flex flex-wrap items-center">
                    {["#1", "#2", "#3", "#4"].map((item) => (
                        <AiFillStar key={item} color="#ff7b2f"/>
                    ))}
                </div>
            </div>
            <p className="text-xl my-4">
                {data.subtitle}
            </p>
            <div className="w-[50px] py-[2px] bg-orange-500 my-4"></div>
            {data.details.map((detail) => <p key={detail}>{detail}</p>)}
        </div>
    </section>

}

export default Detail