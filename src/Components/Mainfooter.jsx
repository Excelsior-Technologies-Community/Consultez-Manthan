import React from "react";
import { MdLocationOn, MdEmail, MdPhone } from "react-icons/md";
import { FaAngleDoubleUp } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MainFooter = () => {
  return (
    <footer className="bg-[#163f35] text-white relative overflow-hidden">
      <motion.img
        src="https://html.kodesolution.com/2025/consultez-html-v2/images/shape/dual-circle420.png"
        alt=""
        className="absolute -right-70"
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "linear",
        }}
      />
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        viewport={{ once: true, amount: 0.3 }}
        className="absolute w-17 h-40 bottom-0 bg-white/20"
      />

      <motion.div
        initial={{ x: -80, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        viewport={{ once: true, amount: 0.3 }}
        className="absolute w-40 h-17 bottom-0 bg-white/20"
      />
      {/* ===== CTA BOX ===== */}
      <div className="max-w-[1350px] mx-auto px-6 pt-12 flex flex-col md:flex-row justify-between gap-10">
        <div className="bg-[#c6d936] rounded-2xl p-12 grid md:grid-cols-2 gap-10 items-center relative">
          <div>
            <h2 className="text-4xl font-bold text-[#0e2e25] leading-tight">
              Looking For Professional <br /> Business Consultant ?
            </h2>
            <p className="text-[#1a4137] mt-4 max-w-lg">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui
              blanditiis praesentium voluptatum deleniti.
            </p>
          </div>
          <motion.img
            src="https://html.kodesolution.com/2025/consultez-html-v2/images/shape/cta-arry.png"
            alt=""
            className="absolute left-1/2 opacity-0 tab:opacity-100"
            animate={{ x: [0, -35, 0] }} // smooth float effect
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <div className="text-right pr-18 ">
            <button className="bg-white text-[#0e2e25] font-semibold flex items-center px-12 py-4 z-10 tab:top-20 tab:right-31 rounded-xl  transition group absolute">
              Get Started Free{" "}
              <FiArrowUpRight className="group-hover:rotate-45 duration-300 text-xl" />
            </button>
            <p className="text-md text-[#1a4137] mt-15 pr-7 font-semibold ">
              No credit card required
            </p>
          </div>
          <img
            src="https://html.kodesolution.com/2025/consultez-html-v2/images/shape/cta-line.png"
            alt=""
            className="absolute right-0 z-0 opacity-0 tab:opacity-100"
          />
        </div>
      </div>

      {/* ===== MAIN FOOTER ===== */}
      <div className="max-w-[1350px] mx-auto px-6 pt-12 pb-16 flex flex-col md:flex-row justify-between gap-2 ">
        {/* Brand */}
        <div className="w-full md:w-[30%] mb-8 md:mb-0">
          <img
            src="https://html.kodesolution.com/2025/consultez-html-v2/images/logo-light.png"
            alt=""
            className="mb-5"
          />
          <p className="text-gray-300 mb-6 pr-10">
            At vero eos et accusamus iusto odio dignissimos ducimus blanditiis.
          </p>

          <div className="flex bg-white rounded-lg w-full md:w-[80%] py-0.5 px-3">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 pl-2 py-3 text-black outline-none"
            />
            <button className="bg-[#c6d936] group text-black text-xl h-10 mt-1 px-2 rounded-xl">
              <FiArrowUpRight className="group-hover:rotate-45 duration-300" />
            </button>
          </div>
        </div>

        {/* Resource */}
        <div className="flex-1 mb-8 md:mb-0">
          <h4 className="font-semibold mb-4 text-2xl ">Resource</h4>
          <div className="flex flex-col gap-2 text-gray-200">
            <Link>Product</Link>
            <Link>Services</Link>
            <Link>About Us</Link>
            <Link>Benefits</Link>
          </div>
        </div>

        {/* Quick Link */}
        <div className="flex-1 mb-8 md:mb-0">
          <h4 className="font-semibold mb-4 text-2xl">Quick Link</h4>
          <div className="flex flex-col gap-2 text-gray-200">
            <Link>Features</Link>
            <Link>Pricing Plan</Link>
            <Link>Best Program</Link>
            <Link>Press Kit</Link>
          </div>
        </div>

        {/* Company */}
        <div className="flex-1 mb-8 md:mb-0">
          <h4 className="font-semibold mb-4 text-2xl">Company</h4>
          <div className="flex flex-col gap-2 text-gray-200">
            <Link>About</Link>
            <Link>Team Member</Link>
            <Link>Reviews</Link>
            <Link>Latest News</Link>
          </div>
        </div>

        {/* Contact */}
        <div className="flex-1">
          <h4 className="font-semibold text-2xl mb-4">Contact</h4>
          <ul className="space-y-4 text-gray-300">
            <li className="flex gap-3">
              <MdLocationOn className="text-[#c6d936] text-xl" />
              55 Main Street, 2nd block Melbourne, Australia
            </li>
            <li className="flex gap-3">
              <MdEmail className="text-[#c6d936] text-xl" />
              support@gmail.com
            </li>
            <li className="flex gap-3">
              <MdPhone className="text-[#c6d936] text-xl" />
              +000 (123) 44 55
            </li>
          </ul>
        </div>
      </div>

      {/* ===== BOTTOM BAR ===== */}
      <div className="border-t border-white/10">
        <div className="max-w-[1350px] mx-auto px-4 gap-3 py-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>Copyright ©2025, Design All Rights Reserved</p>
          <div className="flex gap-6">
            <span>Faqs</span>
            <span>Setting</span>
            <span>Privacy</span>
            <span>Contact</span>
          </div>
        </div>
      </div>

      {/* ===== SCROLL TO TOP ===== */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="opacity-0 tab:opacity-100 absolute left-4 md:left-180 bottom-10 bg-[#c6d936] text-black w-14 h-14 rounded-xl flex items-center justify-center text-2xl hover:text-3xl duration-300">
        <FaAngleDoubleUp />
      </button>
    </footer>
  );
};

export default MainFooter;
