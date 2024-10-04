
import React from "react";

const Footer = () => {
  return (
    <div>
    
      <div className="w-full max-w-[1920px] h-[300px] bg-[#21747C] hidden md:block">
        <div className="text-white flex justify-between p-10 mx-auto items-center">
          <div className="flex flex-col w-1/3">
            <h2 className="text-xl font-bold mb-2">GlamGuider</h2>
            <p className="mb-4">
              Your go-to guide for all things glamour. We help you navigate through the latest trends, tips, and services.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
            </div>
          </div>

          <div className="flex flex-col w-1/3">
            <h2 className="text-lg font-semibold mb-2">Policies</h2>
            <a href="#privacy-policy" className="mb-1 hover:underline">Privacy Policy</a>
            <a href="#cookie-policy" className="mb-1 hover:underline">Cookie Policy</a>
            <a href="#careers" className="mb-1 hover:underline">Careers</a>
          </div>

          <div className="flex flex-col w-1/3">
            <h2 className="text-lg font-semibold mb-2">Support</h2>
            <a href="#faq" className="mb-1 hover:underline">FAQ</a>
            <a href="#terms" className="mb-1 hover:underline">Terms and Conditions</a>
            <a href="#contact" className="mb-1 hover:underline">Contact Us</a>
          </div>
        </div>
        <div className="text-center text-white">
          <p>&copy; {new Date().getFullYear()} GlamGuider. All rights reserved.</p>
        </div>
      </div>

      <div className="w-[900px] flex items-center justify-center md:hidden bg-[#21747C]">
<div className=" ">
        <div className=" flex flex-col w-full ">
     
          <div className="text-white flex flex-col items-center p-5">
            <h2 className="text-xl font-bold mb-2">GlamGuider</h2>
            <p className="mb-4 text-center">
              Your go-to guide for all things glamour. We help you navigate through the latest trends, tips, and services.
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a>
            </div>
          </div>

        
          <div className="grid grid-cols-2 w-full p-5 text-center text-white">
            <div className="flex flex-col items-center">
              <h2 className="text-lg font-semibold mb-2">Policies</h2>
              <a href="#privacy-policy" className="mb-1 hover:underline">Privacy Policy</a>
              <a href="#cookie-policy" className="mb-1 hover:underline">Cookie Policy</a>
              <a href="#careers" className="mb-1 hover:underline">Careers</a>
            </div>

            <div className="flex flex-col items-center">
              <h2 className="text-lg font-semibold mb-2">Support</h2>
              <a href="#faq" className="mb-1 hover:underline">FAQ</a>
              <a href="#terms" className="mb-1 hover:underline">Terms and Conditions</a>
              <a href="#contact" className="mb-1 hover:underline">Contact Us</a>
            </div>
          </div>

       
          <div className="text-center text-white p-5">
            <p>&copy; {new Date().getFullYear()} GlamGuider. All rights reserved.</p>
          </div>
        </div>
      </div>
      </div>


      
    </div>
  );
};

export default Footer;
