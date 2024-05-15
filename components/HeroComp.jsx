// * imports
import React from "react";
import Image from "next/image";

// * local imports
import DotPattern from "@/public/dot-pattern.png";
import MenInChair from "@/public/men-in-chair.png";
import { Button } from "./ui/button";

const HeroComp = () => {
  return (
    <>
      {/* main container */}
      <div className="w-full md:min-h-screen lg:px-0 sm:px-12 px-4 lg:py-0 py-8 h-auto flex lg:flex-row flex-col lg:justify-center justify-start items-start bg-gradient-to-r from-[#7F7FFE3D] relative overflow-hidden">
        {/* rectangle navy blue */}
        {/* <div className="absolute bg-fNavyBlue w-[37px] h-[37px] rotate-45 top-[11%] left-[9%] max-sm:hidden"></div> */}

        {/* rectangle sea green */}
        <div className="absolute bg-fSeaGreen w-[39px] h-[39px] rotate-45 top-[20%] left-[52%] max-md:hidden"></div>

        {/* rectangle pink */}
        <div className="absolute bg-[#FE5086] w-[18.25px] h-[18.25px] rotate-45 top-[71%] left-[45%] max-md:hidden"></div>

        {/* rectangle pink */}
        <div className="absolute bg-[#ff085b] w-[20.38px] h-[20.38px] rotate-45 top-[10%] left-[82%] max-md:hidden"></div>

        {/* rectangle pink */}
        <div className="absolute bg-fSeaGreen w-[20.38px] h-[20.38px] rotate-45 top-[90%] left-[82%] max-md:hidden"></div>

        {/* dot pattern */}
        <Image
          src={DotPattern}
          alt="DotPattern"
          width={500}
          height={500}
          className="object-contain absolute w-auto top-[22%] h-[416px] right-0 max-lg:hidden"
        />

        {/* left div */}

        <div className="flex flex-col items-start lg:pl-[100px] pl-2 lg:pt-[6%] lg:justify-start justify-center w-full h-full lg:w-1/2  lg:min-h-screen gap-2">
          <div>
            <div className=" bg-fNavyBlue w-[37px] h-[37px] ml-10 rotate-45  max-sm:hidden"></div>
            <h1 className="text-fSeaGreen sm:text-[32px] text-2xl font-medium lg:mt-8 mt-4 relative z-50">
              {`Welcome to New Defines `}
            </h1>
          </div>
          <div className="flex flex-col sm:gap-6 gap-4">
            <h1 className="text-fNavyBlue sm:text-5xl text-3xl font-extrabold  relative z-50">
              {`Your Partner in Digital `}
            </h1>
            <h1 className="text-fNavyBlue sm:text-5xl text-3xl w-fit font-extrabold border border-fSeaGreen py-3 px-6  relative z-50">
              {`Innovation!`}
              <div className="absolute w-[11px] h-[11px] bg-fSeaGreen -top-1 -left-1"></div>
              <div className="absolute w-[11px] h-[11px] bg-fSeaGreen -top-1 -right-1"></div>
              <div className="absolute w-[11px] h-[11px] bg-fSeaGreen -bottom-1 -left-1"></div>
              <div className="absolute w-[11px] h-[11px] bg-fSeaGreen -bottom-1 -right-1"></div>
            </h1>
          </div>

          <p className="sm:w-[525px] h-auto text-[#777777] mt-4 text-[16px] font-normal  relative z-50">
            {`At NewDefines, we excel in innovative digital solutions tailored to drive growth and efficiency for businesses. As a leading software house, we specialize in bespoke solutions for your success.`}
          </p>

          <button
            variant="custom"
            className="w-[200px] h-[50px] text-[20px] bg-fSeaGreen text-white rounded-lg font-normal mt-6"
          >{`Discover more`}</button>

        </div>

        {/* right div */}
        <div className="w-full h-full md:block hidden px-24 pt-24 lg:w-1/2">
          <Image
            src={MenInChair}
            alt="men-in-chair"
            width={500}
            height={500}
            className="relative max-md:hidden object-contain w-[555.73px] h-[523.72px] z-50"
          />
        </div>

      </div>
    </>
  );
};

export default HeroComp;
