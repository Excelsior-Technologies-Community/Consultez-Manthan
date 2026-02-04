import React, { useEffect, useState } from "react";
import {  ShoppingCart } from "lucide-react";
import { FaHeart, FaStar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login", { state: { from: "products" } });
      return;
    }

    addToCart(product);
    toast.success(`${product.title} added to cart`);
  };

  const { addToCart } = useCart();

  // 🔹 Fetch categories (filters)
  useEffect(() => {
    fetch("http://localhost:5000/api/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  // 🔹 Fetch products (filtered)
  useEffect(() => {
    const url =
      activeCategory === "all"
        ? "http://localhost:5000/api/products"
        : `http://localhost:5000/api/products?category=${activeCategory}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [activeCategory]);

  return (
    <div className="w-[84%] mx-auto my-20">
      {/* FILTERS */}
      <ul className="flex gap-6  justify-center mb-10">
        <li
          className="text-white bg-[#0b3231] px-3 py-2 cursor-pointer"
          onClick={() => setActiveCategory("all")}>
          All
        </li>

        {categories.map((cat) => (
          <li
            className="text-black bg-[#f5f3f5] px-3 py-2 cursor-pointer"
            key={cat._id}
            onClick={() => setActiveCategory(cat.slug)}>
            {cat.name}
          </li>
        ))}
      </ul>

      {/* PRODUCTS */}
      <div className="grid grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product._id} className="group relative">
            {/* CARD */}
            <div
              className="border group-hover:border-[#c6d936] rounded-xl overflow-hidden bg-white 
                      transition-all duration-300
                      group-hover:shadow-lg group-hover:shadow">
              {/* IMAGE WRAPPER */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full transition-transform duration-300 group-hover:scale-90"
                />

                {/* HOVER ICONS */}
                <div
                  className="absolute top-4 right-4 flex flex-col gap-3
                       opacity-0 translate-x-4
                       group-hover:opacity-100 group-hover:translate-x-0
                       transition-all duration-300">
                  <button
                    className="w-10 h-10 rounded-full duration-300 bg-[#0b3231]
                         text-white flex items-center justify-center
                         hover:bg-[#c6d936] hover:text-[#0b3231]">
                    <FaHeart />
                  </button>

                  <button
                    onClick={() => handleAddToCart(product)}
                    className="w-10 h-10 rounded-full duration-300 bg-[#0b3231]
                    text-white flex items-center justify-center
                    hover:bg-[#c6d936] hover:text-[#0b3231]">
                    <ShoppingCart />
                  </button>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-4 text-center">
                <h3 className="font-semibold text-2xl my-3">{product.title}</h3>

                <p className="text-xl mb-2">${product.price}</p>

                <div className="flex justify-center text-amber-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
