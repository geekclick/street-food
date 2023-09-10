'use client'
import Cards from '@/components/Cards'
import Carousel from '@/components/Carousel'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Search from '@/components/Search'
import Section1 from '@/components/Section1'
import React from 'react'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Carousel/>
    <Search/>
    <Cards/>
    <Section1/>
    <Footer/>
    </>
  )
}

export default Home