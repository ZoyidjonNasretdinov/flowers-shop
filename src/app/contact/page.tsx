import Layout from '@/layout/layout/layout'
import ContactSection from '@/sections/contact-section'
import FeaturesSection from '@/sections/features-section'
import NewsletterSubscription from '@/sections/news-latter-subscription'
import React from 'react'

const Contact = () => {
  return (
    <Layout>
      <ContactSection />
      <FeaturesSection />
      <NewsletterSubscription/>
    </Layout>
  )
}

export default Contact
