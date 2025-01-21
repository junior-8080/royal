"use client";
import React from "react";
import NavBar from "@/features/Home/components/NavBar";
import Posts from "@/features/BlogPage/components/Posts";
import LatestPost from "@/features/BlogPage/components/LatestPost";
import BlogContact from "@/features/BlogPage/components/BlogContact";

const BlogPage = () => {
    return <div>
        <NavBar/>
        <div className="md:max-w-7xl md:mx-auto w-full flex  gap-8 mt-44">
            <div className="w-full md:w-[70%]">
                <Posts/>
            </div>
            <div className="w-full md:w-[30%]">
                <div>
                    <LatestPost/>
                </div>
                <div className="my-16">
                    <BlogContact/>
                </div>
            </div>
        </div>

    </div>;
};

export default BlogPage;
