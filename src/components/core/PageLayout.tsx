import React from "react";

type Props = {
  title: string;
  content: React.ReactNode;
};
function PageLayout({ title, content }: Props) {
  return (
    <div className="max-w-6xl w-full mx-auto min-h-96 h-full py-6 mb-20 px-5">
      <h1 className="font-bold text-xl sm:text-2xl text-primary-default  ">{title}</h1>
      <hr className="border-b-2 border-accent-default w-8 mt-1" />
      <div className="mt-5">{content}</div>
    </div>
  );
}

export default PageLayout;
