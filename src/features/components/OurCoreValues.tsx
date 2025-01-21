"use client"
import React, {useState} from 'react';
import {coreValues} from "@/lib/data";
import Image from "next/image";

const OurCoreValues = () => {
    const [activeId, setActiveId] = useState(0)

    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            {/* Header Section */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">
                    <span className="text-blue-900">Our Core </span>
                    <span className="text-orange-500">Values</span>
                </h2>
                <p className="text-gray-600 max-w-3xl mx-auto text-lg">
                    We are a one-stop shop real estate solution. We combine excellence and expertise
                    in making land acquisition litigation-free, property construction and management,
                    seamless and gratifying.
                </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div className="space-y-4 mt-0 md:mt-8 bg-gray-200 p-3">
                    {coreValues.map((value, index) => (
                        <div
                            key={value.name}
                            className="bg-white rounded-lg shadow-sm overflow-hidden"
                            onClick={() => {
                                if (value.id === activeId) {
                                    setActiveId(0)
                                } else {
                                    setActiveId(value.id)
                                }
                            }}
                        >
                            <div className="p-4">
                                <div className="flex items-center gap-3">
                                    {value.id === activeId ? (
                                        <Image src={"/svgs/arrowdown.svg"} alt={"arrow-down"} width={10} height={10}/>

                                    ) : (
                                        <Image src={"/svgs/expand.svg"} alt={"expand"} width={15} height={15}/>
                                    )}
                                    <h3 className="font-medium text-gray-800">{value.name}</h3>
                                </div>
                                {value.id === activeId && value.description && (
                                    <p className="mt-2 text-gray-600 pl-9">
                                        {value.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="relative">
                    <img
                        src="/corevalueImage.png"
                        alt="Royal Kingdom Estate Team"
                        className="w-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default OurCoreValues;