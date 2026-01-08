import React from "react";
import logo from "../assets/logo.png";
import { LayoutGrid } from "lucide-react";
import {
  FaChevronRight,
  FaFacebookF,
  FaPhoneAlt,
  FaPinterestP,
} from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { LuArrowUpRight } from "react-icons/lu";
import Button from "./Small Components/Button";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row">
        {/* left side  */}
        <div className="w-full lg:w-[7%] border-b lg:border-b-0 lg:border-r border-gray-600 bg-[#163839] hidden lg:block justify-between items-center px-4 lg:px-0 py-4 lg:py-0">
          <div className="lg:mt-1.5 lg:h-[250px] flex items-center justify-around">
            <img src={logo} alt="logo" className="w-12 lg:w-auto" />
          </div>
          <div className="text-white lg:text-center">
            <LayoutGrid className="w-8 mx-auto lg:mt-38 text-xl" />
          </div>
        </div>

        {/* middle  */}
        <div className="w-full lg:w-[61%] border-b lg:border-b-0 lg:border-r border-gray-200 bg-[#163839] text-white">
          <div className="h-full">
            {/* top */}
            <div className="h-auto py-8 lg:py-0 lg:h-[150px] border-b border-gray-600 w-full flex items-center">
              <div className="w-[88%] mx-auto flex flex-col md:flex-row gap-y-6 justify-between items-start md:items-center">
                {/* 1 */}
                <div className="flex gap-5 items-center">
                  <div className="relative w-15 h-15 rounded-full bg-[#324d4e] shrink-0">
                    <FaPhoneAlt className="absolute top-4 left-4 text-2xl double-flip" />
                  </div>
                  <div className="font-medium">
                    <h1>CALL US:</h1>
                    <p className="text-xl font-semibold">+1-2345-2345-54</p>
                  </div>
                </div>
                {/* 2 */}
                <div className="flex gap-5 items-center">
                  <div className="relative w-15 h-15 rounded-full bg-[#324d4e] shrink-0">
                    <IoMail className="absolute top-4.5 left-4.5 text-2xl double-flip" />
                  </div>
                  <div className="font-medium">
                    <h1>EMAIL US:</h1>
                    <p className="text-xl font-semibold break-all">info@help.com</p>
                  </div>
                </div>
                {/* 3 */}
                <div className="flex gap-5 items-center">
                  <div className="relative w-15 h-15 rounded-full bg-[#324d4e] shrink-0">
                    <MdLocationPin className="absolute top-4.5 left-4.5 text-2xl double-flip" />
                  </div>
                  <div className="font-medium">
                    <h1>HOURS:</h1>
                    <p className="text-xl font-semibold">Daily: 8 AM to 5 PM</p>
                  </div>
                </div>
              </div>
            </div>
            {/* middle middle  */}
            <div className="h-auto py-10 lg:py-0 lg:h-[330px] border-b border-gray-600 w-full flex items-center">
              <div className="w-[88%] mx-auto flex flex-col md:flex-row gap-y-10 justify-between items-start">
                <div>
                  <h1 className="font-bold text-2xl mb-8">Service</h1>
                  <div className="flex flex-col gap-4 font-medium">
                    <Link className="hover:underline">Digital Marketing</Link>
                    <Link className="hover:underline">Innovation Space</Link>
                    <Link className="hover:underline">
                      Competitive Analysis{" "}
                    </Link>
                    <Link className="hover:underline">Market Research</Link>
                    <Link className="hover:underline">HR Management</Link>
                  </div>
                </div>
                <div>
                  <h1 className="font-bold text-2xl mb-8">Pages</h1>
                  <div className="flex flex-col gap-4 font-medium">
                    <Link className="hover:underline">Our Blog</Link>
                    <Link className="hover:underline">Success Stories</Link>
                    <Link className="hover:underline">Customer Reviews </Link>
                    <Link className="hover:underline">Contact Us</Link>
                    <Link className="hover:underline">About Us</Link>
                  </div>
                </div>
                <div className="w-full md:w-auto">
                  <h1 className="font-bold text-2xl mb-8">SignUp NewsLetter</h1>
                  <div className="flex flex-col gap-3">
                    <input
                      type="text"
                      className="w-full bg-white placeholder:text-gray-400 px-3 py-4 rounded-full text-black"
                      placeholder="Email Address"
                    />
                    <Button text="Sign Up Now" size="large" rounded="full" />
                  </div>
                  <div className="flex gap-3 mt-5">
                    <div className=" relative w-8 h-8 rounded-full bg-[#324d4e] hover:bg-[#c6d936] duration-300 cursor-pointer">
                      <FaFacebookF className="absolute mt-2 ml-2" />
                    </div>
                    <div className="relative w-8 h-8 rounded-full bg-[#324d4e] hover:bg-[#c6d936] duration-300 cursor-pointer">
                      <FaXTwitter className="absolute mt-2 ml-2" />
                    </div>
                    <div className="relative w-8 h-8 rounded-full bg-[#324d4e] hover:bg-[#c6d936] duration-300 cursor-pointer">
                      <BsInstagram className="absolute mt-2 ml-2" />
                    </div>
                    <div className="relative w-8 h-8 rounded-full bg-[#324d4e] hover:bg-[#c6d936] duration-300 cursor-pointer">
                      <FaPinterestP className="absolute mt-2 ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* bottom */}
            <div className="h-auto py-6 lg:py-0 lg:h-[85px] mx-auto lg:pt-8 w-[88%] text-center lg:text-left">
              @ CopyRight 2025. All Right by <span className="text-[#d5ad4b] hover:underline cursor-pointer">KodeSolutuon</span>
            </div>
          </div>
        </div>
        {/* RIGHT SIDE  */}
        <div className="w-full lg:w-[32%] border-r border-gray-200 relative overflow-hidden order-first lg:order-none">
          <img
            src="https://html.kodesolution.com/2025/consultez-html-v2/images/shape/footer-one-shape.png"
            alt=""
            className="bg-[#c6d936] w-full h-full object-cover absolute inset-0 -z-10"
          />
          <div className="flex flex-col gap-10 items-center justify-center py-16 lg:py-0 h-full">
            <div className="text-[35px] w-[300px] text-center font-bold">Have a Project in your in Mind?</div>
            <div className="relative w-[250px] h-[250px] bg-[#163839] rounded-full flex items-center cursor-pointer group overflow-hidden">
              <p className="w-full text-center text-2xl text-white font-medium flex justify-center items-center gap-2 z-10">
                Contact us
                <LuArrowUpRight className="mt-1 group-hover:rotate-45 duration-300" />
              </p>
              <div className="bg-[#c6d936] w-14 h-14 rounded-full bottom-2.5 right-2 absolute group-hover:right-0 group-hover:bottom-0 group-hover:w-full group-hover:h-full duration-300" />
            </div>
            <div className="text-center">
              <p className="text-[18px] font-medium">09 : 00 AM To 10 : 30 PM</p>
              <p className="text-[18px] ">Saturday - Thursday</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Footer;





