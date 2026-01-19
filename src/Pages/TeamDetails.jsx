import React from "react";
import {
  FaChevronRight,
  FaFacebook,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa6";
import { motion } from "framer-motion";
import TeamCard from "../Components/TeamCard";
import Button from "../Components/Small Components/Button";
import { RiTwitterXLine } from "react-icons/ri";

const TeamDetails = () => {
  const skills = [
    { label: "Latest Boat Experience", value: 90 },
    { label: "Sailing Boat Experience", value: 80 },
    { label: "Power Boat Experience", value: 75 },
  ];
  return (
    <>
      {/* section 1  */}
      <div
        className="w-full overflow-hidden relative min-h-[200px] md:min-h-[300px] lg:min-h-[400px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://html.kodesolution.com/2025/consultez-html-v2/images/background/page-title-bg.jpg')",
        }}>
        <div className="w-full h-full bg-gradient-to-r from-[#0b3231] to-transparent absolute lg:pl-26 lg:pt-26 pl-4 pt-5 md:pl-10 md:pt-10 z-10">
          <span className="text-3xl md:text-4xl lg:text-6xl text-white font-bold pt pb-5 pt-10 block">
            Team Details
          </span>
          <h1 className="flex gap-2 items-center text-[#c6d936] text-sm md:text-base font-semibold py-2">
            Home{" "}
            <span className="text-white flex items-center gap-2">
              <FaChevronRight />
              Team Details
            </span>
          </h1>
        </div>
        {/* square box img  */}
        <img
          src="https://html.kodesolution.com/2025/consultez-html-v2/images/background/page-title-pattern.png"
          alt=""
          className="absolute z-20 -right-10 md:-right-20 top-0 w-32 md:w-auto hidden md:block"
        />
      </div>
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-10 lg:gap-20">
          {/* LEFT SIDE */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="https://html.kodesolution.com/2025/consultez-html-v2/images/resource/team-details.jpg"
              alt="Alen Hispro"
              className="rounded-3xl w-full max-w-md lg:max-w-full"
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full lg:w-1/2 py-4 lg:py-8 text-center lg:text-left">
            <h1 className="text-3xl lg:text-4xl font-bold">Alen Hispro</h1>

            <p className="text-sm py-3 text-gray-500">Chief Attorney</p>

            <p className="text-2xl lg:text-3xl py-4 leading-snug">
              I help my clients stand out and they help me grow.
            </p>

            {/* INFO BLOCKS */}
            <div className="space-y-5">
              <div>
                <p className="font-bold">Email Address</p>
                <p>needhelp@yourdomain.com</p>
              </div>

              <div>
                <p className="font-bold">Phone Number</p>
                <p>+012-3456-789</p>
              </div>

              <div>
                <p className="font-bold">Web Address</p>
                <p>www.yourdomain.com</p>
              </div>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex justify-center lg:justify-start gap-3 py-6">
              {[RiTwitterXLine, FaFacebook, FaPinterestP, FaInstagram].map(
                (Icon, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-center text-white w-9 h-9 rounded-full bg-[#0d3b3a] hover:bg-[#c6d936] hover:text-[#0d3b3a] duration-300 cursor-pointer">
                    <Icon size={16} />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="w-[78%] h-[0.5px] bg-gray-300 mx-auto"></div>
      <section className="w-full  bg-white py-16 ">
        <div className="max-w-[78%] mx-auto flex flex-col md:flex-row gap-16 ">
          {/* LEFT SIDE */}
          <div className="md:w-1/2">
            <h2 className="text-4xl font-bold text-black mb-6">
              Personal Experience
            </h2>
            <p className="text-gray-600 leading-relaxed">
              When an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five centuries
              architecto dolorem ipsum quia
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="md:w-1/2 space-y-8">
            {skills.map((skill, i) => (
              <div key={i}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-black">
                    {skill.label}
                  </span>
                  <span className="font-semibold text-black">
                    {skill.value}%
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-3 bg-gray-200 rounded-full">
                  <div
                    className="h-3 bg-[#c6d936] rounded-full"
                    style={{ width: `${skill.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full bg-[#EEF0F6] py-20">
        <div className="max-w-5xl mx-auto px-6 text-center">
          {/* Badge */}
          <span className="inline-block bg-[#c6d936] text-sm font-semibold tracking-widest px-6 py-2 rounded-full mb-8">
            CONTACT WITH US NOW
          </span>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-14">
            Feel Free to Write Our <br /> Alen Hispro
          </h2>

          {/* Form */}
          <form className="bg-transparent">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <input
                type="text"
                placeholder="Enter Name"
                className="w-full px-6 py-4 rounded-sm outline-none bg-white"
              />
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full px-6 py-4 rounded-sm outline-none bg-white"
              />
              <input
                type="text"
                placeholder="Enter Subject"
                className="w-full px-6 py-4 rounded-sm outline-none bg-white"
              />
              <input
                type="text"
                placeholder="Enter Phone"
                className="w-full px-6 py-4 rounded-sm outline-none bg-white"
              />
            </div>

            <textarea
              placeholder="Enter Message"
              rows="6"
              className="w-full px-6 py-4 rounded-sm outline-none mb-10 bg-white"
            />

            {/* Buttons */}
            <div className="flex justify-center gap-6">
              <Button
                bgColor="#0d3b3a"
                text="Send Message"
                rounded="none"
                textColor="white"
                icon=""
                hoverBg="white"
                hoverOpacity="0.2"
              />
              <Button
                bgColor="#c6d936"
                text="Reset"
                rounded="none"
                textColor="black"
                icon=""
                hoverBg="black"
                hoverOpacity="0.2"
                size="large"
              />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default TeamDetails;
