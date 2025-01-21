import React from "react";
import type { Metadata } from "next";
import BlogPage from "@/features/BlogPage/BlogPage";
import "../globals.css"

export const metadata: Metadata = {
  title: "Blog",
  description: "",
};
const page = () => {
  return (
    <BlogPage />
  );
};

export default page;
