import React from "react";
import { FaCheck, FaChevronRight, FaXTwitter } from "react-icons/fa6";
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
import Section4 from "../Sections/Section4";
import Shape from "../assets/Shape.svg";
import { FiFacebook } from "react-icons/fi";
import { GrInstagram, GrLinkedinOption } from "react-icons/gr";

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

  const [active1, setActive1] = useState(0);

  const steps = [
    {
      step: "01",
      label: "Business Analysis",
      title: "Essential Features for Time Management",
    },
    {
      step: "02",
      label: "Business Strategy",
      title: "Essential Features for Business Strategy",
    },
    {
      step: "03",
      label: "Final Execution",
      title: "Essential Features for Final Execution",
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
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 lg:px-0 flex flex-col lg:flex-row gap-12 relative">
        {/* left  */}
        <div className="w-full lg:w-1/2">
          <motion.img
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
            src="https://html.kodesolution.com/2025/consultez-html-v2/images/about/about-three-info.png"
            alt=""
            className="hidden lg:block absolute top-10 -left-25"
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
          <div className="flex  items-center py-10">
            <Button
              text="More About"
              hoverBg="black"
              hoverOpacity="0.20"
              size="large"
            />

            <div className="hidden mdm:block  relative flex  w-42 -mt-13 ml-3">
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
            <p className="hidden llap:block relative font-semibold">
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
          <p className="md:text-4xl text-2xl font-bold mt-2 leading-13 pr-25 uppercase">
            We provide brilliant idea to grow the
            <span className="md:text-4xl text-2xl font-normal px-5 font-serif">
              Consulting Agency
            </span>
            Your Sharp Brand
          </p>

          <div className="lg:flex mt-10  relative">
            <div className="lg:w-1/2 md:w-50  md:h-50 w-40 h-40 border border-black/20 lg:h-80 rounded-full text-center flex items-center absolute md:left-4">
              <div className="flex flex-col lg:gap-3 gap-3">
                <h1 className="lg:text-8xl text-4xl font-bold flex justify-center items-center">
                  15{" "}
                  <span className="lg:text-5xl text-2xl lg:mt-7 mt-2">+</span>
                </h1>
                <p className="text-gray-500 lg:text-2xl lg:px-15 px-8 text-[14px] ">
                  Experience Team Help you
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 md:w-50 md:h-50 w-40 h-40 border border-black/20 lg:h-80 rounded-full text-center flex items-center absolute md:right-4 right-0">
              <div className="flex flex-col gap-3 ">
                <h1 className="lg:text-8xl text-4xl font-bold flex justify-center items-center ">
                  18{" "}
                  <span className="lg:text-5xl text-2xl lg:mt-7 mt-2">M</span>
                </h1>
                <p className="text-gray-500 lg:text-2xl lg:px-15 px-8 text-[14px] ">
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
      {/* section 4  */}
      <Section4 />
      {/* section 5 */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-15xl llap:px-24 px-10 ">
          <div className="grid grid-cols-1 lap:grid-cols-4  items-center">
            {/* LEFT CONTENT */}
            <div className="lap:col-span-1 ">
              <h2 className="text-4xl font-bold leading-relaxed text-[#0b2c1f] text-center llap:text-left">
                We Help Real People Do More Business Plan
              </h2>
            </div>

            {/* RIGHT STATS */}
            <div className="lap:col-span-3 grid grid-cols-1 tab:grid-cols-3 llap:ml-30 ">
              {/* ITEM 1 */}
              <div className="px-10 tab:border-r border-gray-200 llap:py-20 py-5">
                <div className=" mb-6">
                  <img
                    src="https://html.kodesolution.com/2025/consultez-html-v2/images/shape/funface-four-shape.png"
                    alt=""
                  />
                </div>
                <h3 className="text-5xl font-extrabold text-[#0b2c1f]">90%</h3>
                <p className="mt-2 text-[#0b2c1f] font-medium">
                  Clients Satisfactions
                </p>
              </div>

              {/* ITEM 2 */}
              <div className="px-10 tab:border-r border-gray-200 llap:py-20 py-5">
                <div className=" mb-6">
                  <img
                    src="https://html.kodesolution.com/2025/consultez-html-v2/images/shape/funface-four-shape.png"
                    alt=""
                  />
                </div>
                <h3 className="text-5xl font-extrabold text-[#0b2c1f]">40%</h3>
                <p className="mt-2 text-[#0b2c1f] font-medium">
                  Decrease Expense
                </p>
              </div>

              {/* ITEM 3 */}
              <div className="px-10 llap:py-20 py-5">
                <div className=" mb-6">
                  <img
                    src="https://html.kodesolution.com/2025/consultez-html-v2/images/shape/funface-four-shape.png"
                    alt=""
                  />
                </div>
                <h3 className="text-5xl font-extrabold text-[#0b2c1f]">7M</h3>
                <p className="mt-2 text-[#0b2c1f] font-medium">
                  Money Flow Users
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section 6 */}
      <section className="py-24 pb-48 bg-[#fbfbf9]">
        <div className="max-w-7xl mx-auto px-6">
          {/* TOP */}
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-block px-8 py-2 rounded-full bg-[#c6d936] text-sm font-semibold tracking-widest">
              PROCESS
            </span>

            <h2 className="mt-6 text-4xl font-extrabold text-[#0b2c1f] leading-tight">
              Ensure The Success Of <br /> Your Business Venture.
            </h2>
          </div>

          {/* STEPS */}
          <div className="relative mt-16">
            <div className="absolute top-1/2 left-0 w-full h-px bg-gray-200 -z-10" />

            <div className="grid grid-cols-3 text-center">
              {steps.map((item, i) => (
                <div
                  key={i}
                  onClick={() => setActive1(i)}
                  className="cursor-pointer">
                  <p
                    className={`font-semibold  ${
                      active === i ? "text-[#0b2c1f]!" : "text-gray-400"
                    }`}>
                    {item.label}
                  </p>

                  <span
                    className={`mt-2 inline-flex w-9 h-9 items-center justify-center rounded-full font-semibold ${
                      active === i
                        ? "bg-[#0b2c1f] text-white"
                        : "bg-white text-gray-400 shadow"
                    }`}>
                    {item.step}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CONTENT */}
          <div className="mt-24 grid grid-cols-1 lap:grid-cols-2 gap-20 items-center">
            {/* LEFT */}
            <div>
              <h3 className="text-4xl font-extrabold text-[#0b2c1f]">
                {steps[active1].title}
              </h3>

              <p className="mt-6 text-gray-600 leading-relaxed max-w-lg">
                Sed ut perspiciatis unde omnis iste natus voluptatem accusantium
                doloremque laudantium totamto aperiame eaque ipsa quae ab illo
                inventore veritatis.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <p className="flex items-center gap-3 font-semibold">
                  ✓ Optimized Sprint Planning
                </p>
                <p className="flex items-center gap-3 font-semibold">
                  ✓ Incremental Delivery Approach
                </p>
                <p className="flex items-center gap-3 font-semibold">
                  ✓ Continuous Improvement
                </p>
                <p className="flex items-center gap-3 font-semibold">
                  ✓ Delivering Innovative
                </p>
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className="relative flex justify-center">
              {/* BACKGROUND SHAPE */}
              <img src={Shape} alt="" className="absolute -top-20 right-2" />

              {/* MAIN IMAGE */}
              <img
                src="https://html.kodesolution.com/2025/consultez-html-v2/images/process/image1.jpg"
                alt=""
                className="relative z-20 rounded-xl shadow-xl"
              />

              {/* FLOATING IMAGE */}
              <img
                src="https://html.kodesolution.com/2025/consultez-html-v2/images/process/image2.jpg"
                alt=""
                className="absolute -bottom-33 right-8 z-30 rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      {/* section 7 */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6  ">
          {/* TOP HEADER */}
          <div className="flex items-center justify-between mb-14">
            <div>
              <span className="inline-block mb-4 px-7 py-2 rounded-full bg-[#c6d936] text-sm font-semibold tracking-wide">
                TEAM MEMBER
              </span>

              <h2 className="text-4xl font-extrabold text-[#0b2c1f] leading-tight">
                The Visionaries Driving <br /> Our Success
              </h2>
            </div>

            <Button text="Get Started" size="large" />
          </div>

          {/* TEAM GRID */}
          <div className="grid grid-cols-1 tab:grid-cols-2 lap:grid-cols-4 gap-8 z-20 relative">
            {/* CARD */}
            {[
              {
                img: "https://html.kodesolution.com/2025/consultez-html-v2/images/team/team-three-image1.jpg",
                name: "Ronald Richards",
                role: "CEO & Founder",
              },
              {
                img: "https://html.kodesolution.com/2025/consultez-html-v2/images/team/team-three-image2.jpg",
                name: "Marvin McKinney",
                role: "Senior Manager",
              },
              {
                img: "https://html.kodesolution.com/2025/consultez-html-v2/images/team/team-three-image3.jpg",
                name: "Kathryn Murphy",
                role: "Web Designer",
              },
              {
                img: "https://html.kodesolution.com/2025/consultez-html-v2/images/team/team-three-image4.jpg",
                name: "Dianne Russell",
                role: "Junior Manager",
              },
            ].map((item, i) => (
              <div key={i} className="group">
                {/* IMAGE + HOVER */}
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-[360px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition duration-500"></div>

                  {/* SOCIAL BAR */}
                  <div
                    className="
                absolute
                left-1/2
                -translate-x-1/2
                bottom-6
                bg-[#f15a29]
                rounded-xl
                px-6
                py-3
                flex
                gap-5
                text-white
                opacity-0
                translate-y-6
                group-hover:opacity-100
                group-hover:translate-y-0
                transition-all
                duration-500
              ">
                    <span className="cursor-pointer double-flip">
                      <FiFacebook />
                    </span>
                    <span className="cursor-pointer double-flip">
                      <FaXTwitter />
                    </span>
                    <span className="cursor-pointer double-flip">
                      <GrLinkedinOption />
                    </span>
                    <span className="cursor-pointer double-flip">
                      <GrInstagram />
                    </span>
                  </div>
                </div>

                {/* TEXT */}
                <div className="text-center mt-6">
                  <h3 className="text-xl font-bold text-[#0b2c1f]">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-gray-500">
                    {item.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <img
            src="https://html.kodesolution.com/2025/consultez-html-v2/images/shape/team-three-text.png"
            alt=""
            className="
      absolute
      
      bottom-[10px]
      z-0
      pointer-events-none
    "
          />
        </div>
      </section>

      <ConFooter />
    </>
  );
};

export default About;
