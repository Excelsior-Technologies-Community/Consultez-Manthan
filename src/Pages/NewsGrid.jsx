import React from "react";
import Button from "../Components/Small Components/Button";
import { MdOutlinePerson } from "react-icons/md";
import { BsWechat } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa6";

const blogs = [
  {
    img: "https://html.kodesolution.com/2025/consultez-html-v2/images/blog/blog-two-image1.jpg",
    date: "15 December,2025",
    title: "We Focus On The Solutions Not On The Problems",
  },
  {
    img: "https://html.kodesolution.com/2025/consultez-html-v2/images/blog/blog-two-image2.jpg",
    date: "20 December,2025",
    title: "How To Create Viral Content That Drives Sales",
  },
  {
    img: "https://html.kodesolution.com/2025/consultez-html-v2/images/blog/blog-two-image3.jpg",
    date: "31 December,2025",
    title: "How AI Is Changing The Future Of Online Shopping",
  },
  {
    img: "https://html.kodesolution.com/2025/consultez-html-v2/images/blog/blog-two-image3.jpg",
    date: "31 December,2025",
    title: "How AI Is Changing The Future Of Online Shopping",
  },
  {
    img: "https://html.kodesolution.com/2025/consultez-html-v2/images/blog/blog-two-image1.jpg",
    date: "15 December,2025",
    title: "We Focus On The Solutions Not On The Problems",
  },
  {
    img: "https://html.kodesolution.com/2025/consultez-html-v2/images/blog/blog-two-image2.jpg",
    date: "20 December,2025",
    title: "How To Create Viral Content That Drives Sales",
  },
];

const NewsGrid = () => {
  return (
    <div>
      <div
        className="w-full overflow-hidden relative min-h-[200px] md:min-h-[300px] lg:min-h-[400px] bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage:
            "url('https://html.kodesolution.com/2025/consultez-html-v2/images/background/page-title-bg.jpg')",
        }}>
        <div className="w-full h-full bg-gradient-to-r from-[#0b3231] to-transparent absolute lg:pl-26 lg:pt-26 pl-4 pt-5 md:pl-10 md:pt-10 z-10">
          <span className="text-3xl md:text-4xl lg:text-6xl text-white font-bold pt pb-5 pt-10 block">
            News Grid
          </span>
          <h1 className="flex gap-2 items-center text-[#c6d936] text-sm md:text-base font-semibold py-2">
            Home{" "}
            <span className="text-white flex items-center gap-2">
              <FaChevronRight />
              News
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
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-28">
          {/* BLOG GRID */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, i) => (
              <div
                key={i}
                className="group rounded-2xl bg-white shadow-sm hover:shadow-lg transition">
                {/* IMAGE */}
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img
                    src={blog.img}
                    alt=""
                    className="h-[240px] w-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-1"
                  />

                  {/* DATE */}
                  <span className="absolute right-4 top-4 rounded-md bg-[#173f35] px-4 py-2 text-sm font-semibold text-white">
                    {blog.date}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  {/* META */}
                  <div className="mb-4 flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex gap-1 items-center">
                      <MdOutlinePerson /> By admin
                    </span>
                    <span className="flex gap-1 items-center">
                      <BsWechat /> Comments (05)
                    </span>
                  </div>

                  <h3 className="mb-6 text-xl font-semibold leading-snug text-[#0b2c1f]">
                    {blog.title}
                  </h3>

                  <button className="inline-flex items-center gap-2 rounded-full bg-[#c9dc3c] px-6 py-3 text-sm font-semibold text-black hover:bg-[#b6cc34] transition">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsGrid;

{
  /* <Route path="newsgrid" element={<NewsGrid />} />; */
}
