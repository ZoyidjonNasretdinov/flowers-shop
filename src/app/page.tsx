import Layout from '@/layout/layout/layout'
import AboutSection from '@/sections/about-section'
import DealsOfTheDay from '@/sections/deals-of-the-day'
import Hero from '@/sections/hero'
import LatestNewsBlogs from '@/sections/latest-new-blogs'
import NewArrivalProducts from '@/sections/new-arrival-products'
import { DealsCarousel, Occasions } from '@/sections/occasions'
import Testimonials from '@/sections/Testimonials'
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
      <Testimonials />
      <LatestNewsBlogs />
    </Layout>
  )
}

export default Home
