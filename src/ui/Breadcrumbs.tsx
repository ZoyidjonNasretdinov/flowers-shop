'use client'; // This marks the component as a Client Component

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Breadcrumbs = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(segment => segment !== '');

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    ...pathSegments.map((segment, index) => {
      const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
      const label = segment
        .replace(/-/g, ' ')
        .replace(/%20/g, ' ')
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      return { label, path };
    }),
  ];

  return (
    <div className="py-4 bg-gray-100 text-gray-600 text-sm">
      <div className="container mx-auto px-4">
        <span className="mr-2">Shop</span>
        <span className="mx-2">/</span>
        {breadcrumbItems.map((item, index) => (
          <span key={index}>
            {index > 0 && <span className="mx-2">/</span>}
            {index === breadcrumbItems.length - 1 ? (
              <span className="font-semibold">{item.label}</span>
            ) : (
              <Link href={item.path} className="hover:text-purple-600">
                {item.label}
              </Link>
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumbs;
