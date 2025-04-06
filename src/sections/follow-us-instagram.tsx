import Image from 'next/image';

const FollowUsInstagram = () => {
  const instagramPosts = [
    { imageUrl: '/assets/about.png', altText: 'Floral arrangement 1' }, // Replace with your image paths
    { imageUrl: '/assets/about.png', altText: 'Woman with flowers 1' },
    { imageUrl: '/assets/about.png', altText: 'Florist at work' },
    { imageUrl: '/assets/about.png', altText: 'Woman with flowers 2' },
    { imageUrl: '/assets/about.png', altText: 'Flowers in vase' },
    { imageUrl: '/assets/about.png', altText: 'Woman with bouquet' },
    { imageUrl: '/assets/about.png', altText: 'Close up of flowers' },
    { imageUrl: '/assets/about.png', altText: 'Woman holding flowers' },
    // Add more image URLs and alt text as needed
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-sm font-semibold text-purple-600 uppercase tracking-wide mb-1">Follow Us</h2>
          <p className="text-2xl font-bold text-gray-800">Follow Us On Instagram</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {instagramPosts.map((post, index) => (
            <a
              key={index}
              href="https://www.instagram.com/your_instagram_handle" // Replace with your actual Instagram handle
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-md overflow-hidden shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="relative w-full pt-[100%]">
                <Image
                  src={post.imageUrl}
                  alt={post.altText}
                  fill
                  className="absolute top-0 left-0 object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition duration-300" />
            </a>
          ))}
        </div>
        <div className="text-center mt-6">
          <a
            href="https://www.instagram.com/your_instagram_handle" // Replace with your actual Instagram handle
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300"
          >
            Visit Our Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default FollowUsInstagram;
