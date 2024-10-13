import React, { useState } from "react";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    option: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form reload
    setLoading(true);

    fetch("/api/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData), // Send form data as JSON
    })
      .then((response) => response.json())
      .then(() => setResult("Email sent successfully!"))
      .catch(() => setResult("Failed to send email. Please try again."))
      .finally(() => setLoading(false));
  };

  return (
    <div className="bg-[#140c1c] rounded-lg p-4 sm:p-10">
      <h1 className="text-bg text-2xl font-bold lg:text-[2.5rem]">
        Lets Work Together!
      </h1>
      <p className="text-gray-400 font-bold text-sm mt-2">
        Have a project in mind? We&apos;re here to help! Reach out, and
        let&apos;s bring your ideas to life!
      </p>

      <form className="mt-8 block overflow-hidden" onSubmit={sendEmail}>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full bg-[#140c1c] border-gray-600 rounded-md px-6 py-3 text-white border-[1.5px] border-opacity-15 outline-none"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full bg-[#140c1c] border-gray-600 rounded-md px-6 py-3 text-white border-[1.5px] border-opacity-15 outline-none"
          />
        </div>
        <div className="flex mt-5 flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="number"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-[#140c1c] border-gray-600 rounded-md px-6 py-3 text-white border-[1.5px] border-opacity-15 outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-[#140c1c] border-gray-600 rounded-md px-6 py-3 text-white border-[1.5px] border-opacity-15 outline-none"
          />
        </div>
        <div>
          <select
            name="option"
            value={formData.option}
            onChange={handleChange}
            className="w-full mt-5 bg-black px-4 py-3.5 rounded-md border-[1.5px] border-gray-400 outline-none"
          >
            <option value="" disabled>
              Select An Option
            </option>
            <option value="FrontEnd Development">FrontEnd Development</option>
            <option value="BackEnd Development">BackEnd Development</option>
            <option value="FullStack Development">FullStack Development</option>
            <option value="Web Development">Web Development</option>
            <option value="WordPress Design">WordPress Design</option>
            <option value="Ecommerce Development">Ecommerce Development</option>
            <option value="Ecommerce Analytics">Ecommerce Analytics</option>
            <option value="Others">Others.....</option>
          </select>
        </div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full mt-5 bg-black px-4 py-3.5 outline-none rounded-md border-[1.5px] border-gray-400 border-opacity-25"
          rows={7}
          placeholder="Message"
        ></textarea>

        <div className="mt-4">
          <button
            type="submit"
            className="px-8 py-3.5 bg-blue-800 rounded-3xl hover:bg-blue-600 transition-all duration-300"
            disabled={loading} // Disable while loading
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
      {result && <p className="mt-4 text-white">{result}</p>}
    </div>
  );
};

export default ContactForm;
