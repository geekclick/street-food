import React from "react";

const Features = () => {
  return (
    <>
      <section className="py-10 lg:py-28 bg-teal-600">
        <div className="container m-auto space-y-8 px-6 md:px-12 lg:px-20">
          <div>
            <h2 className="mt-4 text-center text-2xl font-bold text-white md:text-4xl">
              What we offer to the Users ?{" "}
              <br className="lg:block" hidden="" />
              <p className="text-sm lg:w-1/2 m-auto lg:text-base font-normal p-2">Best user friendly experience, Find street food near by. Register your shop for more customers.</p>
            </h2>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 md:-mx-8 lg:grid-cols-3">
            <div className="p-8 py-12 sm:p-12 rounded-3xl bg-white border border-gray-100 bg-opacity-100 shadow-2xl shadow-gray-600/10">
              <div className="space-y-16">
                <div
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-50"
                >
                  <span className="font-bold text-pink-600">1</span>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-800 transition">
                    Find Street Food
                  </h3>
                  <p className="text-gray-600">
                    Quae accusantium, laudantium recusandae tenetur fugiat non
                    cum doloribus aperiam voluptates nostrum.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-8 py-12 sm:p-12 rounded-3xl bg-white border border-gray-100 bg-opacity-100 shadow-2xl shadow-gray-600/10">
              <div className="space-y-16">
                <div
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-50"
                >
                  <span className="font-bold text-pink-600">2</span>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-800 transition">
                    Register Food Shop
                  </h3>
                  <p className="text-gray-600">
                    Quae accusantium, laudantium recusandae tenetur fugiat non
                    cum doloribus aperiam voluptates nostrum.
                  </p>
                </div>
              </div>
            </div>
            <div className="p-8 py-12 sm:p-12 rounded-3xl bg-white border border-gray-100 bg-opacity-100 shadow-2xl shadow-gray-600/10">
              <div className="space-y-16">
                <div
                  aria-hidden="true"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-50"
                >
                  <span className="font-bold text-purple-600">3</span>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-800 transition">
                    Order Street Food
                  </h3>
                  <p className="text-gray-600">
                    Quae accusantium, laudantium recusandae tenetur fugiat non
                    cum doloribus aperiam voluptates nostrum.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
