import type { Metadata } from "next";
import ContactUsPage from "@/features/ContactUsPage/ContactUsPage";
import "../globals.css"

export const metadata: Metadata = {
  title: "Contact Us",
};
export default function page() {
  return (
    <ContactUsPage />
  );
}
