



import React, { useRef } from "react";
import photo_1 from "../../src/images/banner_1.png";
import photo_2 from "../../src/images/banner_2.png";
import photo_3 from "../../src/images/banner_3.png";
import photo_4 from '../../src/images/photo_4.avif';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const HeroBanner = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = direction === 'left' ? -577 : 577; 
    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <div className="relative overflow-hidden flex justify-center items-center m-10 ">
      <FaArrowLeft 
        className="cursor-pointer  mx-5" 
        onClick={() => scroll('left')} 
      />
      
      <div
        ref={scrollRef}
        className="flex overflow-x-hidden scrollbar-hide py-2 gap-x-10"
      >
        <img
          src={photo_1}
          alt="Banner 1"
          className="w-[577px] h-[435px] rounded-[20px_0_0_0] cursor-pointer"
        />
        <img
          src={photo_2}
          alt="Banner 2"
          className="w-[577px] h-[435px] rounded-[20px_0_0_0] cursor-pointer"
        />
        <img
          src={photo_3}
          alt="Banner 3"
          className="w-[577px] h-[435px] rounded-[20px_0_0_0] cursor-pointer"
        />
        <img
          src={photo_4}
          alt="Banner 4"
          className="w-[577px] h-[435px] rounded-[20px_0_0_0] cursor-pointer"
        />
      </div>

      <FaArrowRight 
        className="cursor-pointer mx-5" 
        onClick={() => scroll('right')} 
      />
    </div>
  );
};

export default HeroBanner;

