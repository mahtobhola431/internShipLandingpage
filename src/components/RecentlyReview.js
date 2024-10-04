import React from "react";
import review_1 from "../../src/images/review_1.png";
import review_2 from "../../src/images/review_2.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const RecentlyReview = () => {
  return (
    <div className=" m-10 ">
      <h1 className=" text-[48px] font-normal leading-[57.6px] text-center my-5 hidden md:block ">
        Recently Reviewed
      </h1>

      <div className="relative overflow-hidden  justify-center items-center m-10  hidden md:flex">
        <FaArrowLeft className="cursor-pointer mx-5" />

        <div className="flex overflow-x-hidden scrollbar-hide py-2 gap-x-10">
          <img
            src={review_1}
            alt="Banner 1"
            className="w-[730px] h-[397.6px] rounded-[20px_0_0_0] cursor-pointer"
          />
          <img
            src={review_2}
            alt="Banner 2"
            className="w-[730px] h-[397.6px] rounded-[20px_0_0_0] cursor-pointer"
          />
        </div>

        <FaArrowRight className="cursor-pointer mx-5 " />
      </div>



  <h1 className=" text-[48px] font-normal leading-[57.6px] text-center my-5 md:hidden w-[900px] ">
        Recently Reviewed
      </h1>




<div className="w-[768px] md:hidden  ">
        <div className="relative flex justify-center items-center ">
          <div className="flex mx-10  items-center gap-10 justify-center ">
            <FaArrowLeft className="cursor-pointer mx-5 text-5xl " />

            <img
              src={review_1}
              alt="Banner 1"
              className="w-[335px]  h-[180px] rounded-lg cursor-pointer"
            />

            <FaArrowRight className="cursor-pointer mx-5 text-5xl " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentlyReview;
