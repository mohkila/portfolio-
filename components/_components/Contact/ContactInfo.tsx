import { contactData } from "@/Data/data";
import React from "react";
import { FaEnvelope, FaMap, FaPhone } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div>
      <div className="flex items-center space-x-8">
        <div
          className="w-10 h-10 md:w-16 md:h-16
        roundded-full  bg-gradient-to-r from-emerald-600 to-emerald-950 
        flex items-center justify-center rounded-full"
        >
          <FaPhone className="w-4 h-4 md:w-6 md:h-6 " />
        </div>
        <div>
          <h1 className="text-lg  sm:text-xl font-bold">Phone</h1>
          <h1 className="text-lg  sm:text-xl font-bold">{contactData.phone}</h1>
        </div>
      </div>
      <div className="flex mt-5 items-center space-x-8">
        <div
          className="w-10 h-10 md:w-16 md:h-16
        roundded-full  bg-gradient-to-r from-emerald-600 to-emerald-950 
        flex items-center justify-center rounded-full"
        >
          <FaEnvelope className="w-4 h-4 md:w-6 md:h-6 " />
        </div>
        <div>
          <h1 className="text-lg  sm:text-xl font-bold">Email Adress</h1>
          <h1 className="text-lg  sm:text-xl font-bold">{contactData.email}</h1>
        </div>
      </div>
      <div className="flex mt-5 items-center space-x-8">
        <div
          className="w-10 h-10 md:w-16 md:h-16
        roundded-full  bg-gradient-to-r from-emerald-600 to-emerald-950 
        flex items-center justify-center rounded-full"
        >
          <FaMap className="w-4 h-4 md:w-6 md:h-6 " />
        </div>
        <div>
          <h1 className="text-lg  sm:text-xl font-bold">Adress</h1>
          <h1 className="text-lg  sm:text-xl font-bold">
            {contactData.address}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
