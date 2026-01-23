import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
    const navigate = useNavigate(); 
  return (
    <div>
      <section className="min-h-screen flex items-center justify-center bg-white px-6 py-16">
        <div className="max-w-2xl w-full text-center">
          {/* Image */}
          <img
            src="https://html.kodesolution.com/2025/consultez-html-v2/images/resource/404.jpg"
            alt="404 Page Not Found"
            className="mx-auto mb-10"
          />

          {/* Title */}
          <h1 className="text-4xl font-bold tracking-wide mb-4">
            PAGE NOT FOUND!
          </h1>

          {/* Description */}
          <p className="text-gray-600 mb-8 leading-relaxed">
            Sorry we can't find that page! The page you are looking
            <br className="hidden sm:block" />
            for was never existed.
          </p>

          {/* Search */}
          <div className="relative max-w-md mx-auto mb-8">
            <input
              type="text"
              placeholder="Search here"
              className="w-full bg-gray-100 px-5 py-4 rounded-md outline-none"
            />
            <span className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer">
              🔍
            </span>
          </div>

          {/* Button */}
          <button className="bg-[#c6dc3a] text-black px-10 py-4 rounded-md font-medium hover:bg-[#b7cd2f] transition" onClick={() => navigate("/")}>
            Back To Home
          </button>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
