import Image from "next/image";
import React from "react";
import MenInChair from "@/public/men-in-chair1.png";
import Rectangle from "@/public/Rectangle 10.png";
import DotPattern from "@/public/dot-pattern.png";
import ServicesComp from "@/components/ServicesComp";
import BlogComp from "@/components/BlogComp";
import ourstory from "@/public/ourstory.png";
import ourapproch from "@/public/ourapproch.png";
import dotpattern from "@/public/dot-pattern.png";

const AboutPage = () => {
  return (
    <>
      <div className="w-full h-48 bg-slate-200 flex flex-col justify-center items-center text-fNavyBlue text-center relative">
        <Image src={dotpattern} width={40} height={40} className="absolute top-0 left-0 mt-4" />
        <Image src={dotpattern} width={40} height={40} className="absolute top-0 right-0 mt-4" />
        <div className="absolute bg-[#1C12588F] w-[18.25px] h-[18.25px] rotate-45 top-[20%] left-[10%] max-sm:hidden"></div>
        <div className="absolute bg-[#1C12588F] w-[18.25px] h-[18.25px] rotate-45 right-[20%] max-sm:hidden"></div>
        <div className="absolute bg-[#ff085b] w-[20.38px] h-[20.38px] rotate-45 top-[20%] left-[86%] max-md:hidden"></div>
        <div className="absolute bg-[#00C9A29C] w-[20.38px] h-[20.38px] rotate-45 top-[35%] right-[86%] max-md:hidden"></div>
        <h1 className="text-4xl mt-4 font-extrabold relative z-50">About Us</h1>
        <p className="text-sm">Home → About Us</p>
      </div>

      <div className="relative flex flex-col items-start justify-start w-full h-auto min-h-screen overflow-hidden bg-white md:flex-row md:justify-center">
        {/* rectangle navy blue */}

        {/* rectangle pink */}
        <div className="absolute bg-[#1C12588F] w-[18.25px] h-[18.25px] rotate-45 top-[12%] right-[30%] max-sm:hidden"></div>

        {/* rectangle pink */}
        <div className="absolute bg-[#FE50867A] w-[18.25px] h-[18.25px] rotate-45 top-[81%] right-[30%] max-sm:hidden"></div>

        {/* dot pattern */}

        <Image
          src={DotPattern}
          alt="DotPattern"
          width={500}
          height={500}
          className="object-contain absolute min-w-[202px] w-auto top-[17%] h-[35%] left-[10%] max-md:hidden"
        />

        {/* left div */}

        <div className="relative flex flex-col items-start md:pl-[100px] pl-2 md:pt-[3%] justify-start w-full h-full md:w-1/2 md:min-h-screen gap-2">
          <div className="absolute bg-[#00C9A29C] w-[39px] h-[39px] rotate-45 top-[15%] left-[18%] max-sm:hidden"></div>

          <Image
            src={MenInChair}
            alt="men-in-chair"
            width={500}
            height={500}
            className="absolute max-md:hidden object-contain w-[90%] h-[80%] z-50"
          />
          <Image
            src={Rectangle}
            alt="Rectangle"
            width={500}
            height={500}
            className="absolute max-md:hidden object-contain w-[100%] h-[100%] z-40"
          />
          {/* <div className="absolute max-md:hidden w-[418px] h-[437px] z-40"></div> */}
        </div>
        {/* right div */}
        <div className="w-full h-full pt-[8%] md:w-1/2">
          <h1 className="text-fNavyBlue text-5xl mt-4 font-extrabold  relative z-50">
            {`Welcome to NewDefines`}
          </h1>

          <p className="md:w-[40vw] w-[80%] h-auto text-[#777777] text-[16px] font-normal  relative z-50 my-4">
            {`Newdefines is your one-stop solution for anything within the Microsoft Dynamics Universe. We’re here to serve you with not only the recent release from Microsoft’s business management software but also all of the assistance and guidance you require for full integration, as well as ongoing assistance and suggestions of additional features. Whether you are just beginning or are an expanding business, you’re in the right place.`}
          </p>
          <p className="md:w-[40vw] w-[80%] h-auto text-[#777777] text-[16px] font-normal  relative z-50 my-4">
            {`It can take expert knowledge to make dynamic decisions for your business, which is where we step in. Learn more about our services below and become a part of the Newdefines family and help us narrow the gap between IT and your business needs.`}
          </p>
        </div>
      </div>

      <div className="pl-4 md:pl-8 flex flex-col md:flex-row items-center bg-fNavyBlue w-full h-auto md:h-72 text-white">
  <div className="flex-1 md:order-1">
    <h1 className="pl-4 md:pl-0 pb-4 text-3xl font-bold">Our Story</h1>
    <p className="pl-4 md:pl-0">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
    </p>
  </div>
  <div className="flex-1 md:order-2 mt-4 md:mt-0">
    <Image src={ourstory} alt="Your Image" className="pl-0 md:pl-8" width={350} height={150} />
  </div>
</div>

<div className="pl-4 md:pl-8 flex flex-col md:flex-row items-center bg-fNavyBlue w-full h-auto md:h-72 text-white">
  <div className="flex-1 md:order-1">
    <Image src={ourapproch} alt="Your Image" className="pl-0 md:pl-8" width={350} height={150} />
  </div>
  <div className="flex-1 md:order-2 mt-4 md:mt-0">
    <h1 className="pl-4 md:pl-0 pb-4 text-3xl font-bold">Our Approach</h1>
    <p className="pl-4 md:pl-0">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
    </p>
  </div>
</div>


      <ServicesComp />
      <BlogComp />
    </>
  );
};

export default AboutPage;
