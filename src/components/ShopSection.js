"use state";
import React, { useState, useEffect } from "react";
import ShopCard from "./ShopCard";

const ShopSection = () => {
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
      <section className="bg-white text-black xl:p-20">
        <div className="p-4 pt-16">
          <h2 className="text-center font-bold text-black text-3xl lg:text-4xl">
            Popular Food Vendors
          </h2>
        </div>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 lg:px-28 m-auto">
          <ShopCard />
          <ShopCard />
          <ShopCard />
          {windowSize >= 768 && (
            <>
              <ShopCard />
              <ShopCard />
              <ShopCard />
            </>
          )}
        </div>
        <div className="flex justify-center py-10">
          <button
            type="button"
            className="px-6 text-sm rounded-md hover:underline text-teal-600 font-bold"
          >
            View More Shops
          </button>
        </div>
      </section>
    </>
  );
};

export default ShopSection;
