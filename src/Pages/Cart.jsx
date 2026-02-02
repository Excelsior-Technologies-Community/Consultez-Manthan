import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { useCart } from "./CartContext";
import Button from "../Components/Small Components/Button";
import { Link } from "react-router-dom";

const Cart = () => {
  const { items, updateQty, removeItem } = useCart();

  const subtotal = items.reduce((a, i) => a + i.price * i.qty, 0);
  const shipping = 70;
  const total = subtotal + shipping;

  return (
    <>
      {/* HERO */}
      <div
        className="w-full relative min-h-[260px] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://html.kodesolution.com/2025/consultez-html-v2/images/background/page-title-bg.jpg')",
        }}>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b3231] to-transparent px-6 md:px-10 py-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Cart</h1>
          <p className="flex items-center gap-2 text-[#c6d936] mt-4">
            Home <FaChevronRight /> <span className="text-white">Cart</span>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-10 py-12 space-y-14">
        {/* ================= DESKTOP TABLE ================= */}
        <div className="hidden lg:block">
          <table className="w-full border">
            <thead>
              <tr className="border border-gray-300  bg-white text-left">
                <th></th>
                <th>Photo</th>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="border border-gray-300 bg-gray-50">
                  <td className="p-3">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="w-6 h-6 rounded-full bg-gray-400 text-white text-xs">
                      ✕
                    </button>
                  </td>
                  <td className="p-3">
                    <img src={item.img} className="w-20 h-20 object-cover" />
                  </td>
                  <td className="p-3">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">Size: {item.size}</p>
                  </td>
                  <td className="p-3">${item.price}</td>
                  <td className="p-3">
                    <div className="flex border w-24 h-10 rounded-xl overflow-hidden">
                      <div className="flex-1 flex items-center justify-center">
                        {item.qty}
                      </div>
                      <div className="flex flex-col w-6 ">
                        <button
                          onClick={() => updateQty(item.id, "inc")}
                          className="bg-[#0f3d2e] text-white h-1/2">
                          +
                        </button>
                        <button
                          onClick={() => updateQty(item.id, "dec")}
                          className=" bg-[#0f3d2e] text-white border-t h-1/2">
                          −
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="p-3">${item.qty * item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ================= MOBILE CARDS ================= */}
        <div className="space-y-6 lg:hidden">
          {items.map((item) => (
            <div key={item.id} className="border p-4 rounded space-y-4">
              <div className="flex gap-4">
                <img src={item.img} className="w-24 h-24 object-cover" />
                <div className="flex-1">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">Size: {item.size}</p>
                  <p className="mt-2 font-semibold">${item.price * item.qty}</p>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-gray-400">
                  ✕
                </button>
              </div>

              <div className="flex justify-between items-center">
                <span>Quantity</span>
                <div className="flex border w-20 h-15">
                  <div className="flex-1 flex items-center justify-center">
                    {item.qty}
                  </div>
                  <div className="flex flex-col w-8 ">
                    <button
                      onClick={() => updateQty(item.id, "inc")}
                      className="bg-[#0f3d2e]  text-white ">
                      +
                    </button>
                    <button
                      onClick={() => updateQty(item.id, "dec")}
                      className="border-t ">
                      −
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================= BOTTOM SECTION ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* SHIPPING */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Calculate Shipping</h2>
            <div className="border border-gray-300 p-6 space-y-4">
              <select className="w-full border border-gray-300 px-4 py-3">
                <option>United States</option>
                <option>India</option>
              </select>
              <select className="w-full border border-gray-300 px-4 py-3">
                <option>State / County</option>
              </select>
              <input
                placeholder="Postcode / ZIP"
                className="w-full border border-gray-300 px-4 py-3"
              />
              <button className="px-6 py-3 bg-gray-100">UPDATE TOTALS</button>
            </div>
          </div>

          {/* TOTALS */}
          <div className="lg:max-w-md lg:ml-auto">
            <h2 className="text-xl font-semibold mb-4">Cart Totals</h2>
            <div className="border border-gray-300">
              <div className="flex justify-between p-4 border-b border-gray-300">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between p-4 border-b border-gray-300">
                <span>Shipping</span>
                <span>${shipping}</span>
              </div>
              <div className="flex justify-between p-4 font-bold">
                <span>Total</span>
                <span>${total}</span>
              </div>
            </div>
            <Link to={"/cartcontext"}>
              <Button className="w-full mt-6 px-8 bg-[#0f3d2e] text-white py-4">
                Proceed To Checkout
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
