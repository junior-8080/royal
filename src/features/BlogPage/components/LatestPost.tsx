import {blogs} from "@/lib/data";
import Image from "next/image";
import React from "react";


const LatestPost =  () => {
    return <div>
        <h2 className="text-lg text-center my-4">LATEST POSTS</h2>
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
}

export default  LatestPost