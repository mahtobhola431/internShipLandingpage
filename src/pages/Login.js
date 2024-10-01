import React, { useState } from "react";
import login_1 from "../../src/images/login_1.png";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleInputChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Phone Number is :", phoneNumber);
  };

  return (
    <div className="flex flex-col md:flex-row w-full max-w-[1640px] mx-auto gap-5 py-10 mt-[200px] justify-center px-4 md:px-8 lg:px-16">
      <div className="flex-shrink-0">
        <img
          src={login_1}
          alt="login"
          className="w-full max-w-[700px] h-auto"
        />
      </div>

      <div className=" flex-1 bg-[#EDF5F5] p-8 rounded-lg shadow-md ">
        <h1 className="text-center text-2xl md:text-4xl font-bold">
          Hii, Welcome Back
        </h1>
        <p className="text-center text-lg md:text-xl">
          Please fill your details to access your existing account
        </p>
        <div >
          <form onSubmit={handleSubmit}>
            <div className="w-full max-w-[550px]  my-5">
              <label className="text-lg" htmlFor="phone">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                value={phoneNumber}
                onChange={handleInputChange}
                className="w-full h-[52px] p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#21747C]"
                placeholder="Enter your phone number"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full max-w-[550px] h-[54px] text-center bg-[#21747C] text-white rounded-lg mx-auto"
            >
              Continue
            </button>
          </form>
          <div className="text-center text-lg my-5">
            <span className="text-sm text-gray-600">or login with</span>
          </div>
          <button className="w-full max-w-[550px] h-[54px] text-center bg-blue-600 text-white rounded-lg mx-auto">
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
