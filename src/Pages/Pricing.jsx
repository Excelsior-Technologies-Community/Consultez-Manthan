import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { ImQuotesRight } from "react-icons/im";
import pricing from "../assets/pricing.svg";
import wpricing from "../assets/wpricing.svg";

const Pricing = () => {
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
            Packages
          </span>
          <h1 className="flex gap-2 items-center text-[#c6d936] text-sm md:text-base font-semibold py-2">
            Home{" "}
            <span className="text-white flex items-center gap-2">
              <FaChevronRight />
              Packages
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
      <section className="bg-[#f6f8f7] py-20">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          {/* Personal */}
          <div className="group">
            <div className="bg-white rounded-[22px] px-8 py-10 shadow-sm group-hover:bg-[#173f35] duration-500">
              <img src={wpricing} alt="" />
              <h3 className="text-[30px] font-semibold text-[#1f2d2a] group-hover:text-white">
                Personal Plan
              </h3>
              <p className="text-sm text-gray-500 mt-1 mb-10 group-hover:text-gray-200">
                Customized anything in anytime
              </p>
              <div className="bg-gray-500/20 h-[1px] w-full mb-8 group-hover:bg-gray-200" />

              <ul className="space-y-5 text-[15px] text-[#3a4a46] mb-12">
                <li className="flex gap-3 group-hover:text-gray-200">
                  <span className="text-[#1f5f4a] group-hover:text-gray-200 ">✓</span>Unlimited features
                </li>
                <li className="flex gap-3 group-hover:text-gray-200">
                  <span className="text-[#1f5f4a] group-hover:text-gray-200 ">✓</span>Multi language
                  content
                </li>
                <li className="flex gap-3 group-hover:text-gray-200">
                  <span className="text-[#1f5f4a] group-hover:text-gray-200 ">✓</span>30 Days free trial
                  features
                </li>
                <li className="flex gap-3 group-hover:text-gray-200">
                  <span className="text-[#1f5f4a] group-hover:text-gray-200 ">✓</span>Data backup and
                  recovery
                </li>
                <li className="flex gap-3 group-hover:text-gray-200">
                  <span className="text-[#1f5f4a] group-hover:text-gray-200 ">✓</span>Updates via dashboard
                  & slack
                </li>
                <li className="flex gap-3 group-hover:text-gray-200">
                  <span className="text-[#1f5f4a] group-hover:text-gray-200 ">✓</span>Synced to cloud
                  database
                </li>
              </ul>

              <button className="w-full rounded-full bg-[#c9dd3a] py-3 text-[15px] font-medium text-[#1f2d2a]">
                $2500/ Month
              </button>
            </div>
          </div>

          {/* Premium */}
          <div className="relative bg-[#173f35] rounded-[22px] px-8 py-10 text-white scale-[1.06] overflow-hidden">
            <span className="absolute top-10 -right-10 rotate-45 bg-[#c9dd3a] text-[#173f35] text-xs font-bold px-14 py-2 ">
              RECOMMEND
            </span>
            <img src={pricing} alt="" className="" />
            <img src="" alt="" />

            <h3 className="text-[30px] font-semibold">Premium Plan</h3>
            <p className="text-sm text-[#b7d1cb] mt-1 mb-10 ">
              Customized anything in anytime
            </p>
            <div className="bg-gray-200/20 h-[1px] w-full mb-8 " />

            <ul className="space-y-5 text-[15px] text-[#d7ebe6] mb-12">
              <li className="flex gap-3">
                <span className="text-[#c9dd3a]">✓</span>Unlimited features
              </li>
              <li className="flex gap-3">
                <span className="text-[#c9dd3a]">✓</span>Multi language content
              </li>
              <li className="flex gap-3">
                <span className="text-[#c9dd3a]">✓</span>30 Days free trial
                features
              </li>
              <li className="flex gap-3">
                <span className="text-[#c9dd3a]">✓</span>Data backup and
                recovery
              </li>
              <li className="flex gap-3">
                <span className="text-[#c9dd3a]">✓</span>Updates via dashboard &
                slack
              </li>
              <li className="flex gap-3">
                <span className="text-[#c9dd3a]">✓</span>Synced to cloud
                database
              </li>
            </ul>

            <button className="w-full rounded-full bg-[#3b5f57] py-3 text-[15px] font-medium">
              Choose Pricing Plan
            </button>
          </div>

          {/* Standard */}
          <div className="group">
            <div className="bg-white rounded-[22px] px-8 py-10 shadow-sm  group-hover:bg-[#173f35] duration-500">
              <img src={wpricing} alt="" />
              <h3 className="text-[30px] font-semibold text-[#1f2d2a] group-hover:text-white">
                Standard Plan
              </h3>
              <p className="text-sm text-gray-500 mt-1 mb-10 group-hover:text-gray-200">
                Customized anything in anytime
              </p>
              <div className="bg-gray-500/20 h-[1px] w-full mb-8 group-hover:bg-gray-200" />
              <ul className="space-y-5 text-[15px] text-[#3a4a460] group-hover:text-gray-200 mb-12">
                <li className="flex gap-3">
                  <span className="text-[#1f5f4a] group-hover:text-gray-200">✓</span>Unlimited features
                </li>
                <li className="flex gap-3">
                  <span className="text-[#1f5f4a] group-hover:text-gray-200">✓</span>Multi language
                  content
                </li>
                <li className="flex gap-3">
                  <span className="text-[#1f5f4a] group-hover:text-gray-200">✓</span>30 Days free trial
                  features
                </li>
                <li className="flex gap-3">
                  <span className="text-[#1f5f4a] group-hover:text-gray-200">✓</span>Data backup and
                  recovery
                </li>
                <li className="flex gap-3">
                  <span className="text-[#1f5f4a] group-hover:text-gray-200">✓</span>Updates via dashboard
                  & slack
                </li>
                <li className="flex gap-3">
                  <span className="text-[#1f5f4a] group-hover:text-gray-200">✓</span>Synced to cloud
                  database
                </li>
              </ul>

              <button className="w-full rounded-full bg-[#c9dd3a] py-3 text-[15px] font-medium text-[#1f2d2a]">
                $3500/ Month
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
