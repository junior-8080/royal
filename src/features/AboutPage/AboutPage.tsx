import React from "react";
import Hero from "@/features/components/Hero";
import NavBar from "@/features/Home/components/NavBar";
import OurCoreValues from "@/features/components/OurCoreValues";
import WhatWeDo from "@/features/components/WhatWeDo";
import ClientTestimonials from "@/components/shared/ClientTestimonials";
import GetToKnowUs from "@/features/AboutPage/components/GetToKnowUs";

function AboutPage() {
    return (
        <div>
            <Hero title="About Us" bgImage="/bannerImage00.jpg"/>
            <GetToKnowUs />
            <OurCoreValues/>
            <WhatWeDo/>
            <ClientTestimonials/>
        </div>

    );
}

export default AboutPage;
