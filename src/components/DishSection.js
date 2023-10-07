"use client";
import React, { useEffect, useState } from "react";
import DishCard from "./DishCard";

const DishSection = () => {
  const [windowSize, setWindowSize] = useState(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowSize(window.innerWidth);

      const handleResize = () => {
        setWindowSize(window.innerWidth);
      };
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);
  return (
    <>
      <section className="bg-teal-600 text-black">
        <div className="p-4">
          <h2 className="text-center font-bold text-white my-2 text-4xl">
            Top Dishes
          </h2>
        </div>
        <div className="container p-6 mx-auto space-y-6 sm:space-y-12">
          <div className="grid justify-center grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <DishCard image="h1.png" />
            <DishCard image="h2.png" />
            <DishCard image="h3.png" />
            {windowSize >= 768 && (
              <>
                <DishCard image="h4.png" />
                <DishCard image="h5.png" />
                <DishCard image="h6.png" />
                <DishCard image="h7.png" />
                <DishCard image="h8.png" />
              </>
            )}
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="px-6 pb-3 text-sm rounded-md hover:underline text-black bg-white p-2 font-bold"
            >
              View More Dishes
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default DishSection;
