/* eslint-disable @next/next/no-img-element */
import React from "react";
import WhatWeDo from "@/features/components/WhatWeDo";
import NavBar from "@/features/Home/components/NavBar";
import HeroBanner from "@/features/Home/components/HeroBanner";
import LuxuryApartment from "@/features/Home/components/LuxuryApartment";
import Property from "@/features/Home/components/Property";
import ClientTestimonials from "@/components/shared/ClientTestimonials";
import OurLand from "@/features/components/OurLand";
import OurCoreValues from "@/features/components/OurCoreValues";
import RecentBlog from "@/features/components/RecentBlog";

function HomePage() {
  return (
    <div>
      <HeroBanner />
      <LuxuryApartment />
      <Property />
        <OurLand />
        <OurCoreValues />
      <WhatWeDo />
        <ClientTestimonials />
        <div className="py-20">
            <RecentBlog />
        </div>

    </div>
  );
}

export default HomePage;
