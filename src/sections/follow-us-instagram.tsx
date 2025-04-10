import Image from 'next/image';

const FollowUsInstagram = () => {
  const instagramPosts = [
    { imageUrl: '/assets/instagram-image-1.jpg', altText: '1' },
    { imageUrl: '/assets/instagram-image-2.jpg', altText: '2' },
    { imageUrl: '/assets/instagram-image-3.jpg', altText: '3' },
    { imageUrl: '/assets/instagram-image-4.jpg', altText: '4' },
    { imageUrl: '/assets/instagram-image-5.jpg', altText: '5' },
    { imageUrl: '/assets/instagram-image-6.jpg', altText: '6' },
    { imageUrl: '/assets/instagram-image-7.jpg', altText: '7' },
    { imageUrl: '/assets/instagram-image-8.jpg', altText: '8' },
    { imageUrl: '/assets/instagram-image-9.jpg', altText: '9' }, // 2x2 image
  ];
 

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-[18px] font-semibold text-gray-600 uppercase tracking-wide mb-3">Follow Us</h2>
          <p className="text-[36px] font-extrabold text-purple-800">Follow Us On Instagram</p>
        </div>

        <div className="grid grid-cols-6 grid-rows-2 gap-4">
          {/* 1 */}
          <GridItem post={instagramPosts[0]} />
          {/* 2 */}
          <GridItem post={instagramPosts[1]} />
          {/* 9 — large one */}
          <GridItem post={instagramPosts[8]} span />
          {/* 3 */}
          <GridItem post={instagramPosts[2]} />
          {/* 4 */}
          <GridItem post={instagramPosts[3]} />
          {/* 5 */}
          <GridItem post={instagramPosts[4]} />
          {/* 6 */}
          <GridItem post={instagramPosts[5]} />
          {/* 7 */}
          <GridItem post={instagramPosts[6]} />
          {/* 8 */}
          <GridItem post={instagramPosts[7]} />
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/your_instagram_handle"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-5 px-6 rounded-full transition duration-600 box-shadow-lg"
          >
            Visit Our Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

// GridItem component
interface InstagramPost {
  imageUrl: string;
  altText: string;
}

const GridItem = ({ post, span = false }: { post: InstagramPost; span?: boolean }) => (
  <a
    href="https://www.instagram.com/your_instagram_handle"
    target="_blank"
    rel="noopener noreferrer"
    className={`group relative rounded-[18px] overflow-hidden shadow-md transition duration-700 ${
      span ? 'col-span-2 row-span-2' : ''
    }`}
  >
    <div className={`relative w-full ${span ? 'h-full min-h-[100%]' : 'pt-[100%]'}`}>
      <Image
        src={post.imageUrl}
        alt={post.altText}
        fill
        className="absolute top-0 left-0 object-cover transition-transform duration-1000 ease-in-out group-hover:scale-125  group-hover:origin-center"
      />
    </div>
  </a>
);



export default FollowUsInstagram;
