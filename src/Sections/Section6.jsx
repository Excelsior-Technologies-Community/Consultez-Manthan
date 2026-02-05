import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const data = [
  {
    img: "https://html.kodesolution.com/2025/consultez-html-v2/images/case/case-image1.jpg",
    namee: "Cyber Security",
    title1: "Revolutionizing",
    title2: "Brand Strategy",
  },
  {
    img: "https://html.kodesolution.com/2025/consultez-html-v2/images/case/case-image2.jpg",
    namee: "IT Solution",
    title1: "Transforming",
    title2: "Legacy Systems",
  },
  {
    img: "https://html.kodesolution.com/2025/consultez-html-v2/images/case/case-image3.jpg",
    namee: "Business Consultation",
    title1: "Business Strategy to",
    title2: "Cut Costs by 30%",
  },
  {
    img: "https://html.kodesolution.com/2025/consultez-html-v2/images/case/case-image4.jpg",
    namee: "Digital Agency",
    title1: "Technology and artificial",
    title2: "Maintenance",
  },
  {
    img: "https://html.kodesolution.com/2025/consultez-html-v2/images/case/case-image2.jpg",
    namee: "IT Solution",
    title1: "Transforming",
    title2: "Legacy Systems",
  },
];

const Section6 = () => {
  return (
    <div className="w-[96%] mx-auto h-[580px] bg-white text-center pt-28">
      <div>
        <span className="inline-block bg-[#c6d936] text-black px-6 sm:px-8 py-2 rounded-full text-xs sm:text-sm font-semibold uppercase">
          Case study
        </span>

        <h1
          className="
          max-w-full sm:max-w-[720px] mx-auto
          text-[#141414]
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl
          font-bold
          leading-tight sm:leading-snug lg:leading-[1.2]
          mt-4 sm:mt-5
        ">
          Showcasing Project & Solutions For Clients Case Study.
        </h1>
      </div>

      {/* SIMPLE AUTO SLIDER */}
      <Swiper
        modules={[Autoplay]}
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1.5,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        className="mt-16">
        {[...data, ...data].map((item, index) => (
          <SwiperSlide key={index}>
            {/* YOUR CARD – NOT TOUCHED */}
            <div className="relative w-[340px] mx-auto rounded-2xl overflow-hidden group">
              <img
                src={item.img}
                alt=""
                className="w-full h-[380px] object-cover rounded-2xl"
              />

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] bg-white/95 rounded-xl px-8 py-8 shadow-md transition-all duration-500 group-hover:opacity-0 group-hover:translate-y-5">
                <p className="font-semibold text-[16px] text-[#1a3841]">
                  {item.namee}
                </p>
                <p className="text-[25px] font-semibold text-[#051b05] leading-tight">
                  {item.title1}
                  <br />
                  {item.title2}
                </p>
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl bg-gradient-to-t from-[#0d2f2b]/90 via-[#0d2f2b]/30 to-transparent">
                <div className="relative pt-100">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full bg-white flex items-center justify-center z-10 hover:mt-1 duration-300 hover:rotate-45">
                    <FiArrowUpRight className="text-2xl text-[#0f2e0f]" />
                  </div>
                  <div className="absolute mt-1 w-24 h-24 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full z-0 bg-[#c6d936]" />
                </div>

                <div className="absolute bottom-6 left-8 text-white">
                  <p className="font-semibold text-[16px] text-start">
                    {item.namee}
                  </p>
                  <p className="text-[25px] font-semibold leading-tight">
                    {item.title1}
                    <br />
                    {item.title2}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Section6;
