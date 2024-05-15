import React from "react";
import ServicesComp from "@/components/ServicesComp";
import BlogComp from "@/components/BlogComp";
import Image from 'next/image'
import dotpattern from "@/public/dot-pattern.png"
const Servicepage = () => {
  return (
    <>
      <div className="w-full h-48 bg-slate-200 flex flex-col justify-center items-center text-fNavyBlue text-center">
      <Image src={dotpattern} width={40} height={40} className="absolute top-0 left-0 mt-24 " />
      <Image src={dotpattern} width={40} height={40} className="absolute top-0 right-0 mt-32 " />
        <h1 className=" text-4xl mt-4 font-extrabold  relative z-50 ">
          {`Services`}
        </h1>
        <p>Home → Services Us </p>
      </div>
      <ServicesComp />
      <BlogComp />
    </>
  );
};

export default Servicepage;