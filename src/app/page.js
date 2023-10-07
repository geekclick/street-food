"use client";
import React from "react";
import Hero from "@/components/Hero";
import MapSection from "@/components/MapSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import DishSection from "@/components/DishSection";
import ShopSection from "@/components/ShopSection";
import Testimonials from "@/components/Testimonials";

const page = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <MapSection />
      <DishSection/>
      <ShopSection/>
      <Testimonials/>
      <Footer />
    </>
  );
};

export default page;
