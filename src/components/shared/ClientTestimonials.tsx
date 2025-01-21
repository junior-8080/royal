"use client"
import React, {useRef} from 'react';
import {customerReview, stats} from "@/lib/data";
import Image from "next/image";
import useScrollTriggeredCountUp from "@/features/ServicePage/components/CountUp";

const ClientTestimonials = () => {
    const ref = useRef<HTMLDivElement>(null);
    return (
        <section>
            <div className="relative" style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 51, 0.7), rgba(0, 0, 51, 0.7)), url(/funfact.jpg)`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}>
                <div
                    className="absolute inset-0 bg-[#000796] bg-opacity-[0.82] transition-all duration-300 ease-in-out"></div>
                <div className="relative">
                    <img src={"/svgs/wave02.svg"} alt={"wave"} className="w-full"/>
                </div>
                <div className="w-full py-8 md:py-16 px-4 md:px-6 max-w-6xl mx-auto">
                    <div className="z-10 relative">
                        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
                            <span className="text-white">What Clients Say</span>
                            <br/>
                            <span className="text-orange-500">About Us</span>
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {customerReview.map((review) => (
                                <div
                                    key={review.name}
                                    className="bg-white py-6 md:py-8 px-4 md:px-6 rounded-lg shadow-lg"
                                >
                                    <p className="text-gray-600 mb-6 text-sm md:text-base">
                                        {review.comment}
                                    </p>

                                    <div className="flex items-center my-4 gap-2">
                                        <Image
                                            src={review.profileImage}
                                            alt={review.name}
                                            width={50}
                                            height={50}
                                            className="rounded-full w-10 h-10 md:w-12 md:h-12"
                                        />
                                        <div>
                                            <h3 className="font-semibold text-gray-800 text-sm md:text-base">
                                                {review.name}
                                            </h3>
                                            <p className="text-orange-500 text-sm">
                                                {review.location}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="w-full relative">
                    <img src={"/svgs/wave03.svg"} alt={"wave"} className="w-full"/>
                </div>
            </div>
            <div className="w-full md:w-[80%] -mt-40 mx-auto bg-white ">
                <div
                    className="mx-4 md:mx-0 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 bg-white p-4 md:p-6 rounded-md shadow-sm drop-shadow">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.title}
                            className={`flex flex-col justify-center items-center text-center py-4 md:py-6 px-4 md:px-24 ${
                                index !== stats.length - 1 ? 'border-b md:border-b-0 md:border-r border-gray-200' : ''
                            }`}
                        >
                            <div className="mb-4">
                                <img
                                    src={stat.icon}
                                    alt={"icon"}
                                    className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]"
                                />
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-2" ref={ref}> {`${useScrollTriggeredCountUp(ref, stat.count)}+`}</h2>
                            <p className="text-sm md:text-base">{stat.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientTestimonials;