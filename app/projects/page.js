import Image from 'next/image'
import React from 'react'
import dotpattern from "@/public/dot-pattern.png"
import PortfolioComp from "@/components/Portfolio";
import FAQComp from "@/components/FAQ";
import ContactUsComp from "@/components/ContactUs";
import BlogComp from "@/components/BlogComp";
const Projectpage = () => {
  return (
    <>
    <div className="w-full h-48 bg-slate-200 flex flex-col justify-center items-center text-fNavyBlue text-center relative">
      <Image src={dotpattern} width={40} height={40} className="absolute top-0 left-0 mt-6 " />
      <Image src={dotpattern} width={40} height={40} className="absolute top-0 right-0 mt-16 " />
      <h1 className="text-4xl mt-4 font-extrabold z-50">Project Us</h1>
      <p>Home → Project Us</p>
    </div>
    <div className="w-full h-auto md:h-48 flex flex-col justify-center items-center text-fNavyBlue text-center relative">
  <h1 className="text-4xl mt-4 font-extrabold z-50 mb-2">Our Work</h1>
  <p className="mb-4">Welcome to the NewDefines portfolio</p>
  <div className="flex flex-wrap justify-center">
    <button className="border border-green-500 text-green-500 px-4 py-2 rounded-md hover:bg-green-500 hover:text-white mb-2 mr-2">All</button>
    <button className="border border-green-500 text-green-500 px-4 py-2 rounded-md hover:bg-green-500 hover:text-white mb-2 mr-2">Web Development</button>
    <button className="border border-green-500 text-green-500 px-4 py-2 rounded-md hover:bg-green-500 hover:text-white mb-2 mr-2">CRM Development</button>
    <button className="border border-green-500 text-green-500 px-4 py-2 rounded-md hover:bg-green-500 hover:text-white mb-2 mr-2">App Development</button>
    <button className="border border-green-500 text-green-500 px-4 py-2 rounded-md hover:bg-green-500 hover:text-white mb-2 mr-2">UI UX Design</button>
    <button className="border border-green-500 text-green-500 px-4 py-2 rounded-md hover:bg-green-500 hover:text-white mb-2 mr-2">Graphic Design</button>
    <button className="border border-green-500 text-green-500 px-4 py-2 rounded-md hover:bg-green-500 hover:text-white mb-2 mr-2">Logo Design</button>
    <button className="border border-green-500 text-green-500 px-4 py-2 rounded-md hover:bg-green-500 hover:text-white mb-2 mr-2">Digital Marketing</button>
  </div>
</div>

    <PortfolioComp />

  </>
  )
}

export default Projectpage
