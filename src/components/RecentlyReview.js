import React from "react";
import review_1 from "../../src/images/review_1.png";
import review_2 from "../../src/images/review_2.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const RecentlyReview = () => {
  return (
    <div className=" m-10 ">
      <h1 className=" text-[48px] font-normal leading-[57.6px] text-center my-5 ">
        Recently Reviewed
      </h1>

      <div className="relative overflow-hidden flex justify-center items-center m-10 ">
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
    </div>
  );
};

export default RecentlyReview;
