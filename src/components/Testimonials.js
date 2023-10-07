import React from "react";
import UserReview from "./UserReview";

const Testimonials = () => {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Read trusted reviews from our customers
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            <UserReview />
            <UserReview />
            <UserReview />
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="px-6 m-8 text-sm rounded-md hover:underline text-teal-600 font-bold"
            >
              View More Reviews
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
