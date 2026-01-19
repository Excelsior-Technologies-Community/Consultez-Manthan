import React from "react";
import { AiFillMail } from "react-icons/ai";
import { IoMdArrowDropdown, IoMdCall } from "react-icons/io";
import { MdLocationPin } from "react-icons/md";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import { FiFacebook } from "react-icons/fi";
import { GrInstagram, GrLinkedinOption } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";
import Button from "./Small Components/Button";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* upperline  */}
      {!scrolled && (
        <div className="hidden lg:block w-full  border-b border-gray-200 ">
          <div className="flex justify-between  items-center text-[14px] font-medium ">
            <div className="w-[70%] flex gap-12 px-10">
              <div className="flex items-center gap-2">
                <AiFillMail className="text-green-900 text-xl" />
                needhelp@company.com
              </div>
              <div className="flex items-center gap-2">
                <MdLocationPin className="text-green-900 text-xl" />
                6391 Elgin St. Celina, Delaware 10299
              </div>
            </div>
            <div className="xl:w-[30%] lg:w-[38%] sm:hidden md:block items-center bg-[#c6d936] py-4">
              <div className="flex gap-2 justify-end  px-17">
                <div className="flex gap-8 items-center">
                  <Link className="hover:text-[#0c6460] duration-300">
                    About
                  </Link>
                  <Link className="hover:text-[#0c6460] duration-300">
                    Faqs
                  </Link>
                  <Link className="hover:text-[#0c6460] duration-300">
                    Contact
                  </Link>
                </div>
                <div className="flex gap-5 items-center text-[16px] ml-2">
                  <span className="hover:text-[#0c6460] duration-300 double-flip">
                    <FiFacebook />
                  </span>
                  <span className="hover:text-[#0c6460] duration-300 double-flip">
                    <GrInstagram />
                  </span>
                  <span className="hover:text-[#0c6460] duration-300 double-flip">
                    <FaXTwitter />
                  </span>
                  <span className="hover:text-[#0c6460] duration-300 double-flip">
                    <GrLinkedinOption />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* navbar  */}
     <div
  className={`w-full z-50 transition-all duration-500 ease-in-out ${
    scrolled
      ? "fixed top-0 left-0 bg-white shadow-md"
      : "relative"
  }`}
>
        <div className="md:w-[94%] md:h-[100px] items-center mx-auto  py-2 flex justify-between font-medium text-[16px]">
          {/* logo  */}
          <Link to={"/"}>
            <img
              src="https://html.kodesolution.com/2025/consultez-html-v2/images/logo.png"
              alt=""
            />
          </Link>
          <nav>
            {/* <CgMenuRound /> */}
            <MobileMenu />
            {/* Home menu and links */}
            <div className="hidden lg:block ">
              <div className="flex gap-10">
                {/* home  */}
                <div className="group relative">
                  <span className="flex items-center gap-0.5 group-hover:underline">
                    Home <IoMdArrowDropdown />
                  </span>
                  <div className=" w-[200px] font-medium text-[14px] opacity-0 scale-y-0 origin-top transition-all ease-out duration-700 group-hover:scale-y-100 group-hover:opacity-100 z-50 flex flex-col gap-4 absolute bg-white shadow-lg mt-2 pt-4 top-4">
                    <Link className="border-b border-gray-300 py-1.5  px-8">
                      <span className="ml-0 hover:ml-1 duration-300">
                        Home Page One{" "}
                      </span>
                    </Link>
                    <Link className="border-b border-gray-300 py-1.5  px-8">
                      <span className="ml-0 hover:ml-1 duration-300">
                        Home Page Two{" "}
                      </span>
                    </Link>
                    <Link className="border-b border-gray-300 py-1.5  px-8">
                      <span className="ml-0 hover:ml-1 duration-300">
                        Home Page Three{" "}
                      </span>
                    </Link>
                    <Link className="border-b border-gray-300 py-1.5  px-8">
                      <span className="ml-0 hover:ml-1 duration-300">
                        Home Page Four{" "}
                      </span>
                    </Link>
                    <Link className="border-b border-gray-300 py-1.5  px-8">
                      <span className="ml-0 hover:ml-1 duration-300">
                        Home Page Five{" "}
                      </span>
                    </Link>
                    <Link className="border-b border-gray-300 pb-2 pt-2 px-8">
                      <span className="ml-0 hover:ml-1 duration-300">
                        Home Page Six{" "}
                      </span>
                    </Link>
                    <Link className="border-b border-gray-300 py-1.5  px-8">
                      <span className="ml-0 hover:ml-1 duration-300">
                        Home Page Seven{" "}
                      </span>
                    </Link>
                    <div className="group/a1 pb-2  relative border-b border-gray-300">
                      <Link className=" px-8">
                        <span className="ml-0 hover:ml-1 duration-300">
                          Single styles
                        </span>
                      </Link>
                      <div className="opacity-0 scale-x-0 origin-left transition-all ease-out duration-700 group-hover/a1:scale-x-100 group-hover/a1:opacity-100 z-50 w-[200px] flex flex-col gap-4 absolute bg-white shadow-lg -top-2 left-full mt-0 ">
                        <Link className="border-b border-gray-300 pb-2 pt-2 px-8">
                          <span className="ml-0 hover:ml-1 duration-300">
                            Single Styles One
                          </span>
                        </Link>
                        <Link className="border-b border-gray-300 pb-2  px-8">
                          <span className="ml-0 hover:ml-1 duration-300">
                            Single Styles Two
                          </span>
                        </Link>
                        <Link className="border-b border-gray-300 pb-2  px-8">
                          <span className="ml-0 hover:ml-1 duration-300">
                            Single Styles Three
                          </span>
                        </Link>
                        <Link className="border-b border-gray-300 pb-2  px-8">
                          <span className="ml-0 hover:ml-1 duration-300">
                            Single Styles Four
                          </span>
                        </Link>
                        <Link className="border-b border-gray-300 pb-2  px-8">
                          <span className="ml-0 hover:ml-1 duration-300">
                            Single Styles Five
                          </span>
                        </Link>
                        <Link className="border-b border-gray-300 pb-2  px-8">
                          <span className="ml-0 hover:ml-1 duration-300">
                            Single Styles Siv
                          </span>
                        </Link>
                        <Link className="border-b border-gray-300 pb-2  px-8">
                          <span className="ml-0 hover:ml-1 duration-300">
                            Single Styles Seven
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="group/a1 pb-2  relative border-b border-gray-300">
                      <Link className=" px-8">
                        <span className="duration-300 ml-0 hover:ml-1">
                          Dark styles
                        </span>
                      </Link>
                      <div className="opacity-0 scale-x-0 origin-left transition-all ease-out duration-700 group-hover/a1:scale-x-100 group-hover/a1:opacity-100 z-50 w-[200px] flex flex-col gap-4 absolute bg-white shadow-lg -top-2 left-full mt-0 ">
                        <Link className="border-b border-gray-300 pb-2 duration-300 pt-2 px-8 ">
                          <span className="ml-0 hover:ml-1 hover:text-[#082d08]">
                            Dark Styles One
                          </span>
                        </Link>
                        <Link className="border-b border-gray-300 pb-2 duration-300  px-8">
                          <span className="ml-0 hover:ml-1">
                            Dark Styles Two
                          </span>
                        </Link>
                        <Link className="border-b border-gray-300 pb-2 duration-300  px-8">
                          <span className="ml-0 hover:ml-1">
                            Dark Styles Three
                          </span>
                        </Link>
                        <Link className="border-b border-gray-300 pb-2 duration-300  px-8">
                          <span className="ml-0 hover:ml-1">
                            Dark Styles Four
                          </span>
                        </Link>
                        <Link className="border-b border-gray-300 pb-2 duration-300  px-8">
                          <span className="ml-0 hover:ml-1">
                            Dark Styles Five
                          </span>
                        </Link>
                        <Link className="border-b border-gray-300 pb-2 duration-300  px-8">
                          <span className="ml-0 hover:ml-1">
                            Dark Styles Siv
                          </span>
                        </Link>
                        <Link className="border-b border-gray-300 pb-2 duration-300  px-8">
                          <span className="ml-0 hover:ml-1">
                            Dark Styles Seven
                          </span>
                        </Link>
                      </div>
                    </div>
                    <Link className="border-b border-gray-300 pb-2  px-8 ml-0 hover:ml-2 dur3">
                      RTL Styles
                    </Link>
                  </div>
                </div>
                {/* pages  */}
                <div className="group relative text-[14px] font-medium">
                  <span className="flex items-center gap-0.5">
                    Pages <IoMdArrowDropdown />
                  </span>
                  <div className=" w-[200px] font-medium text-[14px] opacity-0 scale-y-0 origin-top transition-all ease-out duration-700 group-hover:scale-y-100 group-hover:opacity-100 z-50 flex flex-col gap-4 absolute bg-white shadow-lg mt-2 pt-4 top-4">
                    <Link to={"/about"} className="border-b border-gray-300 py-1.5  px-8">
                      <span className="ml-0 hover:ml-1 duration-300">
                        About
                      </span>
                    </Link>
                    <Link to={"/faqs"} className="border-b border-gray-300 py-1.5  px-8">
                      <span className="ml-0 hover:ml-1 duration-300">Faqs</span>
                    </Link>
                    <Link to={"/pricing"} className="border-b border-gray-300 py-1.5  px-8">
                      <span className="ml-0 hover:ml-1 duration-300">
                        Pricing
                      </span>
                    </Link>
                    <div className="group/a1 pb-2  relative border-b border-gray-300">
                      <Link className=" px-8">Team</Link>
                      <div className="opacity-0 scale-x-0 origin-left transition-all ease-out duration-700 group-hover/a1:scale-x-100 group-hover/a1:opacity-100 z-50 w-[200px] flex flex-col gap-4 absolute bg-white shadow-lg -top-2 left-full mt-0 ">
                        <Link to={"/teamlist"} className="border-b border-gray-300 pb-2 pt-2 px-8">
                          <span className="ml-0 hover:ml-1 duration-300">
                            Team List
                          </span>
                        </Link>
                        <Link  to={"/teamdetails"} className="border-b border-gray-300 pb-2  px-8">
                          <span className="ml-0 hover:ml-1 duration-300">
                            Team Details
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="group/a1 pb-2  relative border-b border-gray-300">
                      <Link className=" px-8">Shop</Link>
                      <div className="opacity-0 scale-x-0 origin-left transition-all ease-out duration-700 group-hover/a1:scale-x-100 group-hover/a1:opacity-100 z-50 w-[210px] flex flex-col gap-4 absolute bg-white shadow-lg -top-2 left-full mt-0 ">
                        <Link to={"/products"} className="border-b border-gray-300 pb-2 pt-2 px-8">
                          <span className="ml-0 hover:ml-1 duration-300">
                            Products
                          </span>
                        </Link>
                        <Link to={"/productsidebar"} className="border-b border-gray-300 pb-2  px-8">
                          <span className="ml-0 hover:ml-1 duration-300">
                            Product With Sidebar
                          </span>
                        </Link>
                        <Link className="border-b border-gray-300 pb-2  px-8">
                          <span className="ml-0 hover:ml-1 duration-300">
                            Product Details
                          </span>
                        </Link>
                        <Link className="border-b border-gray-300 pb-2  px-8">
                          <span className="ml-0 hover:ml-1 duration-300">
                            Cart
                          </span>
                        </Link>
                        <Link className="border-b border-gray-300 pb-2  px-8">
                          <span className="ml-0 hover:ml-1 duration-300">
                            Checkout
                          </span>
                        </Link>
                      </div>
                    </div>
                    <Link to={"/testi"} className="border-b border-gray-300 pb-2  px-8">
                      <span className="ml-0 hover:ml-1 duration-300">
                        Testimonial
                      </span>
                    </Link>
                    <Link className="border-b border-gray-300 py-1.5  px-8">
                      <span className="ml-0 hover:ml-1 duration-300">404</span>
                    </Link>
                  </div>
                </div>
                {/* Services */}
                <div className="group relative text-[14px] font-medium">
                  <span className="flex items-center gap-0.5">
                    Services <IoMdArrowDropdown />
                  </span>
                  <div className="opacity-0 scale-y-0 origin-top transition-all ease-out duration-700 group-hover:scale-y-100 group-hover:opacity-100 z-50 w-[200px] flex flex-col gap-4 absolute bg-white shadow-lg mt-2 pt-4 top-4">
                    <Link className="border-b border-gray-300 pb-2  px-6">
                      <span className="ml-0 hover:ml-1 duration-300">
                        Services
                      </span>
                    </Link>
                    <Link className="border-b border-gray-300 py-1.5  px-6">
                      <span className="ml-0 hover:ml-1 duration-300">
                        Services Details
                      </span>
                    </Link>
                  </div>
                </div>
                {/* Portfolio  */}
                <div className="group relative text-[14px] font-medium">
                  <span className="flex items-center gap-0.5">
                    Portfolio <IoMdArrowDropdown />
                  </span>
                  <div className="opacity-0 scale-y-0 origin-top transition-all ease-out duration-700 group-hover:scale-y-100 group-hover:opacity-100 z-50 w-[200px] flex flex-col gap-4 absolute bg-white shadow-lg mt-2 pt-4 top-4">
                    <Link to={"/portfolio"} className="border-b border-gray-300 pb-2  px-6">
                      <span className="ml-0 hover:ml-1 duration-300">
                        Portfolio
                      </span>
                    </Link>
                    <Link className="border-b border-gray-300 py-1.5  px-6">
                      <span className="ml-0 hover:ml-1 duration-300">
                        Portfolio Details
                      </span>
                    </Link>
                  </div>
                </div>
                {/* News  */}
                <div className="group relative text-[14px] font-medium">
                  <span className="flex items-center gap-0.5">
                    News <IoMdArrowDropdown />
                  </span>
                  <div className="opacity-0 scale-y-0 origin-top transition-all ease-out duration-700 group-hover:scale-y-100 group-hover:opacity-100 z-50 w-[200px] flex flex-col gap-4 absolute bg-white shadow-lg mt-2 pt-4 top-4">
                    <Link className="border-b border-gray-300 pb-2  px-6">
                      <span className="ml-0 hover:ml-1 duration-300">
                        News Grid
                      </span>
                    </Link>
                    <Link className="border-b border-gray-300 py-1.5  px-6">
                      <span className="ml-0 hover:ml-1 duration-300">
                        NewsDetails
                      </span>
                    </Link>
                  </div>
                </div>
                {/* Contact */}
                <Link to={"/contact"} className="text-[14px] font-medium">Contact</Link>
              </div>
            </div>
          </nav>

          {!scrolled && (
            <div className=" hidden xl:block ">
              <div className="flex gap-2">
                <div className="hidden lg:flex gap-2">
                  <button className="w-14 h-14 mr-2 bg-[#c6d936] rounded-full  text-center ">
                    <IoMdCall className=" ml-4 text-xl" />
                  </button>
                  <div className="flex flex-col mr-2">
                    <h1 className="uppercase text-[#1a4137] font-medium">
                      Phone:
                    </h1>
                    <p className="font-medium ">+00 2222 222 00</p>
                  </div>
                </div>
                {/* <button className="hidden md:block md:py-3 py-3 text-[16px] font-medium px-12 bg-[#1a4137] ml-5 text-white mr-5">
                Contact Now
              </button> */}
                <Button
                  bgColor="#1a4137"
                  textColor="white"
                  icon=""
                  text="Contact Now"
                  size="large"
                  rounded="none"
                  hoverBg="white"
                  hoverOpacity="0.1"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
