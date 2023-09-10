"use client"
import React from 'react'

const Navbar = () => {
    function toggleMenu() {
        const menu = document.getElementById('menu')
        const menuItem = document.getElementById('menuItem')
        menu.classList.toggle('change');
        menuItem.classList.toggle('hide');
    };
    return (
        <>
            <nav className='bg-transperent text-white absolute flex flex-row justify-between p-4 w-full z-50'>
                <div className='flex flex-row justify-center text-3xl'>
                    <img src="/favicon/favicon-32x32.png" alt="logo" />
                    <h2 id='title'>StreetFood</h2>
                </div>
                <div className=' md:hidden flex flex-row gap-6'>
                    <button className='bg-white p-2 px-5 md:hidden font-bold text-black cursor-pointer rounded-md text-sm'>Sign Up</button>
                    <div onClick={toggleMenu} id='menu' className="container flex flex-col justify-center items-end cursor-pointer w-fit z-50">
                        <div className="bar1"></div>
                        <div className="bar2"></div>
                        <div className="bar3"></div>
                    </div>
                </div>

                <div id='menuItem' className="menuItems hide fixed right-0 w-full h-full top-0">
                    <ul className='itemList text-2xl mt-40 font-bold text-green-500'>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/services">Services</a></li>
                    </ul>
                </div>
                <div className='md:flex hidden justify-between gap-12'>
                    <ul className='text-md flex flex-row pt-2 gap-8 font-bold'>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/services">Services</a></li>
                    </ul>
                    <button className='bg-white p-2.5 px-5 font-bold transition-all text-black cursor-pointer rounded-md text-sm'>Sign Up</button>
                </div>
            </nav>
        </>
    )
}

export default Navbar   