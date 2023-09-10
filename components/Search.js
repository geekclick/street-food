import React from 'react'

const Search = () => {
    return (
        <>
            <section>
                <div className="bg-white text-black lg:min-h-screen lg:w-full h-full py-20 flex justify-center items-center">
                    <div className="container mx-auto">
                        <div className="flex flex-col items-center py-10 text-center lg:py-20">
                            <div className="w-full px-4 lg:w-1/2 lg:px-0">
                                <div className="mb-8">
                                    <h2 className="text-3xl lg:text-4xl font-bold mb-3 text-green-500">
                                        Looking for a Food?
                                    </h2>
                                    <p className="text-lg lg:text-xl opacity-80">
                                        Search the best street foods and food vendors near you
                                    </p>
                                </div>

                                <div className="mb-10">
                                    <div className="relative">
                                        <div className="absolute inset-y-24 left-0 pl-3 flex items-center pointer-events-none">
                                            <svg className="w-4 h-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z">
                                                </path>
                                            </svg>
                                        </div>

                                        <form action="#" method="GET" className='flex flex-col items-center gap-6'>
                                            <select className="select select-bordered w-full max-w-full bg-white ">
                                                <option disabled selected className='transition-all duration-500'>Choose your food type</option>
                                                <option>South Indian</option>
                                                <option>Chinees</option>
                                                <option>Snacks</option>
                                                <option>Beverages</option>
                                                <option>Desserts</option>
                                                <option>Seafood</option>
                                                <option>Chatt</option>
                                            </select>
                                            <input type="search" name="search" placeholder="Find street food near you" className="p-4 pl-10 placeholder-black text-sm bg-white rounded-lg w-full border-gray-100 shadow" />
                                            <input type="submit" value="Find Now" className='btn hover:bg-green-500 hover:text-white text-green-500 bg-white border-green-500 hover:border-1 font-bold w-2/5' />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Search   