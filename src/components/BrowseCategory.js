import React from "react";
import category_1 from "../../src/images/category_1.png";
import category_2 from "../../src/images/category_2.png";
import category_3 from "../../src/images/category_3.png";

const BrowseCategory = () => {
  const categories = [
    { id: 1, src: category_1, alt: "Category 1" },
    { id: 2, src: category_2, alt: "Category 2" },
    { id: 3, src: category_3, alt: "Category 3" },
  ];

  


  return (
    <div className="h-[451px] m-10 ">
      <h1 className="text-[48px] font-normal leading-[57.6px] text-center my-5">
        Browse By Category
      </h1>
      <div className="flex justify-center  items-center my-5 space-x-10">
        {categories.map((category) => (
          <img
            key={category.id}
            src={category.src}
            alt={category.alt}
            className="w-[320px] h-[253px] object-cover rounded-lg shadow-lg flex justify-center items-center cursor-pointer mx-10"
          />
        ))}
      </div>
    </div>
  );
};

export default BrowseCategory;
