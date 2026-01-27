import React from "react";
import { CgProfile } from "react-icons/cg";
import { IoChatbubblesSharp, IoLogoWechat } from "react-icons/io5";
import Button from "../Components/Small Components/Button";

export default function BlogPage() {
  const data = [
    {
      title: "How Scale Your Business Without Losing Quality",
      img: "https://html.kodesolution.com/2025/consultez-html-v2/images/resource/blog1-1.jpg",
    },
    {
      title: "Why Networking is Crucial for Business Growth",
      img: "https://html.kodesolution.com/2025/consultez-html-v2/images/resource/blog1-2.jpg",
    },
    {
      title: "10 Proven Strategies to Scale",
      img: "https://html.kodesolution.com/2025/consultez-html-v2/images/resource/blog1-3.jpg",
    },
  ];
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* MAIN CONTENT */}
        <main className="lg:col-span-8 space-y-12">
          {/* IMAGE + HEADER */}
          <div className="space-y-4 relative">
            <div className="absolute w-18 h-18 bg-[#0b3231] rounded-tr-xl right-0 p-4 text-center text-white">
              <p>28</p>
              <p className="text-xs">AUG</p>
            </div>
            <img
              src="https://html.kodesolution.com/2025/consultez-html-v2/images/resource/news-details.jpg"
              className="w-full h-[540px] object-cover rounded-2xl"
            />

            <div className="flex gap-3 text-sm text-[#0b3231]">
              <span className="flex gap-2 items-center">
                <CgProfile />
                Admin
              </span>
              <span>•</span>
              <span className="flex gap-2 items-center">
                <IoLogoWechat />
                02 Comments
              </span>
            </div>

            <h1 className="text-3xl font-bold text-gray-900 pt-3">
              Delivering the best web design agency
            </h1>

            <div className="space-y-5.5 text-gray-500 leading-9 text-[18px]">
              <p className="pt-3">
                Mauris non dignissim purus, ac commodo diam. Donec sit amet
                lacinia nulla. Aliquam quis purus in justo pulvinar tempor.
                Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at
                nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a
                rhoncus erat. Vivamus vel eros vitae est aliquet pellentesque
                vitae et nunc. Sed vitae leo vitae nisl pellentesque semper.
              </p>
              <p className="py-3">
                Mauris non dignissim purus, ac commodo diam. Donec sit amet
                lacinia nulla. Aliquam quis purus in justo pulvinar tempor.
                Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at
                nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a
                rhoncus erat. Vivamus vel eros vitae est aliquet pellentesque
                vitae et nunc. Sed vitae leo vitae nisl pellentesque semper.
              </p>
              <p className="pb-5 border-b my3 border-gray-300">
                Mauris non dignis sim purus, ac commodo diam. Donec sit amet
                lacinia nulla. Aliquam quis purus in justo pulvinar tempor.
                Aliquam tellus nulla, sollicitudin at euismod nec, feugiat at
                nisi. Quisque vitae odio nec lacus interdum tempus. Phasellus a
                rhoncus erat. Vivamus vel eros vitae est aliquet pellentesque
                vitae et nunc. Sed vitae leo vitae nisl pellentesque semper.
              </p>
            </div>

            {/* TAGS */}
            <div className="flex gap-3">
              <p className="text-xl">Tags </p>
              <div className="flex gap-3">
                <span className="px-8 py-3.5 text-sm rounded-full bg-[#0b3231] text-white">
                  Business
                </span>
                <span className="px-8 py-3.5 text-sm rounded-full bg-[#0b3231] text-white">
                  Agency
                </span>
              </div>
            </div>
          </div>

          {/* POST NAV */}
          <div className="grid sm:grid-cols-2 gap-6 -mt-3">
            <div className="bg-gray-100 text-gray-500 rounded-xl p-12 text-xl  hover:bg-[#0b3231] duration-300 hover:text-white cursor-pointer">
              Bring to the table win-win survival strategies
            </div>
            <div className="bg-gray-100 text-gray-500 rounded-xl p-12 text-xl hover:bg-[#0b3231] duration-300 hover:text-white cursor-pointer">
              How to lead a healthy & well-balanced life
            </div>
          </div>

          {/* COMMENTS */}
          <div className="space-y-12">
            <h2 className="text-3xl font-bold">2 Comments</h2>

            {[
              {
                name: "Kevin Martin",
                image:
                  "https://html.kodesolution.com/2025/consultez-html-v2/images/resource/testi-2.jpg",
              },
              {
                name: "Sarah Albert",
                image:
                  "https://html.kodesolution.com/2025/consultez-html-v2/images/resource/testi-1.jpg",
              },
            ].map((comment) => (
              <div
                key={comment.name}
                className="tab:flex tab:gap-12 flex flex-col border-b border-gray-300 pb-10">
                <img
                  src={comment.image}
                  alt={comment.name}
                  className="w-24 h-24 rounded-full object-cover"
                />{" "}
                <div className="flex-1">
                  <div className="flex justify-between">
                    <h4 className=" text-xl font-semibold">{comment.name}</h4>
                    <button className="text-sm bg-[#0b3231] text-white px-6 py-3 rounded-full">
                      Reply
                    </button>
                  </div>
                  <p className="text-[16px] leading-9 mt-1 text-gray-600">
                    Mauris non dignissim purus, ac commodo diam. Donec sit amet
                    lacinia nulla. Aliquam quis purus in justo pulvinar tempor.
                    Aliquam tellus nulla, sollicitudin at euismod.
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* COMMENT FORM */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Leave a Comment</h2>

            <div className="grid sm:grid-cols-2 gap-4">
              <input
                placeholder="Enter Name"
                className="w-full px-8 py-4.5 bg-[#f4f5f4] rounded-lg text-sm focus:ring-2 focus:ring-emerald-700 outline-none"
              />
              <input
                placeholder="Enter Email"
                className="w-full px-8 py-4.5  bg-[#f4f5f4] rounded-lg text-sm focus:ring-2 focus:ring-emerald-700 outline-none"
              />
            </div>

            <textarea
              placeholder="Enter Message"
              className="w-full h-32 px-8 py-4.5  bg-[#f4f5f4] rounded-lg text-sm focus:ring-2 focus:ring-emerald-700 outline-none"
            />

            <Button
              text="Submit Comment"
              bgColor="#0b3231"
              textColor="white"
              hoverBg="white"
              hoverOpacity="0.15"
              icon=""
              rounded=""
            />
          </div>
        </main>

        {/* SIDEBAR */}
        <aside className="lg:col-span-4 space-y-8">
          {/* SEARCH */}

          <input
            placeholder="Search here"
            className="w-full px-8 py-6 bg-[#0b3231] placeholder:text-white rounded-lg text-sm outline-none"
          />

          {/* LATEST POSTS */}
          <div className="bg-gray-100 rounded-2xl py-12">
            <h3 className="font-bold text-xl mb-4 px-10 ">Latest Posts</h3>

            <div className="flex flex-col gap-8">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 hover:bg-white duration-300 mx-8 p-3 rounded-2xl">
                  {/* Image */}
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-20 h-16 rounded-xl object-cover"
                  />

                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
                      <span className="w-4 h-4 rounded-full  flex items-center justify-center text-[#0b3231] text-xs">
                        <CgProfile />
                      </span>
                      <span>Admin</span>
                    </div>

                    <h4 className="font-semibold text-[16px] leading-snug">
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CATEGORIES */}
          <div className="bg-gray-100 rounded-2xl p-4 pb-8">
            <h3 className="font-bold text-xl mb-6">Categories</h3>

            <ul className="space-y-1">
              <li className="text-gray-600 hover:bg-white py-3.5 px-5 rounded hover:shadow-2xl duration-300">
                Customer Engagement
              </li>

              <li className="text-gray-600 hover:bg-white py-3.5 px-5 rounded hover:shadow-2xl duration-300">
                Entrepreneurship
              </li>

              <li className="text-gray-600 hover:bg-white py-3.5 px-5 rounded hover:shadow-2xl duration-300">
                Finance
              </li>
              <li className="text-gray-600 hover:bg-white py-3.5 px-5 rounded hover:shadow-2xl duration-300">
                Investment
              </li>
              <li className="text-gray-600 hover:bg-white py-3.5 px-5 rounded hover:shadow-2xl duration-300">
                Management
              </li>
            </ul>
          </div>

          {/* TAGS */}
          <div className="bg-gray-100 rounded-2xl p-6">
            <h3 className="font-semibold text-lg mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Advisor",
                "Branding",
                "Economy",
                "Experience",
                "Freelancing",
              ].map((t) => (
                <span
                  key={t}
                  className="px-8 py-2.5  rounded-full text-sm bg-white hover:bg-[#0b3231] duration-300 hover:text-white">
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-gray-100 rounded-2xl p-6">
            <h3 className="font-bold text-xl mb-6">Recent Comments</h3>

            <ul className="space-y-6">
              {[
                {
                  name: "A wordpress commenter",
                  text: "launch new mobile app",
                },
                {
                  name: "John Doe",
                  text: "comments",
                  prefix: "on template:",
                },
                {
                  name: "A wordpress commenter",
                  text: "launch new mobile app",
                },
                {
                  name: "John Doe",
                  text: "comments",
                  prefix: "on template:",
                },
              ].map((item, index) => (
                <li key={index} className="flex gap-4 group">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-full group-hover:bg-[#c6d936] group-hover:text-[#0b3231] duration-300 bg-emerald-900 flex items-center justify-center text-white">
                    <IoChatbubblesSharp />
                  </div>

                  {/* Text */}
                  <div className="text-sm leading-relaxed">
                    <span className="font-semibold">{item.name}</span>{" "}
                    {item.prefix && (
                      <span className="text-gray-600">{item.prefix} </span>
                    )}
                    <span className="text-gray-600 block">{item.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
