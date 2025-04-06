import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Custom font settings
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// SEO metadata for the flower shop website
export const metadata: Metadata = {
  twitter: {
    card: "summary_large_image",
    title: "Fresh Flower Shop - Vibrant Flowers Delivered",
    description: "Fresh flowers delivered daily for all occasions. Explore our shop and order now for fast delivery.",
    site: "@YourFlowerShop", // Replace with your Twitter handle
  },
  robots: "index, follow", // Ensures pages are indexed and followed by search engines
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Fresh flowers delivered daily for any occasion." />
        <meta name="robots" content="index, follow" />
        <title>Fresh Flower Shop - Vibrant Flowers Delivered</title>

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Fresh Flower Shop - Vibrant Flowers Delivered" />
        <meta property="og:description" content="Order fresh flowers for every occasion. Explore our wide selection of floral arrangements and get quick delivery." />
        <meta property="og:url" content="https://www.yourflowershop.com" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.yourflowershop.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Fresh Flower Shop - Vibrant Flowers Delivered" />
        <meta name="twitter:description" content="Fresh flowers delivered daily for all occasions. Explore our shop and order now for fast delivery." />
        <meta name="twitter:image" content="https://www.yourflowershop.com/twitter-image.jpg" />
        <meta name="twitter:site" content="@YourFlowerShop" />

        {/* Other SEO Tags */}
        <meta name="keywords" content="flower shop, fresh flowers, flower delivery, roses, tulips, bouquets, plants, floral arrangements, online flowers" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
