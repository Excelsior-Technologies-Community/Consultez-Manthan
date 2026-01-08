import React, { useEffect, useState, useRef } from "react";
import Button from "../Components/Small Components/Button";
import { FaStar } from "react-icons/fa";
import { PiLightbulbFilamentLight } from "react-icons/pi";
import { LiaPencilRulerSolid } from "react-icons/lia";
import { delay, motion } from "framer-motion";
import { FaDownLong } from "react-icons/fa6";

const Section1 = () => {
  const images = [
    "https://html.kodesolution.com/2025/consultez-html-v2/images/banner/banner-image1.jpg",
    "https://html.kodesolution.com/2025/consultez-html-v2/images/banner/banner-image2.jpg",
    "https://html.kodesolution.com/2025/consultez-html-v2/images/banner/banner-image3.jpg",
  ];

  const foreground =
    "https://html.kodesolution.com/2025/consultez-html-v2/images/shape/banner-shape.png";

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const nextSectionRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
        setFade(true);
      }, 700);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  const scrollDown = () => {
    nextSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="relative w-full h-[850px] overflow-hidden">
        {/* Background */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
            fade ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${images[index]})` }}
        />

        {/* Foreground texture */}
        <img
          src={foreground}
          className="absolute inset-0 w-full h-full object-cover z-10"
        />

        {/* Green overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b3231] to-transparent z-20" />
        <motion.img
          src="https://html.kodesolution.com/2025/consultez-html-v2/images/shape/banner-arry.png"
          className=" absolute top-70 left-20 z-20"
          animate={{ x: [0, -25, 0] }} // smooth float effect
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1.0 }}
          className="relative z-30 max-w-[700px] px-14 pt-52 text-white text-start">
          <p className="text-[#c6d936] font-semibold uppercase tracking-wider mb-4 underline">
            Growth, Innovation, and Success
          </p>

          <div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight ">Transforming</h1>
            <p className="text-5xl md:text-7xl font-medium leading-tight">
              Business Growth
            </p>
            <p className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              {" "}
              Drive Success
            </p>
          </div>

          <Button
            text="Free Consultation"
            size="large"
            rounded="none"
            icon={false}
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1.0 }}
          className="absolute hidden md:block right-20 top-[68%] w-[380px] text-white z-30">
          <p className="text-2xl leading-relaxed font-medium">
            Take your brand to new heights. Agency offering everything from
            strategy business.
          </p>
        </motion.div>

        {/* SCROLL BUTTON */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 1.0 }}
          onClick={scrollDown}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40 border border-white/40 w-12 h-20 pt-4 rounded-full text-white flex items-center justify-center hover:bg-white/20 transition cursor-pointer ">
          <motion.div
            animate={{ y: [0, -25, 0] }} // smooth float effect
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}>
            <FaDownLong />
          </motion.div>
        </motion.button>
      </div>

      {/* Next Section */}
      <div
        ref={nextSectionRef}
        className="w-full py-30 flex items-center justify-center text-4xl bg-gray-100">
        <div className="w-[87%] mx-auto flex gap-10">
          {/* left side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1.0 }}
            className="hidden md:flex md:w-[48%] relative justify-center">
            {/* Main Image */}
            <div className="w-[510px] h-[620px] p-2 rounded bg-white shadow-2xs">
              <img
                src="https://html.kodesolution.com/2025/consultez-html-v2/images/about/about-image1.jpg"
                alt=""
                className="w-full  rounded transition-all duration-500 hover:grayscale"
              />
            </div>

            {/* Second image */}
            <div className="absolute w-[300px] p-2 rounded bg-white shadow-2xs -bottom-20 right-5">
              <img
                src="https://html.kodesolution.com/2025/consultez-html-v2/images/about/about-image2.jpg"
                alt=""
                className="w-full rounded transition-all duration-500 hover:grayscale"
              />
            </div>

            {/* Badge icon */}
            <motion.img
              src="https://html.kodesolution.com/2025/consultez-html-v2/images/about/about-info.png"
              alt=""
              className="absolute left-40 -bottom-0 w-[210px] rounded shadow-2xs z-10"
              animate={{ x: [0, -15, 0] }} // smooth float effect
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* right side  */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1.0 }}
            className="w-full md:w-[48%] mt-10 md:mt-0 text-center md:text-left">
            <div>
              <div className="uppercase w-fit mx-auto md:mx-0 px-6 py-2 bg-[#c6d936] rounded-full text-[14px] font-medium">
                About Us
              </div>

              <h1 className="text-[28px] sm:text-[35px] md:text-[45px] font-semibold leading-snug text-[#2b2f32] mt-4">
                The Journey Behind Our Business Success
              </h1>

              <p className="text-[16px] sm:text-[18px] mt-5 leading-8 text-[#595b62] max-w-[550px] mx-auto md:mx-0">
                Consultez is the go-to hub for early adopters and innovation
                enthusiasts, offering cutting-edge technology
              </p>

              {/* Feature 1 */}
              <div className="flex flex-col sm:flex-row items-center gap-5 py-4">
                <div className="text-6xl sm:text-7xl">
                  <PiLightbulbFilamentLight className="text-[#2b2f32] double-flip" />
                </div>
                <div className="flex flex-col gap-3">
                  <h2 className="text-[18px] sm:text-[20px] font-medium text-[#2b2f32]">
                    Creative Solutions
                  </h2>
                  <p className="text-[16px] sm:text-[18px] leading-8 text-[#595b62]">
                    In today's competitive business landscape, the need for
                    efficient IT solutions has been more critical.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col sm:flex-row items-center gap-5 py-4">
                <div className="text-6xl sm:text-7xl">
                  <LiaPencilRulerSolid className="text-[#2b2f32] double-flip" />
                </div>
                <div className="flex flex-col gap-3">
                  <h2 className="text-[18px] sm:text-[20px] font-medium text-[#2b2f32]">
                    Creative Solutions
                  </h2>
                  <p className="text-[16px] sm:text-[18px] leading-8 text-[#595b62]">
                    Innovation is the key to staying ahead in a changing world.
                    We harness cutting-edge technology
                  </p>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="mt-5">
              <p className="text-[18px] sm:text-[20px] font-medium text-[#2b2f32]">
                Business Success
              </p>
              <div className="w-full rounded-full h-2 mt-3 bg-gray-300">
                <div className="w-[80%] rounded-full h-2 bg-[#0c6460]"></div>
              </div>
            </div>

            {/* CTA and Founder */}
            <div className="flex flex-col sm:flex-row gap-10 items-center mt-10 justify-center md:justify-start">
              <Button
                text="Find Service"
                bgColor="#1a4137"
                size="large"
                rounded="none"
                textColor="#ffffff"
                icon={false}
                hoverBg="#ffffff"
                hoverOpacity={0.15}
              />

              <div className="flex items-center gap-5">
                <div className="p-0.5 bg-[#c6d936] rounded-full">
                  <img
                    src="https://html.kodesolution.com/2025/consultez-html-v2/images/about/about-user.png"
                    alt=""
                    className="rounded-full"
                  />
                </div>
                <div>
                  <img
                    src="https://html.kodesolution.com/2025/consultez-html-v2/images/about/signature.png"
                    alt=""
                  />
                  <p className="text-[16px] font-medium text-[#2b2f32]">
                    Founder
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Section1;
