import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import { motion } from "framer-motion";
import { ImQuotesRight } from "react-icons/im";

const Testi = () => {
  return (
    <>
      {/* section 1  */}
      <div
        className="w-full overflow-hidden relative min-h-[200px] md:min-h-[300px] lg:min-h-[400px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://html.kodesolution.com/2025/consultez-html-v2/images/background/page-title-bg.jpg')",
        }}>
        <div className="w-full h-full bg-gradient-to-r from-[#0b3231] to-transparent absolute lg:pl-26 lg:pt-26 pl-4 pt-5 md:pl-10 md:pt-10 z-10">
          <span className="text-3xl md:text-4xl lg:text-6xl text-white font-bold pt pb-5 pt-10 block">
            Testimonial
          </span>
          <h1 className="flex gap-2 items-center text-[#c6d936] text-sm md:text-base font-semibold py-2">
            Home{" "}
            <span className="text-white flex items-center gap-2">
              <FaChevronRight />
              Testimonial
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
      <section className="py-24">
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-[1400px] mx-auto bg-[#163f35] rounded-[48px] px-20 py-24 grid lg:grid-cols-2 gap-10 relative overflow-hidden">
          {/* LEFT CONTENT */}
          <div className="text-white">
            <span className="inline-block bg-[#c6d936] text-black text-xs font-semibold px-5 py-2 rounded-full mb-6">
              TESTIMONIAL
            </span>

            <h2 className="text-5xl font-bold leading-tight mb-8">
              What Our Customers <br /> Say{" "}
              <span className="font-normal">About Us</span>
            </h2>

            <p className="text-white/90 leading-10 mb-10 max-w-xl text-2xl">
              Ascend the mountain not to plant your flag, but to embrace the
              challenge, savour the journey, and marvel at the view. Climb to
              experience the world, not for the world to notice you. This is why
              they stand out journey, and marvel at the view experience the
              world, not to notice
            </p>

            <div className="border-t border-white/20 pt-8 flex items-center justify-between max-w-xl">
              <div>
                <p className="font-semibold">Robert J. Hare</p>
                <p className="text-sm text-white/60">Business Owner</p>
              </div>

              <div className="flex items-center gap-2 bg-[#1f4f44] px-4 py-2 rounded-lg">
                <span className="text-[#22c55e] text-xl">★</span>
                <span className="text-sm">4.3 score, 47 reviews</span>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE CARD */}
          <div className="relative h-[620px] flex justify-center">
            <div className="z-10">
              <img
                src="https://html.kodesolution.com/2025/consultez-html-v2/images/testimonial/testimonial-three-image.png"
                alt="testimonial"
                className="w-[500px]  object-cover rounded-[28px]"
              />

              {/* QUOTE ICON */}
              <div className="absolute -right-3 top-24 w-24 h-24 bg-[#c6d936] rounded-full flex items-center justify-center text-3xl font-bold text-black">
            <ImQuotesRight />
              </div>

              {/* AWESOME WORK TAG */}
              <div className="absolute -bottom-6 right-3 rotate-[-10deg] bg-[#c6d936] text-black font-bold px-25 py-9 rounded-full text-4xl shadow-xl">
                “Awesome Work”
              </div>
            </div>
            <div className="absolute top-25 bg-[#5f7f75] w-[470px] h-[522px] rounded-[36px] z-0"></div>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Testi;
