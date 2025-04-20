// components/OrderStatus.tsx or app/page.tsx
import React from 'react';
// Optional: Import icons if you installed react-icons
import { FaCheck, FaBox, FaClipboardCheck, FaTruck, FaHome } from 'react-icons/fa';

// --- Placeholder Data (Replace with actual data from your API/state) ---
const orderData = {
  orderId: '#SDGT1254FD',
  status: 'Accepted', // Current status: 'Order Placed', 'Accepted', 'In Progress', 'On the Way', 'Delivered'
  events: [
    { name: 'Order Placed', date: '20 Dec 2024', time: '11:00 AM', completed: true },
    { name: 'Accepted', date: '20 Dec 2024', time: '11:15 AM', completed: true },
    { name: 'In Progress', date: 'Expected', time: '20 Dec 2024', completed: false },
    { name: 'On the Way', date: 'Expected', time: '21 Dec 2024', completed: false },
    { name: 'Delivered', date: 'Expected', time: '21 Dec 2024', completed: false },
  ],
  products: [
    { id: 1, name: 'Blue White Bouquets', category: 'Bouquet', imageUrl: '/assets/card-img.webp' }, // Replace with actual image URL
    { id: 2, name: 'Royal Pink Bouquets', category: 'Bouquet', imageUrl: '/assets/card-image-2.png' }, // Replace with actual image URL
    { id: 3, name: 'Lavenders Bouquets', category: 'Bouquet', imageUrl: '/assets/card-image-3.png' }, // Replace with actual image URL
    { id: 4, name: 'Fresh Flower Basket', category: 'Basket', imageUrl: '/assets/card-image-4.png' }, // Replace with actual image URL
  ],
};

// --- Helper to determine progress width ---
const getProgressWidth = (status: string, events: typeof orderData.events): string => {
  const currentIndex = events.findIndex(event => event.name === status);
  const completedSteps = events.filter(e => e.completed).length;

  // If delivered, full width
  if (status === 'Delivered' && events[events.length - 1].completed) return 'w-full';

  // Calculate width based on completed steps (not the current step index)
  // Each segment is roughly 1/4 of the total width between the first and last point
  if (completedSteps <= 1) return 'w-0'; // No progress line shown yet or only first step done
  if (completedSteps === 2) return 'w-1/4'; // Accepted
  if (completedSteps === 3) return 'w-2/4'; // In Progress
  if (completedSteps === 4) return 'w-3/4'; // On the Way
  if (completedSteps === 5) return 'w-full'; // Delivered

  return 'w-0'; // Default fallback
};

// --- Status Icons Mapping (Example using react-icons) ---
const statusIcons: { [key: string]: React.ElementType } = {
  'Order Placed': FaClipboardCheck,
  'Accepted': FaCheck, // Using FaCheck for the circle checkmark
  'In Progress': FaBox,
  'On the Way': FaTruck,
  'Delivered': FaHome,
};


const OrderStatus: React.FC = () => {
  const progressWidth = getProgressWidth(orderData.status, orderData.events);

  return (
    <section className="container mx-auto py-6 md:p-8 bg-white rounded-lg font-sans">
      {/* Order Status Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-800 mb-1">Order Status</h2>
        <p className="text-sm text-gray-500 mb-6">Order ID: {orderData.orderId}</p>

        {/* Progress Tracker */}
        <div className="relative pt-4 px-2"> {/* Added padding-top for icon space and horizontal padding */}
          {/* Background Line */}
          <div className="absolute top-6 left-0 right-0 h-1 bg-gray-200 mx-6 md:mx-10 rounded-full z-0"></div>

          {/* Progress Line */}
          <div
            className={`absolute top-6 left-0 h-1 bg-purple-600 mx-6 md:mx-10 rounded-full z-0 transition-all duration-500 ease-in-out ${progressWidth}`}
          ></div>

          {/* Status Steps */}
          <div className="relative flex justify-between items-start z-10">
            {orderData.events.map((event, index) => {
              const IconComponent = statusIcons[event.name] || FaCheck; // Fallback icon
              const isCompleted = event.completed;

              return (
                <div key={index} className="flex flex-col items-center text-center w-1/5 px-1">
                  {/* Icon Circle */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                      isCompleted ? 'bg-purple-600 text-white' : 'bg-gray-200 border border-gray-300 text-gray-400'
                    }`}
                  >
                    {/* Show checkmark inside the purple circle for completed steps */}
                    {isCompleted ? <FaCheck size={14} /> : <IconComponent size={14} />}
                  </div>
                  {/* Label */}
                  <p className={`text-xs font-medium ${isCompleted ? 'text-gray-800' : 'text-gray-500'}`}>
                    {event.name}
                  </p>
                  {/* Date/Time */}
                  <p className="text-xs text-gray-500 mt-1">
                    {event.date === 'Expected' ? 'Expected' : event.date}
                  </p>
                  <p className="text-xs text-gray-500">
                    {event.date !== 'Expected' && event.time}
                    {event.date === 'Expected' && event.time} {/* Show expected date/time */}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-8 border-gray-200" />

      {/* Products Section */}
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Products</h3>
        <div className="space-y-4">
          {orderData.products.map((product) => (
            <div key={product.id} className="flex items-center bg-gray-50 p-3 rounded-md">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-14 h-14 md:w-16 md:h-16 object-cover rounded-md mr-4 flex-shrink-0"
              />
              <div>
                <p className="font-medium text-gray-800 text-sm md:text-base">{product.name}</p>
                <p className="text-xs md:text-sm text-gray-500">{product.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OrderStatus;

// If using in app/page.tsx, make sure it's the default export or rendered within the page
// export default function HomePage() {
//   return (
//     <main className="p-4 bg-gray-100 min-h-screen">
//       <OrderStatus />
//     </main>
//   );
// }