import React from "react";
import { useState } from "react";
import { products } from "../Components/data";
import { Heart, ShoppingCart } from "lucide-react";
import { FaChevronRight, FaStar } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

const filters = [
  { label: "All", value: "all" },
  { label: "Compass", value: "compass" },
  { label: "Reel", value: "reel" },
  { label: "Steering", value: "steering" },
  { label: "Jacket", value: "jacket" },
  { label: "Binocular", value: "binocular" },
];

const ProductSidebar = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((p) => p.category === activeFilter);
  return (
    <>
      <div className="w-full px-4 sm:px-6 lg:w-[92%] mx-auto my-10 lg:my-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 ">
          {/* SIDEBAR */}
          <aside className="space-y-8">
            {/* SEARCH */}
            <div className="bg-[#f5f5f5] px-3 py-2 rounded-md">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Search..."
                  className="flex-1 px-2  text-xl outline-none"
                />
                <button className="bg-[#0b3231] px-4 py-3 flex items-center justify-center text-white">
                  <FaSearch/>
                </button>
              </div>
            </div>

            {/* CATEGORIES */}
            <div className="bg-[#f5f5f5] p-5 rounded-md py-8">
              <h3 className="font-bold text-xl mb-4">Categories</h3>
              <ul className="space-y-4.5 text-sm text-gray-600">
                <li className="flex items-center text-xl gap-2 cursor-pointer hover:text-[#c6d936] duration-300">
                  ▸ Customer Engagement
                </li>
                <li className="flex items-center text-xl gap-2 cursor-pointer hover:text-[#c6d936] duration-300">
                  ▸ Entrepreneurship
                </li>
                <li className="flex items-center text-xl gap-2 cursor-pointer hover:text-[#c6d936] duration-300">
                  ▸ Finance
                </li>
                <li className="flex items-center text-xl gap-2 cursor-pointer hover:text-[#c6d936] duration-300">
                  ▸ Investment
                </li>
                <li className="flex items-center text-xl gap-2 cursor-pointer hover:text-[#c6d936] duration-300">
                  ▸ Management
                </li>
              </ul>
            </div>

            {/* FILTER BY PRICE */}
            <div className="bg-[#f5f5f5] p-5 rounded-md">
              <h3 className="font-semibold mb-4 text-xl">Filter by Price</h3>

              {/* fake range bar (UI only, same as screenshot) */}
              <div className="relative h-1 bg-gray-300 rounded mb-4">
                <span className="absolute left-0 top-[-5px] w-3 h-3 bg-[#0b3231] rounded-full"></span>
                <span className="absolute right-6 top-[-5px] w-3 h-3 bg-[#0b3231] rounded-full"></span>
                <div className="absolute left-2 right-6 h-1 bg-[#0b3231] rounded"></div>
              </div>

              <div className="flex items-center justify-between  text-xl py-5">
                <span>Price: $10 - $89</span>
                <button className="bg-[#0b3231] text-white px-4 py-2 rounded-xl hover:bg-[#c6d936] hover:text-[#0b3231] transition">
                  Filter
                </button>
              </div>
            </div>

            {/* POPULAR PRODUCTS */}
            <div className="bg-[#f5f5f5] p-5 rounded-md">
              <h3 className="font-semibold mb-4 text-xl">Popular Products</h3>

              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-sm border-b border-gray-300 pb-5">
                  <img
                    src="https://html.kodesolution.com/2025/consultez-html-v2/images/resource/products/1.jpg"
                    className="w-15 h-18 object-cover rounded"
                  />
                  <div>
                    <p className="leading-tight text-xl">Best Headset</p>
                    <span className="text-[#0b3231] font-semibold">$45.00</span>
                  </div>
                </li>

                <li className="flex items-center gap-3 text-sm border-b border-gray-300 pb-5">
                  <img
                    src="https://html.kodesolution.com/2025/consultez-html-v2/images/resource/products/2.jpg"
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div>
                    <p className="leading-tight text-xl">Quality Battery</p>
                    <span className="text-[#0b3231] font-semibold">$34.00</span>
                  </div>
                </li>

                <li className="flex items-center gap-3 text-sm pb-5">
                  <img
                    src="https://html.kodesolution.com/2025/consultez-html-v2/images/resource/products/3.jpg"
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div>
                    <p className="leading-tight text-xl">Smart Watch</p>
                    <span className="text-[#0b3231] font-semibold">$29.00</span>
                  </div>
                </li>
              </ul>
            </div>
          </aside>

          {/* PRODUCTS */}
          <main className="lg:col-span-3 ">
            <div className="w-full px-4 sm:px-6  mx-auto my-10 sm:my-14 lg:my-0">
              {/* FILTER MENU */}
              <ul className="flex flex-wrap gap-4 sm:gap-6 lg:gap-10 mb-8 sm:mb-10 justify-center">
                {filters.map((f) => (
                  <li
                    key={f.value}
                    onClick={() => setActiveFilter(f.value)}
                    className={`cursor-pointer font-medium pb-2 border-b-2 transition mb-6 mt-2
              ${
                activeFilter === f.value
                  ? " bg-[#0b3231] text-white px-2"
                  : "border-transparent text-gray-500"
              }`}>
                    {f.label}
                  </li>
                ))}
              </ul>

              {/* PRODUCTS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="border hover:shadow hover:shadow-[#c6d936] rounded-xl overflow-hidden bg-white group">
                    {/* IMAGE + ICONS */}
                    <div className="relative ">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="relative h-full sm:h-60 md:h-full group-hover:scale-90 transition-all flex items-center justify-center"
                      />

                      {/* Hover Icons */}
                      <div className="absolute right-4 top-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition">
                        <button className="w-10 h-10 rounded-full bg-[#0b3231] shadow flex items-center justify-center hover:bg-[#c6d936] text-white hover:text-[#0b3231] duration-300 ">
                          <Heart size={18} />
                        </button>
                        <button className="w-10 h-10 rounded-full bg-[#0b3231] shadow flex items-center justify-center hover:bg-[#c6d936] text-white hover:text-[#0b3231] duration-300">
                          <ShoppingCart size={18} />
                        </button>
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="p-6 text-center">
                      {/* <p>{product.</p> */}
                      <h3 className="font-semibold text-lg text-black">
                        {product.title}
                      </h3>
                      <p className="text-gray-500 my-2">${product.price}</p>
                      <p className="flex gap-0.5 text-amber-300  justify-center">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default ProductSidebar;
