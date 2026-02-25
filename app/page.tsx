import Footer from '@/components/Footer'
import AboutProject from '@/components/home/AboutProject'
import DahboardImage from '@/components/home/DahboardImage'
import HomeHero from '@/components/home/HomeHero'
import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <>
      <Navbar />
      <HomeHero />
      <DahboardImage />
      <AboutProject />
      <Footer />
    </>
  )
}

export default page                                                                                          