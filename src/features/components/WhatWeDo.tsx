/* eslint-disable @next/next/no-img-element */
import React from "react";
import { whatWeDo } from "@/lib/data";
import Image from "next/image";

function AboutAuthor() {
  return (
      <section className=" bg-gray-50">
          <div className="w-full md:w-[70%] mx-auto py-16 ">
              <p className="text-4xl text-center py-4">What We Do</p>
              <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-2">
                  {whatWeDo.map((activity) => (
                      <div
                          className="max-w-2xl px-6 py-12 bg-white rounded-md"
                          key={activity.title}
                      >
                          <div className="flex items-start space-x-4">
                              <div className="flex-shrink-0">
                                  <div className="p-3 rounded-lg">
                                      <Image
                                          src={activity.icon}
                                          alt={activity.title.toLowerCase()}
                                          width={40}
                                          height={40}
                                      />
                                  </div>
                              </div>
                              <div className="flex-1">
                                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                                      {activity.title}
                                  </h2>
                                  <p className="text-gray-600 text-lg leading-relaxed">
                                      {activity.description}
                                  </p>
                              </div>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>

  );
}

export default AboutAuthor;
