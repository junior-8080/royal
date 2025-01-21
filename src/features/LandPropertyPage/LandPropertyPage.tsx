import React from "react";
import NavBar from "@/features/Home/components/NavBar";
import ClientTestimonials from "@/components/shared/ClientTestimonials";
import OurLand from "@/features/components/OurLand";
import Detail from "@/features/Home/components/Detail";
import {landAndProperties} from "@/lib/data";

type Props = {
    propertyId: string
}
const LandPropertyPage = ({propertyId}: Props) => {
    const property = landAndProperties.find((property) => property.id === propertyId)
    return <div>
        <NavBar/>
        {property && <Detail data={property} className="mt-44 max-w-[95%] md:max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 justify-center pb-16"/>}
        <OurLand/>
        <ClientTestimonials/>
    </div>;
};

export default LandPropertyPage;
