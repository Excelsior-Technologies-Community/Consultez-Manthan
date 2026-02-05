import React from "react";
import { useState } from "react";
import { useCart } from "../Context/CartContext.jsx";
import { FaChevronRight } from "react-icons/fa6";

const methods = [
  {
    id: "card",
    title: "Credir Card / Debit Card",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        <input
          placeholder="Name on the Card"
          className="bg-gray-100 px-4 py-3 rounded-md outline-none col-span-2"
        />
        <input
          placeholder="Card Number"
          className="bg-gray-100 px-4 py-3 rounded-md outline-none col-span-2"
        />
        <input
          placeholder="Expiry Date"
          className="bg-gray-100 px-4 py-3 rounded-md outline-none"
        />
        <input
          placeholder="Security Code"
          className="bg-gray-100 px-4 py-3 rounded-md outline-none"
        />
        <button className="bg-[#0f2e2a] text-white px-8 py-3 rounded-md col-span-2 md:col-span-1">
          Make Payment
        </button>
      </div>
    ),
  },
  {
    id: "bank",
    title: "Direct Bank Transfer",
    content: (
      <p className="mt-6 text-gray-600 leading-relaxed">
        Make your payment directly into our bank account. Please use your Order
        ID as the payment reference. Your order won’t be shipped until the funds
        have cleared in our account.
      </p>
    ),
  },
  {
    id: "cheque",
    title: "Cheque Payment",
    content: (
      <p className="mt-6 text-gray-600">
        Please send your cheque to Store Name, Store Street, Store Town, Store
        State / County, Store Postcode.
      </p>
    ),
  },
  {
    id: "other",
    title: "Other Payment",
    content: (
      <p className="mt-6 text-gray-600">
        Contact us for alternative payment options.
      </p>
    ),
  },
];

const Checkout = () => {
  const { items } = useCart();
  const subtotal = items.reduce((a, i) => a + i.price * i.qty, 0);
  const shipping = 70;
  const total = subtotal + shipping;
  const [active, setActive] = useState("card");

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
            Checkout
          </span>
          <h1 className="flex gap-2 items-center text-[#c6d936] text-sm md:text-base font-semibold py-2">
            Home{" "}
            <span className="text-white flex items-center gap-2">
              <FaChevronRight />
              Checkout
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
      <section className="px-6 md:px-20 py-16 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* LEFT: Billing Details */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Billing Details</h2>

            {/* First + Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block mb-2 text-sm">First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full bg-gray-100 px-4 py-3 rounded-md outline-none"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm">Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full bg-gray-100 px-4 py-3 rounded-md outline-none"
                />
              </div>
            </div>

            {/* Company */}
            <div className="mb-6">
              <label className="block mb-2 text-sm">Company Name</label>
              <input
                type="text"
                placeholder="Company Name"
                className="w-full bg-gray-100 px-4 py-3 rounded-md outline-none"
              />
            </div>

            {/* Email */}
            <div className="mb-6">
              <label className="block mb-2 text-sm">Email Address</label>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-gray-100 px-4 py-3 rounded-md outline-none"
              />
            </div>

            {/* Address */}
            <div className="mb-6">
              <label className="block mb-2 text-sm">Address</label>
              <input
                type="text"
                placeholder="Street address"
                className="w-full bg-gray-100 px-4 py-3 rounded-md outline-none mb-4"
              />
              <input
                type="text"
                placeholder="Apartment, suite, unit etc. (optional)"
                className="w-full bg-gray-100 px-4 py-3 rounded-md outline-none"
              />
            </div>

            {/* City + State */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block mb-2 text-sm">City</label>
                <input
                  type="text"
                  placeholder="City"
                  className="w-full bg-gray-100 px-4 py-3 rounded-md outline-none"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm">Country</label>
                <select className="w-full bg-gray-100 px-4 py-3 rounded-md outline-none">
                  <option>Select Country</option>
                  <option>Australia</option>
                  <option>UK</option>
                  <option>USA</option>
                </select>
              </div>
            </div>

            {/* Zip + Country */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-sm">Zip / Postal Code</label>
                <input
                  type="text"
                  placeholder="Zip / Postal Code"
                  className="w-full bg-gray-100 px-4 py-3 rounded-md outline-none"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm">Country</label>
                <select className="w-full bg-gray-100 px-4 py-3 rounded-md outline-none">
                  <option>Select Country</option>
                  <option>Australia</option>
                  <option>UK</option>
                  <option>USA</option>
                </select>
              </div>
            </div>
          </div>

          {/* RIGHT: Additional Information */}
          <div>
            <h2 className="text-3xl font-bold mb-8">
              Additional information
            </h2>

            <label className="block mb-2 text-sm">Order notes (optional)</label>
            <textarea
              rows="6"
              placeholder="Notes about your order, e.g. special notes for delivery."
              className="w-full bg-gray-100 px-4 py-4 rounded-md outline-none resize-none"
            />
          </div>
        </div>
      </section>

      <section className="px-6 md:px-20 py-16 bg-white">
        <h2 className="text-3xl font-bold mb-6">Your order</h2>

        <div className="border border-gray-200">
          {/* Header */}
          <div className="grid grid-cols-3 py-4 font-semibold border-b border-gray-200">
            <div className="p-4">Photo</div>
            <div className="p-4">Product Name</div>
            <div className="p-4">Total</div>
          </div>

          {/* Dynamic Items */}
          {items.map((item, index) => (
            <div key={item._id} className={`grid grid-cols-3 border-b border-gray-200 ${index % 2 === 0 ? "bg-[#f5f4f5]" : ""}`}>
              <div className="p-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-17"
                />
              </div>
              <div className="p-4">
                {item.title} x {item.qty}
                <br />
                <span className="text-sm text-gray-500">Size: {item.size}</span>
              </div>
              <div className="p-4">${(item.price * item.qty).toFixed(2)}</div>
            </div>
          ))}

          {/* Subtotal */}
          <div className="grid grid-cols-3 py-4.5 border-b border-gray-200">
            <div className="p-4 font-medium">Cart Subtotal</div>
            <div />
            <div className="p-4">${subtotal.toFixed(2)}</div>
          </div>

          {/* Shipping */}
          <div className="grid grid-cols-3 border-b py-4.5 border-gray-200 bg-[#f5f4f5]">
            <div className="p-4 font-medium">Shipping and Handling</div>
            <div />
            <div className="p-4">${shipping.toFixed(2)}</div>
          </div>

          {/* Total */}
          <div className="grid grid-cols-3 py-4.5">
            <div className="p-4 font-semibold">Order Total</div>
            <div />
            <div className="p-4 font-semibold">${total.toFixed(2)}</div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-20 py-16 bg-white">
        <h2 className="text-3xl font-bold mb-8">Choose a Payment Method</h2>

        <div className="space-y-4">
          {methods.map((method) => (
            <div key={method.id} className="  ">
              {/* Header */}
              <button
                onClick={() => setActive(method.id)}
                className="w-full flex justify-between text-gray-600 text-xl items-center px-6 py-5 bg-[#f4f5f4] text-left font-medium shadow">
                {method.title}
                <span
                  className={`transform transition ${active === method.id ? "rotate-180" : ""
                    }`}>
                  ▼
                </span>
              </button>

              {/* Content */}
              {active === method.id && (
                <div className="px-6 pb-6">{method.content}</div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Checkout;
