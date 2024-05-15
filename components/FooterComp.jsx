// * imports
import React from "react";

// * lib imports
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

// * local imports
import { NavItemsData } from "@/utils/data";

const FooterComp = () => {
  return (
    <>
      {/* main container */}
      <div className="flex flex-col items-center justify-center w-full h-auto md:gap-8 gap-6 px-8 text-center text-white bg-[#173365] pt-[5%] pb-[3%]">
        {/* Links */}
        <h1 className="flex items-center justify-center w-full h-auto text-2xl font-bold text-center">
          {`Links`}
        </h1>

        <div className="flex flex-wrap items-center justify-center w-full space-x-10 text-center">
          {NavItemsData?.map((item, idx) => (
            <span key={idx} className="text-base font-medium">
              {item.title}
            </span>
          ))}
        </div>

        <h1 className="flex items-center justify-center w-full h-auto text-2xl font-bold">
          {`Follow Us`}
        </h1>

        <div className="flex items-center justify-center w-full h-auto gap-3 text-center flex-nowrap">
          <div className="w-[35px] h-[35px] rounded-full bg-fSeaGreen flex justify-center items-center">
            <FaFacebookF className="w-4 h-4 text-white" />
          </div>
          <div className="w-[35px] h-[35px] rounded-full bg-fSeaGreen flex justify-center items-center">
            <FaXTwitter className="w-4 h-4 text-white" />
          </div>
          <div className="w-[35px] h-[35px] rounded-full bg-fSeaGreen flex justify-center items-center">
            <FaInstagram className="w-4 h-4 text-white" />
          </div>
        </div>

        <div className="w-full mt-2 text-base font-medium text-center md:mt-8">
          {`© 2023 Newdefines. All Rights Reserved.`}
        </div>
      </div>
    </>
  );
};

export default FooterComp;
