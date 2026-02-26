import Footer from '@/components/landing/Footer'
import AboutProject from '@/components/landing/AboutProject'
import DahboardImage from '@/components/landing/DahboardImage'
import HomeHero from '@/components/landing/HomeHero'
import Navbar from '@/components/landing/Navbar'
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