import React from "react";
import ConactForm from "@/features/ContactUsPage/ConactForm";
import Hero from "@/features/components/Hero";
import NavBar from "@/features/Home/components/NavBar";


function ContactUsPage() {
  return <div>
    <NavBar textColor="text-white" />
    <Hero title="Conact Us" bgImage="/bannerImage00.jpg"  />
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 my-20">
      <div className="w-full">
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-navy-800">Contact &</span>
          <span className="text-orange-500"> Reach Us!</span>
        </h1>
        <p className="text-orange-500 text-xl mb-8">Do you have a project? let's start</p>

        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="bg-blue-700 p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Address</h3>
              <p className="text-gray-600">B2 Safaatse Kukudabi Street, Tse Addo, Accra</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-blue-700 p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Phone</h3>
              <p className="text-gray-600">+233 55 755 5909 | +233 27 277 8880</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="bg-blue-700 p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <p className="text-gray-600">info@royalkingdomestatesh.com</p>
            </div>
          </div>
        </div>
      </div>
        <ConactForm/>
    </div>
  </div>;
}

export default ContactUsPage;
