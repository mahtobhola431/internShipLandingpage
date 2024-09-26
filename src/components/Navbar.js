import React from "react";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className="w-[1920px] h-[104px] bg-[#F7FCFC] border-b border-[#D8E9E9] opacity-100 flex justify-between items-center px-6">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-[#21747C] pl-[140px]">
          GlamGuide
        </h1>
      </div>

      <div className="flex items-center gap-4 pr-[140px] relative">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 border rounded-full border-gray-300 pl-12 "
          style={{
            width: "467px",
            height: "54px",
            opacity: 1,
          }}
        />
        <CiSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 w-[36px] h-[36px] " />

        <button
          className="text-white px-4 py-2 rounded-full"
          style={{
            background:
              "linear-gradient(0deg, #21747C, #21747C), linear-gradient(118.82deg, #4F9531 -8.63%, #21747C 107.61%)",
            fontFamily: "'Onest', sans-serif",
            fontSize: "20px",
            fontWeight: 500,
            lineHeight: "25.5px",
            letterSpacing: "0.02em",
            textAlign: "left",
            height: "54px",
          }}
        >
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
