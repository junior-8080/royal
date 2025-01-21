import React from 'react';

type Props = {
    title: string;
    bgImage:string
}
const Hero = ({title,bgImage}:Props) => {
    return (
        <div className="relative h-[350px]" style={{backgroundImage: `url(${bgImage})`,backgroundSize:"cover",backgroundPosition:"center"}}>
            <div className="absolute inset-0 bg-blue-900/70"></div>
            <div className="relative h-full flex items-center justify-center">
                <h1 className="text-5xl font-bold text-white">
                    {title}
                </h1>
            </div>
        </div>
    );
};

export default Hero;