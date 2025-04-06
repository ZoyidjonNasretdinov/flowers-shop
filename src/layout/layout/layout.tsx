import React from 'react'
import Header from '../header/header';
import Footer from '../footer/footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="layout">
      <Header />
      <main className="content">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
