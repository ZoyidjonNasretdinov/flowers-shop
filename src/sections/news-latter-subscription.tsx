const NewsletterSubscription = () => {
  return (
    <section className="py-[100px] bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-[16px] font-semibold text-gray-600 uppercase tracking-wide mb-2">Our Newsletter</h2>
        <p className="text-[32px] font-bold text-purple-800 mb-4">
          Subscribe to Our Newsletter to <br className="sm:hidden" /> Get Updates on Our Latest Offers
        </p>
        <p className="text-gray-600 mb-8">
          Get 20% off on your first order just by subscribing to our newsletter
        </p>
        <form className="max-w-md mx-auto flex">
          <input
            type="email"
            className="shadow-sm focus:ring-purple-500 focus:border-purple-500 block w-full min-w-0 rounded-md border-gray-300 py-3 px-4 text-gray-900 sm:text-sm"
            placeholder="Enter Email Address"
            aria-label="Email address"
            required
          />
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-md ml-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSubscription;
