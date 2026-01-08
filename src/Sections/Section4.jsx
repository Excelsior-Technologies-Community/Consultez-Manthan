import React from "react";
import Button from "../Components/Small Components/Button";
import { motion } from "framer-motion";

const ProgressRing = ({ value }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (value / 100) * circumference;

  return (
    <div className="relative w-28 h-28">
      <svg className="w-28 h-28 -rotate-90">
        <circle
          cx="56"
          cy="56"
          r={radius}
          stroke="#d3df5a"
          strokeWidth="10"
          fill="none"
          className="opacity-40"
        />
        <circle
          cx="56"
          cy="56"
          r={radius}
          stroke="#c6d936"
          strokeWidth="10"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>

      <span className="absolute inset-0 flex items-center justify-center font-bold text-xl">
        {value}%
      </span>
    </div>
  );
};

const Section4 = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24 text-white"
      style={{
        backgroundImage:
          "url('https://html.kodesolution.com/2025/consultez-html-v2/images/bg/growth-bg.jpg')",
      }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0b3a35]/60"></div>

      {/* Shape Image on Left */}
      <motion.img
        src="https://html.kodesolution.com/2025/consultez-html-v2/images/shape/growth-shape.png"
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[150px] h-[500px] opacity-90 hidden md:block"
        alt="shape"
        animate={{ y: [0, -15, 0] }} // smooth float effect
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1300px] w-[92%] mx-auto">
        {/* Top Badge */}
        <span className="inline-block bg-[#c6d936] text-black px-6 py-2 rounded-full text-sm font-semibold">
          GROWTH RATE
        </span>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1.0 }}
          className="md:flex md:justify-between items-center mb-10 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-5 mb-12">
            Building Connections For Grow <br />
            Limitless Opportunities.
          </h2>
          <Button
            text="Discover More"
            bgColor="#ffffff"
            size="large"
            rounded="none"
            textColor="#170E0E"
            icon={false}
            hoverBg="#B3B1B1"
            hoverOpacity={0.15}
          />
        </motion.div>

        <div className="w-full h-0.5 bg-gray-200/20" />

        {/* Progress Row */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1.0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-10">
          {/* Item 1 */}
          <div className="flex items-start gap-6">
            <ProgressRing value={90} />
            <div>
              <h3 className="text-xl font-semibold">Scalable Solutions</h3>
              <p className="text-gray-200 text-sm mt-2">
                End to end fiber optic cable connectivity for stable
              </p>
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex items-start gap-6">
            <ProgressRing value={95} />
            <div>
              <h3 className="text-xl font-semibold">Automation Features</h3>
              <p className="text-gray-200 text-sm mt-2">
                End to end fiber optic cable connectivity for stable
              </p>
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex items-start gap-6">
            <ProgressRing value={75} />
            <div>
              <h3 className="text-xl font-semibold">24/7 Support</h3>
              <p className="text-gray-200 text-sm mt-2">
                End to end fiber optic cable connectivity for stable
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Section4;
