import React from 'react'

const Section1 = () => {
  return (
    <>
      <section className="bg-white text-black py-24">
        <div className="container flex flex-col lg:flex-row">
          {/* <div className="w-full lg:w-1/3 bg-[url('/images/sec1.jpeg')]" style={{"background-position": "center", "background-size": "cover"}}></div> */}
          <div><img src="/images/sec1.jpg" alt="" className='w-full' /></div>
          <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 mb-8 text-green-500">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            <h2 className="text-3xl font-semibold leadi">Join Our Street Food Community</h2>
            <p className="mt-4 mb-8 text-sm">Are you a passionate street food vendor ready to share your culinary talents with the world? Join our vibrant street food community and showcase your delectable creations to food enthusiasts near and far. Registration is quick and easy—take the first step towards reaching a wider audience and tantalizing taste buds today!</p>
            <button className="self-start px-10 py-3 text-lg font-medium rounded-3xl bg-green-500 text-white">Get Started Now</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Section1