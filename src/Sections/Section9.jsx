import React, { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  "How Can Business Consulting Benefit My Company?",
  "What Are the Costs of Your Consulting Services?",
  "How Do You Measure the Success of a Project?",
  "Do You Provide Remote Consulting Services?",
  "What Industries Do You Specialize In?",
];

const answer =
  "It is widely recognized that a reader's attention can be diverted by the content layout of a page. Many desktop publishing software and website editors now use Lorem Ipsum as their default placeholder text.";

const Section9 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full flex flex-col lg:flex-row min-h-screen group">
      {/* LEFT IMAGE */}
      <div className="w-full lg:w-[30%] h-[400px] lg:h-auto">
        <img
          src="https://html.kodesolution.com/2025/consultez-html-v2/images/faq/faq-image1.jpg"
          alt="FAQ"
          className="w-full h-full object-cover grayscale-100 duration-500 group-hover:grayscale-0"
        />
      </div>

      {/* RIGHT WRAPPER */}
      <div className="w-full lg:w-[70%] bg-[#163839] relative flex flex-col lg:flex-row px-6 sm:px-10 lg:px-16 md:py-16 md:pt-28">
        {/* MAP BACKGROUND */}
        <div
          className="absolute inset-0 bg-no-repeat bg-center bg-contain opacity-100 pointer-events-none"
          style={{
            backgroundImage:
              "url('https://html.kodesolution.com/2025/consultez-html-v2/images/shape/faq-map.png')",
          }}
        />

        {/* MIDDLE CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1.0 }}
          className="relative z-10 w-full lg:w-[45%] mb-12 lg:mb-0 md:pt-10">
          <span className="inline-block bg-[#c6d936] text-black px-10 py-1 rounded-full text-sm font-semibold lg:my-6 my-3 m ">
            FAQ’S
          </span>

          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Frequently <br /> Asked Questions
          </h2>

          <p className="text-gray-300 mb-10 max-w-md">
            Consultez is the hub for early adopters and innovation enthusiasts,
            offering vibrant, imaginative technology before it becomes
            mainstream.
          </p>

          <button className="bg-white text-black px-8 py-3 font-medium hover:bg-[#c6d936] duration-500 transition">
            Get A Quote
          </button>
        </motion.div>

        {/* RIGHT ACCORDION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1.0 }}
          className="relative z-10 w-full lg:w-[55%] lg:pl-10 pb-3 md:pb-0">
          <div className="space-y-4">
            {faqs.map((question, index) => {
              const isOpen = activeIndex === index;

              return (
                <div
                  key={index}
                  className={`rounded-lg overflow-hidden transition ${
                    isOpen ? "bg-[#0b6f63]" : "bg-[#000]/35"
                  }`}>
                  {/* QUESTION */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center px-6 py-5 text-white font-medium text-left">
                    {question}
                    <span
                      className={`transform transition-transform duration-300 ${
                        isOpen ? "rotate-90" : ""
                      }`}>
                      ›
                    </span>
                  </button>

                  {/* ANSWER */}
                  <div
                    className={`px-6 text-gray-300 text-sm leading-relaxed transition-all duration-300 ${
                      isOpen
                        ? "max-h-40 pb-5 opacity-100"
                        : "max-h-0 overflow-hidden opacity-0"
                    }`}>
                    {answer}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section9;
