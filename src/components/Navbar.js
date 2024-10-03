import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import menu_button from "../../src/images/menu.png";
import cancle_button from "../../src/images/cancel.png";

const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  return (
    <div>
   
         <nav className="w-[1920px] h-[104px] bg-[#F7FCFC] border-b border-[#D8E9E9] opacity-100 justify-between items-center px-6  hidden md:flex">

          
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-[#21747C] pl-[140px]">
            GlamGuide
          </h1>
        </div>

        <div className="flex items-center gap-4 pr-[140px] relative">
          <div>
            <input
              type="text"
              placeholder="Search..."
              className="p-2 border rounded-full border-gray-300 pl-12"
              style={{
                width: "467px",
                height: "54px",
                opacity: 1,
              }}
            />
            <CiSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 w-[36px] h-[36px]" />
          </div>

          <div>
            <Link to="/login">
              <button className="text-white px-4 py-2 rounded-full bg-[#21747C]">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </nav>
     
     
        <nav className="w-full bg-[#F7FCFC] border-b border-[#D8E9E9] flex justify-between overflow-x-hidden items-center p-4 md:hidden">
        <div className="flex items-center w-1/2 gap-10">
          <img
            src={menu_button}
            alt="menu button"
            className="w-[26px] h-[26px] ml-10 cursor-pointer"
            onClick={toggleDropdown}
          />
          <h1 className="text-2xl font-bold text-[#21747C]">GlamGuide</h1>
        </div>

        <div className="w-1/2 flex justify-end">
          <Link to="/login">
            <button className="text-white px-4 py-2 rounded-full bg-[#21747C] mr-10">
              Sign Up
            </button>
          </Link>
        </div>
      </nav>

    
     <div className="hidden md:block">
      <DropdownMenu/>

     </div>

      
      <div className="md:hidden text-center">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 border rounded-full border-gray-300 mx-5 w-[80%] my-2"
          style={{
            height: "54px",
            opacity: 1,
          }}
        />
      </div>

      {isDropdownVisible && (
        <div className="absolute top-0 left-0 w-[30%] h-[100vh] bg-gray-500 z-10">
          <DropdownMenu />
          <button onClick={toggleDropdown} className="absolute top-2 right-2">
            <img src={cancle_button} alt="Close" />
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
