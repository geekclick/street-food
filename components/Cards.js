import React from 'react'

const Cards = () => {
    return (
        <>
            {/* For small devices */}
            <div className='bg-green-500 text-black pb-8 lg:hidden flex flex-col justify-center'>
                <div className='text-center p-8'><h2 className='text-white font-bold text-4xl'>Top Dishes</h2></div>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full justify-center">
                        <div className="card w-4/5 m-3 bg-base-100 shadow-xl bg-white text-black">
                            <figure><img src="https://source.unsplash.com/random/400x250?food" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-black">Food Name</h2>
                                <p>Food Description Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn bg-green-500 text-white">Order Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle ">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full justify-center">
                        <div className="card w-4/5 m-3 bg-base-100 shadow-xl bg-white text-black">
                            <figure><img src="https://source.unsplash.com/random/400x250?food=1" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-black">Food Name</h2>
                                <p>Food Description Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn bg-green-500 text-white">Order Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full justify-center">
                        <div className="card w-4/5 m-3 bg-base-100 shadow-xl bg-white text-black">
                            <figure><img src="https://source.unsplash.com/random/400x250?food=2" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-black">Food Name</h2>
                                <p>Food Description Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn bg-green-500 text-white">Order Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full justify-center">
                        <div className="card w-4/5 m-3 bg-base-100 shadow-xl bg-white text-black">
                            <figure><img src="https://source.unsplash.com/random/400x250?food=3" alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-black">Food Name</h2>
                                <p>Food Description Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                <div className="card-actions justify-end">
                                    <button className="btn bg-green-500 text-white">Order Now</button>
                                </div>
                            </div>
                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>



            {/* For large devices */}
            <div className='bg-green-500 hidden md:block min-h-screen'>
                <div className='lg:w-2/5 text-center p-8'><h2 className='text-white ml-4 font-bold text-5xl'>Top Dishes</h2></div>
                <div className='md:grid xxl:grid-cols-4 md:grid-cols-2 gap-16 place-items-center pb-16'>
                    <div className="card xl:w-5/12 w-2/4 bg-base-100 shadow-xl bg-white text-black">
                        <figure><img src="https://source.unsplash.com/random/400x250?food" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Food Name</h2>
                            <p>Food Description Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            <div className="card-actions justify-end">
                                <button className="btn bg-green-500 text-white">Order Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card xl:w-5/12 w-4/5 m bg-base-100 shadow-xl bg-white text-black">
                        <figure><img src="https://source.unsplash.com/random/400x250?food=1" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Food Name</h2>
                            <p>Food Description Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            <div className="card-actions justify-end">
                                <button className="btn bg-green-500 text-white">Order Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card xl:w-5/12 w-4/5 m bg-base-100 shadow-xl bg-white text-black">
                        <figure><img src="https://source.unsplash.com/random/400x250?food=2" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Food Name</h2>
                            <p>Food Description Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            <div className="card-actions justify-end">
                                <button className="btn bg-green-500 text-white">Order Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card xl:w-5/12 w-4/5 m bg-base-100 shadow-xl bg-white text-black">
                        <figure><img src="https://source.unsplash.com/random/400x250?food=3" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Food Name</h2>
                            <p>Food Description Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                            <div className="card-actions justify-end">
                                <button className="btn bg-green-500 text-white">Order Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cards