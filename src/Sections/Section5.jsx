import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Strategic Growth",
    text: "Your Source for Market Trends & Business Intelligence",
  },
  {
    id: "02",
    title: "Fuel Innovation",
    text: "Sparking Innovation, Shaping Tomorrow successful",
  },
  {
    id: "03",
    title: "Financial Planning",
    text: "Helping You Stay on Track with Accurate Estimates",
  },
  {
    id: "04",
    title: "Sustainable Success",
    text: "Amazing Support! with lot of ele demos to choose from top",
  },
];

const Section5 = () => {
  return (
    <section className="relative py-20 bg-[#f5f5f5]">
      {/* Left Shape Image */}
      <motion.img
        src="https://html.kodesolution.com/2025/consultez-html-v2/images/shape/dual-circle.png"
        alt=""
        className="absolute -left-30 bottom-8 w-[250px] h-[430px] opacity-60 pointer-events-none"
        animate={{ x: [0, -15, 0] }} // smooth float effect
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-[1300px] w-[92%] mx-auto text-center">
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1.0 }}
          className="inline-block bg-[#c6d936] text-black px-6 py-2 rounded-full text-sm font-semibold">
          HOW IT WORKS
        </motion.span>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mt-5 mb-16 text-[#0f2e0f]">
          Connect, Collaborate, & Create <br />
          Limitless Opportunities.
        </h2>

        {/* Steps Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1.0 }}
          className="grid grid-cols-1 md:grid-cols-4 border border-[#d6e0d6] py-10 rounded-3xl overflow-hidden">
          {steps.map((step, i) => (
            <div
              key={i}
              className="p-10 border-r last:border-r-0 border-[#d6e0d6] text-left group transition">
              {/* Number */}
              <div
                className="text-[70px] font-bold mb-4 leading-none
                              text-[#cad9d8] stroke-[#30504d] stroke-[1.5px]
                              transition-all duration-300 group-hover:text-[#113334] group-hover:stroke-0">
                {step.id}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#0f2e0f] mb-3 group-hover:text-[#0f2e0f]">
                {step.title}
              </h3>

              {/* Text */}
              <p className="text-gray-600 text-[15px]">{step.text}</p>
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1.0 }}
          className="text-[20px] text-[#0f2e0f] font-bold mt-15">
          Embrace Innovation, Adapt Quickly, and Lead with Confidence.{" "}
          <span className="underline">Consult Now</span>{" "}
        </motion.div>
      </div>
    </section>
  );
};

export default Section5;
