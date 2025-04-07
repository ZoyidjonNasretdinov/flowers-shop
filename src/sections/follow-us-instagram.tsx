import Image from 'next/image';

const FollowUsInstagram = () => {
  const instagramPosts = [
    { imageUrl: 'https://img.freepik.com/premium-photo/woman-hijab-stands-front-house-with-bush-flowers_867577-28.jpg', altText: '1' },
    { imageUrl: 'https://img.freepik.com/premium-photo/woman-hijab-stands-front-house-with-bush-flowers_867577-28.jpg', altText: '2' },
    { imageUrl: 'https://img.freepik.com/premium-photo/woman-hijab-stands-front-house-with-bush-flowers_867577-28.jpg', altText: '3' },
    { imageUrl: 'https://img.freepik.com/premium-photo/woman-hijab-stands-front-house-with-bush-flowers_867577-28.jpg', altText: '4' },
    { imageUrl: 'https://img.freepik.com/premium-photo/woman-hijab-stands-front-house-with-bush-flowers_867577-28.jpg', altText: '5' },
    { imageUrl: 'https://img.freepik.com/premium-photo/woman-hijab-stands-front-house-with-bush-flowers_867577-28.jpg', altText: '6' },
    { imageUrl: 'https://img.freepik.com/premium-photo/woman-hijab-stands-front-house-with-bush-flowers_867577-28.jpg', altText: '7' },
    { imageUrl: 'https://img.freepik.com/premium-photo/woman-hijab-stands-front-house-with-bush-flowers_867577-28.jpg', altText: '8' },
    { imageUrl: 'https://img.freepik.com/premium-photo/woman-hijab-stands-front-house-with-bush-flowers_867577-28.jpg', altText: '9' }, // 2x2 image
  ];
 

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-[18px] font-semibold text-gray-600 uppercase tracking-wide mb-5">Follow Us</h2>
          <p className="text-[26px] font-extrabold text-purple-800">Follow Us On Instagram</p>
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

        <div className="text-center mt-10">
          <a
            href="https://www.instagram.com/your_instagram_handle"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-6 rounded-full transition duration-300"
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
