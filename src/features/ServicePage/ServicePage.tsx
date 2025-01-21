import GeneralService from "@/features/ServicePage/components/GeneralService";
import React, {useMemo} from "react";
import {servicesData} from "@/lib/data";
import OurLand from "@/features/components/OurLand";
import LandAquisition from "@/features/ServicePage/components/LandAquisition";
import Hero from "@/features/components/Hero";
import NavBar from "@/features/Home/components/NavBar";

type Props = {
    serviceId: string;
}

const ServicePage = ({serviceId}: Props) => {
    const currentService = useMemo(() => {
        return servicesData.find((service) => service.id === serviceId)
    }, [serviceId])
    return (
        <div>
            {serviceId !== "land-acquisition" && <div className="max-w-6xl mx-auto mt-28 ">
                <NavBar/>
                <GeneralService currentService={currentService}/>
            </div>}
            {
                serviceId === "land-acquisition" && <div>
                    <NavBar textColor="text-white"/>
                    <Hero title="Land Aquisition" bgImage="/bannerImage02.jpg"/>
                    <LandAquisition />
                   <OurLand />
                </div>
            }
        </div>


    );
};

export default ServicePage;
