import "./globals.css";
import HomePage from "@/features/Home/HomePage";
import type { Metadata } from "next";
import Footer from "@/components/shared/Footer";
import NavBar from "@/features/Home/components/NavBar";

export const metadata: Metadata = {
  title: "Royal Kingdom",
};

const page = async () => {
  return (
      <div>
        <NavBar  textColor="text-white"/>
        <HomePage />
      </div>

  );
};

export default page;
