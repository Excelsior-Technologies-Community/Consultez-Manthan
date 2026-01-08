import React from "react";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiFacebook, FiX } from "react-icons/fi";
import { CgMenuRound } from "react-icons/cg";
import { Link, useNavigate } from "react-router-dom";
import { IoCallOutline } from "react-icons/io5";
import { ImMail2 } from "react-icons/im";
import { TfiAlarmClock } from "react-icons/tfi";
import { FaXTwitter } from "react-icons/fa6";
import { GrInstagram, GrPinterest } from "react-icons/gr";

const MobileMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [submenu, setSubmenu] = useState(null);
  const [submenu1, setSubmenu1] = useState(null);

  const navigate = useNavigate();

  const toggleSubmenu = (name) => {
    setSubmenu(submenu === name ? null : name);
  };
  const toggleSubmenu1 = (name) => {
    setSubmenu1(submenu1 === name ? null : name);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button className="lg:hidden text-3xl" onClick={() => setOpenMenu(true)}>
        <CgMenuRound />
      </button>

      {/* Sidebar Overlay */}
      <div
        className={`fixed lg:hidden top-0 right-0 w-[300px] h-full overflow-y-auto bg-[#111] text-white z-50 
        transition-transform duration-300 ${
          openMenu ? "translate-x-0" : "translate-x-full"
        }`}>
        {/* Close Button */}
        <div className="flex justify-between items-center">
          <Link to={() => navigate("/")}>
            <img
              src="https://html.kodesolution.com/2025/consultez-html-v2/images/logo-light.png"
              alt=""
              className="pt-3 pl-5"
            />
          </Link>
          <button
            className="absolute top-5 right-5 text-xl"
            onClick={() => setOpenMenu(false)}>
            <FiX />
          </button>
        </div>

        <div className="mt-8  flex flex-col items-start space-y-5 text-[16px] font-medium">
          {/* Menu Item with Dropdown */}
          {/* Home  */}
          <div className="  border-b border-gray-600 w-full px-5 pb-2">
            <button
              className="flex justify-between items-center w-full "
              onClick={() => toggleSubmenu("home")}>
              Home <IoMdArrowDropdown />
            </button>

            {submenu === "home" && (
              <div className="pl-4 mt-2 space-y-2 text-sm text-gray-300 flex flex-col">
                <Link className="border-b border-gray-600 pb-1">
                  Home Page 1
                </Link>
                <Link className="border-b border-gray-600 pb-1">
                  Home Page 2
                </Link>
                <Link className="border-b border-gray-600 pb-1">
                  Home Page 3
                </Link>
                <Link className="border-b border-gray-600 pb-1">
                  Home Page 4
                </Link>
                <Link className="border-b border-gray-600 pb-1">
                  Home Page 5
                </Link>
                <Link className="border-b border-gray-600 pb-1">
                  Home Page 6
                </Link>
                <Link className="border-b border-gray-600 pb-1">
                  Home Page 7
                </Link>
                {/* sigle style  */}
                <div>
                  <button
                    className="flex justify-between items-center w-[250px] border-b border-gray-600 pb-1 "
                    onClick={() => toggleSubmenu1("singlestyle")}>
                    Single Style <IoMdArrowDropdown />
                  </button>
                  {submenu1 === "singlestyle" && (
                    <div className="pl-4 mt-2 space-y-2 text-sm text-gray-300 flex flex-col">
                      <Link className="border-b border-gray-600 pb-1">
                        Single Page 1
                      </Link>
                      <Link className="border-b border-gray-600 pb-1">
                        Single Page 2
                      </Link>
                      <Link className="border-b border-gray-600 pb-1">
                        Single Page 3
                      </Link>
                      <Link className="border-b border-gray-600 pb-1">
                        Single Page 4
                      </Link>
                      <Link className="border-b border-gray-600 pb-1">
                        Single Page 5
                      </Link>
                      <Link className="border-b border-gray-600 pb-1">
                        Single Page 6
                      </Link>
                      <Link className="border-b border-gray-600 pb-1">
                        Single Page 7
                      </Link>
                    </div>
                  )}
                </div>
                {/* Dark Style  */}
                <div>
                  <button
                    className="flex justify-between items-center w-[250px] border-b border-gray-600 pb-1 "
                    onClick={() => toggleSubmenu1("darkstyle")}>
                    Dark Style <IoMdArrowDropdown />
                  </button>
                  {submenu1 === "darkstyle" && (
                    <div className="pl-4 mt-2 space-y-2 text-sm text-gray-300 flex flex-col">
                      <Link className="border-b border-gray-600 pb-1">
                        {" "}
                        Dark Page 1
                      </Link>
                      <Link className="border-b border-gray-600 pb-1">
                        {" "}
                        Dark Page 2
                      </Link>
                      <Link className="border-b border-gray-600 pb-1">
                        {" "}
                        Dark Page 3
                      </Link>
                      <Link className="border-b border-gray-600 pb-1">
                        {" "}
                        Dark Page 4
                      </Link>
                      <Link className="border-b border-gray-600 pb-1">
                        {" "}
                        Dark Page 5
                      </Link>
                      <Link className="border-b border-gray-600 pb-1">
                        {" "}
                        Dark Page 6
                      </Link>
                      <Link className="border-b border-gray-600 pb-1">
                        {" "}
                        Dark Page 7
                      </Link>
                    </div>
                  )}
                </div>
                <Link>RTL Style</Link>
              </div>
            )}
          </div>
          {/* Pages */}
          <div className="border-b border-gray-600 w-full px-5 pb-2 ">
            <button
              className="flex justify-between w-full"
              onClick={() => toggleSubmenu("pages")}>
              Pages <IoMdArrowDropdown />
            </button>

            {submenu === "pages" && (
              <div className="pl-4 mt-2 space-y-2 text-sm text-gray-300 flex flex-col">
                <Link className="border-b border-gray-600 pb-1">About</Link>
                <Link className="border-b border-gray-600 pb-1">FAQ</Link>
                <Link className="border-b border-gray-600 pb-1">Pricing</Link>
                {/* team  */}
                <div>
                  <button
                    className="flex justify-between items-center w-[250px] border-b border-gray-600 pb-1"
                    onClick={() => toggleSubmenu1("singlestyle")}>
                    Team <IoMdArrowDropdown />
                  </button>
                  {submenu1 === "singlestyle" && (
                    <div className="pl-4 mt-2 space-y-2 text-sm text-gray-300">
                      <Link className="border-b border-gray-600 pb-1">
                        Team List
                      </Link>
                      <Link className="border-b border-gray-600 pb-1">
                        Team{" "}
                      </Link>
                    </div>
                  )}
                </div>
                {/* shop  */}
                <div>
                  <button
                    className="flex justify-between items-center w-[250px] border-b border-gray-600 pb-1"
                    onClick={() => toggleSubmenu1("singlestyle")}>
                    Shop <IoMdArrowDropdown />
                  </button>
                  {submenu1 === "singlestyle" && (
                    <div className="pl-4 mt-2 space-y-2 text-sm text-gray-300">
                      <Link className="border-b border-gray-600 pb-1">
                        Product
                      </Link>
                      <Link className="border-b border-gray-600 pb-1">
                        Product with Sidebar{" "}
                      </Link>
                      <Link className="border-b border-gray-600 pb-1">
                        Product Details{" "}
                      </Link>
                      <Link className="border-b border-gray-600 pb-1">
                        Cart{" "}
                      </Link>
                      <Link className="border-b border-gray-600 pb-1">
                        Checkout{" "}
                      </Link>
                    </div>
                  )}
                </div>
                <Link className="border-b border-gray-600 pb-1">
                  Testinomial
                </Link>
                <Link className="border-b border-gray-600 pb-1">404</Link>
              </div>
            )}
          </div>
          {/* service */}
          <div className="border-b border-gray-600 w-full px-5 pb-2 ">
            <button
              className="flex justify-between w-full"
              onClick={() => toggleSubmenu("service")}>
              Service <IoMdArrowDropdown />
            </button>

            {submenu === "service" && (
              <div className="pl-4 mt-2 space-y-2 text-sm text-gray-300 flex flex-col">
                <Link className="border-b border-gray-600 pb-1">Service </Link>
                <Link className="">Service Details</Link>
              </div>
            )}
          </div>
          {/* Portfolio */}
          <div className="border-b border-gray-600 w-full px-5 pb-2 ">
            <button
              className="flex justify-between w-full"
              onClick={() => toggleSubmenu("Portfolio")}>
              Portfolio <IoMdArrowDropdown />
            </button>

            {submenu === "Portfolio" && (
              <div className="pl-4 mt-2 space-y-2 text-sm text-gray-300 flex flex-col">
                <Link className="border-b border-gray-600 pb-1">
                  Portfolio{" "}
                </Link>
                <Link className="">Portfolio Details</Link>
              </div>
            )}
          </div>
          {/* News */}
          <div className="border-b border-gray-600 w-full px-5 pb-2 ">
            <button
              className="flex justify-between w-full"
              onClick={() => toggleSubmenu("News")}>
              News <IoMdArrowDropdown />
            </button>

            {submenu === "News" && (
              <div className="pl-4 mt-2 space-y-2 text-sm text-gray-300 flex flex-col">
                <Link className="border-b border-gray-600 pb-1">News Grid</Link>
                <Link>News Details</Link>
              </div>
            )}
          </div>

          <Link className="w-full px-5 border-b border-gray-600 pb-2">
            Services
          </Link>
          <Link className="w-full px-5 border-b border-gray-600 pb-2">
            Portfolio
          </Link>
          <Link className="w-full px-5 border-b border-gray-600 pb-2">
            News
          </Link>
          <Link className="w-full px-5 border-b border-gray-600 pb-2">
            Contact
          </Link>

          {/* Contact Section */}
          <div className="mt-3 space-y-8 text-sm px-5">
            <div className="flex gap-5 items-center">
              <div>
                <IoCallOutline className="text-white text-4xl" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[#c6d936] uppercase">CALL NOW</p>
                <p>+92 (8800) 98670</p>
              </div>
            </div>

            <div className="flex gap-5 items-center">
              <div>
                <ImMail2 className="text-white text-4xl" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[#c6d936] uppercase">Send Mail</p>
                <p>help@company.com</p>
              </div>
            </div>

            <div className="flex gap-5 items-center">
              <div>
                <TfiAlarmClock className="text-white text-4xl" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-[#c6d936] uppercase">Timing</p>
                <p>Mon - Sat 8:00 - 6:30,</p>
                <p>Sunday - CLOSED</p>
              </div>
            </div>
          </div>

          {/* social icons  */}
          <div className=" w-full border-t border-b border-gray-600 px-5 py-4">
            <div className="flex justify-between ">
              <FaXTwitter className="" />
              <FiFacebook className="" />
              <GrPinterest className="" />
              <GrInstagram className="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
