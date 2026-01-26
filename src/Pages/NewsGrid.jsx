import React from "react";
import Button from "../Components/Small Components/Button";
import { MdOutlinePerson } from "react-icons/md";
import { BsWechat } from "react-icons/bs";

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
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
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

{/* <Route path="newsgrid" element={<NewsGrid />} />; */}
