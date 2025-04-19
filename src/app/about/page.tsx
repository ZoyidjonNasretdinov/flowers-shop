import Layout from '@/layout/layout/layout'
import AboutSection from '@/sections/about-section'
import FeaturesSection from '@/sections/features-section'
import FollowUsInstagram from '@/sections/follow-us-instagram'
import NewsletterSubscription from '@/sections/news-latter-subscription'
import Testimonials from '@/sections/Testimonials'
import Breadcrumbs from '@/ui/Breadcrumbs'
import OccasionBar from '@/ui/Occasion'
import React from 'react'

const About = () => {
  return (
    <Layout>
      <Breadcrumbs />
      <AboutSection />
      <OccasionBar />
      <Testimonials />
      <OccasionBar />
      <FollowUsInstagram />
      <FeaturesSection />
      <NewsletterSubscription/>
    </Layout>
  )
}

export default About
