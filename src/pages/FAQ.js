

import React from 'react';
import about_img from "../../src/images/about_img.png";

const FAQ = () => {
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
            <h1 className="text-3xl font-bold ">Frequently Asked Questions</h1>
            <p className="text-center max-w-lg">
              At GlamGuider, we are dedicated to helping you discover the latest trends in beauty and fashion. Our curated selection of products and expert tips empower you to express your unique style with confidence.
            </p>
          </div>
        </div>
      </div>

      <div className='w-[1640px] mx-[140px] my-10'>
        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" defaultChecked />
          <div className="collapse-title text-xl font-medium">
            What is GlamGuider?
          </div>
          <div className="collapse-content">
            <p>
              GlamGuider is your go-to platform for the latest trends in beauty and fashion. We offer curated products and expert tips to help you express your unique style.
            </p>
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            How can I contact customer support?
          </div>
          <div className="collapse-content">
            <p>
              You can reach our customer support team through the "Contact Us" page on our website. We aim to respond to all inquiries within 24 hours.
            </p>
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            What payment methods do you accept?
          </div>
          <div className="collapse-content">
            <p>
              We accept various payment methods, including credit cards and PayPal, to ensure a secure and convenient shopping experience.
            </p>
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            Can I return an item?
          </div>
          <div className="collapse-content">
            <p>
              Yes, we offer a hassle-free return policy. You can return unused items within 30 days for a full refund or exchange.
            </p>
          </div>
        </div>

        <div className="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div className="collapse-title text-xl font-medium">
            How do I track my order?
          </div>
          <div className="collapse-content">
            <p>
              Once your order has shipped, you will receive an email with tracking information. You can use this to track your order on our website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
