"use client";
import Detail from "@/features/Home/components/Detail";
import {luxuryApartment} from "@/lib/data";

const LuxuryApartment = () => {
    return (
        <Detail data={luxuryApartment}
                className="max-w-[95%] font-Roboto md:max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 justify-center pb-16"/>
    );
};

export default LuxuryApartment;
