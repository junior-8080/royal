import React from "react";
import Link from "next/link";
import Image from "next/image";
import {blogs, menuConfig, socials} from "@/lib/data";

const Footer = () => {
  const services =
      menuConfig.find((item) => item.title === "Services")?.children || [];

  return (
      <footer className="mt-36">
        <div className="bg-navy-900 text-white w-full" style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 51, 0.7), rgba(0, 0, 51, 0.7)), url(/funfact.jpg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}>
          <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 content-center w-[95%] md:w-[80%] mx-auto md:py-16 p-6"
          >
            <div className="space-y-4">
              <Link href="/" className="block mb-6">
                <img
                    src="/plainlogo.png"
                    alt="Royal Kingdom Estate"
                    className="w-[150px]"
                />
              </Link>
              <p className="text-gray-300">
                Royal Kingdom Estate is committed to delivering a high level of
                expertise, customer service, and attention to detail to the real
                estate market across Ghana and beyond. Let us facilitate your
                vision of owning land or building a home on the African continent.
              </p>
            </div>

            <div className="w-full">
              <h3 className="text-xl font-semibold mb-6 relative pl-4 before:absolute before:footer-content-title-bar before:w-0.5 before:h-4 before:bg-[#cfe1ff] before:left-0 before:top-1/2 before:-translate-y-1/2">
                LATEST POSTS
              </h3>
              <div className="space-y-4">
                {blogs.map((blog) => (
                    <div
                        className="flex gap-4 border-b-[1px] border-b-gray-400 py-3"
                        key={blog.title}
                    >
                      <Image
                          src={blog.banner}
                          alt="The Oldest Building in Africa"
                          width={80}
                          height={80}
                          className="object-cover"
                      />
                      <Link
                          href="/blog/oldest-building-africa"
                          className="hover:text-blue-400"
                      >
                        The Oldest Building in Africa
                      </Link>
                    </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 relative pl-4 before:absolute before:content-footer-title-bar before:w-0.5 before:h-4 before:bg-[#cfe1ff] before:left-0 before:top-1/2 before:-translate-y-1/2">
                SERVICES
              </h3>
              <ul className="space-y-3">
                {services.map((service) => (
                    <li
                        key={service.link}
                        className="border-b-[1px] border-b-gray-400 py-2"
                    >
                      <Link
                          href={service.link}
                          className="text-gray-300 hover:text-white transition-colors"
                      >
                        {service.title}
                      </Link>
                    </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 relative pl-4 before:absolute before:content-footer-title-bar before:w-0.5 before:h-4 before:bg-[#cfe1ff] before:left-0 before:top-1/2 before:-translate-y-1/2">
                CONTACT US
              </h3>
              <div className="space-y-3 text-gray-300">
                <p>N0. 7 Wuogon Close Cantonment, Accra Ghana.</p>
                <div>
                  <p>+233 55 755 5909</p>
                  <p>+233 27 277 8880</p>
                </div>
                <div>
                  <p>info@royalkingdomestate.com</p>
                  <p>sales@royalkingdomestate.com</p>
                  <p>royalkingdom1@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="py-4 px-2">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              {socials.map((social) => <div>
                <Link href="#" className="text-gray-400 hover:text-white rounded-full bg-gray-400">
                  <div className="p-3 bg-gray-300 rounded-full">
                    <social.icon color={"#00225a"}/>
                  </div>
                </Link>
              </div>)}
            </div>
            <p className="text-gray-400 text-sm text-center md:text-right">
              Copyright © 2025 Royal Kingdom Estate. Powered by API Technogies
            </p>
          </div>
        </div>
      </footer>

  )
      ;
};

export default Footer;
