"use client";
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const slides = [
    {
      title: "Samosa",
      desc: "A popular Indian snack, samosa is a deep-fried pastry filled with savory spiced potatoes or other ingredients.",
      image: "/hero/h4.png",
    },
    {
      title: "Pav Bhaji",
      desc: "A Mumbai street food favorite, pav bhaji consists of a spicy vegetable curry (bhaji) served with buttered bread rolls (pav).",
      image: "/hero/h1.png",
    },
    {
      title: "Pani Puri",
      desc: "A popular Indian street food, pani puri consists of hollow crispy balls filled with spicy tamarind water, potatoes, and chickpeas.",
      image: "/hero/h3.png",
    },
    {
      title: "Burger",
      desc: "A classic fast-food item, a burger is a sandwich made with a ground meat or plant-based patty, typically served in a bun with various toppings.",
      image: "/hero/h6.png",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <>
      <section
        className="font-nunito bg-white p-8 smLan:py-96 lg:px-10 xl:px-40 mt-16"
        id="home"
        style={{ paddingLeft: "6%", paddingRight: "6%" }}
      >
        <div className="lg:h-screen h-fit flex flex-col justify-center">
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <div
                key={index}
                className="slide flex items-center justify-center smLan:justify-normal flex-wrap gap-8 lg:pt-0"
              >
                <div className="lg:px-0 md:px-20" style={{ flex: "1 1" }}>
                  <span className="text-hirwa font-light lg:text-xl text-lg">
                    Best Food Near You
                  </span>
                  <h3 className="text-kala lg:mt-8 my-2 mt-4 font-semibold lg:text-6xl text-5xl">
                    {slide.title}
                  </h3>
                  <p className="text-light mb-8 lg:text-lg text-md py-2 px-0 leading-normal">
                    {slide.desc}
                  </p>
                  <form action="">
                    <div className="flex lg:flex-row flex-col gap-6 lg:gap-0 lg:border-2 pl-4 border-0 border-kala hover hover:border-hirwa rounded-lg w-full lg:max-w-md">
                      <input
                        className="w-full lg:text-md lg:border-0 text-md p-4 border-2 bg-white border-kala hover:border-hirwa text-black rounded-md"
                        type="search"
                        placeholder="Enter your location to find food"
                      />
                      <button
                        className="inline-block lg:text-md text-md text-white bg-hirwa hover:bg-kala cursor-pointer py-3 px-10 tracking-widest lg:rounded-none rounded-full"
                        type="submit"
                      >
                        Search
                      </button>
                    </div>
                  </form>
                </div>
                <div className="md:w-1/2 w-full">
                  <img src={slide.image} alt="" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Hero;
