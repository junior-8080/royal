import "../globals.css";
import AboutPage from "@/features/AboutPage/AboutPage";
import type { Metadata } from "next";
import Footer from "@/components/shared/Footer";
import NavBar from "@/features/Home/components/NavBar";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Royal Kingdom Estate is committed to delivering a high level of expertise, customer service, and attention to detail to the real estate market across Ghana and beyond",
};

const About = () => {
  return <div>
    <NavBar textColor="text-white" />
    <AboutPage />
  </div>;
};
export default About;
