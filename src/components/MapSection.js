import React from "react";

const MapSection = () => {
  return (
    <>
      <section className="bg-white lg:p-28 p-8 flex flex-col gap-10 items-center text-center w-full">
        <div className="p-4 flex justify-center flex-col">
          <h3 className="text-kala lg:mt-8 my-2 mt-4 font-semibold lg:text-5xl text-3xl">
            street food near you
          </h3>
          <p className="text-light mb-8 lg:text-lg text-sm py-2 px-0 leading-normal">
            Enter you location to find street food Vendors near your location
          </p>
          <form action="">
            <div className="flex lg:flex-row flex-col lg:border-2 border-0 border-kala hover hover:border-hirwa rounded-lg w-full">
              <input
                className="w-full lg:text-lg lg:border-0 text-md p-3 border-2 bg-white border-kala hover:border-hirwa  rounded-md"
                type="search"
                placeholder="Enter you location"
              />
              <button
                className="inline-block lg:w-1/2 w-full lg:my-0 mt-4 mb-0 lg:text-lg text-md text-white bg-hirwa hover:bg-kala cursor-pointer py-3 px-12 tracking-widest lg:rounded-none rounded-full"
                type="submit"
              >
                Find Now
              </button>
            </div>
          </form>
        </div>
        <div className="lg:w-3/5 w-full mt-0 p-4 rounded-3xl bg-kala border-2 border-black">
          <img className="w-full h-full" src="/map/map.jpg" alt="####" />
        </div>
      </section>
    </>
  );
};

export default MapSection;
