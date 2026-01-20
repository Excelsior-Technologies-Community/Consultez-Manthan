import React from "react";
import { useState } from "react";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { Heart } from "lucide-react";
import {
  FaChevronRight,
  FaFacebook,
  FaHeart,
  FaInstagram,
  FaPinterest,
  FaRegStar,
  FaRightLong,
  FaXTwitter,
} from "react-icons/fa6";

const images = [
  "https://html.kodesolution.com/2025/consultez-html-v2/images/resource/products/1.jpg",
  "https://html.kodesolution.com/2025/consultez-html-v2/images/resource/products/2.jpg",
  "https://html.kodesolution.com/2025/consultez-html-v2/images/resource/products/3.jpg",
];

const relatedProducts = [
  { id: 1, title: "Headphone", price: 32, image: images[0] },
  { id: 2, title: "Luggage", price: 32, image: images[1] },
  { id: 3, title: "Watch", price: 32, image: images[2] },
  { id: 4, title: "SD Card", price: 32, image: images[0] },
];

const ProductDetails = () => {
  const [activeImg, setActiveImg] = useState(images[0]);
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState("description");

  return (
    <>
      <div
        className="w-full overflow-hidden relative min-h-[200px] md:min-h-[300px] lg:min-h-[400px] bg-cover bg-center bg-no-repeat mb-20"
        style={{
          backgroundImage:
            "url('https://html.kodesolution.com/2025/consultez-html-v2/images/background/page-title-bg.jpg')",
        }}>
        <div className="w-full h-full bg-gradient-to-r from-[#0b3231] to-transparent absolute lg:pl-26 lg:pt-26 pl-4 pt-5 md:pl-10 md:pt-10 z-10">
          <span className="text-3xl md:text-4xl lg:text-6xl text-white font-bold pt pb-5 pt-10 block">
            Product Deatils
          </span>
          <h1 className="flex gap-2 items-center text-[#c6d936] text-sm md:text-base font-semibold py-2">
            Home{" "}
            <span className="text-white flex items-center gap-2">
              <FaChevronRight />
              Shop
            </span>
          </h1>
        </div>
        {/* square box img  */}
        <img
          src="https://html.kodesolution.com/2025/consultez-html-v2/images/background/page-title-pattern.png"
          alt=""
          className="absolute z-20  -right-10 md:-right-20 top-0 w-32 md:w-auto hidden md:block"
        />
      </div>
      <div className="w-full lg:w-[85%] mx-auto px-4 py-10 space-y-16">
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* IMAGE GALLERY */}
          <div>
            <div className="bg-gray-100 flex justify-center ">
              <img src={activeImg} className="max-h-[520px] w-full" />
            </div>

            <div className="flex gap-2 mt-2 ">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  onClick={() => setActiveImg(img)}
                  className={`w-15 h-15 llap:w-25 llap:h-25 object-cover cursor-pointer ${
                    activeImg === img ? "border-[#0b3231]" : ""
                  }`}
                />
              ))}
            </div>
          </div>

          {/* PRODUCT INFO */}
          <div className="space-y-5">
            <div className="flex items-center ">
              <h1 className="text-5xl font-bold">Backpack</h1>
              <p className="text-xl font-semibold llap:ml-18 mt-2">$76.00</p>
            </div>

            <div className="flex items-center gap-2 text-amber-400 border-b border-gray-300 pb-5">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <span className="text-gray-500 font-semibold ml-2">
                2 Customer Reviews
              </span>
            </div>

            <p className="text-gray-600 leading-relaxed text-xl">
              Aliquam hendrerit a augue insuscipit. Etiam aliquam massa quis des
              mauris commodo venenatis ligula commodo leez sed blandit convallis
              dignissim.
            </p>

            <p className="text-xl text-gray-500">REF. 4231/406</p>
            <p className="text-green-600 text-xl">Available in store</p>

            {/* QUANTITY */}
            <div className="flex items-center gap-4">
              <span className="font-medium">Choose quantity</span>
              <div className="flex border">
                <button
                  onClick={() => qty > 1 && setQty(qty - 1)}
                  className="px-3">
                  -
                </button>
                <span className="px-4 py-1">{qty}</span>
                <button onClick={() => setQty(qty + 1)} className="px-3">
                  +
                </button>
              </div>
            </div>

            {/* ACTIONS */}
            <div className="flex gap-4">
              <button className=" text-[#0b3231] hover:text-gray-400 duration-300 pr-6 py-2 text-xl">
                Add to Cart
              </button>
              <button className="text-[#0b3231] hover:text-gray-400 duration-300 pr-6 py-2 text-xl">
                Add to Wishlist
              </button>
            </div>
            <div className="flex gap-8 items-center">
              <p className="text-xl font-semibold">Share with friends</p>
              <div className="flex gap-2 items-center text-[#0b3231] ">
                <FaInstagram />
                <FaXTwitter />
                <FaPinterest />
                <FaFacebook />
              </div>
            </div>
          </div>
        </div>

        {/* TABS */}
        <div className="relative">
          <div className="absolute w-full h-0.5 bg-gray-200 -z-10 mt-7" />
          <div className="flex gap-4 justify-center my-5">
            <button
              onClick={() => setTab("description")}
              className={`px-6 py-3 text-xl ${
                tab === "description"
                  ? "bg-[#0b3231] text-white"
                  : "border bg-white"
              }`}>
              Description
            </button>
            <button
              onClick={() => setTab("reviews")}
              className={`px-6 py-3 text-xl ${
                tab === "reviews"
                  ? "bg-[#0b3231] text-white"
                  : "border bg-white"
              }`}>
              Reviews
            </button>
          </div>

          {tab === "description" && (
            <div className="space-y-4 text-gray-600">
              <p className="text-[#0b3231] text-3xl font-semibold mt-10">
                Description
              </p>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci
                phaedrum. There are many variations of passages of Lorem Ipsum
                available, but the majority have alteration in some injected or
                words which don't look even slightly believable. If you are
                going to use a passage of Lorem Ipsum, you need to be sure there
                isn't anything embarrang hidden in the middle of text.
              </p>
              <ul className="space-y-4 my-8">
                <li className="flex gap-4 items-center text-xl font-semibold text-gray-800">
                  <FaRightLong className="text-[#c6d936]" /> Nam at elit nec
                  neque suscipit gravida
                </li>
                <li className="flex gap-4 items-center text-xl font-semibold text-gray-800">
                  <FaRightLong className="text-[#c6d936]" /> Aenean egestas orci
                  eu maximus tincidunt
                </li>
                <li className="flex gap-4 items-center text-xl font-semibold text-gray-800">
                  <FaRightLong className="text-[#c6d936]" /> Curabitur vel
                  turpis id tellus cursus laoreet
                </li>
              </ul>
              <p className="text-gray-600 text-xl ">
                All the Lorem Ipsum generators on the Internet tend to repeat
                predefined chunks as necessary, making this the first true
                generator on the Internet. It uses a dictionary of over 200
                Latin words, combined with a handful of model sentence
                structures, to generate Lorem Ipsum which looks reasonable.
              </p>
            </div>
          )}

          {tab === "reviews" && (
            <div className="space-y-6">
              <div className="flex flex-col  gap-4 lg:gap-6">
                {/* REVIEW CARD */}
                <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-6 bg-[#F4F5F4] p-5 sm:p-6 rounded-lg">
                  {/* AVATAR */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden flex-shrink-0 mx-auto sm:mx-0">
                    <img
                      src="https://html.kodesolution.com/2025/consultez-html-v2/images/resource/testi-2.jpg"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="flex-1 text-center sm:text-left">
                    {/* STARS */}
                    <div className="flex justify-center sm:justify-start gap-1 text-amber-400 mb-2">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>

                    {/* NAME + DATE */}
                    <div className="font-semibold">
                      Jon D. William
                      <div className="text-sm text-gray-500">
                        10 Jan, 2023 · 4:00 PM
                      </div>
                    </div>

                    {/* REVIEW TEXT */}
                    <p className="mt-3 text-gray-600 leading-relaxed">
                      Aliquam hendrerit a augue insuscipit. Etiam aliquam massa
                      quis des mauris commodo.
                    </p>
                  </div>
                </div>

                {/* REVIEW CARD */}
                <div className="w-full flex flex-col sm:flex-row gap-4 sm:gap-6 bg-[#F4F5F4] p-5 sm:p-6 rounded-lg">
                  {/* AVATAR */}
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden flex-shrink-0 mx-auto sm:mx-0">
                    <img
                      src="https://html.kodesolution.com/2025/consultez-html-v2/images/resource/testi-1.jpg"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="flex-1 text-center sm:text-left">
                    {/* STARS */}
                    <div className="flex justify-center sm:justify-start gap-1 text-amber-400 mb-2">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>

                    {/* NAME + DATE */}
                    <div className="font-semibold">
                      Aleesha Brown
                      <div className="text-sm text-gray-500">
                        12 Feb, 2023 · 8:00 PM
                      </div>
                    </div>

                    {/* REVIEW TEXT */}
                    <p className="mt-3 text-gray-600 leading-relaxed">
                      Aliquam hendrerit a augue insuscipit. Etiam aliquam massa
                      quis des mauris commodo.
                    </p>
                  </div>
                </div>
              </div>

              <form className="bg-white shadow-2xl  llap:p-15 p-3 space-y-4">
                <h3 className="font-semibold uppercase text-2xl">
                  Add your comments
                </h3>
                <textarea
                  placeholder="Enter Message"
                  className="w-full p-3 bg-gray-100 h-50"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input placeholder="Enter Name" className="p-3 bg-gray-100" />
                  <input
                    placeholder="Enter Email"
                    className="p-3 bg-gray-100"
                  />
                </div>
                <p className="flex gap-3 items-center">
                  Your Review{" "}
                  <div className="flex gap-1 text-amber-300">
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                  </div>
                </p>
                <div className="flex items-center gap-3 llap:text-xl ">
                  <input type="checkbox" name="" id="" />
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </div>
                <button className="bg-[#f5f4f5] text-gray-800 px-6 py-2">
                  Submit Comment
                </button>
              </form>
            </div>
          )}
        </div>

        {/* RELATED PRODUCTS */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p) => (
              <div
                key={p.id}
                className="border rounded-xl overflow-hidden bg-white text-center group hover:shadow hover:shadow-[#c6d936] transition">
                {/* IMAGE + HOVER ICONS */}
                <div className="relative bg-[#f5f5f5] ">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="mx-auto transition-transform duration-300 group-hover:scale-90"
                  />

                  {/* ICONS (TOP RIGHT) */}
                  <div className="absolute top-4 right-4 flex flex-col gap-3 opacity-0 group-hover:opacity-100 transition">
                    <button className="w-10 h-10 rounded-full bg-[#0b3231] flex items-center justify-center text-white hover:bg-[#c6d936] hover:text-[#0b3231] duration-300">
                      <FaHeart />
                    </button>

                    <button className="w-10 h-10 rounded-full bg-[#0b3231] flex items-center justify-center text-white hover:bg-[#c6d936] hover:text-[#0b3231] duration-300">
                      <FaShoppingCart />
                    </button>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="py-6 flex flex-col gap-2">
                  <h3 className="font-semibold text-lg">{p.title}</h3>
                  <p className="text-gray-500">${p.price}.00</p>

                  <div className="flex justify-center text-amber-400 text-sm gap-1">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
