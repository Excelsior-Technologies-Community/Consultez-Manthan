import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { BsBehance } from "react-icons/bs";
import { HiPlus } from "react-icons/hi";

/* ================= DATA ================= */
const teamData = [
  {
    img: "https://html.kodesolution.com/2025/consultez-html-v2/images/team/team-image1.jpg",
    name: "Guy Hawkins",
    category: "Admin",
  },
  {
    img: "https://html.kodesolution.com/2025/consultez-html-v2/images/team/team-image2.jpg",
    name: "Jacob Jones",
    category: "Manager",
  },
  {
    img: "https://html.kodesolution.com/2025/consultez-html-v2/images/team/team-image3.jpg",
    name: "Kristin Watson",
    category: "Consultant",
  },
  {
    img: "https://html.kodesolution.com/2025/consultez-html-v2/images/team/team-image4.jpg",
    name: "Bessie Cooper",
    category: "Founder",
  },
];

/* ================= MAIN ================= */
const TeamSection = () => {
  return (
    <div className="w-full px-4">
      <div className="
        grid grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-4
        gap-6
        justify-items-center
      ">
        {teamData.map((item, index) => (
          <TeamCard
            key={index}
            img={item.img}
            name={item.name}
            category={item.category}
          />
        ))}
      </div>
    </div>
  );
};

/* ================= CARD ================= */
const TeamCard = ({ img, name, category }) => {
  return (
    <div className="
      w-[310px] h-[450px]
      rounded-2xl overflow-hidden
      relative group bg-[#0d3b3a] shadow
    ">

      {/* IMAGE */}
      <img
        src={img}
        alt={name}
        className="
          w-full h-[78%] object-cover
          transition-all duration-500
          group-hover:grayscale
          group-hover:rounded-b-3xl
        "
      />

      {/* GRADIENT */}
      <div
        className="
          absolute inset-0 h-[78%]
          bg-gradient-to-tr
          from-[#c6d936]/60 via-transparent to-transparent
          opacity-0 group-hover:opacity-100
          transition duration-500 group-hover:rounded-b-3xl
        "
      />

      {/* SOCIAL ICONS */}
      <div
        className="
          absolute right-5 top-1/2 -translate-y-1/2
          flex flex-col gap-3
          opacity-0 group-hover:opacity-100
          transition duration-500 z-10 lg:-mt-8
        "
      >
        <SocialIcon><FaFacebookF /></SocialIcon>
        <SocialIcon><FaInstagram /></SocialIcon>
        <SocialIcon><FaLinkedinIn /></SocialIcon>
        <SocialIcon><BsBehance /></SocialIcon>
      </div>

      {/* PLUS BUTTON */}
      <div className="absolute right-4 bottom-[92px] z-20">
        <div className="
          w-12 h-12 rounded-full
          bg-[#0d3b3a] text-white
          flex items-center justify-center
          group-hover:bg-[#c6d936]
          cursor-pointer transition
        ">
          <HiPlus size={20} className="group-hover:rotate-45 transition" />
        </div>
      </div>

      {/* INFO */}
      <div className="
        absolute bottom-0 left-0 w-full
        px-6 py-5
        bg-white
        transition duration-300
        group-hover:bg-[#0d3b3a]
      ">
        <h3 className="
          text-2xl mb-2 font-bold
          text-black group-hover:text-white
        ">
          {name}
        </h3>
        <p className="
          text-sm font-medium
          text-black group-hover:text-white
        ">
          {category}
        </p>
      </div>
    </div>
  );
};

/* ================= ICON ================= */
const SocialIcon = ({ children }) => (
  <div className="
    w-10 h-10 rounded-full
    bg-white text-[#0d3b3a]
    flex items-center justify-center
    cursor-pointer">
    {children}
  </div>
);

export default TeamSection;


// import React from "react";
// import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
// import { BsBehance } from "react-icons/bs";
// import { HiPlus, HiX } from "react-icons/hi";

// const data = [
//   {
//     img: "https://html.kodesolution.com/2025/consultez-html-v2/images/team/team-image1.jpg",
//     namee: "Guy Hawkins",
//     category: "Admin",
//   },
//   {
//     img: "https://html.kodesolution.com/2025/consultez-html-v2/images/team/team-image2.jpg",
//     namee: "Jacob Jones",
//     category: "Manager",
//   },
//   {
//     img: "https://html.kodesolution.com/2025/consultez-html-v2/images/team/team-image3.jpg",
//     namee: "Kristin Watson",
//     category: "consultant",
//   },
//   {
//     img: "https://html.kodesolution.com/2025/consultez-html-v2/images/team/team-image4.jpg",
//     namee: "Bassie Cooper",
//     category: "Founder",
//   },
// ];

// const SocialIcon = ({ children }) => (
//   <div
//     className="w-10 h-10 rounded-full bg-white text-[#0d3b3a]
//                   flex items-center justify-center
//                   cursor-pointer">
//     {children}
//   </div>
// );

// const TeamCard = () => {
//   return (
//     <div className="w-[310px] h-[450px] rounded-2xl overflow-hidden relative group bg-white shadow">
//       <div className="bg-[#0d3b3a]">
//         <img
//           src="https://html.kodesolution.com/2025/consultez-html-v2/images/team/team-image1.jpg"
//           alt="team"
//           className="w-full h-[78%] object-cover transition-all duration-500
//                    group-hover:grayscale group-hover:rounded-b-3xl"
//         />

//         <div
//           className="absolute inset-0 bg-gradient-to-tr
//                       from-[#c6d936]/80 via-transparent to-transparent
//                       opacity-0 group-hover:opacity-100 transition duration-500 group-hover:rounded-b-3xl h-[78%] -mt-1"
//         />

//         <div
//           className="absolute right-4 top-1/2 -translate-y-1/2
//                       flex flex-col gap-3 -mt-8
//                       opacity-0 group-hover:opacity-100
//                       transition duration-500 z-10">
//           <SocialIcon>
//             <FaFacebookF />
//           </SocialIcon>
//           <SocialIcon>
//             <FaInstagram />
//           </SocialIcon>
//           <SocialIcon>
//             <FaLinkedinIn />
//           </SocialIcon>
//           <SocialIcon>
//             <BsBehance />
//           </SocialIcon>
//         </div>

//         <div className="absolute right-4 bottom-[92px] z-20">
//           <div
//             className="w-12 h-12 rounded-full bg-[#0d3b3a] text-white
//                         flex items-center justify-center
//                         group-hover:bg-[#c6d936] cursor-pointer duration-500">
//             <HiPlus size={20} className=" group-hover:rotate-45 duration-200" />
//           </div>
//         </div>

//         <div
//           className="absolute bottom-0 left-0 w-full px-6 py-5.5
//                       bg-white transition group-hover:bg-[#0d3b3a] duration-300 text-start">
//           <h3 className="text-2xl mb-2 font-bold text-black group-hover:text-white ">
//             Guy Hawkins
//           </h3>
//           <p className="text-sm font-medium text-black group-hover:text-white">
//             Admin
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TeamCard;
