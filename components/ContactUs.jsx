// * imports
import React from "react";
import Image from "next/image";

// * local imports
import ContactDesign from "@/public/ContactDesign.png";
import FormContactUsComp from "./Form-ContactUs";
const ContactUsComp = () => {
  return (
    <>
      {/* main container */}
      <div className="flex flex-col gap-8 items-start p-[5%] justify-start w-full h-auto min-h-screen lg:flex-row bg-[#dff2f6]">
        {/* left div */}
        <div className="w-full h-full space-y-8 lg:w-1/2">
          <div className="flex flex-col items-start justify-start w-full h-auto">
            <h1 className="text-fNavyBlue text-[40px] font-bold">Contact Us</h1>
            <span className="text-[#000000] font-normal xl:text-base lg:text-sm text-xs">
              Ready to start your next project? Get in touch with us today!
              Whether you have questions, feedback, or project inquiries, our
              team is here to help. Reach out via phone, email, or fill out the
              contact form below. We look forward to hearing from you!
            </span>
          </div>

          <Image
            src={ContactDesign}
            alt="FAQDesign"
            width={500}
            height={500}
            className="object-contain xl:max-w-[591px] w-auto xl:max-h-[579px] h-auto"
          />
        </div>

        {/* right div */}
        <div className="flex items-center justify-center w-full h-full p-4 lg:w-1/2">
          <FormContactUsComp />
        </div>
      </div>
    </>
  );
};

export default ContactUsComp;
