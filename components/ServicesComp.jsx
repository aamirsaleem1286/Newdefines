import React from "react";
import ServiceCardComp from "./Service-Card";
import { ServiceCardData1, ServiceCardData2, ServiceCardData3 } from "@/utils/data";

const ServicesComp = () => {
  return (
    <>
      <div className="flex flex-wrap py-8 px-[5%]">
        {/* Service Description (left side with text, right side with card data) */}
        <div className="flex flex-wrap items-start justify-start gap-4">
  <div className="flex flex-col items-start justify-start w-full md:w-1/2 gap-4">
    <h1 className="text-fNavyBlue text-[48px] font-extrabold relative z-50 gap-4">
      Our Services
    </h1>

    <p className="w-full h-auto text-[#777777] text-[16px] font-normal relative z-50">
      Newdefines is your one-stop solution for anything within the Microsoft Dynamics Universe. We’re here to serve you with not only the recent release from Microsoft’s business management software but also all of the assistance and guidance you require for full integration, as well as ongoing assistance and suggestions of additional features. Whether you are just beginning or are an expanding business, you’re in the right place.
    </p>
  </div>
    <div className="ml-4" > 

  <ServiceCardComp data={ServiceCardData2} className="" />
</div></div>

        {/* Service Cards (3 in a row) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <ServiceCardComp data={ServiceCardData1} />
          <ServiceCardComp data={ServiceCardData3} />
        </div>
      </div>
    </>
  );
};

export default ServicesComp;
