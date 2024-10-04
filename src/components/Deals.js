import React from "react";
import topdeals_1 from "../../src/images/topdeals_1.png";

const Deals = () => {
  const deals = [
    {
      id: 1,
      src: topdeals_1,
      alt: "topdeals_1",
      heading: "The Best Schools In East London",
      date: "24 Aug 2024",
      subHeading:
        "Where Are The Best Sghborhoods Ttypesetting industry. Lorem Ipsum has been the industry's  ",
      readMore: "Read more",
    },
    {
      id: 2,
      src: topdeals_1,
      alt: "topdeals_2",
      heading: "Top Restaurants To Try In East London",
      date: "25 Aug 2024",
      subHeading:
        "Discover the hidden gems and popular spots that every food lover should visit in East London. ",
      readMore: "Read more",
    },
    {
      id: 3,
      src: topdeals_1,
      alt: "topdeals_3",
      heading: "The Best Parks In East London",
      date: "26 Aug 2024",
      subHeading:
        "From serene landscapes to family-friendly spots, explore the best parks .",
      readMore: "Read more",
    },
    {
      id: 4,
      src: topdeals_1,
      alt: "topdeals_4",
      heading: "Top Cultural Events Happening",
      date: "27 Aug 2024",
      subHeading:
        "Experience the vibrant culture of East London through its festivals and events.",
      readMore: "Read more",
    },
    {
      id: 5,
      src: topdeals_1,
      alt: "topdeals_5",
      heading: "Best Shopping Destinations In East London",
      date: "28 Aug 2024",
      subHeading:
        "From boutiques to high-street shops, discover where to shop in East London.",
      readMore: "Read more",
    },
    {
      id: 6,
      src: topdeals_1,
      alt: "topdeals_6",
      heading: "Hidden Beaches Near East London",
      date: "29 Aug 2024",
      subHeading:
        "Explore the best-kept secrets for beach lovers just a short trip from East London.",
      readMore: "Read more",
    },
  ];

  return (
    <div className="m-10 ">
      <h1 className="text-[48px] font-normal  text-center my-5 hidden md:block">Top Deals</h1>
      <h1 className="text-[20px] font-normal  text-center my-5 md:hidden  w-[768px]">Top Deals</h1>
      <div className=" grid-cols-3 gap-4 text-center hidden md:grid ">
        {deals.map((deal) => (
          <div
            key={deal.id}
            className="w-[520px] h-[574px] border-2 rounded-[14px_0_0_0] opacity-100  p-2 shadow-lg mx-5"
          >
            <img
              src={deal.src}
              alt={deal.alt}
              className="w-full h-[300px] object-cover rounded-t-[14px] mb-4"
            />
            <h2 className="font-semibold text-lg ">{deal.heading}</h2>
            <p className="text-gray-600 text-sm mt-2">{deal.date}</p>
            <p className="text-gray-800 mt-2">{deal.subHeading}</p>
            <a href="https://www.google.com" className="text-blue-500 underline mt-2 block">
              {deal.readMore}
            </a>
          </div>
        ))}
        
      </div>



      <div className=" w-[768px] text-center   md:hidden grid grid-cols-2 mx-auto    ">
        {deals.map((deal) => (
          <div
            key={deal.id}
            className="w-[160px] h-[260px] border-2 rounded-[14px_0_0_0] opacity-100   shadow-lg my-5 mx-auto"
          >
            <div>
              <img 
              src={deal.src}
              alt={deal.alt}
              className="w-full h-[85px] object-cover "
            /> 
              </div>
           
            <h2 className="font-semibold text-[14px]  w-[136px] h-[36px] ">{deal.heading}</h2>
            <p className="text-gray-600  text-[12px]  w-[76px] h-[15px] ">{deal.date}</p>
            <div className= "text-[12px]  w-[136px] h-[60px]">
            <p className="text-gray-800  ">{deal.subHeading}</p>
            <a href="https://www.google.com" className="text-blue-500 underline">
              {deal.readMore}
            </a>   
            </div>
           
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Deals;




