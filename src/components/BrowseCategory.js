
import React, { useState } from "react";
import category_1 from "../../src/images/category_1.png";
import category_2 from "../../src/images/category_2.png";
import category_3 from "../../src/images/category_3.png";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"; 

const BrowseCategory = () => {
  const categories = [
    { id: 1, src: category_1, alt: "Category 1" },
    { id: 2, src: category_2, alt: "Category 2" },
    { id: 3, src: category_3, alt: "Category 3" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    if (currentIndex < categories.length - 2) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (

    <div>


<div className="m-5  hidden md:block">
      <h1 className="text-[48px] font-normal leading-[57.6px] text-center my-5">
        Browse By Category
      </h1>

      <div className="h-[451px] hidden md:block">
        <div className="flex justify-center items-center my-5 space-x-10">
          {categories.map((category) => (
            <img
              key={category.id}
              src={category.src}
              alt={category.alt}
              className="w-[320px] h-[253px] object-cover rounded-lg shadow-lg cursor-pointer"
            />
          ))}
        </div>
      </div>

     
    </div>
   

    <div className="md:hidden w-[768px]  mx-10">
 <h1 className="text-[30px] font-normal  text-center my-5 md:hidden">
        Browse By Category
      </h1>
 
   
      <div className="  flex items-center justify-center my-5  ">
        <button onClick={prev} className="text-5xl">
          <HiChevronLeft />
        </button>

        <div className="flex space-x-4">
          {categories.slice(currentIndex, currentIndex + 2).map((category) => (
            <img
              key={category.id}
              src={category.src}
              alt={category.alt}
              className="w-[150px] h-[120px] object-cover rounded-lg shadow-lg cursor-pointer"
            />
          ))}
        </div>

        <button onClick={next} className="text-5xl">
          <HiChevronRight />
        </button>
      </div>
    </div>

    </div>
    
  );
};

export default BrowseCategory;
