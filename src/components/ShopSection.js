import React from "react";
import ShopCard from "./ShopCard";

const ShopSection = () => {
  return (
    <>
      <section className="bg-white text-black xl:p-20">
        <div>
          <h2 className="text-center font-bold text-black text-3xl lg:text-4xl py-4">
            Popular Food Vendors
          </h2>
        </div>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 px-28 m-auto">
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
          <ShopCard />
        </div>
        <div className="flex justify-center my-2">
          <button
            type="button"
            className="px-6 m-4 text-sm rounded-md hover:underline text-teal-600 font-bold"
          >
            View More Shops
          </button>
        </div>
      </section>
    </>
  );
};

export default ShopSection;
