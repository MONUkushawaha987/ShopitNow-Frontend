import React from "react";

const About = () => {
  return (
    <div>
      <p
        className="text-3xl md:text-5xl font-bold text-center mt-10 text-blue-900"
        id="about"
      >
        About ShopitNow
      </p>
      <div className="max-w-4xl mx-auto mt-8 p-8  ">
        <h2 className="text-3xl font-semibold mb-4 text-center">Who We Are</h2>
        <p className="text-lg text-gray-700 mb-6 text-center">
          ShopitNow is your one-stop destination for trendy, comfortable, and
          affordable clothing for men, women, and kids. Our mission is to make
          fashion accessible to everyone, offering a curated selection of
          high-quality products that suit every style and occasion.
        </p>
        <h2 className="text-2xl font-semibold mb-2">Our Commitment</h2>
        <ul className="list-disc pl-6 text-gray-700 mb-6">
          <li>Premium quality fabrics and materials</li>
          <li>Latest fashion trends and timeless classics</li>
          <li>Exceptional customer service</li>
          <li>Secure and easy shopping experience</li>
          <li>Fast and reliable shipping</li>
        </ul>
        <h2 className="text-2xl font-semibold mb-2">Join Us</h2>
        <p className="text-lg text-gray-700">
          Discover your style with ShopitNow and enjoy a seamless shopping
          journey. Whether you’re updating your wardrobe or shopping for loved
          ones, we’re here to help you look and feel your best!
        </p>
      </div>
    </div>
  );
};

export default About;
