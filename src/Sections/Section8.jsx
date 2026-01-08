import React from "react";
import { motion } from "framer-motion";
import TeamCard from "../Components/TeamCard";

const Section8 = () => {
  return (
    <div className="w-full min-h-[850px] bg-[#fbfbfe] text-center pt-28 relative">
      <motion.img
        src="https://html.kodesolution.com/2025/consultez-html-v2/images/shape/team-shape.png"
        className="absolute bottom-0"
        animate={{ x: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        alt=""
      />

      <motion.span
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 1.0 }}
        className="inline-block bg-[#c6d936] text-black px-6 py-2 rounded-full text-sm font-semibold uppercase">
        Top Consultant
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 1.0 }}
        className="max-w-[720px] mx-auto text-[#141414] text-4xl font-bold mt-5">
        Enhance Your Experience with Expert Consulting.
      </motion.h1>

      {/* Cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 1.0 }}
        className="w-[87%] mx-auto mt-16 flex justify-between">
        <TeamCard />
      </motion.div>
    </div>
  );
};

export default Section8;
