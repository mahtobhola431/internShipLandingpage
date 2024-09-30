import React from "react";
import product_detail1 from "../../src/images/contact_us.png";
import prod_detail from "../../src/images/pro_detail1.png";
import symbol from "../../src/images/flower.png";
import blog_1 from "../../src/images/blog_1.png";

const ProductDetails = () => {
  const proDetail = [
    {
      id: "1",
      src: blog_1,
      product: "Body Shop Skincare",
      subHeading:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident…",
      exploreMore: "Explore More",
    },
    {
      id: "2",
      src: blog_1,
      product: "Daily Hydration Cream",
      subHeading:
        "Maintaining a consistent skincare routine can lead to healthier skin and a more radiant complexion. Learn how to get started…",
      exploreMore: "Explore More",
    },
    {
      id: "3",
      src: blog_1,
      product: "Gentle Cleanser",
      subHeading:
        "Identifying your skin type is crucial for selecting the right products. Explore the characteristics of various skin types…",
      exploreMore: "Explore More",
    },
    {
      id: "4",
      src: blog_1,
      product: "Youthful Glow Serum",
      subHeading:
        "Discover the most effective ingredients to look for in skincare products that can help maintain your youthful glow…",
      exploreMore: "Explore More",
    },
  ];

  return (
    <div className="">
      <div className="relative w-[1640px] h-[404px] mt-[180px] mx-[140px] mb-10 flex justify-center">
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${product_detail1})` }}
        >
          <div className="flex flex-col justify-center items-center w-full h-full gap-5">
            <h1 className="text-3xl font-bold">Body Wash</h1>
            <p className="text-center max-w-lg">
              At GlamGuider, we are dedicated to helping you discover the latest
              trends in beauty and fashion. Our curated selection of products
              and expert tips empower you to express your unique style with
              confidence.
            </p>
          </div>
        </div>
      </div>

      <div className="my-10 w-[1640px] mx-[140px]">
        <h1 className="text-[48px] text-center">
          Why You’ll Love The Products
        </h1>
        <p className="text-[22px]">
          Choosing a body wash infused with organic and Ayurvedic ingredients
          offers a holistic approach to skincare that benefits both the body and
          the environment. Here are some key reasons why these natural
          components are essential:
        </p>

        <div className="grid grid-cols-2 gap-5 my-10">
          <div className="w-[800px] h-[215px] bg-[#EDF5F5] p-2">
            <h1 className="text-[26px]">Gentle and Nourishing</h1>
            <p>
              Organic ingredients like aloe vera and coconut oil provide gentle
              hydration, making them suitable for all skin types, including
              sensitive skin. They help maintain the skin’s moisture barrier
              without harsh chemicals.
            </p>
          </div>
          <div className="w-[800px] h-[215px] bg-[#EDF5F5] p-2">
            <h1 className="text-[26px]">Gentle and Nourishing</h1>
            <p>
              Organic ingredients like aloe vera and coconut oil provide gentle
              hydration, making them suitable for all skin types, including
              sensitive skin. They help maintain the skin’s moisture barrier
              without harsh chemicals.
            </p>
          </div>
          <div className="w-[800px] h-[215px] bg-[#EDF5F5] p-2">
            <h1 className="text-[26px]">Gentle and Nourishing</h1>
            <p>
              Organic ingredients like aloe vera and coconut oil provide gentle
              hydration, making them suitable for all skin types, including
              sensitive skin. They help maintain the skin’s moisture barrier
              without harsh chemicals.
            </p>
          </div>
          <div className="w-[800px] h-[215px] bg-[#EDF5F5] p-2">
            <h1 className="text-[26px]">Gentle and Nourishing</h1>
            <p>
              Organic ingredients like aloe vera and coconut oil provide gentle
              hydration, making them suitable for all skin types, including
              sensitive skin. They help maintain the skin’s moisture barrier
              without harsh chemicals.
            </p>
          </div>
        </div>
      </div>

      <div className="w-[1640px] mx-[140px]  my-10 ">
        <h1 className="text-[48px] text-center">
          {" "}
          Key Ingredients to Look For
        </h1>
        <div className="flex justify-between">
          <div>
            <div>
              <div className="w-[664px]">
                <div className="flex gap-5 ">
                  <img src={symbol} alt="this is " />
                  <h1 className="text-[22px]">Alovara</h1>
                </div>

                <p className=" ml-12">
                  Hydrates and soothes. Neem: Purifies and protects.
                </p>
              </div>
              <div>
                <div className="flex gap-5">
                  <img src={symbol} alt="this is " />
                  <h1 className="text-[22px]">Alovara</h1>
                </div>

                <p className=" ml-12">
                  Hydrates and soothes. Neem: Purifies and protects.
                </p>
              </div>
              <div>
                <div className="flex gap-5">
                  <img src={symbol} alt="this is " />
                  <h1 className="text-[22px]">Turmuric</h1>
                </div>

                <p className=" ml-12">
                  Hydrates and soothes. Neem: Purifies and protects.
                </p>
              </div>
              <div>
                <div className="flex gap-5">
                  <img src={symbol} alt="this is" />
                  <h1 className="text-[22px]">Leaf</h1>
                </div>

                <p className=" ml-12">
                  Hydrates and soothes. Neem: Purifies and protects.
                </p>
              </div>

              <div>
                <div>
                  <div className="flex gap-5 items-start">
                    <img src={symbol} alt="this is " />
                    <h1 className="text-[22px]">Conclusions</h1>
                  </div>
                  <p className=" ml-12 max-w-[664px]">
                    Incorporating organic and Ayurvedic ingredients into your
                    body wash not only enhances your bathing experience but also
                    supports overall skin health. By choosing products that
                    prioritize natural ingredients, you invest in both your
                    wellbeing and the planet’s future.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-[916px]  h-[649px]">
            <img src={prod_detail} alt="imh" />
          </div>
        </div>
      </div>
      <div>
        <h1 className="text-center text-[48px]">All Products</h1>

        <div className="w-[1640px] mx-[140px] flex my-10 ">
          {proDetail.map((pro, index) => {
            return (
              <div
                key={index}
                className="w-[380px] h-[452px] bg-[#d3d0d0] m-4
"
              >
                <img
                  src={pro.src}
                  alt="this "
                  className="w-full h-[222px] object-contain rounded-lg"
                />
                <h1 className="text-[20px]">{pro.product}</h1>
                <p>{pro.subHeading}</p>
                <button className="text-white w-10/12 py-2 rounded-full bg-[#21747C] mb-2 my-4">
                  {pro.exploreMore}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
