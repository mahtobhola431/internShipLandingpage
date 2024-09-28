import React from "react";
import about_img from "../../src/images/about_img.png";
import mission_1 from "../../src/images/banner_3.png";
import symbol from "../../src/images/flower.png";
import who from "../../src/images/whow.png";

import core_4 from '../../src/images/core_4.png'
import core_5 from '../../src/images/core_5.png'
import core_6 from '../../src/images/core_6.png'


const About = () => {

    const cores=[
        {
            id:1,
            src:core_4,
            alt:"core 1",
            heading:"Lorem Ipsum",
            content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."

        },

        {
            id:2,
            src:core_5,
            alt:"core 1",
            heading:"Lorem Ipsum",
            content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."

        },

        {
            id:2,
            src:core_6,
            alt:"core 1",
            heading:"Lorem Ipsum",
            content:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."

        },


    ]
  return (
    <div>
      <div className="relative w-[1640px] h-[404px] mt-[180px] mx-[140px] mb-10 flex justify-center">
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${about_img})`,
          }}
        >
          <div className="flex flex-col justify-center items-center w-full h-full gap-5">
            <h1 className="text-3xl font-bold">About Us</h1>
            <p className="text-center max-w-lg">
              At GlamGuider, we are dedicated to helping you discover the latest
              trends in beauty and fashion. Our curated selection of products
              and expert tips empower you to express your unique style with
              confidence.
            </p>
          </div>
        </div>
      </div>

      <div className="my-10">
        <h1 className="text-center text-black text-5xl font-normal">
          Our Missions
        </h1>
        <div className="w-[1639px] h-[496px] mx-[141px] flex justify-center mt-10">
          <div className="flex relative py-5 gap-20">
            <div>
              <img
                src={mission_1}
                alt="about us"
                className="w-[600px] h-[450px]"
              />
            </div>

            <div className="flex flex-col justify-center items-start">
              <div className="flex items-center w-[821px] h-[96px] gap-3">
                <img src={symbol} className="w-[38px] h-[27px] ml-0"  alt="htis is img" />
                <p>
                  At GlamGuider, we believe in empowering individuals through
                  beauty and fashion. Our team is dedicated to curating the best
                  products to help you express your unique style.
                </p>
              </div>

              <div className="flex items-center w-[821px] h-[96px] gap-3">
                <img src={symbol} className="w-[38px] h-[27px] ml-0"  alt="htis is img"/>
                <p>
                  We strive to provide expert advice and insights that inspire
                  confidence in every customer. With us, you're not just
                  purchasing products; you're investing in yourself.
                </p>
              </div>

              <div className="flex items-center w-[821px] h-[96px] gap-3">
                <img src={symbol} className="w-[38px] h-[27px] ml-0" alt="htis is img" />
                <p>
                  Our commitment is to bring you the latest trends while
                  ensuring a personalized shopping experience. Join us on this
                  journey to discover what makes you shine!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="relative mb-48">
          <img
            src={who}
            alt="Who We Are"
            className="w-[1693px]  h-[574px] object-cover ml-[141px] mb-10"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center ">
            <div className="text-center w-[1206px] h-[292px] mx-[257px] bg-[#EDF5F5]  mt-[500px] flex flex-col items-center p-[100px] gap-5">
              <p className="">
                We are dedicated to providing a seamless shopping experience
                that prioritizes convenience, inclusivity, and customer
                satisfaction. By connecting our community with top-rated
                products, we inspire confidence and celebrate the beauty in
                diversity for everyone.
              </p>
              <p className=" ">
                We are dedicated to providing a seamless shopping experience
                that prioritizes convenience, inclusivity, and customer
                satisfaction. By connecting our community with top-rated
                products, we inspire confidence and celebrate the beauty in
                diversity for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div >

        <h1 className="text-center text-5xl ">Core Value</h1>
        <div className=" flex mx-[141px] items-center justify-center gap-5 ">
          {
            cores.map((core)=>{
                return <div
                key={core.id}
                className="bg-[#EDF5F3] w-[520px] h-[276px] rounded-[20px] flex items-center justify-center gap-2 flex-col m-10 "
                >
              
                    <img src={core.src}
                    alt={core.alt}
                    
                    className=""/>

                    <h2>{core.heading}</h2>
                    <p className="px-5 text-center">{core.content}</p>
                    </div>
            })
          }
        </div>
      </div>
    </div>
  );
};

export default About;
