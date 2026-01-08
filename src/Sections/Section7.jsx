import React, { useState } from "react";
import { FiChevronRight, FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";

const items = [
  {
    title: "Ensure Business Continuity",
    desc: "Drive innovation faster with world-class tech teams. We'll connect you with a fully remote team.",
  },
  {
    title: "Browser Safety & Protection",
    desc: "Protect your systems and users with modern security solutions and proactive monitoring.",
  },
  {
    title: "Cutting-Edge IT Solutions",
    desc: "Leverage scalable IT solutions designed to grow with your business needs.",
  },
  {
    title: "Expert Guidance & Assistance",
    desc: "Get expert consulting and hands-on support from experienced professionals.",
  },
];

const Section7 = () => {
  const [active, setActive] = useState(null);

  return (
    <div className="w-full bg-[#f4f4f4] py-20 md:pt-60">
      <div className=" mx-auto flex flex-col lg:flex-row items-start gap-12 mt-20 md:mt-0">
        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1.0 }}
          className="w-full lg:w-1/2">
          <img
            src="https://html.kodesolution.com/2025/consultez-html-v2/images/strategy/strategy-image.jpg"
            alt=""
            className="w-full h-auto  object-cover"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <div className="w-full lg:w-1/2 relative overflow-hidden">
          <motion.img
            src="https://html.kodesolution.com/2025/consultez-html-v2/images/shape/stategy-globe.png"
            alt=""
            className="absolute -right-70 w-[70%] top-1 hidden md:block z-10"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          />
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1.0 }}
            className="inline-block bg-[#c6d936] px-6 py-2 rounded-full text-sm font-semibold uppercase mb-6 ml-3">
            Business Strategy
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1.0 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f2e0f] leading-tight mb-10 ml-3">
            Driving Success Through <br />
            Tailored Solutions And <br />
            Proven Expertise.
          </motion.h2>

          {/* Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1.0 }}
            className="space-y-4 lg:w-[80%] bg-[#f4f4f4] ">
            {items.map((item, index) => {
              const isOpen = active === index;

              return (
                <div
                  key={index}
                  onClick={() => setActive(active === index ? null : index)}
                  className={`cursor-pointer  transition-all duration-500  ${
                    isOpen ? "bg-white p-6 " : "bg-[#f4f4f4] p-4"
                  }`}>
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg md:text-xl font-semibold">
                      {item.title}
                    </h3>

                    {isOpen ? (
                      <FiChevronDown className="text-xl" />
                    ) : (
                      <FiChevronRight className="text-xl" />
                    )}
                  </div>

                  {isOpen && (
                    <p className="mt-4 text-gray-600 text-sm md:text-base">
                      {item.desc}
                    </p>
                  )}
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Section7;
