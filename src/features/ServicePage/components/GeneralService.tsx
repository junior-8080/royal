"use client";

import React, {useRef} from "react";
import {FaEnvelope} from "react-icons/fa";
import useScrollTriggeredCountUp from "./CountUp";

type Props = {
    currentService?: {
        mainbg: string;
        banner?: {
            title: string;
            subtitle?: string;
            description: string;
        };
        stats?: {
            count: number;
            title: string;
        }[];
        cta?: {
            bgImage: string;
            details: string[];
        };
    }
};

function GeneralService({currentService}: Props) {
    const ref = useRef<HTMLDivElement>(null);
    return (
        <div
            className={`relative bg-fixed`}
            style={{
                backgroundImage: `url(${currentService?.mainbg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "top"
            }}
        >
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div
                    className="flex-1 flex px-8 flex-col gap-2 p-60 justify-center items-center bg-[#FF7B2F] bg-opacity-55 text-white">
                    <h2 className="text-6xl font-bold">{currentService?.banner?.title}</h2>
                    <p className="text-lg">{currentService?.banner?.subtitle}</p>
                    <p className="text-lg">{currentService?.banner?.description}</p>
                </div>
                <div></div>
            </div>
            <div
                className="bg-[#000] bg-opacity-55  justify-center  grid grid-cols-2 md:rid-flow-col py-6 md:py-16 md:px-8 content-center items-center text-center w-full text-white">
                {currentService?.stats &&
                    currentService.stats?.map((stat, index) => (
                        <div key={stat.title}>
                            <h2 className="md:text-6xl mx-0 font-bold" ref={ref}>
                                {`${useScrollTriggeredCountUp(ref, stat.count)}+`}
                            </h2>
                            <p className="md:text-base uppercase">{stat.title}</p>
                        </div>
                    ))}
            </div>
            <div
                className="flex md:flex-row flex-col z-20"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 51, 0.55), rgba(0, 0, 51, 0.55)), url(${currentService?.cta?.bgImage})`,
                    backgroundRepeat:"no-repeat",
                    backgroundSize:"cover",
                    backgroundPosition:"center"
                }}
            >
                <div className=" flex-1 flex items-center text-center justify-center">
                    <button
                        className="bg-[#FF7B2F] text-white my-3 p-2 text-bold rounded-xl flex gap-2 items-center justify-center">
                        <FaEnvelope/>
                        <span> Contact Us</span>
                    </button>
                </div>
                <div className="bg-white items-center justify-center p-8 flex flex-col gap-3 flex-1">
                    {currentService?.cta?.details.map((text) => (
                        <p key={text} className="text-[18px] my-2">{text}</p>
                    ))}
                </div>
            </div>
        </div>

    );
}

export default GeneralService;
