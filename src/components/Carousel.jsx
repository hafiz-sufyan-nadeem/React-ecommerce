import React, {  useEffect } from "react";
import { getData } from "../context/DataContext";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SliderModule from "react-slick";
import {
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";
import Category from "./Category";

const Slider = SliderModule.default;

const Carousel = () => {
  const { data, fetchAllProducts } = getData()

  useEffect(() => {
    fetchAllProducts();
  }, []);

  // Previous Arrow
  const SamplePrevArrow = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className="absolute left-5 top-1/2 z-50 -translate-y-1/2 bg-black text-white rounded-full p-3 cursor-pointer"
      >
        <AiOutlineArrowLeft size={30} />
      </button>
    );
  };

  // Next Arrow
  const SampleNextArrow = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className="absolute right-5 top-1/2 z-50 -translate-y-1/2 bg-black text-white rounded-full p-3 cursor-pointer"
      >
        <AiOutlineArrowRight size={30} />
      </button>
    );
  };

  const settings = {
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,

    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {data?.slice(0, 7)?.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e]"
            >
              <div className="flex gap-10 justify-center h-[600px] items-center px-4">
                
                {/* Text */}
                <div className="space-y-6">
                  <h3 className="text-red-500 font-semibold font-sans text-sm">
                    Powering your world with the Best in Clothing
                  </h3>

                  <h1 className="text-4xl font-bold uppercase line-clamp-3 md:w-[500px] text-white">
                    {item.title}
                  </h1>

                  <p className="md:w-[500px] line-clamp-3 text-gray-400 pr-7">
                    {item.description}
                  </p>

                  <button className="bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 py-3 rounded-md cursor-pointer mt-2">
                    Shop Now
                  </button>
                </div>

                {/* Image */}
                <div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-full w-[550px] hover:scale-105 transition-all shadow-2xl shadow-red-400"
                  />
                </div>

              </div>
            </div>
          );
        })}
      </Slider>

      <Category />
    </div>
  );
};

export default Carousel;
