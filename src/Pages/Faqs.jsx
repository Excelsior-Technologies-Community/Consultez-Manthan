import React from "react";
import { useState } from "react";

export default function Faq() {
  const [openLeft, setOpenLeft] = useState(null);
  const [openRight, setOpenRight] = useState(null);

  const contentClass =
    "overflow-hidden transition-all duration-300 ease-in-out";

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* LEFT */}
        <div>
          <h2 className="text-3xl font-semibold text-[#0b2c20] mb-8">
            Service Faq
          </h2>

          {/* 1 */}
          <div className="bg-[#f3f3f3] p-6 mb-4">
            <button
              onClick={() => setOpenLeft(openLeft === 1 ? null : 1)}
              className="w-full flex justify-between font-semibold text-gray-700"
            >
              What warranties do I have for installation?
              <span>{openLeft === 1 ? "−" : "+"}</span>
            </button>

            <div
              className={`${contentClass} ${
                openLeft === 1 ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-sm text-gray-500">
                We provide installation warranties covering workmanship and
                service reliability based on the selected plan.
              </p>
            </div>
          </div>

          {/* 2 */}
          <div className="bg-[#f3f3f3] p-6 mb-4">
            <button
              onClick={() => setOpenLeft(openLeft === 2 ? null : 2)}
              className="w-full flex justify-between font-semibold text-gray-700"
            >
              What is included in your services?
              <span>{openLeft === 2 ? "−" : "+"}</span>
            </button>

            <div
              className={`${contentClass} ${
                openLeft === 2 ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-sm text-gray-500">
                Our services include consultation, installation, maintenance,
                and post-service support.
              </p>
            </div>
          </div>

          {/* 3 */}
          <div className="bg-[#f3f3f3] p-6 mb-4">
            <button
              onClick={() => setOpenLeft(openLeft === 3 ? null : 3)}
              className="w-full flex justify-between font-semibold text-gray-700"
            >
              What are the payment methods?
              <span>{openLeft === 3 ? "−" : "+"}</span>
            </button>

            <div
              className={`${contentClass} ${
                openLeft === 3 ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-sm text-gray-500">
                We accept cards, UPI, bank transfers, and major online payment
                gateways.
              </p>
            </div>
          </div>

          {/* 4 */}
          <div className="bg-[#f3f3f3] p-6">
            <button
              onClick={() => setOpenLeft(openLeft === 4 ? null : 4)}
              className="w-full flex justify-between font-semibold text-gray-700"
            >
              How fast I get my order?
              <span>{openLeft === 4 ? "−" : "+"}</span>
            </button>

            <div
              className={`${contentClass} ${
                openLeft === 4 ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-sm text-gray-500">
                Orders are processed within 24–48 hours depending on location
                and availability.
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div>
          <h2 className="text-3xl font-semibold text-[#0b2c20] mb-8">
            Research Faq
          </h2>

          {/* 1 */}
          <div className="bg-[#f3f3f3] p-6 mb-4">
            <button
              onClick={() => setOpenRight(openRight === 1 ? null : 1)}
              className="w-full flex justify-between font-semibold text-gray-700"
            >
              Produce Your Own Clean Save The Environment
              <span>{openRight === 1 ? "−" : "+"}</span>
            </button>

            <div
              className={`${contentClass} ${
                openRight === 1 ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-sm text-gray-500">
                Clean energy production reduces carbon emissions and supports
                long-term environmental sustainability.
              </p>
            </div>
          </div>

          {/* 2 */}
          <div className="bg-[#f3f3f3] p-6 mb-4">
            <button
              onClick={() => setOpenRight(openRight === 2 ? null : 2)}
              className="w-full flex justify-between font-semibold text-gray-700"
            >
              On-Site Service And Support For Certification
              <span>{openRight === 2 ? "−" : "+"}</span>
            </button>

            <div
              className={`${contentClass} ${
                openRight === 2 ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-sm text-gray-500">
                We provide on-site guidance and support to meet certification
                requirements efficiently.
              </p>
            </div>
          </div>

          {/* 3 */}
          <div className="bg-[#f3f3f3] p-6 mb-4">
            <button
              onClick={() => setOpenRight(openRight === 3 ? null : 3)}
              className="w-full flex justify-between font-semibold text-gray-700"
            >
              Light Source For Stable Conversion Efficiency
              <span>{openRight === 3 ? "−" : "+"}</span>
            </button>

            <div
              className={`${contentClass} ${
                openRight === 3 ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-sm text-gray-500">
                Optimized light sources ensure stable and efficient energy
                conversion.
              </p>
            </div>
          </div>

          {/* 4 */}
          <div className="bg-[#f3f3f3] p-6">
            <button
              onClick={() => setOpenRight(openRight === 4 ? null : 4)}
              className="w-full flex justify-between font-semibold text-gray-700"
            >
              Do You Give Guarantee And After Sales Service?
              <span>{openRight === 4 ? "−" : "+"}</span>
            </button>

            <div
              className={`${contentClass} ${
                openRight === 4 ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-sm text-gray-500">
                Yes, we offer guarantees along with dependable after-sales
                service and support.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
