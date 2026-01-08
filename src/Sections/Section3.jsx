import React, { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import Button from "../Components/Small Components/Button";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";

const Section3 = () => {
  const [activeTab, setActiveTab] = useState("about");

  const ProgressCircle = ({ value }) => {
    const radius = 28;
    const circumference = 2 * Math.PI * radius;
    const progress = ((100 - value) / 100) * circumference;

    return (
      <div className="relative w-20 h-20">
        <svg className="w-20 h-20 -rotate-90">
          <circle
            cx="40"
            cy="40"
            r={radius}
            stroke="#000"
            strokeWidth="6"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={progress}
            strokeLinecap="round"
          />
        </svg>

        <span className="absolute inset-0 flex items-center justify-center text-xl font-bold">
          <FiArrowUpRight />
        </span>
      </div>
    );
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1350px] w-[92%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* LEFT SIDE */}
        <motion.div
        initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 1.0 }}
        >
          <span className="inline-block bg-[#c6d936] text-black px-6 py-2 rounded-full text-sm font-semibold">
            MISSION & VISION
          </span>

          <h2 className="text-[42px] md:text-[44px] font-bold leading-tight mt-5 mb-8 text-[#081908]">
            We Handle Complexities,
            <br />
            So You Can Drive Growth
            <br />
            And Success.
          </h2>

          {/* TABS */}
          <div className="flex justify-between gap-10 border-b mb-6">
            <button
              onClick={() => setActiveTab("about")}
              className={`pb-3 px-5 text-lg font-semibold ${
                activeTab === "about"
                  ? "border-b-2 border-[#0f2e0f] text-[#0f2e0f]"
                  : "text-gray-500"
              }`}>
              About Us
            </button>

            <button
              onClick={() => setActiveTab("mission")}
              className={`pb-3 text-lg font-semibold ${
                activeTab === "mission"
                  ? "border-b-2 border-[#0f2e0f] text-[#0f2e0f]"
                  : "text-gray-500"
              }`}>
              Our Mission
            </button>

            <button
              onClick={() => setActiveTab("vision")}
              className={`pb-3 text-lg font-semibold ${
                activeTab === "vision"
                  ? "border-b-2 border-[#0f2e0f] text-[#0f2e0f]"
                  : "text-gray-500"
              }`}>
              Our Vision
            </button>
          </div>

          {/* TAB CONTENT (STATIC FOR NOW) */}
          <p className="text-gray-600 leading-relaxed text-[17px] w-[90%] mb-8">
            At vereoes accusamus dignissimos ducimus blanditiis volupta delenite
            atque corrupti quos dolores et quas molestias excepturi sint
            occaecatie.
          </p>

          {/* BULLETS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
            <ul className="space-y-3 text-[17px]">
              <li className="font-semibold flex gap-3 items-center">
                <FaCheck /> Optimized Sprint Planning
              </li>
              <li className="font-semibold flex gap-3 items-center">
                <FaCheck /> Continuous Improvement
              </li>
            </ul>
            <ul className="space-y-3 text-[17px]">
              <li className="font-semibold flex gap-3 items-center">
                <FaCheck /> Incremental Delivery Approach
              </li>
              <li className="font-semibold flex gap-3 items-center">
                <FaCheck /> Delivering Innovative
              </li>
            </ul>
          </div>

          <Button
            text="Discover More"
            bgColor="#1a4137"
            size="large"
            rounded="none"
            textColor="#ffffff"
            icon={false}
            hoverBg="#ffffff"
            hoverOpacity={0.15}
          />
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 1.0 }}
          className="relative">
          <div className="overflow-hidden ">
            <img
              src="https://html.kodesolution.com/2025/consultez-html-v2/images/choose/choose-image1.jpg"
              alt="Team Discussion"
              className="w-full h-[650px] object-cover"
            />
          </div>

          {/* STATS CARD */}
          <div
            className=" bg-[#c6d936]  p-6 sm:p-8 lg:p-10 w-[280px] sm:w-[320px] lg:w-[350px] rounded-md 
              shadow-xl   absolute bottom-0 sm:-bottom-3 lg:-bottom-5 left-0 sm:-left-6 lg:-left-10  ">
            {/* Row 1 */}
            <div className="flex items-center gap-4 sm:gap-5 mb-6 sm:mb-8 lg:mb-10">
              <ProgressCircle value={95} />
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
                  95%
                </h3>
                <p className="text-base sm:text-lg font-medium">Project Done</p>
              </div>
            </div>

            {/* Divider */}
            <hr className="border-[#d8e874] my-3 sm:my-4" />

            {/* Row 2 */}
            <div className="flex items-center gap-4 sm:gap-5">
              <ProgressCircle value={50} />
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
                  50%
                </h3>
                <p className="text-base sm:text-lg font-medium">
                  Complete Project
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section3;
