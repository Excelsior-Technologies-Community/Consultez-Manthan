import React from "react";
import { FaCheck, FaChevronRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { ImQuotesRight } from "react-icons/im";
import ConFooter from "../Components/ConFooter";
import Navbar from "../Components/Navbar";
import Button from "../Components/Small Components/Button";
import { useState } from "react";
import Finance from "../assets/Finance.svg";
import Notebook from "../assets/Notebook.svg";
import Sale from "../assets/Sale.svg";
import Service from "../assets/Service.svg";
import Notice from "../assets/Notice.svg";

const About = () => {
  const services = [
    {
      id: "01",
      title: "Business Strategy",
      description:
        "Whether it's creating a visually captivating brand identity, designing immersive digital experiences, or developing strategic marketing campaigns",
      icon: Service,
    },
    {
      id: "02",
      title: "Strategic Planning",
      description:
        "Whether it's creating a visually captivating brand identity, designing immersive digital experiences, or developing strategic marketing campaigns",
      icon: Notebook,
    },
    {
      id: "03",
      title: "Marketing & Branding",
      description:
        "Whether it's creating a visually captivating brand identity, designing immersive digital experiences, or developing strategic marketing campaigns",
      icon: Notice,
    },
    {
      id: "04",
      title: "Sales Consulting",
      description:
        "Whether it's creating a visually captivating brand identity, designing immersive digital experiences, or developing strategic marketing campaigns",
      icon: Sale,
    },
    {
      id: "05",
      title: "Financial Consulting",
      description:
        "Whether it's creating a visually captivating brand identity, designing immersive digital experiences, or developing strategic marketing campaigns",
      icon: Finance,
    },
  ];
  const [active, setActive] = useState(null);
  return (
    <>
      <Navbar />
      {/* section 1  */}
      <div
        className="w-full overflow-hidden relative min-h-[200px] md:min-h-[300px] lg:min-h-[400px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://html.kodesolution.com/2025/consultez-html-v2/images/background/page-title-bg.jpg')",
        }}>
        <div className="w-full h-full bg-gradient-to-r from-[#0b3231] to-transparent absolute lg:pl-26 lg:pt-26 pl-4 pt-5 md:pl-10 md:pt-10 z-10">
          <h1 className="flex gap-2 items-center text-[#c6d936] text-sm md:text-base font-semibold py-2">
            Home{" "}
            <span className="text-white flex items-center gap-2">
              <FaChevronRight />
              About Us
            </span>
          </h1>
          <span className="text-3xl md:text-4xl lg:text-6xl text-white font-bold  pb-5 pt-5 block">
            About Us
          </span>
        </div>
        {/* square box img  */}
        <img
          src="https://html.kodesolution.com/2025/consultez-html-v2/images/background/page-title-pattern.png"
          alt=""
          className="absolute z-20 -right-10 md:-right-20 top-0 w-32 md:w-auto hidden md:block"
        />
      </div>
      {/* Section 2 */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 lg:px-0 flex flex-col lg:flex-row gap-12">
        {/* left  */}
        <div className="w-full lg:w-1/2">
          <motion.img
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
            src="https://html.kodesolution.com/2025/consultez-html-v2/images/about/about-three-info.png"
            alt=""
            className="hidden lg:block absolute -top-16 -left-24"
          />
          <img
            src="https://html.kodesolution.com/2025/consultez-html-v2/images/about/about-three-image.jpg"
            alt=""
            className="rounded-2xl"
          />
          <p className="text-gray-600 my-5 text-xl leading-9">
            Consumers today increasingly rely on digital channels to research
            products. We analyze brands and their offerings, engaging with them
            accordingly. Meanwhile, 51% of consumers..
          </p>
          <div className="flex items-center py-10">
            <Button
              text="More About"
              hoverBg="black"
              hoverOpacity="0.20"
              size="large"
            />

            <div className="relative flex  w-42 -mt-13 ml-3">
              <img
                src="https://html.kodesolution.com/2025/consultez-html-v2/images/about/about-two-user1.png"
                alt=""
                className="border-2 border-white w-12 h-12 absolute  rounded-full"
              />
              <img
                src="https://html.kodesolution.com/2025/consultez-html-v2/images/about/about-two-user2.png"
                alt=""
                className="border-2 border-white w-12 h-12 absolute ml-10 rounded-full"
              />
              <img
                src="https://html.kodesolution.com/2025/consultez-html-v2/images/about/about-two-user3.png"
                alt=""
                className="border-2 border-white w-12 h-12 absolute ml-20 rounded-full"
              />
              <img
                src="https://html.kodesolution.com/2025/consultez-html-v2/images/about/about-two-user4.png"
                alt=""
                className="border-2 border-white w-12 h-12 absolute ml-30 rounded-full"
              />
            </div>
            <p className="relative font-semibold">
              10M+ Impact Across the World.
              <img
                src="https://html.kodesolution.com/2025/consultez-html-v2/images/about/about-two-line.png"
                alt=""
                className="absolute"
              />
            </p>
          </div>
        </div>
        {/* right  */}
        <div className="w-full lg:w-1/2">
          <h1 className="bg-[#c6d936] w-38 font-semibold uppercase text-center rounded-full py-1.5">
            About Us
          </h1>
          <p className="text-4xl font-bold mt-2 leading-13 pr-25 uppercase">
            We provide brilliant idea to grow the
            <span className="text-4xl font-normal px-5 font-serif">
              Consulting Agency
            </span>
            Your Sharp Brand
          </p>

          <div className="lg:flex mt-10  relative">
            <div className="lg:w-1/2 w-50 h-50 border border-black/20 lg:h-80 rounded-full text-center flex items-center absolute left-4">
              <div className="flex flex-col lg:gap-10 gap-5">
                <h1 className="lg:text-8xl text-5xl font-bold flex justify-center items-center">
                  15 <span className="text-5xl lg:mt-7">+</span>
                </h1>
                <p className="text-gray-500 lg:text-2xl lg:px-15 px-8">
                  Experience Team Help you
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 w-50 h-50 border border-black/20 lg:h-80 rounded-full text-center flex items-center absolute right-4">
              <div className="flex flex-col gap-10 ">
                <h1 className="lg:text-8xl text-5xl font-bold flex justify-center items-center gap-1">
                  18 <span className="lg:text-5xl text-3xl lg:mt-7 mt-2">M</span>
                </h1>
                <p className="text-gray-500 lg:text-2xl lg:px-15 px-8">
                  We helped to get companies
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section 3  */}
      <section className="w-full bg-[#f6f3ef] py-20 mt-40 lg:mt-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 ">
          {/* Left Content */}
          <div>
            <span className="inline-block bg-[#c6d936] text-x font-semibold px-6 py-1.5 rounded-full mb-4">
              SERVICES
            </span>
            <h2 className="text-5xl font-bold text-black leading-tight mb-6">
              Solutions Drive Business <br /> Sustain Growth
            </h2>
            <p className="text-gray-600 mb-8 text-[18px]  w-full">
              Business consulting is a dynamic and multifaceted field that plays
              a pivotal role in helping organizations thrive in today's
              competitive landscape.
            </p>

            <ul className="grid grid-cols-2 gap-4 text-[18px] text-[#0f2f23] font-medium mb-10">
              <li className="flex gap-2 items-center">
                <FaCheck /> Optimized Sprint Planning
              </li>
              <li className="flex gap-2 items-center">
                <FaCheck /> Incremental Delivery Approach
              </li>
              <li className="flex gap-2 items-center">
                <FaCheck /> Continuous Improvement
              </li>
              <li className="flex gap-2 items-center">
                <FaCheck /> Delivering Innovative
              </li>
            </ul>

            <Button text="View All Services" />
          </div>

          {/* Right Accordion */}
          <div className="bg-[#f6f3ef] border rounded-3xl overflow-hidden divide-y">
            {services.map((service, index) => {
              const isActive = active === index;
              return (
                <div
                  key={service.id}
                  onClick={() => setActive(active === index ? null : index)}
                  className={`cursor-pointer transition-all duration-500 ${
                    isActive ? "bg-[#173f35] text-white" : "bg-transparent"
                  }`}>
                  <div className="flex items-center justify-between px-6 py-6.5">
                    <div className="flex items-center gap-4">
                      <img
                        src={service.icon}
                        alt={service.title}
                        className={`w-10 h-10 transition ${
                          isActive ? "invert brightness-0" : ""
                        }`}
                      />

                      <h3 className="font-semibold text-2xl">
                        {service.title}
                      </h3>
                    </div>
                    <span className="font-semibold opacity-70 ">
                      {service.id}
                    </span>
                  </div>

                  {isActive && (
                    <div className=" ml-20  pb-6 text-xl text-gray-200 max-w-md">
                      {service.description}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <ConFooter />
    </>
  );
};

export default About;
