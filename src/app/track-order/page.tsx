import Layout from '@/layout/layout/layout'
import FeaturesSection from '@/sections/features-section'
import NewsletterSubscription from '@/sections/news-latter-subscription'
import OrderStatus from '@/sections/order-status-section'
import Breadcrumbs from '@/ui/Breadcrumbs'
import React from 'react'

const TrackYourOrderPage = () => {
  return (
    <Layout>
      <Breadcrumbs />
      <OrderStatus />
      <FeaturesSection />
      <NewsletterSubscription/>
    </Layout>
  )
}

export default TrackYourOrderPage
