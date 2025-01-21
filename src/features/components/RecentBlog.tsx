import React from 'react';
import {blogs} from "@/lib/data";
import Image from "next/image";

const RecentBlog = () => {


    const mainBlog = blogs[0]
    return (
        <div className="max-w-6xl mx-auto px-4 py-16">
            <h2 className="text-4xl font-bold text-center mb-12">
                <span className="text-blue-900">Our Recent </span>
                <span className="text-orange-500">Blog</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
                <div className="relative lg:col-span-2 bg-black h-[350px]" style={{
                    backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, .8), rgba(0, 0, 0, .2) 50%, rgba(0, 0, 0, 0) 100%),url(${mainBlog.banner})`,
                    backgroundColor: 'rgba(0, 0, 0, 0)',
                    backgroundSize: "cover",
                    backgroundPosition:"center"
                }}>
                    <p className="absolute bottom-4  left-1/4 text-2xl text-white text-center">The Oldest Building in Africa</p>
                </div>

                {/* Sidebar Recent Posts */}
                <div className="space-y-6">
                    {blogs.map((blog, index) => (
                        <div key={index} className="flex gap-4 items-start bg-white p-4 border-b-[1px] border-gray-100">
                            <Image
                                src={blog.banner}
                                alt={blog.title}
                                className=" object-cover"
                                width={120}
                                height={140}
                            />
                            <div>
                                <h3 className="font-medium text-gray-900 mb-2">{blog.title}</h3>
                                <div className="flex items-center text-sm text-gray-500">
                                    <span>{blog.createdAt}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RecentBlog;