import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import { FaStar } from "react-icons/fa6";
import { BiSolidQuoteAltRight } from "react-icons/bi";

const Section10 = () => {
  const swiperRef = useRef(null);

  const data = [
    {
      img: "https://html.kodesolution.com/2025/consultez-html-v2/images/testimonial/testimonial-image1.jpg",
      name: "Jacob Jones / ",
      title: "Business Owner",
      description:
        "Ascend the mountain not to plant your flag, but to embrace the challenge, savour the journey, and marvel at the view. Climb to experience the world, not for the world to notice you. This is why they stand out with exceptional",
    },
    {
      img: "https://html.kodesolution.com/2025/consultez-html-v2/images/testimonial/testimonial-image2.jpg",
      name: "Dianne Russell / ",
      title: "CEO & Founder",
      description:
        "Ascend the mountain not to plant your flag, but to embrace the challenge, savour the journey, and marvel at the view. Climb to experience the world, not for the world to notice you. This is why they stand out with exceptional",
    },
  ];

  return (
    <div className="w-full bg-[#f7f7f7] px-4 sm:px-6 lg:p-10 md:py-20 py-10">
      <div className="shadow-xl w-full bg-white relative flex items-center px-6 sm:px-10 lg:px-16 py-16 lg:py-30">

        <img
          src="https://html.kodesolution.com/2025/consultez-html-v2/images/shape/testimonial-shape.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* SLIDER */}
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className="w-full z-10"
          loop={true}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row items-center lg:gap-3 gap-2 group">

                {/* LEFT */}
                <div className="flex flex-col items-center lg:items-start lg:w-[20%] relative ">
                  <div className="bg-[#c6d936] w-16 h-16 lg:w-20 lg:h-20 rounded-full absolute right-0 lg:right- top-0 ">
                    <BiSolidQuoteAltRight className="group-hover:text-2xl group-hover:mt-7 transition-all  text-3xl lg:text-4xl text-green-900 m-auto mt-5" />
                  </div>
                  {/* <div className="w-[170px] h-[170px] sm:w-[200px] sm:h-[200px] lg:w-[220px] lg:h-[220px] rounded-full absolute bg-white/20 inset-0 "/> */}
                  <img
                    src={item.img}
                    className="w-[170px] h-[170px] sm:w-[200px] sm:h-[200px] lg:w-[220px] lg:h-[220px] rounded-full object-cover"
                  />

                  <div className="mt-5 flex gap-1 border border-gray-800/20 text-orange-400 px-5 py-2 rounded-full lg:ml-10">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                  </div>
                </div>

                {/* RIGHT */}
                <div className="lg:w-[73%] text-center lg:text-left px-0 lg:px-10">
                  <p className="text-lg sm:text-xl lg:text-[26px] font-semibold text-gray-600 mb-6">
                    {item.description}
                  </p>

                  <div className="w-full h-px bg-gray-600/20" />

                  <h3 className="text-xl sm:text-2xl font-bold mt-8">
                    {item.name}
                    <span className="text-gray-500 font-normal text-lg sm:text-xl">
                      {item.title}
                    </span>
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* CUSTOM NAVIGATION – DESKTOP ONLY */}
        <div className="hidden lg:flex absolute lg:bottom-20 lg:right-28 gap-4 lg:z-20">
          <button
            onClick={() => swiperRef.current.slidePrev()}
            className="w-10 h-10 rounded-full bg-[#f2f2f2] flex items-center justify-center hover:bg-[#c6d936] transition"
          >
            <TiArrowLeftThick />
          </button>

          <button
            onClick={() => swiperRef.current.slideNext()}
            className="w-10 h-10 rounded-full bg-[#f2f2f2] flex items-center justify-center hover:bg-[#c6d936] transition"
          >
            <TiArrowRightThick />
          </button>
        </div>

      </div>
    </div>
  );
};

export default Section10;
