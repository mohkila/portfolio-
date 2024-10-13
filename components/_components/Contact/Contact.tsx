import React from "react";
import SectionHeading from "../SectionHeading";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <div>
      <div className="pt-16 pb-16 bg-[#0f071c]">
        <SectionHeading> Contact Us</SectionHeading>
        <div
          className="w-[90%] sm:w-[80%] mx-auto mt-10 grid grid-cols-1 md:grid-cols-2
      lg:grid-cols-2 gap-12 items-center"
        >
          {/* contact form */}
          <div>
            <ContactForm />
          </div>
          {/* contact information */}
          <div className="xl:mx-auto">
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
