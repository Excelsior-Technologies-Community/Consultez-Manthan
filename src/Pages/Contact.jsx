import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaChevronRight } from "react-icons/fa6";
import location from "../assets/location.svg";
import phone from "../assets/phone.svg";
import mail from "../assets/mail.svg";
import { FaUser, FaEnvelope, FaPen } from "react-icons/fa";
import ConFooter from "../Components/ConFooter";
import Navbar from "../Components/Navbar";

const Contact = () => {
  const iconMap = {
    location: location,
    phone: phone,
    mail: mail,
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message);
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message");
    }
  };

  const data = [
    {
      icon: "location",
      title: "Address Line",
      descri1: "Bowery St, New York , 37 USA",
      descri2: "NY 10013,USA",
    },
    {
      icon: "phone",
      title: "Address Line",
      descri1: "+ 1255 - 568 - 6523 - 4374 - 221",
      descri2: "+ 1255 - 568 - 6523",
    },
    {
      icon: "mail",
      title: "Mail Adderess",
      descri1: "email@example.com",
      descri2: "info@yourdomain.com",
    },
  ];
  return (
    <>
      <div>
        <Navbar />
        {/* section 1  */}
        <div
          className="w-full overflow-hidden relative min-h-[200px] md:min-h-[300px] lg:min-h-[400px] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://html.kodesolution.com/2025/consultez-html-v2/images/bg/page-title-bg.jpg')",
          }}>
          <div className="w-full h-full bg-gradient-to-r from-[#0b3231] to-transparent absolute lg:pl-26 lg:pt-26 pl-4 pt-5 md:pl-10 md:pt-10 z-10">
            <h1 className="flex gap-2 items-center text-[#c6d936] text-sm md:text-base font-semibold py-2">
              Home{" "}
              <span className="text-white flex items-center gap-2">
                <FaChevronRight />
                Contact Us
              </span>
            </h1>
            <span className="text-3xl md:text-4xl lg:text-6xl text-white font-bold pt-5 block">
              Contact Us
            </span>
          </div>
          {/* square box img  */}
          <img
            src="https://html.kodesolution.com/2025/consultez-html-v2/images/background/page-title-pattern.png"
            alt=""
            className="absolute z-20 -right-10 md:-right-20 top-0 w-32 md:w-auto hidden md:block"
          />
        </div>

        {/* section 2 */}
        <div className="w-[87%] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10 md:py-20">
            {data.map((item, index) => (
              <div
                key={index}
                className="
                        group
                        bg-white
                        rounded-xl
                        px-6 md:px-10
                        py-12 md:py-18
                        text-center
                        shadow-lg
                        transition-all
                        duration-500
                        hover:bg-[#173f35] hover:shadow-none">
                {/* icon */}
                <div className="flex justify-center mb-6">
                  <img
                    src={iconMap[item.icon]}
                    alt={item.title}
                    className="
                        w-12 h-12 md:w-18 md:h-18
                        transition
                        duration-300
                        group-hover:brightness-0
                        group-hover:invert"
                  />
                </div>

                {/* title */}
                <h3 className="text-xl md:text-2xl font-bold mb-4 transition group-hover:text-white">
                  {item.title}
                </h3>

                {/* description */}
                <p className="text-gray-600 transition font-semibold group-hover:text-white text-sm md:text-base">
                  {item.descri1}
                </p>
                <p className="text-gray-600 transition font-semibold group-hover:text-white text-sm md:text-base">
                  {item.descri2}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* section 3  */}

        <section className="w-full py-15">
          <div className="w-[90%] max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* LEFT */}
            <div>
              <h2 className="text-5xl font-bold text-[#0b3231] mb-6">
                Get In Touch
              </h2>

              <p className="text-gray-600 max-w-md mb-10">
                Lorem ipsum dolor sit amet consectetur adipiscing elit mattis
                faucibus odio feugiat arc dolor.
              </p>

              {/* Map */}
              <div className="w-full h-[350px] overflow-hidden shadow">
                <iframe
                  title="map"
                  src="https://www.google.com/maps?q=Asia&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"></iframe>
              </div>
            </div>

            {/* RIGHT */}
            <div>
              <h2 className="text-5xl font-bold text-[#0b3231] mb-6">
                Fill Up The Form
              </h2>

              <p className="text-gray-600 mb-10">
                Your email address will not be published. Required fields are
                marked *
              </p>

              <form className="space-y-18" onSubmit={handleSubmit}>
                {/* Name */}
                <div className="flex items-center gap-4 border-b pb-3">
                  <FaUser className="text-gray-400" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name*"
                    className="w-full outline-none text-gray-700"
                    required
                  />
                </div>

                {/* Email */}
                <div className="flex items-center gap-4 border-b pb-3">
                  <FaEnvelope className="text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address*"
                    className="w-full outline-none text-gray-700"
                    required
                  />
                </div>

                {/* Message */}
                <div className="flex gap-4 border-b pb-3">
                  <FaPen className="text-gray-400 mt-2" />
                  <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter Your Message here"
                    className="w-full outline-none resize-none text-gray-700"
                    required></textarea>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="bg-[#1a4137] text-white text-lg font-medium px-8 py-3 hover:bg-white hover:text-[#1a4137] transition-all duration-300 border border-[#1a4137]"
                >
                  Get In Touch
                </button>
              </form>
            </div>
          </div>
        </section>
        <ConFooter />
      </div>
    </>
  );
};

export default Contact;
