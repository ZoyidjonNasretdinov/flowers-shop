import Layout from '@/layout/layout/layout'
import FeaturesSection from '@/sections/features-section'
import NewsletterSubscription from '@/sections/news-latter-subscription'
import ProductListingPage from '@/sections/product-listing-page'
import Breadcrumbs from '@/ui/Breadcrumbs'
import React from 'react'

const Shop = () => {
  return (
    <Layout>
      <Breadcrumbs />
      <ProductListingPage />
      <FeaturesSection />
      <NewsletterSubscription/>
    </Layout>
  )
}

export default Shop
