import {bannerData, ourLands} from "@/lib/data";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const LandAquisition = () => {
    return (
        <div className="flex  my-10 max-w-6xl mx-auto">
            <div className="w-full md:w-[30%]">
                <div className="my-4">
                    <h2 className="text-xl font-bold">Available Lands</h2>
                    <div>
                        {ourLands.map((land) => <div className="flex items-center gap-2 md:ml-2 mt-2">
                            <Image src={"/svgs/map.svg"} alt={"map"} width={20} height={20}/>
                            <p>{land.name}</p>
                        </div>)}
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-bold">Amenities</h2>
                    {["Litigation Free", "Serene Environment", " Proximity"].map((amenity) => <div
                        className="flex items-center gap-2 md:ml-2 mt-2">
                        <Image src={"/svgs/checkbox.svg"} alt={"map"} width={20} height={20}/>
                        <p>{amenity}</p>
                    </div>)}
                </div>
            </div>
            <div className="w-[70%]">
                <div>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        navigation
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        loop={true}
                        className="w-[100%]"
                        slidesPerView={3}
                    >
                        {["/ourLand0.jpg","/ourLand00.jpg","/ourLand01.jpg","/ourLand02.jpg","/ourLand03.jpg","/ourLand04.jpg","/ourLand05.jpg","/ourLand06.jpg","/ourLand07.jpg"].map((image) => (
                            <SwiperSlide key={image}>
                                <div className="w-full">
                                    <img src={image} alt={image} />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div>
                    <h2 className="text-2xl text-center font-bold my-2">Our Lands</h2>
                    <p className="text-lg py-2">With a proven formular for expediting land acquisition, Royal Kingdom
                        Estate
                        ensures that needless
                        bureaucratic hurdles are avoided, or removed; thereby building trust between us and our
                        clients.</p>
                    <p className="text-lg py-2">Land acquisition can be a dreadful experience when facilitated by the
                        wrong
                        firm, not to mention the
                        double dealings, complex litigations, and the heartaches.
                    </p>
                    <p className="text-lg py-2">With a wealth of experience, coupled with over a decade of doing
                        business in
                        the Ghanaian landscape,
                        Royal Kingdom Estate has become the go-to firm for your real estate needs. As an authority in
                        the
                        Ghanaian real estate arena, we are poised to assist you in sourcing the perfect land site, to
                        perform the initial checks, negotiate the right price, and complete the purchasing process.</p>
                    <p className="text-lg py-2">With Royal Kingdom Estate as your partner, you can be assured of a
                        successful land acquisition
                        process. To get started, fill out the form below, and we will be in touch soon.</p>
                </div>
            </div>
        </div>
    )
}
export default LandAquisition