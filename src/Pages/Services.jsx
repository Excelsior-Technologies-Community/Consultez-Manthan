import React from "react";
import BusiP from "../assets/BusiP.svg";
import Analysis from "../assets/Analysis.svg";
import Nc from "../assets/Nc.svg";
import { FaChevronRight } from "react-icons/fa6";

const services = [
  { title: "Business Planning", icon: BusiP },
  { title: "Marketing & Branding", icon: Analysis },
  { title: "Sales Consulting", icon: Nc },
  { title: "Financial Consulting", icon: BusiP },
  { title: "Human Resources", icon: Analysis },
  { title: "Market Research", icon: Nc },
];

export default function ServiceGrid() {
  return (
    <>
      <div
        className="w-full overflow-hidden relative min-h-[200px] md:min-h-[300px] lg:min-h-[400px] bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage:
            "url('https://html.kodesolution.com/2025/consultez-html-v2/images/background/page-title-bg.jpg')",
        }}>
        <div className="w-full h-full bg-gradient-to-r from-[#0b3231] to-transparent absolute lg:pl-26 lg:pt-26 pl-4 pt-5 md:pl-10 md:pt-10 z-10">
          <span className="text-3xl md:text-4xl lg:text-6xl text-white font-bold pt pb-5 pt-10 block">
            Service Grid
          </span>
          <h1 className="flex gap-2 items-center text-[#c6d936] text-sm md:text-base font-semibold py-2">
            Home{" "}
            <span className="text-white flex items-center gap-2">
              <FaChevronRight />
                Service Grid
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
      <section className="py-20 px-6 md:px-20 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={i}
              className="relative group overflow-hidden px-10 py-24 text-center transition-all duration-300">
              {/* Shape Image */}
              <img
                src="https://html.kodesolution.com/2025/consultez-html-v2/images/shape/service-block-shape.png"
                alt=""
                className="absolute top-0 left-1/2 -translate-x-1/2 z-10"
              />

              {/* Hover Background */}
              <div className="absolute inset-0 bg-[#c6dc3a] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className="mx-auto mb-6 w-28 h-28 rounded-full bg-[#c6dc3a] group-hover:bg-[#0f2e2a] flex items-center justify-center transition-colors duration-300">
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-12 h-12 group-hover:invert transition duration-300 double-flip"
                  />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold mb-4 text-black">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm mb-10 text-black/80 leading-relaxed">
                  Lorem is Ipsum is simply is design iomyi is text Lorem Ipsum
                  is simply is our business designer Lorem is Ipsum is
                </p>

                {/* Button */}
                <button className="px-8 py-3 rounded-full bg-white text-black border border-gray-200 font-medium transition-all duration-300 group-hover:bg-[#0f340c] group-hover:text-white">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
