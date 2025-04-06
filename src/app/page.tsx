import Layout from '@/layout/layout/layout'
import AboutSection from '@/sections/about-section'
import Hero from '@/sections/hero'
import { DealsCarousel, Occasions } from '@/sections/occasions'
import OccasionBar from '@/ui/Occasion'
import React from 'react'

const Home = () => {
  return (
    <Layout>
      <Hero />
      {/* <DealsCarousel />
      <Occasions /> */}
      <AboutSection />
      <OccasionBar />

    </Layout>
  )
}

export default Home
