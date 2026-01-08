import React from "react";
import Button from "../Components/Small Components/Button";
import Slider1 from "../Components/Slider/Slider1";
import { motion } from "framer-motion";

const Sectino2 = () => {
  return (
    <>
      <div
        className="
          w-full 
          h-auto md:h-[1100px]
          flex flex-col md:flex-row
          relative
        ">
        {/* LEFT SIDE */}
        <div
          className="
            w-full lg:w-[60%]   /* FIXED: full width on mobile + tablet */
            bg-[#f1f1f2]
            bg-[url('https://html.kodesolution.com/2025/consultez-html-v2/images/shape/service-shape.png')]
            bg-no-repeat bg-cover bg-top
            p-5 md:pl-20 md:pr-20
            pt-10 md:pt-30
          ">
          <div className="uppercase w-fit mx-auto md:mx-0 px-6 py-2 bg-[#c6d936] rounded-full text-[14px] font-medium">
            Service area
          </div>

          <motion.h1
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.0,
              delay: 0.15,
              ease: [0.25, 0.8, 0.25, 1],
            }}
            className="text-[28px] sm:text-[35px] md:text-[52px] lg:pr-20 font-semibold leading-snug text-[#2b2f32] mt-4">
            Empowering Your Brand Innovative Solutions
          </motion.h1>

          {/* SLIDER */}
          <div className="mt-10 lg:mt-18 lg:absolute lg:w-[93%]">
            <Slider1 />
          </div>
        </div>

        {/* RIGHT SIDE — visible only on desktops */}
        <div
          className="
            hidden lg:block
            w-[40%]
            bg-[#1a4137]
            bg-[url('https://html.kodesolution.com/2025/consultez-html-v2/images/shape/service-line.png')]
            bg-no-repeat bg-contain bg-right
            pr-10 pt-20
          ">
          <div className="pl-80 pt-20 text-left">
            <Button text="All Service" rounded="sm" size="large" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Sectino2;
