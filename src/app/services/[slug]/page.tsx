"use client";
import "../../globals.css";
import {useParams} from "next/navigation";
import ServicePage from "@/features/ServicePage/ServicePage";
import ClientTestimonials from "@/components/shared/ClientTestimonials";
import NavBar from "@/features/Home/components/NavBar";

export default function BookPreview() {
    const params = useParams<{ slug: string }>();
    return <div>
        <ServicePage serviceId={params.slug}/>
        <ClientTestimonials/>
    </div>


}
