import React from "react";
import { useState } from "react";
import { products } from "../Components/data";
import { Heart, ShoppingCart } from "lucide-react";
import { FaChevronRight, FaStar } from "react-icons/fa6";

const filters = [
  { label: "All", value: "all" },
  { label: "Compass", value: "compass" },
  { label: "Reel", value: "reel" },
  { label: "Steering", value: "steering" },
  { label: "Jacket", value: "jacket" },
  { label: "Binocular", value: "binocular" },
];

export default function Shop() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((p) => p.category === activeFilter);

  return (
    <>
      <div
        className="w-full overflow-hidden relative min-h-[200px] md:min-h-[300px] lg:min-h-[400px] bg-cover bg-center bg-no-repeat "
        style={{
          backgroundImage:
            "url('https://html.kodesolution.com/2025/consultez-html-v2/images/background/page-title-bg.jpg')",
        }}>
        <div className="w-full h-full bg-gradient-to-r from-[#0b3231] to-transparent absolute lg:pl-26 lg:pt-26 pl-4 pt-5 md:pl-10 md:pt-10 z-10">
          <span className="text-3xl md:text-4xl lg:text-6xl text-white font-bold pt pb-5 pt-10 block">
            Shop
          </span>
          <h1 className="flex gap-2 items-center text-[#c6d936] text-sm md:text-base font-semibold py-2">
            Home{" "}
            <span className="text-white flex items-center gap-2">
              <FaChevronRight />
              Products
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
      <div className="w-full px-4 sm:px-6 lg:w-[84%] mx-auto my-10 sm:my-14 lg:my-20">
        {/* FILTER MENU */}
        <ul className="flex flex-wrap gap-4 sm:gap-6 lg:gap-10 mb-8 sm:mb-10 justify-center">
          {filters.map((f) => (
            <li
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`cursor-pointer font-medium pb-2 border-b-2 transition
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 cursor-pointer">
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
    </>
  );
}
