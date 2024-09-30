
import React, { useState } from "react";
import blogs_img from "../../src/images/contact_us.png";
import blog_1 from "../../src/images/blog_1.png";
import recent_post1 from '../../src/images/review_1.png';
import recent_post2 from '../../src/images/recent_post2.png';
import { FaChevronRight } from "react-icons/fa";


const Blogs = () => {
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

  const [activeIndex, setActiveIndex] = useState(null);

  const archiveItems = [
      { month: 'SEPTEMBER 2024', details: 'Details about September 2024...' },
      { month: 'AUGUST 2024', details: 'Details about August 2024...' },
      { month: 'JULY 2024', details: 'Details about July 2024...' },
      { month: 'JUNE 2024', details: 'Details about June 2024...' },
      { month: 'MAY 2024', details: 'Details about May 2024...' }
  ];

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
};

const tags = [
    'Skincare',
    'Beauty',
    'Fashion',
    'Makeup',
    'Health',
    'Wellness',
    'Lifestyle',
    'Trends',
    'DIY'
];

  return (
    <div>
      <div>
        <div className="relative w-[1640px] h-[404px] mt-[180px] mx-[140px] mb-10 flex justify-center">
          <div
            className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${blogs_img})` }}
          >
            <div className="flex flex-col justify-center items-center w-full h-full gap-5">
              <h1 className="text-3xl font-bold">BLOGS</h1>
              <p className="text-center max-w-lg">
                At GlamGuider, we are dedicated to helping you discover the
                latest trends in beauty and fashion. Our curated selection of
                products and expert tips empower you to express your unique
                style with confidence.
              </p>
            </div>
          </div>
        </div>

        <div className="w-[1640px] mx-[140px]  flex">
          <div className="w-[1320px] py-5 flex flex-wrap  gap-12">
            {blogEle.map((blog) => (
              <div
                key={blog.id}
                className=" rounded-lg shadow-md  w-[612px] h-[590px] px-4"
              >
                <img
                  src={blog.src}
                  alt="blog image"
                  className="h-[430px] w-full object-cover rounded-t-lg "
                />
                <h1 className="text-xl font-bold">{blog.heading}</h1>
                <p>{blog.date}</p>
                <p>{blog.subHeading}</p>
                <button className="text-white px-4 py-2 rounded-full bg-[#21747C] my-4">
                  {blog.readMore}
                </button>
              </div>
            ))}
          </div>

          <div className="w-[289px]  h-[1099px]  flex flex-col gap-5 ">
            <h1> CATEGORIES</h1> 
            <div>
              <select id="blogs" className="w-full h-[47px] bg-slate-300">
                <option value="men">men</option>
                <option value="women">women</option>
                <option value="children">children</option>
              </select>
            </div>
            <div>
                <h1 className="text-[22px] ">Recent Post</h1>
                <div className="  w-[234px] flex flex-col gap-5">
                    <div className="flex items-center justify-between ">
                      <img src={recent_post1} alt="'this is the post img" className="w-[66px] h-[66px]"/>
                    <h1>GMOs: Your Right</h1>    
                    </div>
                    <div className="flex items-center justify-between">
                    <img src={recent_post2} alt="'this is the post img" className="w-[66px] h-[66px]"/>
                    <h1>GMOs: Your Right</h1>   
                    </div>
                  
                </div>
            </div>
            <div>
                <h1 className="text-[22px]">ARCHIEVE</h1>
              
                {archiveItems.map((item, index) => (
                <div key={index} className="flex flex-col mb-2">
                    <div 
                        className="flex items-center cursor-pointer"
                        onClick={() => handleClick(index)}
                    >
                        <FaChevronRight className={`transition-transform ${activeIndex === index ? 'rotate-90' : ''}`} />
                        <p className="ml-2">{item.month}</p>
                    </div>
                    {activeIndex === index && (
                        <p className="ml-6 text-gray-700">{item.details}</p>
                    )}
                </div>
            ))}


            </div>

            <div>
                <h1 className="text-[22px]">Text Widget</h1>
                <p className="[16px]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, magni commodi fugit in quo provident.</p>
            </div>

            <div>
                <h1 className="text-[22px]">TAGS</h1>

                <div className="grid grid-cols-3 gap-4 mt-4">
                {tags.map((tag, index) => (
                    <div key={index} className=" text-center bg-[#21747C] text-white rounded-lg p-2">
                        {tag}
                    </div>
                ))}
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
