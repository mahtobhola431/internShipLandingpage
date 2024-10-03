import React, { useRef } from "react";
import photo_1 from "../../src/images/banner_1.png";
import photo_2 from "../../src/images/banner_2.png";
import photo_3 from "../../src/images/banner_3.png";
import photo_4 from "../../src/images/photo_4.avif";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const HeroBanner = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const scrollAmount = scrollRef.current.clientWidth * 1;
    const scrollValue = direction === "left" ? -scrollAmount : scrollAmount;
    scrollRef.current.scrollBy({ left: scrollValue, behavior: "smooth" });
  };

  return (
    <>
      <div className="relative overflow-x-hidden justify-center items-center m-x-10 w-[1640px] mx-[140px] hidden md:flex ">
        <div className="flex items-center ">
          <FaArrowLeft
            className="cursor-pointer mx-5 text-2xl "
            onClick={() => scroll("left")}
          />

          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide py-2 gap-x-5 my-10 snap-x snap-mandatory w-full"
          >
            <img
              src={photo_1}
              alt="Banner 1"
              className=" w-[577px] h-auto rounded-lg cursor-pointer snap-start"
            />
            <img
              src={photo_2}
              alt="Banner 2"
              className=" w-[577px] h-auto rounded-lg cursor-pointer snap-start"
            />
            <img
              src={photo_3}
              alt="Banner 3"
              className=" sm:w-[577px] h-auto rounded-lg cursor-pointer snap-start"
            />
            <img
              src={photo_4}
              alt="Banner 4"
              className=" w-[577px] h-auto rounded-lg cursor-pointer snap-start"
            />
          </div>

          <FaArrowRight
            className="cursor-pointer mx-5 text-2xl "
            onClick={() => scroll("right")}
          />
        </div>
      </div>

      <div className="w-[900px] md:hidden mt-[150px]">
        <div className="relative flex justify-center items-center mx-4">
          <div className="flex mx-10  items-center ">
            <FaArrowLeft className="cursor-pointer mx-5 text-5xl bg-blue-600" />

            <img
              src={photo_1}
              alt="Banner 1"
              className="w-[335px]  h-[180px] rounded-lg cursor-pointer"
            />

            <FaArrowRight className="cursor-pointer mx-5 text-5xl bg-blue-600 " />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
