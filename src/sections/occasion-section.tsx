import Image from "next/image";
import FlowerDeals from "./flower-deels";

const OccasionsSection = () => {
  const occasions = [
    { name: 'Weddings', count: 42, image: '/assets/top-seller-img.jpg' },
    { name: 'Birthday', count: 56, image: '/assets/top-seller-img.jpg' },
    { name: 'Anniversary', count: 11, image: '/assets/top-seller-img.jpg' },
    { name: 'Thank You', count: 48, image: '/assets/top-seller-img.jpg' },
    { name: 'Graduation', count: 13, image: '/assets/top-seller-img.jpg' },
    { name: 'Get Well Soon', count: 16, image: '/assets/top-seller-img.jpg' },
    { name: 'Sympathy', count: 22, image: '/assets/top-seller-img.jpg' },
    { name: 'New Baby', count: 35, image: '/assets/top-seller-img.jpg' },
    { name: 'Congratulations', count: 28, image: '/assets/top-seller-img.jpg' },
    { name: 'Just Because', count: 51, image: '/assets/top-seller-img.jpg' },
  ];

  const looped = [...occasions, ...occasions];

  return (
    <section className="bg-white py-8 relative">
      {/* Inline style for marquee animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .marquee {
            animation: marquee 20s linear infinite;
          }
        `}
      </style>

      <div className="container mx-auto overflow-hidden">
        <h2 className="text-[24px] font-bold text-gray-600 mb-4 text-center">Occasions</h2>
        <h3 className="text-[36px] font-bold text-purple-700 mb-8 text-center">Shop By Occasions</h3>

        <div className="relative w-full overflow-hidden">
          <ul className="flex w-max space-x-6 md:space-x-8 lg:space-x-10 marquee">
            {looped.map((occasion, index) => (
                <li key={`${occasion.name}-${index}`} className="flex-shrink-0 text-center">
                <div className="relative w-48 h-48 rounded-full bg-gray-100 flex items-center justify-center mx-auto">
                  <Image
                  src={occasion.image}
                  alt={occasion.name}
                  width={192}
                  height={192}
                  className="w-48 h-48 object-cover rounded-full"
                  />
                </div>
                <div className="mt-2">
                  <h4 className="text-sm md:text-base font-bold text-gray-800">{occasion.name}</h4>
                  <p className="text-xs md:text-sm text-gray-500">{occasion.count} Products</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <FlowerDeals />
    </section>
  );
};

export default OccasionsSection;
