export default function Services() {
  return (
    <section
      id="services"
      className="bg-light-blue text-center py-12 sm:py-24 lg:py-32"
    >
      <div className="p-8 sm:p-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-gold-yellow mb-8">
          What We Offer
        </h1>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-12 lg:gap-2">
          <div className="bg-white rounded-tr-[70px] rounded-bl-[70px] shadow-lg overflow-hidden max-w-xs mx-auto sm:max-w-sm lg:max-w-xs">
            <img
              src="/offer/resident.png"
              alt="Residential Listings"
              className="w-full h-auto"
            />
            <div className="p-8">
              <h4 className="text-lg sm:text-lg lg:text-lg font-semibold mb-2 text-left text-gold-yellow">
                Residential Listings
              </h4>
              <p className="text-gray-100 text-left text-sm">
                Experience world-class standards and affordability in Addis
                Ababa, Ethiopia
              </p>
            </div>
          </div>
          <div className="bg-white   rounded-tr-[70px] rounded-bl-[70px] shadow-lg overflow-hidden max-w-xs mx-auto sm:max-w-sm lg:max-w-xs">
            <img
              src="/offer/sales.png"
              alt="Sales and Leasing"
              className="w-full h-auto"
            />
            <div className="p-8">
              <h4 className="text-lg sm:text-lg lg:text-lg font-semibold mb-2 text-left text-gold-yellow">
                Sales and Leasing
              </h4>
              <p className="text-gray-100 text-left text-sm">
                One-on-One assistance from search to purchase.
              </p>
            </div>
          </div>
          <div className="bg-white  rounded-tr-[70px] rounded-bl-[70px] shadow-lg overflow-hidden max-w-xs mx-auto sm:max-w-sm lg:max-w-xs">
            <img
              src="/offer/property.png"
              alt="Property Management"
              className="w-full h-auto"
            />
            <div className="p-8">
              <h4 className="text-lg sm:text-lg lg:text-lg font-semibold mb-2 text-left text-gold-yellow">
                Property Management
              </h4>
              <p className="text-gray-100 text-left text-sm">
                Consultancy for clients with multiple properties.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
