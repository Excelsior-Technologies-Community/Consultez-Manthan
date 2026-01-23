import { Check, Fullscreen } from "lucide-react";
import React from "react";
import { FaChevronRight, FaPlay } from "react-icons/fa6";
import { useState } from "react";
import { LuArrowRight } from "react-icons/lu";
import Button from "../Components/Small Components/Button";

const faqs = [
  {
    id: 1,
    question: "Do you offer marketing contracts or relationships?",
    answer:
      "Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signiferumque vim te. Ex mea quem munere lobortis. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
  },
  {
    id: 2,
    question: "What kind of marketing efforts do you specialize?",
    answer:
      "Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signiferumque vim te. Ex mea quem munere lobortis. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
  },
  {
    id: 3,
    question: "Can I use the demos made by Ewebot?",
    answer:
      "Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signiferumque vim te. Ex mea quem munere lobortis. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
  },
  {
    id: 4,
    question: "What everybody ought to know about digital marketing?",
    answer:
      "Ne summo dictas pertinacia nam. Illum cetero vocent ei vim, case regione signiferumque vim te. Ex mea quem munere lobortis. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
  },
];

const ServiceDetails = () => {
  const [openId, setOpenId] = useState(null);
  const [open, setOpen] = useState(false);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div>
      <div
        className="w-full overflow-hidden relative min-h-[200px] md:min-h-[300px] lg:min-h-[400px] bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage:
            "url('https://html.kodesolution.com/2025/consultez-html-v2/images/background/page-title-bg.jpg')",
        }}>
        <div className="w-full h-full bg-gradient-to-r from-[#0b3231] to-transparent absolute lg:pl-26 lg:pt-26 pl-4 pt-5 md:pl-10 md:pt-10 z-10">
          <span className="text-3xl md:text-4xl lg:text-6xl text-white font-bold pt pb-5 pt-10 block">
            Service Details
          </span>
          <h1 className="flex gap-2 items-center text-[#c6d936] text-sm md:text-base font-semibold py-2">
            Home{" "}
            <span className="text-white flex items-center gap-2">
              <FaChevronRight />
              Service Details
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

      <div className="w-[87%] mx-auto py-14">
  <p className="uppercase font-semibold text-[#0b3231] py-6">
    Service Details
  </p>
  <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-12 py-8">
    <div className="w-full md:w-1/2 text-3xl md:text-5xl font-semibold">
      Product Development <br /> For Butter Business
    </div>
    <div className="w-full md:w-1/2 text-gray-600 text-lg md:text-xl">
      Rorem ipsum dolor sit ametconsectetur adipiscing elit,tempor Rorem
      ipsum dolor sit ametconsectetur adipiscing elit, sed do eiusmod
      temporRorem ipsum dolor
    </div>
  </div>
  <div className="group relative lg:my-8">
    <div
      className="w-12 h-12 md:w-28 md:h-28 left-1/2 bottom-1/2 text-[#0b3231] flex justify-center text-lg md:text-2xl items-center bg-white rounded-full cursor-pointer absolute transform -translate-x-1/2 translate-y-1/2"
      onClick={() => setOpen(true)}
    >
      <FaPlay />
    </div>
    <img
      src="https://html.kodesolution.com/2025/consultez-html-v2/images/resource/service-details.jpg"
      alt=""
      className="w-full"
    />
  </div>
  {open && (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70"
        onClick={() => setOpen(false)}
      />

      {/* Video Box */}
      <div className="relative z-50 w-full max-w-4xl md:max-w-6xl aspect-video bg-black mx-4">
        {/* Close Button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute -top-10 right-0 text-white text-xl md:text-2xl"
        >
          ✕
        </button>

        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/Lplq8RjQ0zU?autoplay=1"
          title="YouTube video"
          frameBorder="0"
          allow="fullscreen"
          allowFullScreen
        />
      </div>
    </div>
  )}
</div>
      {/* main  */}
      <div className="w-[87%] mx-auto flex flex-col md:flex-row gap-6 md:gap-10">
  {/* Left side */}
  <div className="w-full md:w-[68%]">
    <div>
      <p className="text-2xl md:text-3xl font-semibold py-4 text-[#0b3231]">
        Description
      </p>
      <p className="text-lg md:text-xl text-gray-600 [word-spacing:0.3rem] py-3 leading-7 md:leading-9">
        UX design refers to the term “user experience design”, while UI
        stands for “user interface design”. Both elements are crucial to a
        product and work closely together. But despite their professional
        relationship, the roles themselves are quite different, referring
        to very different aspects of the product development process and
        the design discipline.
      </p>
      <p className="text-lg md:text-xl text-gray-600 [word-spacing:0.3rem] py-3 leading-7 md:leading-9">
        In relation to websites and apps, UI design considers the look,
        feel, and interactivity of the product. It’s all about making sure
        that the user interface of a product is as intuitive as possible,
        and that means carefully considering each and every visual,
        interactive element the user might encounter.
      </p>
    </div>
    <div>
      <p className="text-2xl md:text-3xl font-semibold py-4 text-[#0b3231]">
        Service Process
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-10 gap-y-6">
        <div>
          <div className="flex gap-4 md:gap-6 items-center group">
            <span className="text-3xl md:text-4xl font-bold text-gray-200 group-hover:text-gray-600 duration-500">
              01
            </span>
            <h3 className="text-base md:text-lg font-bold text-[#0b3231]">
              Creative Analysis
            </h3>
          </div>
          <p className="text-lg md:text-xl text-gray-600 py-3 leading-7 md:leading-9">
            Creative analysis is important. It is common for marketers to
            measure campaign performance at a superficial level. But to
            fully understand it
          </p>
        </div>
        <div>
          <div className="flex gap-4 md:gap-6 items-center group">
            <span className="text-3xl md:text-4xl font-bold text-gray-200 group-hover:text-gray-600 duration-500">
              02
            </span>
            <h3 className="text-base md:text-lg font-bold text-[#0b3231]">
              Design & Sketches
            </h3>
          </div>
          <p className="text-lg md:text-xl text-gray-600 py-3 leading-7 md:leading-9">
            A design sketch is a graphical sketched representation of a
            design plan. A design sketch, see example figure, is a
            visualization
          </p>
        </div>
        <div>
          <div className="flex gap-4 md:gap-6 items-center group">
            <span className="text-3xl md:text-4xl font-bold text-gray-200 group-hover:text-gray-600 duration-500">
              03
            </span>
            <h3 className="text-base md:text-lg font-bold text-[#0b3231]">
              Prototype & Wireframing
            </h3>
          </div>
          <p className="text-lg md:text-xl text-gray-600 py-3 leading-7 md:leading-9">
            A prototype is a barebones, relatively simple working model of
            an app or webpage. They are typically the next step in the
            product design.
          </p>
        </div>
        <div>
          <div className="flex gap-4 md:gap-6 items-center group">
            <span className="text-3xl md:text-4xl font-bold text-gray-200 group-hover:text-gray-600 duration-500">
              04
            </span>
            <h3 className="text-base md:text-lg font-bold text-[#0b3231]">
              Delivery & Deploy
            </h3>
          </div>
          <p className="text-lg md:text-xl text-gray-600 py-3 leading-7 md:leading-9">
            Continuous delivery is an extension of continuous integration
            since it automatically deploys all to a testing and/or
            production
          </p>
        </div>
      </div>
      <div>
        <p className="text-2xl md:text-3xl font-semibold py-4 text-[#0b3231]">
          Service Outcome
        </p>
        <div className="flex flex-col gap-3">
          <p className="flex gap-2 text-lg md:text-xl text-gray-500 items-center">
            <Check className="text-[#0b3231]" />
            Excepteur sint occaecat cupidatat a deserunt mollit anim id
            est laborum.
          </p>
          <p className="flex gap-2 text-lg md:text-xl text-gray-500 items-center">
            <Check className="text-[#0b3231]" />
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum.
          </p>
          <p className="flex gap-2 text-lg md:text-xl text-gray-500 items-center">
            <Check className="text-[#0b3231]" />
            accusantium doloremque laudantium, totam rem aperiam, eaque
            ipsa quae ab illo
          </p>
          <p className="flex gap-2 text-lg md:text-xl text-gray-500 items-center">
            <Check className="text-[#0b3231]" />
            inventore veritatis et quasi architecto beatae vitae dicta
            sunt explicabo.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-12 py-12">
          <img
            src="https://html.kodesolution.com/2025/consultez-html-v2/images/resource/service-details-2.jpg"
            alt=""
            className="w-full"
          />
          <img
            src="https://html.kodesolution.com/2025/consultez-html-v2/images/resource/service-details-3.jpg"
            alt=""
            className="w-full"
          />
        </div>
        <div className="w-full mx-auto space-y-4 pb-8 md:pb-32">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="bg-[#f5f4f5] shadow">
              <button
                onClick={() => toggle(faq.id)}
                className="w-full flex justify-between items-center px-4 md:px-6 py-5 text-left"
              >
                <span className="font-semibold text-gray-700 text-sm md:text-base">
                  {index + 1}. {faq.question}
                </span>
                <span className="text-xl md:text-2xl font-bold text-black">
                  {openId === faq.id ? "−" : "+"}
                </span>
              </button>
              {openId === faq.id && (
                <div className="px-4 md:px-6 pb-6 text-gray-500 leading-relaxed text-sm md:text-base">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  {/* Right side */}
  <div className="w-full md:w-[30%]">
    <div className="bg-[#f2f3f1] px-6 md:px-12 py-10 text-black w-full">
      <p className="text-xl md:text-2xl font-semibold text-[#0b3231] py-3 relative">
        <div className="absolute bg-[#c6d936] w-16 md:w-22 h-[1.5px] bottom-3" />
        More Services
      </p>
      <div className="flex flex-col gap-8 my-3">
        <div className="flex justify-between group h-6 text-base md:text-[18px] font-semibold text-[#0b3231]">
          Web Development
          <LuArrowRight className="group-hover:text-2xl md:group-hover:text-3xl duration-300 group-hover:-rotate-45 group-hover:-mt-2" />
        </div>
        <div className="flex justify-between group h-6 text-base md:text-[18px] font-semibold text-[#0b3231]">
          UI/UX Design
          <LuArrowRight className="group-hover:text-2xl md:group-hover:text-3xl duration-300 group-hover:-rotate-45 group-hover:-mt-2" />
        </div>
        <div className="flex justify-between group h-6 text-base md:text-[18px] font-semibold text-[#0b3231]">
          Digital Marketing
          <LuArrowRight className="group-hover:text-2xl md:group-hover:text-3xl duration-300 group-hover:-rotate-45 group-hover:-mt-2" />
        </div>
        <div className="flex justify-between group h-6 text-base md:text-[18px] font-semibold text-[#0b3231]">
          Product Design
          <LuArrowRight className="group-hover:text-2xl md:group-hover:text-3xl duration-300 group-hover:-rotate-45 group-hover:-mt-2" />
        </div>
        <div className="flex justify-between group h-6 text-base md:text-[18px] font-semibold text-[#0b3231]">
          Branding & Illustration
          <LuArrowRight className="group-hover:text-2xl md:group-hover:text-3xl duration-300 group-hover:-rotate-45 group-hover:-mt-2" />
        </div>
        <div className="flex justify-between group h-6 text-base md:text-[18px] font-semibold text-[#0b3231]">
          Mobile Solutions
          <LuArrowRight className="group-hover:text-2xl md:group-hover:text-3xl duration-300 group-hover:-rotate-45 group-hover:-mt-2" />
        </div>
        <div className="flex justify-between group h-6 text-base md:text-[18px] font-semibold text-[#0b3231]">
          App Development
          <LuArrowRight className="group-hover:text-2xl md:group-hover:text-3xl duration-300 group-hover:-rotate-45 group-hover:-mt-2" />
        </div>
      </div>
    </div>
    <div className="bg-[#f2f3f1] px-6 md:px-12 py-10 text-black w-full my-10">
      <p className="text-xl md:text-2xl font-semibold text-[#0b3231] py-3 relative">
        <div className="absolute bg-[#c6d936] w-16 md:w-22 h-[1.5px] bottom-3" />
        Contact With Us
      </p>
      <p className="text-base md:text-[18px] font-semibold text-[#0b3231] py-3">
        New South Head Rd, Double Bay
      </p>
      <p className="text-base md:text-[18px] font-semibold text-[#0b3231] py-3">
        2028, New York
      </p>
      <p className="text-base md:text-[18px] font-semibold text-[#0b3231] py-3">
        [email protected]
      </p>
      <p className="text-base md:text-[18px] font-semibold text-[#0b3231] py-3">
        +1300 877 503
      </p>
    </div>
    <div className="bg-[#f2f3f1] px-6 md:px-12 py-10 text-black w-full my-10">
      <p className="text-xl md:text-2xl font-semibold text-[#0b3231] py-3 relative">
        <div className="absolute bg-[#c6d936] w-16 md:w-22 h-[1.5px] bottom-3" />
        Contact Us
      </p>
      <input
        type="text"
        className="w-full h-10 bg-white placeholder:p-5 outline-0 rounded my-3 text-sm md:text-base"
        placeholder="Your Name"
      />
      <input
        type="email"
        className="w-full h-10 bg-white placeholder:p-5 outline-0 rounded my-3 text-sm md:text-base"
        placeholder="Email Address"
      />
      <textarea
        className="w-full h-32 bg-white placeholder:p-5 outline-0 rounded my-3 text-sm md:text-base resize-none"
        placeholder="Your Message"
      />
      <Button
        text="Send Message"
        bgColor="#0b3231"
        textColor="white"
        rounded=""
        hoverBg="white"
        hoverOpacity="0.2"
      />
    </div>
  </div>
</div>
    </div>
  );
};

export default ServiceDetails;
