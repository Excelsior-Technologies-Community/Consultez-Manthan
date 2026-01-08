import React from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaXTwitter,
  FaVimeoV,
  FaPinterestP,
  FaAnglesUp,
} from "react-icons/fa6";
import Button from "./Small Components/Button";
import { motion } from "framer-motion";

const ConFooter = () => {
  return (
    <footer className="bg-[#163f36] text-white relative overflow-hidden">
      {/* TOP NEWSLETTER BAR */}
      <div className="border-b border-white/10">
        <div className="w-[90%] max-w-[1350px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 py-0 ">
          {/* Logo */}
          <div className="bg-[#c6d936] px-10 py-6 mb-3 text-black font-bold text-xl">
            <img
              src="https://html.kodesolution.com/2025/consultez-html-v2/images/logo.png"
              alt=""
              className="w-full h-full"
            />
          </div>

          {/* Title */}
          <h3 className="text-2xl font-semibold">Subscribe Newsletter</h3>

          {/* Input */}
          <div className="flex items-center gap-4 w-full lg:w-auto">
            <div className="flex items-center gap-3 border border-white/20 rounded-md px-4 py-3 w-full lg:w-[260px]">
              <FaEnvelope className="text-gray-300" />
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent outline-none text-sm w-full"
              />
            </div>
            <Button text="Sign Up" rounded="sm" hoverOpacity="0.5" />
          </div>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="w-[90%]  max-w-[1350px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 relative">
        <motion.img
          src="https://html.kodesolution.com/2025/consultez-html-v2/images/shape/globe-right.png"
          alt=""
          className="absolute -right-115 -top-20 scale-80"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        />
        {/* LEFT CTA */}
        <div className="border-r border-white/10 py-20">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6 ">
            Ready Discover More?
            <br />
            Contact Us Today!
          </h2>

          <p className="text-gray-300 mb-10">
            No credit card requirement it's full free for all
          </p>

          <div className="flex flex-col  gap-4 max-w-md">
            <input
              type="email"
              placeholder="Email Address"
              className="px-6 py-4 rounded-full bg-white text-gray-700 outline-none w-[50%]"
            />
            <Button
              text="Sign Up Now"
              icon="true"
              bgColor="#c6d936"
              rounded="full"
              size="large"
            />
          </div>
        </div>

        {/* RIGHT LINKS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 py-20">
          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Services</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="hover:text-white duration-100 cursor-pointer">
                Business Plan
              </li>
              <li className="hover:text-white duration-100 cursor-pointer">
                Growth Strategy
              </li>
              <li className="hover:text-white duration-100 cursor-pointer">
                Strategic planning
              </li>
              <li className="hover:text-white duration-100 cursor-pointer">
                Workflow Automation
              </li>
              <li className="hover:text-white duration-100 cursor-pointer">
                Lead Generation
              </li>
              <li className="hover:text-white duration-100 cursor-pointer">
                Financial Planning
              </li>
            </ul>
          </div>

          {/* Location + Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Locations</h3>
            <p className="text-gray-300 mb-8">
              55 Main Street, 2nd block
              <br />
              Malborne, Australia
            </p>

            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <p className="text-gray-300">support@gmail.com</p>
            <p className="font-semibold mt-2">+880 (123) 456 88</p>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-white/10"></div>

      {/* BOTTOM BAR */}
      <div className="w-[90%] max-w-[1350px] mx-auto py-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-gray-400">
        <p>
          Copyright ©2025, <span className="text-white">Business</span> All
          Rights Reserved
        </p>

        <div className="flex items-center gap-4">
          <Social icon={<FaFacebookF />} />
          <Social icon={<FaXTwitter />} />
          <Social icon={<FaVimeoV />} />
          <Social icon={<FaPinterestP />} />
        </div>
      </div>

      {/* SCROLL TO TOP */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute left-173 bottom-15 w-14 h-14 rounded-lg bg-[#c6d936] text-black flex items-center justify-center group">
        <FaAnglesUp className="group-hover:text-2xl duration-300" />
      </button>
    </footer>
  );
};

const Social = ({ icon }) => (
  <button className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#c6d936] hover:text-black flex items-center justify-center transition">
    {icon}
  </button>
);

export default ConFooter;
