

import React from 'react';
import { FaChevronDown } from "react-icons/fa";

const DropdownMenu = () => {
  const categoryItems = {
    BodyCare: [
      { label: 'Body Lotion', link: '#' },
      { label: 'Body Wash', link: '#' },
    ],
    HairCare: [
      { label: 'Shampoo', link: '#' },
      { label: 'Conditioner', link: '#' },
    ],
    FaceSkinCare: [
      { label: 'Face Wash', link: '#' },
      { label: 'Moisturizer', link: '#' },
    ],
  };

  const menItems = [
    { label: 'Shirts', link: '#' },
    { label: 'Pants', link: '#' },
    { label: 'Shoes', link: '#' },
  ];

  const womenItems = [
    { label: 'Dresses', link: '#' },
    { label: 'Tops', link: '#' },
    { label: 'Shoes', link: '#' },
  ];

  const childrenItems = [
    { label: 'Toys', link: '#' },
    { label: 'Clothing', link: '#' },
    { label: 'Accessories', link: '#' },
  ];

  const sampleItems = [
    { label: 'Sample Product 1', link: '#' },
    { label: 'Sample Product 2', link: '#' },
  ];

  const dealsItems = [
    { label: 'Deal 1', link: '#' },
    { label: 'Deal 2', link: '#' },
  ];

  return (
    <div className="relative flex justify-center bg-[#21747C] h-[60px] space-x-6 ">

<div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn m-1 bg-transparent border-none text-white">
          Categories <FaChevronDown className='text-white' />
        </div>
        <ul tabIndex={0} className="dropdown-content menu rounded-box z-[1] w-48 p-2 shadow">
          {Object.keys(categoryItems).map((category) => (
            <li key={category} className="px-4 py-2 bg-[#21747C] text-white hover:bg-[#1A5B65]">
              <span>{category}</span>
              <ul className="ml-4">
                {categoryItems[category].map((item) => (
                  <li key={item.label} className="px-2 py-1 bg-[#21747C] text-white hover:bg-[#1A5B65]">
                    <a href={item.link}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
  
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn m-1 bg-transparent border-none text-white">
          Body Care <FaChevronDown className='text-white' />
        </div>
        <ul tabIndex={0} className="dropdown-content menu rounded-box z-[1] w-48 p-2 shadow">
          {categoryItems.BodyCare.map((item, index) => (
            <li key={index} className="px-4 py-2 bg-[#21747C] text-white hover:bg-[#1A5B65]">
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn m-1 bg-transparent border-none text-white">
          Hair Care <FaChevronDown className='text-white' />
        </div>
        <ul tabIndex={0} className="dropdown-content menu rounded-box z-[1] w-48 p-2 shadow">
          {categoryItems.HairCare.map((item, index) => (
            <li key={index} className="px-4 py-2 bg-[#21747C] text-white hover:bg-[#1A5B65]">
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn m-1 bg-transparent border-none text-white">
          Face & Skin Care <FaChevronDown className='text-white' />
        </div>
        <ul tabIndex={0} className="dropdown-content menu rounded-box z-[1] w-48 p-2 shadow">
          {categoryItems.FaceSkinCare.map((item, index) => (
            <li key={index} className="px-4 py-2 bg-[#21747C] text-white hover:bg-[#1A5B65]">
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>

    

 
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn m-1 bg-transparent border-none text-white">
          Men <FaChevronDown className='text-white' />
        </div>
        <ul tabIndex={0} className="dropdown-content menu rounded-box z-[1] w-48 p-2 shadow">
          {menItems.map((item, index) => (
            <li key={index} className="px-4 py-2 bg-[#21747C] text-white hover:bg-[#1A5B65]">
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn m-1 bg-transparent border-none text-white">
          Women <FaChevronDown className='text-white' />
        </div>
        <ul tabIndex={0} className="dropdown-content menu rounded-box z-[1] w-48 p-2 shadow">
          {womenItems.map((item, index) => (
            <li key={index} className="px-4 py-2 bg-[#21747C] text-white hover:bg-[#1A5B65]">
              <a href={item.link}>{item.label}</a>
            </li> 
          ))}
        </ul>
      </div>

      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn m-1 bg-transparent border-none text-white">
          Children <FaChevronDown className='text-white' />
        </div>
        <ul tabIndex={0} className="dropdown-content menu rounded-box z-[1] w-48 p-2 shadow">
          {childrenItems.map((item, index) => (
            <li key={index} className="px-4 py-2 bg-[#21747C] text-white hover:bg-[#1A5B65]">
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>

        <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn m-1 bg-transparent border-none text-white">
          Sample <FaChevronDown className='text-white' />
        </div>
        <ul tabIndex={0} className="dropdown-content menu rounded-box z-[1] w-48 p-2 shadow">
          {sampleItems.map((item, index) => (
            <li key={index} className="px-4 py-2 bg-[#21747C] text-white hover:bg-[#1A5B65]">
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>


      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn m-1 bg-transparent border-none text-white">
          Deals & Coupons <FaChevronDown className='text-white' />
        </div>
        <ul tabIndex={0} className="dropdown-content menu rounded-box z-[1] w-48 p-2 shadow">
          {dealsItems.map((item, index) => (
            <li key={index} className="px-4 py-2 bg-[#21747C] text-white hover:bg-[#1A5B65]">
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;

