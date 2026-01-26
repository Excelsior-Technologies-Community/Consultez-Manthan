import React from "react";
import { FaChevronRight } from "react-icons/fa6";
import Button from "../Components/Small Components/Button";
import { Check } from "lucide-react";

const Portfoliodetails = () => (
  <div>
    <div
      className="w-full overflow-hidden relative min-h-[200px] md:min-h-[300px] lg:min-h-[400px] bg-cover bg-center bg-no-repeat "
      style={{
        backgroundImage:
          "url('https://html.kodesolution.com/2025/consultez-html-v2/images/background/page-title-bg.jpg')",
      }}>
      <div className="w-full h-full bg-gradient-to-r from-[#0b3231] to-transparent absolute lg:pl-26 lg:pt-26 pl-4 pt-5 md:pl-10 md:pt-10 z-10">
        <span className="text-3xl md:text-4xl lg:text-6xl text-white font-bold pt pb-5 pt-10 block">
          Project Details
        </span>
        <h1 className="flex gap-2 items-center text-[#c6d936] text-sm md:text-base font-semibold py-2">
          Home{" "}
          <span className="text-white flex items-center gap-2">
            <FaChevronRight />
            Project Details
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

    <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          {/* Left Content */}
          <div className="lg:col-span-2">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#102930]">
              About the Project
            </p>

            <h1 className="mb-6 text-4xl font-bold leading-tight text-[#102930] md:text-5xl">
              Deeper Dive Into Our Digital <br />
              Product Design Masterpieces
            </h1>

            <p className="mb-4 max-w-2xl text-lg leading-relaxed text-gray-600">
              Sed ut perspiciatis unde omniste natus voluptatem accusantiume rem
              aperia eaque ipsa quae abillo inventore veritatis quasi architecto
              beatae sunt explicabo. Nemo enim epsam voluptatem quia voluptas
              aspernatur odites sed quia consequunture.
            </p>

            <a href="#" className=" text-base font-medium ">
              <Button
                text="Visit Website"
                rounded=""
                bgColor="#0b3231"
                textColor="white"
                hoverBg="white"
                hoverOpacity="0.2"
              />
            </a>
          </div>

          {/* Right Sidebar */}
          <div className=" bg-[#F8F5F2] p-8 ">
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold text-gray-900">Clients</p>
                <p className="mt-1 text-gray-600">Design Studio In USA</p>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-900">
                  Project Type
                </p>
                <p className="mt-1 text-gray-600">Digital Product Design</p>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-900">Date</p>
                <p className="mt-1 text-gray-600">25 October 2023</p>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-900">Website</p>
                <a
                  href="#"
                  className="mt-1 inline-block text-emerald-900 underline underline-offset-4 hover:text-emerald-700">
                  yourdomain.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-4 py-12">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.95fr]">
        {/* Left Image */}
        <div className="overflow-hidden ">
          <img
            src="https://html.kodesolution.com/2025/consultez-html-v2/images/resource/project-details-1.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        {/* Right Image */}
        <div className="overflow-hidden ">
          <img
            src="https://html.kodesolution.com/2025/consultez-html-v2/images/resource/project-details-2.jpg"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
    <section className="mx-auto max-w-7xl px-4 py-20 ">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Left Heading */}
        <div>
          <h2 className="text-4xl font-bold leading-tight text-[#0b3231] md:text-5xl">
            Interesting Facts In <br />
            Development
          </h2>
        </div>

        {/* Right Content */}
        <div>
          <p className="mb-10 text-lg leading-relaxed text-gray-600">
            Must explain to you how all this mistaken idea of denouncing
            pleasure and praising pain was born and I will give you a complete
            account of the system, and expound the actual teachings of the great
            explorer of the truth, the master-builder of human happiness. No one
            rejects, dislikes, or avoids pleasure itself, because it is
            pleasure, but because those who do not know how to pursue pleasure
            rationally encounter
          </p>

          {/* Checklist */}
          <ul className="grid grid-cols-1 gap-y-4 gap-x-8 sm:grid-cols-2">
            <li className="flex items-start gap-3">
              <span className="text-emerald-900">
                <Check />
              </span>
              <span className="font-medium text-gray-800">
                Efficient Sprint Planning
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-emerald-900">
                <Check />
              </span>
              <span className="font-medium text-gray-800">
                Standups and Demos
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-emerald-900">
                <Check />
              </span>
              <span className="font-medium text-gray-800">
                Iterative Delivery Approach
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="text-emerald-900">
                <Check />
              </span>
              <span className="font-medium text-gray-800">Problem-solving</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full h-[0.5px]  bg-gray-300 mt-22 mb-12" />

      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Title */}
          <div>
            <h2 className="text-4xl font-bold leading-tight text-[#0b3231] md:text-5xl">
              The Results Of <br />
              Our Project
            </h2>
          </div>

          {/* Right Content */}
          <div>
            <p className="mb-12 text-lg leading-relaxed text-gray-600">
              Will give you a complete account of the system, and expound the
              actual teachings of the great explorer of the truth, the
              master-builder of human happiness rejects, dislikes, or avoids
              pleasure
            </p>

            {/* Result Item 1 */}
            <div className="mb-10  gap-4">
              <div className="flex gap-6">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-900 text-white">
                  <Check />
                </span>
                <h4 className="mb-2 text-lg font-bold text-gray-900">
                  Support clients
                </h4>
              </div>
              <p className="leading-relaxed text-gray-600">
                Sed ut perspiciatis unde omnis natus voluptatem accusantium
                doloremque laudantium, totam rem aperiam inventore
              </p>
            </div>

            {/* Result Item 2 */}
            <div className=" gap-4">
              <div className="flex gap-6">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-900 text-white">
                  <Check />
                </span>
                <h4 className="mb-2 text-lg text-gray-900 font-bold">
                  Solve problems
                </h4>
              </div>
              <p className="leading-relaxed text-gray-600">
                Sed ut perspiciatis unde omnis natus voluptatem accusantium
                doloremque laudantium, totam rem aperiam inventore
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl py-20">
        {/* Images */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="overflow-hidden">
            <img
              src="https://html.kodesolution.com/2025/consultez-html-v2/images/resource/project-details-3.jpg"
              alt="Previous project"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="overflow-hidden">
            <img
              src="https://html.kodesolution.com/2025/consultez-html-v2/images/resource/project-details-4.jpg"
              alt="Next project"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6  pt-8 sm:flex-row">
          {/* Previous */}
          <div className="text-center sm:text-left">
            <p className="text-sm text-gray-500">Previous</p>
            <h4 className="text-2xl font-semibold text-gray-900 hover:underline">
              Business Website Design
            </h4>
          </div>

          {/* Center Icon */}
          <div className="hidden sm:flex">
            <div className="grid grid-cols-3 gap-1">
              {[...Array(9)].map((_, i) => (
                <span key={i} className="h-2 w-2 rounded-sm bg-emerald-900" />
              ))}
            </div>
          </div>

          {/* Next */}
          <div className="text-center sm:text-right">
            <p className="text-sm text-gray-500">Next</p>
            <h4 className="text-2xl font-semibold text-gray-900 hover:underline">
              Mobile Application Design
            </h4>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Portfoliodetails;
