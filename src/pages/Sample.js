import React from "react";
import sample_1 from "../../src/images/sample_1.png";
import sample_str_1 from "../../src/images/sample_str_1.png";
import sample_str_2 from "../../src/images/sample_str_2.png";
import sample_str_3 from "../../src/images/sample_str_3.png";
import sample_str_4 from "../../src/images/sample_str_4.png";
import sample_str_5 from "../../src/images/sample_str_5.png";
import prod_1 from '../../src/images/prod_1.png';
import deal_2 from '../../src/images/topdeals_2.png';

 
import { FaChevronRight } from "react-icons/fa";

import { FaChevronLeft } from "react-icons/fa";
const Sample = () => {

    const productEle = [
        {
          id: "1",
          src: prod_1,
          productName: "Effective Skincare Product",
          subHeading:
            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident…",
          exploreMore: "Explore More",
        },
        {
          id: "2",
          src: prod_1,
          productName: "Daily Skincare Routine Product",
          subHeading:
            "Maintaining a consistent skincare routine can lead to healthier skin and a more radiant complexion. Learn how to get started…",
          exploreMore: "Explore More",
        },
        {
          id: "3",
          src: prod_1,
          productName: "Skin Type Identification Product",
          subHeading:
            "Identifying your skin type is crucial for selecting the right products. Explore the characteristics of various skin types…",
          exploreMore: "Explore More",
        },
        {
          id: "4",
          src: prod_1,
          productName: "Youthful Skin Ingredients Product",
          subHeading:
            "Discover the most effective ingredients to look for in skincare products that can help maintain your youthful glow…",
          exploreMore: "Explore More",
        },
        {
          id: "5",
          src: prod_1,
          productName: "DIY Skincare Remedies Product",
          subHeading:
            "Explore simple DIY skincare recipes that can nourish and rejuvenate your skin without breaking the bank…",
          exploreMore: "Explore More",
        },
        {
          id: "6",
          src: prod_1,
          productName: "Sun Protection Skincare Product",
          subHeading:
            "Learn essential tips to shield your skin from harmful UV rays and maintain its health throughout the year…",
          exploreMore: "Explore More",
        },
      ];
      
      const topDeals = [
        {
          id: 1,
          img: deal_2,
          alt: "Deal 1 Image",
          offer: "50-60% off",
          range: "on entire page",
          explore: "Explore more",
        },
        {
          id: 2,
          img: deal_2,
          alt: "Deal 2 Image",
          offer: "70-80% off",
          range: "on entire page",
          explore: "Explore more",
        },
        {
          id: 3,
          img: deal_2,
          alt: "Deal 3 Image",
          offer: "30% off",
          range: "on selected items",
          explore: "Explore more",
        },
        {
          id: 4,
          img: deal_2,
          alt: "Deal 4 Image",
          offer: "25% off",
          range: "on first purchase",
          explore: "Explore more",
        },
      ];
      


  return (
    <div>
      <div className="relative w-[1640px] h-[404px] mt-[180px] mx-[140px] mb-10 flex justify-center">
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${sample_1})` }}
        >
          <div className="flex flex-col justify-center items-center w-full h-full gap-5">
            <h1 className="text-3xl font-bold">Sample</h1>
            <p className="text-center max-w-lg">
              At GlamGuider, we are dedicated to helping you discover the latest
              trends in beauty and fashion. Our curated selection of products
              and expert tips empower you to express your unique style with
              confidence.
            </p>
          </div>
        </div>
      </div>

   
   
   
      <div className="w-[1640px] mx-[140px]">
        <div className="flex items-center justify-center my-5 gap-5">
          <img src={sample_str_1} alt="store" />
          <img src={sample_str_2} alt="store" />
          <img src={sample_str_3} alt="store" />
          <img src={sample_str_4} alt="store" />
          <img src={sample_str_5} alt="store" />
        </div>
        <div className="bg-[#EDF5F5] text-center my-5">
          <p className="p-3">
            ShopClues, your one-stop destination for diverse and affordable
            online shopping, offers a wide array of products, from electronics
            to fashion, at unbeatable prices. With CashKaro, enjoy exclusive
            coupon codes and cashback on top of their existing offers. When you
            shop through CashKaro, we earn a commission from ShopClues and pass
            it on to you as Cashback, which you can easily transfer to your
            bank.see less
          </p>
          <h1 className="text-[26px] py-3">
            Wide range of Products coming with great Deals Everyday
          </h1>
        </div>

        <div className="flex gap-5 ">
          <div className="bg-[#21747C] w-[800px] h-[149px] flex items-center px-[40px] rounded-lg text-white text-[26px] my-5">
            <p>
              Upto 85% Off + Flat 10% Off on Orders above ₹149 Use Code ☛
              MYSHOPCLUES
            </p>
          </div>

          <div className="bg-[#21747C] w-[800px] h-[149px] flex items-center px-[40px]  rounded-lg text-white text-[26px] my-5">
            <p>
              Upto 85% Off + Flat 10% Off on Orders above ₹149 Use Code ☛
              MYSHOPCLUES
            </p>
          </div>
        </div>
      </div>
      <div className="text-center my-5">
        <button className='bg-[#21747C] w-[335px] h-[50px] text-white text-[16px] rounded-[80px]'> Earn Upto 70% Reward</button>
      </div>


      <div>


      <div>
        <div className="w-[1640px] mx-[140px]">
          <h1 className="text-[48px] text-center">All Products</h1>
          <div className="flex flex-wrap justify-start gap-10">
            {productEle.map((prod) => (
              <div
                key={prod.id}
                className=" rounded-lg shadow-md  w-[380px]  px-4"
              >
                <img
                  src={prod.src}
                  alt="product"
                  className="h-[330px] w-full object-cover rounded-t-lg "
                />
                <h1 className="text-xl font-bold">{prod.productName}</h1>

                <p>{prod.subHeading}</p>
                <button className="text-white w-10/12 py-2 rounded-full bg-[#21747C] mb-3 my-4">
                  {prod.exploreMore}
                </button>
              </div>
            ))}
          </div>

          <div className=" flex items-center justify-center my-10 gap-5">
            <FaChevronLeft className="cursor-pointer" />

            <div className="join">
              <button className="join-item btn">1</button>
              <button className="join-item btn">2</button>
              <button className="join-item btn btn-disabled">...</button>
              <button className="join-item btn">9</button>
              <button className="join-item btn">10</button>
            </div>
            <FaChevronRight className="cursor-pointer" />
          </div>
        </div>
      </div>
      </div>
      <div className="w-[1640px] mx-[140px] ">
        <h1 className="text-center text-[48px]">More Offers</h1>
        <div className="flex flex-wrap gap-5 justify-center my-10">
  
          {topDeals.map((deal, index) => {
            return (
              <div
                key={index}
                className="w-[800px] h-[398px] t text-[30px] "
                style={{ backgroundImage: `url(${deal_2})` }}
              >
                <h1>{deal.offer}</h1>
                <p>{deal.range}</p>
                <button className="bg-orange-600 rounded-lg ml-5 px-4 ">
                  {deal.explore}
                </button>
              </div>
            );
          })}
      
      </div>

        <div>

        </div>
      </div>
    </div>
  );
};

export default Sample;
