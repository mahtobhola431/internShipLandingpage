import React from 'react'
import deal_1 from '../../src/images/topdeals_1.png';
import deal_2 from '../../src/images/topdeals_2.png'
import blog_1 from "../../src/images/blog_1.png";
import deal_3 from '../../src/images/topdeals_3.png'

import buy_1 from '../../src/images/buy_1.png';
import buy_2 from '../../src/images/buy_2.png'

import { FaChevronRight } from "react-icons/fa";

import { FaChevronLeft } from "react-icons/fa";
const topDeals=[
    {
        id:1,
        img:deal_2,
        alt:"img",
        offer:"50-60% off",
        range:"on entire page",
        explore:"Explore more"
    },

    {
        id:2,
        img:deal_3,
        alt:"img",
        offer:"70-80% off",
        range:"on entire page",
        explore:"Explore more"
    }
]


const blogEle = [
    {
      id: "1",
      src: blog_1,
      heading: "How to Choose the Most Effective Skincare",
      date: "Sept 30, 2024",
      subHeading:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident…",
      readMore: "Read More",
    },
    {
      id: "2",
      src: blog_1,
      heading: "The Benefits of a Daily Skincare Routine",
      date: "Oct 5, 2024",
      subHeading:
        "Maintaining a consistent skincare routine can lead to healthier skin and a more radiant complexion. Learn how to get started…",
      readMore: "Read More",
    },
    {
      id: "3",
      src: blog_1,
      heading: "Understanding Different Skin Types",
      date: "Oct 10, 2024",
      subHeading:
        "Identifying your skin type is crucial for selecting the right products. Explore the characteristics of various skin types…",
      readMore: "Read More",
    },
    {
      id: "4",
      src: blog_1,
      heading: "Top 10 Ingredients for Youthful Skin",
      date: "Oct 15, 2024",
      subHeading:
        "Discover the most effective ingredients to look for in skincare products that can help maintain your youthful glow…",
      readMore: "Read More",
    },
    {
      id: "5",
      src: blog_1,
      heading: "DIY Skincare Remedies You Can Try at Home",
      date: "Oct 20, 2024",
      subHeading:
        "Explore simple DIY skincare recipes that can nourish and rejuvenate your skin without breaking the bank…",
      readMore: "Read More",
    },
    {
      id: "6",
      src: blog_1,
      heading: "How to Protect Your Skin from Sun Damage",
      date: "Oct 25, 2024",
      subHeading:
        "Learn essential tips to shield your skin from harmful UV rays and maintain its health throughout the year…",
      readMore: "Read More",
    },
  ];


const topBuys=[
    {
        id:1,
        img:buy_1,
        alt:"img",
        offer:"50-60% off",
        range:"on entire page",
        explore:"Explore more"
    },

    {
        id:2,
        img:buy_2,
        alt:"img",
        offer:"70-80% off",
        range:"on entire page",
        explore:"Explore more"
    }
]

const TopDeals = () => {
  return (
    <div>

        <div>
        <div className="relative w-[1640px] h-[404px] mt-[180px] mx-[140px] mb-10 flex justify-center">
          <div
            className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${deal_1})` }}
          >
            <div className="flex flex-col justify-center items-center w-full h-full gap-5">
              <h1 className="text-3xl font-bold text-white">50-90% OFF</h1>
              <p className="text-center max-w-lg text-white">
                At GlamGuider, we are dedicated to helping you discover the
                latest trends in beauty and fashion. Our curated selection of
                products and expert tips empower you to express your unique
                style with confidence.
              </p>
            </div>
          </div>
        </div>

        </div>
        <div>
        <h1 className='text-[40px] text-center'> Top Deals</h1>  
         <div className='w-[1640px]  flex mx-[140px] gap-10 my-10'> 

            
            {
                topDeals.map((deal ,index)=>{
                    return <div
                     key={index} 
                     className='w-[800px] h-[398px] text-pink-800 text-[30px] '
                     style={{ backgroundImage: `url(${deal_2})` }}
                     >
                        <h1>{deal.offer}</h1>
                        <p>{deal.range}</p>
                        <button className='bg-orange-600 rounded-lg ml-5 px-4 '>
                            {deal.explore}
                        </button>

                        
                        
                         </div>

                })
            }

        </div>  
        </div>

        <div>
        <h1 className='text-[40px] text-center'> Best Buys</h1>  
         <div className='w-[1640px]  flex mx-[140px] gap-10 my-10'> 

            
            {
                topBuys.map((deal ,index)=>{
                    return <div
                     key={index} 
                     className='w-[800px] h-[398px] t text-[30px] '
                     style={{ backgroundImage: `url(${buy_2})` }}
                     >
                        <h1>{deal.offer}</h1>
                        <p>{deal.range}</p>
                        <button className='bg-orange-600 rounded-lg ml-5 px-4 '>
                            {deal.explore}
                        </button>

                        
                        
                         </div>

                })
            }

        </div>  
        </div>
      <div>
      <div className="w-[1640px] mx-[140px]"> 
        <h1 className="text-[48px]">Our Popular product</h1>
        <div className="flex ">
        {blogEle.map((blog) => (
              <div
                key={blog.id}
                className=" rounded-lg shadow-md  w-[380px]  px-4"
              >
                <img
                  src={blog.src}
                  alt="blog image"
                  className="h-[330px] w-full object-cover rounded-t-lg "
                />
                <h1 className="text-xl font-bold">{blog.heading}</h1>
             
                <p>{blog.subHeading}</p>
                <button className="text-white w-10/12 py-2 rounded-full bg-[#21747C] mb-3
 my-4">
                  {blog.readMore}
                </button>
              </div>
            ))}

        </div>

        <div className=" flex items-center justify-center my-10 gap-5"> 
        <FaChevronLeft  className="cursor-pointer"/>


        <div className="join">
  <button className="join-item btn">1</button>
  <button className="join-item btn">2</button>
  <button className="join-item btn btn-disabled">...</button>
  <button className="join-item btn">9</button>
  <button className="join-item btn">10</button>
</div>
<FaChevronRight  className="cursor-pointer"/>
        </div>
      </div>


      </div>
    </div>
  )
}

export default TopDeals
