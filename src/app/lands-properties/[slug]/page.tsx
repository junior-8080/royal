"use client";
import React from "react";
import LandPropertyPage from "@/features/LandPropertyPage/LandPropertyPage";
import "../../globals.css"
import {useParams} from "next/navigation";

export default function LandAndProperty() {
  const params = useParams<{ slug: string }>();
  return <LandPropertyPage propertyId={params.slug}  />
}
