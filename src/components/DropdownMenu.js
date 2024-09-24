
import React, { useState } from 'react';
import { FaChevronDown } from "react-icons/fa";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState({});

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

  const handleMouseEnter = (category) => {
    setIsOpen((prev) => ({ ...prev, [category]: true }));
  };

  const handleMouseLeave = (category) => {
    setIsOpen((prev) => ({ ...prev, [category]: false }));
  };

  return (
    <div className="relative flex justify-center bg-[#21747C] h-[60px]">
 
<div className='flex items-center py-2 px-4 text-white hover:bg-teal-700 focus:outline-none gap-[5px] m-6'>
        <button
          onMouseEnter={() => handleMouseEnter('Categories')}
          onMouseLeave={() => handleMouseLeave('Categories')}
        >
          Categories
        </button>
        <FaChevronDown className='text-white' />
      </div>
{isOpen.Categories && (
        <ul className="absolute mt-2 w-48 bg-white text-gray-800 shadow-lg rounded-lg z-10">
          {Object.keys(categoryItems).map((category) => (
            <li key={category} className="px-2 py-2 hover:bg-gray-100">
              <span>{category}</span>
            </li>
          ))}
        </ul>
      )}
  

      
      
      


      <div className='flex items-center py-2 px-4 text-white hover:bg-teal-700 focus:outline-none gap-[5px] m-6'>
        <button
          onMouseEnter={() => handleMouseEnter('Men')}
          onMouseLeave={() => handleMouseLeave('Men')}
        >
          Men
        </button>
        <FaChevronDown className='text-white' />
      </div>
      {isOpen.Men && (
        <ul className="absolute mt-8 w-48 bg-white text-gray-800 shadow-lg rounded-lg z-10">
          {menItems.map((item, index) => (
            <li key={index} className="px-4 py-2 hover:bg-gray-100">
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>
      )}

      <div className='flex items-center py-2 px-4 text-white hover:bg-teal-700 focus:outline-none gap-[5px] m-6'>
        <button
          onMouseEnter={() => handleMouseEnter('Women')}
          onMouseLeave={() => handleMouseLeave('Women')}
        >
          Women
        </button>
        <FaChevronDown className='text-white' />
      </div>
      {isOpen.Women && (
        <ul className="absolute mt-8 w-48 bg-white text-gray-800 shadow-lg rounded-lg z-10">
          {womenItems.map((item, index) => (
            <li key={index} className="px-4 py-2 hover:bg-gray-100">
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>
      )}

      <div className='flex items-center py-2 px-4 text-white hover:bg-teal-700 focus:outline-none gap-[5px] m-6'>
        <button
          onMouseEnter={() => handleMouseEnter('Children')}
          onMouseLeave={() => handleMouseLeave('Children')}
        >
          Children
        </button>
        <FaChevronDown className='text-white' />
      </div>
      {isOpen.Children && (
        <ul className="absolute mt-8 w-48 bg-white text-gray-800 shadow-lg rounded-lg z-10">
          {childrenItems.map((item, index) => (
            <li key={index} className="px-4 py-2 hover:bg-gray-100">
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
