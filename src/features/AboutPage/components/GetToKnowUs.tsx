import React from 'react';
import Image from "next/image";


const GetToKnowUs = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-4xl font-bold mb-2">
                        <span className="text-blue-700">Get To Know </span>
                        <span className="text-orange-500">Us,</span>
                    </h2>
                    <h3 className="text-2xl text-gray-800 mb-6">Royal Kingdom Estate</h3>
                    <div className="space-y-6 text-gray-600 text-base">
                        <p>
                            is committed to delivering a high level of expertise, customer service,
                            and attention to detail to the real estate market across Ghana and beyond.
                            Let us facilitate your vision of owning land or building a home on the
                            African continent.
                        </p>
                        <p>
                            We provide a reliable real estate services by translating your dreams
                            into reality. Construction is considered stressful by many, but to us
                            at Royal Kingdom Estate, it is a labour of love — Your challenges bring
                            out the best in us.
                        </p>
                    </div>
                </div>
                <div>
                    <img
                        src="/kitchen.jpg"
                        alt="Modern Kitchen Interior"

                        className="w-full object-cover"
                    />
                </div>

            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
                <div className="flex items-center gap-4 bg-white p-6 h-[250px]  shadow-md border-l-4 border-blue-500 drop-shadow">
                    <div className="p-3 bg-blue-700 rounded-full">
                        <Image src={"/svgs/target.svg"} alt={"Our Mission"} width={120} height={120}/>
                    </div>
                    <div>
                        <h4 className="text-2xl font-semibold text-blue-700 mb-2">Our Mission</h4>
                        <p className="text-gray-600 text-base">
                            To provide a one-stop shop real estate solution.
                            To combine excellence and expertise in making land acquisition
                            litigation-free, property construction and management, seamless
                            and gratifying.
                        </p>
                    </div>

                </div>
                <div className="flex items-center gap-4 bg-white p-6  h-[200px] shadow-md border-l-4 border-orange-500 drop-shadow">
                    <div className="p-3 bg-orange-500 rounded-full">
                        <Image src={"/svgs/eye.svg"} alt={"target"} width={120} height={120}/>
                    </div>
                    <div>
                        <h4 className="text-2xl font-semibold text-orange-500 mb-2">Our Vision</h4>
                        <p className="text-gray-600 text-base">
                            To be a renowned real estate brand in Ghana, the benchmark in
                            the African real estate industry and a prestigious global brand.
                        </p>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default GetToKnowUs;