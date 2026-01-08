import React from "react";
import { FaChevronRight } from "react-icons/fa6";

export default function Button({
  text = "Click",
  fullWidth = true,
  size = "medium",
  icon = true,
  rounded = "full",
  bgColor = "#c6d936",
  textColor = "#000000",
  hoverBg = "rgba(0,0,0,0.22)", // <-- NEW dynamic hover background
  hoverOpacity = "0.24",
}) {
  const sizeClasses = {
    small: "px-3 py-2 text-sm",
    medium: "px-6 py-4 text-base",
    large: "px-12 py-4 text-base",
  };

  const roundedClasses = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  return (
    <div className={`relative overflow-hidden group ${roundedClasses[rounded]} w-fit`}>
      
      <button
        style={{ backgroundColor: bgColor, color: textColor }}
        className={`
          flex items-center justify-center font-medium
          ${fullWidth ? "w-full" : "w-fit"}
          ${sizeClasses[size]}
          ${roundedClasses[rounded]}
        `}
      >
        {text}
        {icon && <FaChevronRight className="text-sm mt-1 ml-2" />}
      </button>

      {/* DYNAMIC hover background */}
      <div
        style={{ backgroundColor: hoverBg, 
          opacity:hoverOpacity
         }}  // <-- key line
        className="absolute left-1/2 top-1/2 mt-8 -translate-x-1/2 
        w-[300px] h-[300px] rounded-full opacity-0 
        transition-all duration-700 group-hover:opacity-100 group-hover:-top-27"
      ></div>
    </div>
  );
}
