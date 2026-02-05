import React from "react";
import Button from "../Components/Small Components/Button";
import { CgProfile } from "react-icons/cg";
import { BiConversation } from "react-icons/bi";
import { FaCircleRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Section11 = () => {
  const data = [
    {
      name: "Devoid H.",
      title: "Complete Guide Business Insurance Perfect",
      img: "https://html.kodesolution.com/2025/consultez-html-v2/images/blog/blog-image1.jpg",
    },
    {
      name: "Robert Q.",
      title: "How To Scale Business Without Losing Quantity",
      img: "https://html.kodesolution.com/2025/consultez-html-v2/images/blog/blog-image2.jpg",
    },
    {
      name: "Beckhum H.",
      title: "Complete Guide Business Insurance Perfect",
      img: "https://html.kodesolution.com/2025/consultez-html-v2/images/blog/blog-image3.jpg",
    },
    {
      name: "Devoid H.",
      title: "Complete Guide Business Insurance Perfect",
      img: "https://html.kodesolution.com/2025/consultez-html-v2/images/blog/blog-image1.jpg",
    },
    {
      name: "Robert Q.",
      title: "How To Scale Business Without Losing Quantity",
      img: "https://html.kodesolution.com/2025/consultez-html-v2/images/blog/blog-image2.jpg",
    },
    {
      name: "Beckhum H.",
      title: "Complete Guide Business Insurance Perfect",
      img: "https://html.kodesolution.com/2025/consultez-html-v2/images/blog/blog-image3.jpg",
    },
    {
      name: "Devoid H.",
      title: "Complete Guide Business Insurance Perfect",
      img: "https://html.kodesolution.com/2025/consultez-html-v2/images/blog/blog-image1.jpg",
    },
  ];

  return (
    <>
      <div className="w-full min-h-[600px] bg-[#f7f7f7] py-20">
        <div className="w-[87%] mx-auto flex flex-col">
          <div className="bg-[#c6d936] w-38 text-center py-1 uppercase font-semibold text-green-950 rounded-full text-[14px] mb-3">
            New & Blogs
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center lg:mb-10 mb-3">
            <h1 className="text-black text-2xl md:text-4xl font-bold mb-4 lg:mb-0">
              Our News & Blogs
            </h1>
            <Button
              rounded="none"
              bgColor="#1a4137"
              text="ALL NEWS & BLOGS"
              textColor="white"
              hoverBg="gray"
            />
          </div>
        </div>

        <div className="w-[87%] h-[325px]  lg:h-[520px] mx-auto">
          <Swiper
            modules={[]}
            slidesPerView={3}
            spaceBetween={30}
            pagination={{ clickable: false }}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
            className="pb-20">
            {[...data, ...data].map((item, index) => (
              <SwiperSlide key={index}>
                <div className="h-[300px] md:h-[520px] relative group overflow-visible">
                  <div className="w-full overflow-hidden">
                    <img
                      src={item.img}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-110 duration-500 group-hover:grayscale-100"
                    />
                  </div>
                  <div className="absolute hidden md:block lg:w-85 max-w-[250px] w-[290px] md:max-w-[295px] lg:max-w-[350px] shadow-xl px-3 md:px-5 py-4 md:py-7 -bottom-5 md:bottom-28 lg:bottom-10  rounded-2xl bg-white ml-3 md:ml-3 lg:ml-10 text-green-950 group-hover:text-white group-hover:bg-[#163839] duration-500">
                    <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
                      <div className="flex gap-1 items-center">
                        <CgProfile className="text-lg md:text-xl" /> {item.name}
                      </div>
                      <div className="flex gap-1 items-center">
                        <BiConversation className="text-lg md:text-xl" />
                        Comments (03)
                      </div>
                    </div>

                    <h1 className="text-lg md:text-xl lg:text-2xl font-bold mt-3">
                      {item.title}
                    </h1>

                    <div className="flex items-center gap-1.5 mt-5 group/one w-auto">
                      Read More
                      <FaCircleRight className="group-hover/one:ml-1.5 duration-300 mt-0.5" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Section11;

{
  /* <div className="absolute w-[85%] shadow-xl px-5 py-7 -bottom-24 rounded-2xl bg-white ml-8 text-green-950 group-hover:text-white group-hover:bg-[#163839] duration-500">
      <div className="flex gap-3 items-center">
        <div className="flex gap-1 items-center">
          <CgProfile className="text-xl" /> {item.name}
        </div>
        <div className="flex gap-1 items-center">
          <BiConversation className="text-xl" />
          Comments (03)
        </div>
      </div>

      <h1 className="text-2xl font-bold mt-3">
        {item.title}
      </h1>

      <div className="flex items-center gap-1.5 mt-5 group/one w-[35%]">
        Read More
        <FaCircleRight className="group-hover/one:ml-1.5 duration-300 mt-0.5" />
      </div>
    </div> */
}
