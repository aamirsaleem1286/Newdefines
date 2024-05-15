//* imports

import React from "react";
import Image from "next/image";
import Link from "next/link";

// * local imports
import redirectIcon from "@/public/redirect.png";

const PortfolioCardComp = ({ data }) => {
  return (
    <>
      {/* main container */}
      {data?.map((item, idx) => (
        <div
          key={idx}
          className="xl:max-w-[25vw] max-sm:min-w-[30vw] xl:min-h-[478px] h-auto rounded-[10px] text-black bg-white flex flex-col justify-start items-center"
        >
          <Image
            src={item.img}
            alt="portfolio"
            width={500}
            height={500}
            className="object-cover rounded-tl-[10px] rounded-tr-[10px] w-full xl:h-[346px] h-[250px]"
          />

          {/* bottom container */}
          <div className="flex items-center justify-around w-full h-auto gap-1 p-4">
            <div className="xl:min-w-[244px] w-auto h-full flex flex-col justify-start items-center gap-1 text-[#000000] xl:text-base lg:text-sm text-xs font-normal">
              <h1 className="flex w-full h-auto text-base xl:text-2xl lg:text-xl flex-nowrap">
                {item.title}
              </h1>
              <p className="w-full h-auto">{item.description}</p>
            </div>

            {/* right link */}
            <div className="w-auto h-full">
              <Link
                href={`/${item.title}`}
                className="border-[2px] rounded-full border-[#00C9A2] xl:w-[57px] lg:w-10 lg:h-10 xl:h-[57px] w-8 h-8 bg-transparent flex justify-center items-center"
              >
                <Image
                  src={redirectIcon}
                  alt="portfolio"
                  width={500}
                  height={500}
                  className="object-contain w-3 h-3 lg:w-6 lg:h-6"
                />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default PortfolioCardComp;
