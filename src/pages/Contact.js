import React from "react";
import contact_us from "../../src/images/contact_us.png";
import contact_us2 from "../../src/images/contact_us2.png";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted");
  };

  return (
    <div>
      <div className="relative w-[1640px] h-[404px] mt-[180px] mx-[140px] mb-10 flex justify-center">
        <div
          className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${contact_us})`,
          }}
        >
          <div className="flex flex-col justify-center items-center w-full h-full gap-5">
            <h1 className="text-3xl font-bold">Contact Us</h1>
            <p className="text-center max-w-lg ">
                

              At GlamGuider, we are dedicated to helping you discover the latest
              trends in beauty and fashion. Our curated selection of products
              and expert tips empower you to express your unique style with
              confidence.
            </p>
          </div>
        </div>
      </div>{" "}
      <div className="  w-[1582px] h-[568px] mx-[140px] flex justify-center items-center gap-10">
        <div className="">
          <form onSubmit={handleSubmit} className="  p-6">
            <div className="mb-4 w-[778px] h-[48px]">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="shadow appearance-none border border-b-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                required
                rows="4"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
                placeholder="Your Message"
              ></textarea>
            </div>
            <button
              className="text-white px-4 py-2 rounded-full w-[189px] h-[54px] text-center bg-[#21747C]"
            >
              Submit
            </button>
          </form>
        </div>
        <div className=" "> 
          <img
            src={contact_us2}
            alt="contact us "
            className="w-[680px] h-[440px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
