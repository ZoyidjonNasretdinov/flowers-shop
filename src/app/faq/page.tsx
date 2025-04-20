import Layout from '@/layout/layout/layout'
import FAQSection from '@/sections/faqs-page-section'
import FeaturesSection from '@/sections/features-section'
import NewsletterSubscription from '@/sections/news-latter-subscription'
import React from 'react'

const FAQs = () => {
  return (
    <Layout>
      <FAQSection/>
      <FeaturesSection/>
      <NewsletterSubscription/>
    </Layout>
  )
}

export default FAQs
