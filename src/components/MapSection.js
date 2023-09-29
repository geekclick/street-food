import React from "react";

const MapSection = () => {
  return (
    <>
      <section className="bg-bhurka p-28 lg:p-16 flex flex-col gap-10 items-center text-center w-full">
          <div className="p-4 flex justify-center flex-col">
            <h3 className="text-kala mt-8 my-2 lg:mt-4 font-semibold text-7xl lg:text-4xl">
              street food near you
            </h3>
            <p className="text-light mb-16 text-3xl lg:text-xl py-2 px-0 leading-normal">
              Enter you location to find street food Vendors near your location
            </p>
            <form action="">
              <div className="flex flex-row lg:flex-col border-2 lg:border-0 border-kala hover hover:border-hirwa rounded-lg w-full">
                <input
                  className="w-full text-3xl border-0 lg:text-2xl lg:w-full lg:p-6 lg:border-2 bg-white border-kala hover:border-hirwa  rounded-md"
                  type="search"
                  placeholder="Enter you location"
                />
                <button
                  className="inline-block w-1/2 lg:w-full my-0 lg:my-4 text-2xl lg:text-xl text-white bg-kala hover:bg-hirwa cursor-pointer py-6 px-12 tracking-widest rounded-none lg:rounded-full"
                  type="submit"
                >
                  Find Now
                </button>
              </div>
            </form>
          </div>
        <div className="w-3/5 lg:w-full mt-10 p-4 rounded-3xl bg-kala border-2 border-black">
          <img className="w-full h-full" src="/map/map.jpg" alt="####" />
        </div>
      </section>
    </>
  );
};

export default MapSection;
