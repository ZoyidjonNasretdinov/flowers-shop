import Layout from '@/layout/layout/layout'
import AboutSection from '@/sections/about-section'
import DealsOfTheDay from '@/sections/deals-of-the-day'
import Hero from '@/sections/hero'
import NewArrivalProducts from '@/sections/new-arrival-products'
import { DealsCarousel, Occasions } from '@/sections/occasions'
import TopSellerProducts from '@/sections/top-seller-product'
import OccasionBar from '@/ui/Occasion'
import React from 'react'

const Home = () => {
  return (
    <Layout>
      <Hero />
      {/* <DealsCarousel />
      <Occasions /> */}
      <AboutSection />
      <TopSellerProducts />
      <OccasionBar />
      <NewArrivalProducts />
      <OccasionBar />
      <DealsOfTheDay />
    </Layout>
  )
}

export default Home
