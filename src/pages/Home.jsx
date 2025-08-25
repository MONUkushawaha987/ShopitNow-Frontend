import React from "react";
import { Link } from "react-router-dom";
import WhatCustomersSay from "../components/WhatCustomerSay";
import About from "./About";
import Contact from "./Contact";
// import { GiClothes } from "react-icons/gi";

const Home = () => {
  return (
    <div className="flex flex-col  items-center ">
      <p className=" text-5xl  lg:text-7xl font-bold text-center mt-40 lg:mt-10    lg:ml-14 absolute text-white  ">
        Welcome to Our ShopitNow
      </p>

      <p className="text-2xl lg:text-3xl  text-center mt-80 lg:mt-40 lg:ml-14 absolute text-white ">
        Discover the best products at unbeatable prices!
        <br />
        <br />
        {/* <span className=" font-bold border-none px-6 py-3 mt-[100px] text-white rounded-full bg-yellow-500 text-[27px] inline-block ">
          <Link to="/products">Shop Now</Link>
          
        </span> */}
        <Link
          to="/products"
          className="text-2xl px-3 py-2  font-bold border-none lg:px-6 lg:py-3 mt-6 lg:mt-32 text-white rounded-full bg-yellow-500 lg:text-3xl inline-block"
        >
          Shop Now
        </Link>
      </p>

      <video
        src="https://videos.pexels.com/video-files/6555207/6555207-uhd_2732_1440_25fps.mp4"
        autoPlay
        loop
        muted
        className="w-screen h-[90vh] lg:h-screen object-cover -z-10"
        loading="lazy"
      >
        Your browser does not support the video tag.
      </video>
      <div className="text-black h-[260vh] lg:h-[140vh] w-screen bg-teal-100">
        <p className="text-3xl lg:text-5xl font-bold text-center mt-20">
          Explore our wide range of products!
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-[80vh] mx-10 mt-[60px]">
          <div className="p-4 bg-white rounded shadow flex flex-col items-center">
            <h2 className="text-2xl font-bold">Men's Clothing</h2>
            <img
              src="https://images.pexels.com/photos/1561011/pexels-photo-1561011.jpeg?cs=srgb&dl=pexels-chris-wolfer-715938-1561011.jpg&fm=jpg"
              alt="men's clothing"
              className="w-full h-96 object-cover rounded mt-3 hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            <p className="mt-5">
              Our men’s clothing collection combines modern style with everyday
              comfort.
            </p>
          </div>
          <div className="p-4 bg-white rounded shadow  flex flex-col items-center">
            <h2 className="text-2xl font-bold">Women's Clothing</h2>
            <img
              src="https://images.pexels.com/photos/27103969/pexels-photo-27103969.jpeg?cs=srgb&dl=pexels-vikashkr50-27103969.jpg&fm=jpg"
              alt="women's clothing"
              className="w-full h-96 object-cover rounded mt-3 hover:scale-105 transition-transform duration-300 "
              loading="lazy"
            />
            <p className="mt-5">
              Our women’s clothing collection blends elegance and comfort for
              every occasion.
            </p>
          </div>
          <div className="p-4 bg-white rounded shadow flex flex-col items-center">
            <h2 className="text-2xl font-bold">Kids' Clothing</h2>
            <img
              src="https://images.pexels.com/photos/6349572/pexels-photo-6349572.jpeg?cs=srgb&dl=pexels-olia-danilevich-6349572.jpg&fm=jpg"
              alt="kids' clothing"
              className="w-full h-96 object-cover rounded mt-3 hover:scale-105 transition-transform duration-300 "
              loading="lazy"
            />
            <p className="mt-5">
              Bright, comfy, and stylish clothing brings together fun and
              functionality for growing adventures.
            </p>
          </div>
        </div>
      </div>
      <div className="text-black h-[110vh] lg:h-[130vh] w-screen bg-gray-300">
        <p className="text-3xl lg:text-5xl font-bold text-center mt-10 text-yellow-500">
          Why Choose ShopitNow?
        </p>
        <div className="grid grid-rows-1 md:grid-rows-2 lg:grid-rows-3 gap-4 h-[85vh] mx-10 lg:mt-20 mt-10">
          <div className="p-4 bg-teal-200 rounded shadow flex flex-col items-center hover:shadow-lg transition-shadow duration-300">
              {/* <GiClothes size={70} className="border-none rounded-full p-2 absolute -mt-16 bg-teal-200 text-blue-600"/> */}
            <h2 className="text-2xl font-bold">Quality Products</h2>
            <p className="mt-3 text-center">
              Our products are crafted with premium materials and tested for
              durability, ensuring long-lasting performance and satisfaction.
              Designed to deliver excellence, they combine reliability, style,
              and value you can trust.
            </p>
          </div>
          <div className="p-4 bg-teal-200 rounded shadow flex flex-col items-center hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-bold">Affordable Prices</h2>
            <p className="mt-3">
              We offer top-quality products at prices that fit your budget,
              making style and comfort accessible to everyone without
              compromise.
            </p>
          </div>
          <div className="p-4 bg-teal-200 rounded shadow flex flex-col items-center hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-2xl font-bold">Fast Shipping</h2>
            <p className="mt-3">
              Enjoy quick and reliable delivery with our fast shipping service,
              ensuring your favorite products reach your doorstep on time, every
              time.
            </p>
          </div>
        </div>
      </div>
      <div className="text-black  h-[270vh] md:h-[180vh] w-screen bg-blue-400">
        <WhatCustomersSay />
      </div>
      <div className="text-black  h-[120vh] w-screen bg-red-200">
        <About />
      </div>
      <div className="text-black   h-[130vh] w-screen bg-purple-400">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
