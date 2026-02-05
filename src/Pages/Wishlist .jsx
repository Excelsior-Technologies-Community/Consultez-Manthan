import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useWishlist } from "../Context/WishlistContext.jsx";
import { useCart } from "../Context/CartContext.jsx";

const Wishlist = () => {
  const { items, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login", { state: { from: "wishlist" } });
      return;
    }
    addToCart(item);
  };

  return (
    <>
      {/* HERO */}
      <div
        className="w-full overflow-hidden relative min-h-[200px] md:min-h-[300px] lg:min-h-[400px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://html.kodesolution.com/2025/consultez-html-v2/images/background/page-title-bg.jpg')",
        }}>
        <div className="w-full h-full bg-gradient-to-r from-[#0b3231] to-transparent absolute lg:pl-26 lg:pt-26 pl-4 pt-5 md:pl-10 md:pt-10 z-10">
          <span className="text-3xl md:text-4xl lg:text-6xl text-white font-bold pt pb-5 pt-10 block">
            WishList
          </span>
          <h1 className="flex gap-2 items-center text-[#c6d936] text-sm md:text-base font-semibold py-2">
            Home{" "}
            <span className="text-white flex items-center gap-2">
              <FaChevronRight />
              WishList
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

      <div className="max-w-7xl mx-auto px-4 md:px-10 py-12 space-y-14">
        {/* ================= DESKTOP TABLE ================= */}
        <div className="hidden lg:block">
          {items.length === 0 ? (
            <div className="text-center py-10">
              <h2 className="text-2xl font-bold mb-4">Your wishlist is empty</h2>
              <Link to="/products" className="text-[#0f3d2e] font-semibold hover:underline">
                Go to Products
              </Link>
            </div>
          ) : (
            <table className="w-full border">
              <thead>
                <tr className="border border-gray-300 bg-white text-left">
                  <th className="p-3"></th>
                  <th className="p-3">Photo</th>
                  <th className="p-3">Product</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Stock Status</th>
                  <th className="p-3">Add to Cart</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item._id || item.id} className="border border-gray-300 bg-gray-50">
                    <td className="p-3">
                      <button
                        onClick={() => removeFromWishlist(item._id || item.id)}
                        className="w-6 h-6 rounded-full bg-gray-400 text-white text-xs hover:bg-red-500 transition-colors">
                        ✕
                      </button>
                    </td>
                    <td className="p-3">
                      <img src={item.image} alt={item.title} className="w-20 h-20 object-cover" />
                    </td>
                    <td className="p-3">
                      <p className="font-medium">{item.title}</p>
                      {item.size && <p className="text-sm text-gray-500">Size: {item.size}</p>}
                    </td>
                    <td className="p-3">${item.price}</td>
                    <td className="p-3"><span className="text-green-600 font-medium">In Stock</span></td>
                    <td className="p-3">
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="px-4 py-2 bg-[#0f3d2e] text-white text-sm hover:bg-[#c6d936] hover:text-[#0f3d2e] transition-colors font-semibold"
                      >
                        Add to Cart
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* ================= MOBILE CARDS ================= */}
        <div className="space-y-6 lg:hidden">
          {items.length === 0 ? (
            <div className="text-center py-10">
              <h2 className="text-2xl font-bold mb-4">Your wishlist is empty</h2>
              <Link to="/products" className="text-[#0f3d2e] font-semibold hover:underline">
                Go to Products
              </Link>
            </div>
          ) : (items.map((item) => (
            <div key={item._id || item.id} className="border p-4 rounded space-y-4">
              <div className="flex gap-4">
                <img src={item.image} alt={item.title} className="w-24 h-24 object-cover" />
                <div className="flex-1">
                  <p className="font-medium">{item.title}</p>
                  {item.size && <p className="text-sm text-gray-500">Size: {item.size}</p>}
                  <p className="mt-2 font-semibold">${item.price}</p>
                  <p className="text-green-600 text-sm">In Stock</p>
                </div>
                <button
                  onClick={() => removeFromWishlist(item._id || item.id)}
                  className="text-gray-400 h-fit hover:text-red-500">
                  ✕
                </button>
              </div>

              <button
                onClick={() => handleAddToCart(item)}
                className="w-full py-2 bg-[#0f3d2e] text-white rounded text-sm hover:bg-[#c6d936] hover:text-[#0f3d2e] transition-colors"
              >
                Add to Cart
              </button>
            </div>
          )))}
        </div>
      </div>
    </>
  );
};

export default Wishlist;