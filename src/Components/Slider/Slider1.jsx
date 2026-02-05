import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { FiArrowUpRight } from "react-icons/fi";
import { AiOutlineNotification } from "react-icons/ai";
import { MdOutlineStackedLineChart } from "react-icons/md";
import { BsBarChart } from "react-icons/bs";

const Slider1 = () => {
  const serviceData = [
    {
      id: "01",
      title: "Market Research",
      icon: <BsBarChart className="text-7xl text-[#c6d936] double-flip" />,
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
      shape:
        "https://html.kodesolution.com/2025/consultez-html-v2/images/shape/service-item-shape.png",
      image:
        "https://html.kodesolution.com/2025/consultez-html-v2/images/service/service-image1.jpg",
    },
    {
      id: "02",
      title: "Financial Consulting",
      icon: <AiOutlineNotification className="text-7xl text-[#c6d936] double-flip" />,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      shape:
        "https://html.kodesolution.com/2025/consultez-html-v2/images/shape/service-item-shape.png",
      image:
        "https://html.kodesolution.com/2025/consultez-html-v2/images/service/service-image2.jpg",
    },
    {
      id: "03",
      title: "Branding Consulting",
      icon: <MdOutlineStackedLineChart className="text-7xl text-[#c6d936] double-flip" />,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      shape:
        "https://html.kodesolution.com/2025/consultez-html-v2/images/shape/service-item-shape.png",
      image:
        "https://html.kodesolution.com/2025/consultez-html-v2/images/service/service-image3.jpg",
    },
  ];

  return (
    <Swiper
      loop
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      spaceBetween={30}
      modules={[Autoplay]}
      breakpoints={{
        0: { slidesPerView: 1 },
        640: { slidesPerView: 1 },
        768: { slidesPerView: 1.5 },
        1024: { slidesPerView: 1.6 },
        1280: { slidesPerView: 2.3 },
      }}
      className="mySwiper"
    >
      {[...serviceData, ...serviceData, ...serviceData].map((item) => (
        <SwiperSlide key={item.id}>
          <div
            className="
              w-full sm:w-[90%] md:w-[520px] lg:w-[560px] xl:w-[580px]
              h-auto md:h-[520px] lg:h-[560px] xl:h-[580px]
              group
            "
          >
            <div className="flex flex-col md:flex-row h-full">

              {/* LEFT */}
              <div className="w-full md:w-[60%] bg-[#102930] md:p-10 relative p-2">
                {item.icon}

                <img src={item.shape} alt="" className="ml-10 hidden lg:block" />

                <div className="mt-8">
                  <p className="text-[#c6d936] text-xl font-bold mb-3">
                    {item.id}
                  </p>
                  <h1 className="text-white font-bold text-2xl mb-3">
                    {item.title}
                  </h1>
                  <p className="text-[#d9d9d9]">{item.desc}</p>
                </div>
              </div>

              {/* RIGHT */}
              <div className="w-full md:w-[40%] relative h-[300px] md:h-full">
                <div
                  className="hidden md:flex absolute bg-[#1a4137] group-hover:bg-[#c6d936]
                  duration-500 w-[75px] h-[165px] rounded-full z-10
                  top-1/2 -translate-y-1/2 -left-9 items-center justify-center"
                >
                  <FiArrowUpRight className="group-hover:text-black text-white text-xl" />
                </div>

                <div className="w-full h-full overflow-hidden">
                  <img
                    src={item.image}
                    alt=""
                    className="transition-all duration-500 group-hover:scale-110 group-hover:grayscale object-cover h-full w-full"
                  />
                </div>
              </div>

            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider1;
