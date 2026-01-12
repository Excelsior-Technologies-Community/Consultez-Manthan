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
import phone from "../assets/phone.svg";
import mail from "../assets/mail.svg";
import { MdOutlinePerson } from "react-icons/md";
import { BsWechat } from "react-icons/bs";

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
  const testimonials = [
    {
      text: `Ascend the mountain not to plant your flag, but to embrace the challenge, savour the journey, and marvel at the view. Climb to experience the world, not for the world to notice you. This is why they stand out with exceptional.`,
      name: "Leslie Alexander",
      role: "Web Designer",
    },
    {
      text: `Ascend the mountain not to plant your flag, but to embrace the challenge, savour the journey, and marvel at the view. Climb to experience the world, not for the world to notice you. This is why they stand out with exceptional.`,
      name: "Robert Fox",
      role: "Product Manager",
    },
    {
      text: `Ascend the mountain not to plant your flag, but to embrace the challenge, savour the journey, and marvel at the view. Climb to experience the world, not for the world to notice you. This is why they stand out with exceptional`,
      name: "Jenny Wilson",
      role: "UX Researcher",
    },
  ];

  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

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
  const blogs = [
    {
      img: "https://html.kodesolution.com/2025/consultez-html-v2/images/blog/blog-two-image1.jpg",
      date: "15 December,2025",
      title: "We Focus On The Solutions Not On The Problems",
    },
    {
      img: "https://html.kodesolution.com/2025/consultez-html-v2/images/blog/blog-two-image2.jpg",
      date: "20 December,2025",
      title: "How To Create Viral Content That Drives Sales",
    },
    {
      img: "https://html.kodesolution.com/2025/consultez-html-v2/images/blog/blog-two-image3.jpg",
      date: "31 December,2025",
      title: "How AI Is Changing The Future Of Online Shopping",
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
      <section className="py-24 relative bg-white">
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
            bottom-0 -left-5
            z-0
            pointer-events-none  
          "
          />
        </div>
      </section>
      {/* section 8 */}
      <section className="bg-gray-100 py-16 lg:py-20">
        <div
          className="
    relative mx-auto flex w-full max-w-full
    flex-col lg:flex-row
    overflow-hidden bg-[#173f35]
    lg:h-[650px]
  ">
          {/* LEFT — STATIC */}
          <div
            className="
      relative w-full lg:w-[45%]
      h-[420px] sm:h-[480px] lg:h-auto
    ">
            {/* Green shape */}
            <div
              className="
        absolute left-1/2 bottom-0
        h-[360px] w-[320px]
        sm:h-[420px] sm:w-[380px]
        lg:left-20 lg:h-[500px] lg:w-[460px]
        -translate-x-1/2 lg:translate-x-0
        rounded-t-full bg-[#c9dc3c]
      "
            />

            {/* Floating image 1 */}
            <motion.img
              src="https://html.kodesolution.com/2025/consultez-html-v2/images/testimonial/testimonial-two-info1.png"
              className="hidden llap:block
          absolute left-4 top-32
          sm:left-10 sm:top-40
          lg:-left-18 lg:top-60
          z-20 w-[120px] sm:w-[260px]
        "
              animate={{ y: [0, -30, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Person */}
            <img
              src="https://html.kodesolution.com/2025/consultez-html-v2/images/testimonial/testimonial-two-image.png"
              className="
          absolute bottom-0 left-1/2
          h-[360px] sm:h-[420px]
          lg:left-36 lg:h-[570px]
          -translate-x-1/2 lg:translate-x-0
          z-10
        "
              alt="person"
            />

            {/* Floating image 2 */}
            <motion.img
              src="https://html.kodesolution.com/2025/consultez-html-v2/images/testimonial/testimonial-two-info2.png"
              className=" hidden llap:block
          absolute right-4 bottom-6
          sm:right-12 sm:bottom-10
          lg:left-90 lg:-bottom-18
          z-20 w-[180px] sm:w-[240px] lg:w-[320px]
        "
              animate={{ x: [0, -30, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* RIGHT — SLIDER */}
          <div
            className="
      relative w-full lg:w-[55%]
      px-6 sm:px-10 
      py-12 lg:py-20
      text-white overflow-hidden 
    ">
            {/* Slides */}
            <div
              className="flex transition-transform duration-500 "
              style={{ transform: `translateX(-${index * 100}%)` }}>
              {testimonials.map((item, i) => (
                <div key={i} className="min-w-full">
                  <div
                    className="
              mb-6 flex items-center gap-2
              text-2xl sm:text-3xl lg:text-5xl
              font-semibold px-10
            ">
                    <span className="text-[#00b67a]">★</span>
                    Trustpilot
                  </div>

                  <p
                    className="
              mb-8 leading-relaxed opacity-90
              text-lg sm:text-xl lg:text-3xl px-10
            ">
                    {item.text}
                  </p>

                  <div className="my-6 h-px w-full bg-white/30" />

                  <div className="flex items-center justify-between px-10">
                    <div>
                      <h4 className="text-lg font-semibold">{item.name}</h4>
                      <span className="text-sm opacity-70">{item.role}</span>
                    </div>
                    <div className="text-lg sm:text-xl text-[#ffb400]">
                      ★★★★★
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Controls */}
            <div
              className="
        absolute right-78 bottom-6
        lg:right-16 lg:top-20 lg:bottom-auto
        flex gap-3
      ">
              <button
                onClick={prev}
                className="h-12 w-12 sm:h-14 sm:w-14 rounded-full border border-white/30 hover:bg-white/10 ">
                ‹
              </button>
              <button
                onClick={next}
                className="h-12 w-12 sm:h-14 sm:w-14 rounded-full border border-white/30 hover:bg-white/10 ">
                ›
              </button>
            </div>
          </div>

          {/* Rotating decoration (desktop only) */}
          <motion.img
            src="https://html.kodesolution.com/2025/consultez-html-v2/images/shape/dual-circle420.png"
            className="hidden lg:block absolute -right-40 bottom-0"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          />
        </div>
      </section>
      {/* section 9 */}
      <section className="bg-[#f7f4ef] py-16 sm:py-20 relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start ">
            {/* LEFT CONTENT */}
            <div>
              <span className="inline-block rounded-full bg-[#c9dc3c] px-6 py-2 text-sm font-semibold tracking-wide text-black">
                CONTACT US
              </span>

              <h2 className="mt-6 text-4xl sm:text-5xl font-bold text-[#0b2c1f]">
                Let’s Work Together
              </h2>

              <p className="mt-6 max-w-xl text-lg text-gray-600">
                We condemn with rightful anger and, like those who have been
                misled and corrupted by allurement.
              </p>

              {/* Contact Info */}
              <div className="mt-10 space-y-8">
                <div className="flex items-start gap-5">
                  <div className="flex h-18 w-18 items-center justify-center rounded-full bg-white shadow">
                    <img src={phone} alt="" className="w-10" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0b2c1f]">
                      Call For Inquiry
                    </p>
                    <p className="text-lg font-bold text-[#0b2c1f]">
                      +00 (002) 896 22
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5 llap:mb-34">
                  <div className="flex h-18 w-18 items-center justify-center rounded-full bg-white shadow">
                    <img src={mail} alt="" className="w-10" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#0b2c1f]">
                      Send Us Email
                    </p>
                    <p className="text-lg font-bold text-[#0b2c1f]">
                      theme@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="rounded-xl bg-white p-8 sm:p-10 shadow-lg llap:absolute right-20 z-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0b2c1f]">
                Need Help For Project!
              </h3>
              <p className="mt-2 text-gray-600">
                Let’s collaborate and create something amazing together!
              </p>

              <form className="mt-8 space-y-6">
                {/* Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#c9dc3c]"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#c9dc3c]"
                  />
                </div>

                <select className="w-full rounded-lg border border-gray-200 px-4 py-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-[#c9dc3c]">
                  <option>Choose Our Service</option>
                  <option>Web Designer</option>
                  <option>UI/UX Designing</option>
                  <option>Market Manager</option>
                  <option>Web Developer</option>
                  <option>Finance Advice</option>
                </select>

                <textarea
                  rows="4"
                  placeholder="Write a Message"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#c9dc3c]"
                />

                <Button
                  text="Send Message Us"
                  bgColor="#173f35"
                  textColor="white"
                  hoverBg="gray"
                  hoverOpacity="0.2"
                />
              </form>
            </div>
            <img
              src="https://html.kodesolution.com/2025/consultez-html-v2/images/contact/contact-image.png"
              alt=""
              className="absolute right-5 z-0 hidden llap:block"
            />
          </div>
        </div>
      </section>
      {/* section 10 */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* HEADER */}
          <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <span className="inline-block rounded-full bg-[#c9dc3c] px-6 py-2 text-sm font-semibold tracking-wide text-black">
                NEW & BLOGS
              </span>

              <h2 className="mt-6 max-w-xl text-4xl sm:text-5xl font-bold text-[#0b2c1f] leading-tight">
                Read All Our Consulting <br /> News & Blogs
              </h2>
            </div>

            <div className="border rounded-full">
              <Button
                text="Contact Us"
                bgColor="white"
                hoverBg="black"
                hoverOpacity="0.1"
                size="large"
              />
            </div>
          </div>

          {/* BLOG GRID */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, i) => (
              <div
                key={i}
                className="group rounded-2xl bg-white shadow-sm hover:shadow-lg transition">
                {/* IMAGE */}
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img
                    src={blog.img}
                    alt=""
                    className="h-[240px] w-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-1"
                  />

                  {/* DATE */}
                  <span className="absolute right-4 top-4 rounded-md bg-[#173f35] px-4 py-2 text-sm font-semibold text-white">
                    {blog.date}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  {/* META */}
                  <div className="mb-4 flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex gap-1 items-center"><MdOutlinePerson /> By admin</span>
                    <span className="flex gap-1 items-center"><BsWechat /> Comments (05)</span>
                  </div>

                  <h3 className="mb-6 text-xl font-semibold leading-snug text-[#0b2c1f]">
                    {blog.title}
                  </h3>

                  <button className="inline-flex items-center gap-2 rounded-full bg-[#c9dc3c] px-6 py-3 text-sm font-semibold text-black hover:bg-[#b6cc34] transition">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConFooter />
    </>
  );
};

export default About;
