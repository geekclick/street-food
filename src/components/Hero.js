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
    {
      title: "Vada Sambar",
      desc: "A South Indian snack, vada is a deep-fried lentil-based fritter often served with a tangy and spicy sambar.",
      image: "/hero/h7.png",
    },
    {
      title: "Idli Sambar",
      desc: "A South Indian breakfast staple, idli is a steamed rice cake served with flavorful and spicy lentil-based sambar.",
      image: "/hero/h8.png",
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
      <section className="font-nunito bg-white py-8 smLan:py-96" id="home" style={{paddingLeft: '9%',paddingRight:'9%'}}>
          <div className="h-screen sm:h-auto flex flex-col justify-center">
            <Slider {...settings}>
              {slides.map((slide) => (
                <div className="slide flex items-center justify-center smLan:justify-normal flex-wrap gap-16 px-4 pt-36 sm:pt-16">
                  <div className="px-52 lg:px-0" style={{ flex: "1 1" }}>
                    <span className="text-hirwa font-light text-4xl sm:text-2xl">
                      best food near you
                    </span>
                    <h3 className="text-kala mt-8 my-2 sm:mt-4 font-semibold text-9xl sm:text-7xl">
                      {slide.title}
                    </h3>
                    <p className="text-light mb-16 text-3xl sm:text-xl py-2 px-0 leading-normal">
                      {slide.desc}
                    </p>
                    <form action="">
                      <div className="flex flex-row sm:flex-col gap-8 border-2 pl-4 sm:border-0 border-kala hover hover:border-hirwa rounded-lg w-full">
                        <input
                          className="w-full text-3xl border-0 sm:text-2xl sm:w-full sm:p-6 sm:border-2 bg-white border-kala hover:border-hirwa  rounded-md"
                          type="search"
                          placeholder="Enter you location to find food"
                        />
                        <button
                          className="inline-block text-2xl sm:text-xl text-white bg-kala hover:bg-hirwa cursor-pointer py-6 px-12 tracking-widest rounded-none sm:rounded-full"
                          type="submit"
                        >
                          Search
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="w-1/2 lg:w-full">
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