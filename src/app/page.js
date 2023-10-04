"use client";
import React from "react";
import Hero from "@/components/Hero";
import MapSection from "@/components/MapSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <>
      <Header />
      <Hero />
      <MapSection />
      <Footer />
    </>
  );
};

export default page;
