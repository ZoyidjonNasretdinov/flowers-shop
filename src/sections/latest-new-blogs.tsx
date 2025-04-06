import Image from 'next/image';

const LatestNewsBlogs = () => {
  const blogPosts = [
    {
      title: 'Choosing the Perfect Wedding Bouquet for Your Big Day',
      image: '/assets/about.png', 
      category: 'Wedding Bouquet',
      author: 'Jenny Alexander',
      date: '13 Dec 2024',
      link: '/blog/wedding-bouquet-guide',
    },
    {
      title: 'Celebrating Love: The Best Flowers for Every Anniversary',
      image: '/assets/about.png', // Replace with your image path
      category: 'Anniversary Flowers',
      author: 'Jenny Alexander',
      date: '12 Dec 2024',
      link: '/blog/anniversary-flower-ideas',
    },
    {
      title: 'Top Tips for Designing Your Floral Bouquets for Maximum Impact',
      image: '/assets/about.png',  // Replace with your image path
      category: 'Bouquet Tips',
      author: 'Jenny Alexander',
      date: '11 Dec 2024',
      link: '/blog/floral-bouquet-design-tips',
    },
    // Add more blog post objects here
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-sm font-semibold text-purple-600 uppercase tracking-wide mb-1">News & Blogs</h2>
            <p className="text-2xl font-bold text-gray-800">Our Latest News & Blogs</p>
          </div>
          <a href="/blog" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300">
            View All Blogs
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-56">
                <Image src={post.image} alt={post.title} layout="fill" objectFit="cover" />
                <div className="absolute bottom-0 left-0 bg-purple-600 text-white text-xs font-semibold py-1 px-2 rounded-sm m-2">{post.category}</div>
              </div>
              <div className="p-4">
                <p className="text-gray-500 text-sm mb-2">{post.author} • {post.date}</p>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{post.title}</h3>
                <a href={post.link} className="text-purple-600 hover:text-purple-700 font-semibold text-sm inline-flex items-center">
                  Read More <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNewsBlogs;