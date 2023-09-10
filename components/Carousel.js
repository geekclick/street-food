import React from 'react'
import AutoCarousel from './Autocarousel'

const Carousel = () => {
    return (
        <>
            <div className='absolute top-0 left-0 w-full min-h-screen bg-cover bg-center blur opacity-75 bg-[url("/images/bg1.jpg")]'></div>
            <div className="hero lg:min-h-screen md:pt-0 md:h-fit py-0 h-screen pt-24">
                <div className="hero-content md:justify-between flex-col md:flex-row-reverse md:gap-54 md:mt-48 gap-14">
                    <div>
                        <AutoCarousel changeTime='5000' /> {/*Change slide every 5 seconds (adjust as needed)*/}
                    </div>
                    <div className='xxl:-ml-36 text-white'>
                        <h1 className="text-4xl lg:text-7xl font-bold">Best Street Food</h1>
                        <p className="py-6 lg:text-lg text-sm">Discover the best street food near you, savor unique flavors, and connect with local vendors. Explore a world of delectable experiences with our street food community today..</p>
                        <button className="btn text-white bg-green-500">Eat Now</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Carousel