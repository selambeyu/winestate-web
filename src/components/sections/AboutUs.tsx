export default function AboutUs() {
  return (
    <section id="aboutus" className="bg-light-blue text-center ">
      <div className="bg-light-blue p-8">
        <h2 className="text-gold-yellow  text-center text-4xl mb-8">
          About Us
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-around gap-6">
          <div className="bg-gold-yellow p-4 rounded-lg rounded-tr-[70px] rounded-bl-[70px]">
            <img src="/pic.png" alt="About Us" className=" rounded-lg" />
          </div>

          <div className="text-center md:text-left max-w-md">
            <p className="text-gray-100 mb-4">
              I founded Win-Estate Homes in 2016 with a clear vision: to provide
              comprehensive, high-quality real estate services in Addis Ababa,
              Ethiopia. Our mission is to guide you through every step of your
              home-buying journey, from property selection and financing to the
              final purchase, ensuring a seamless and satisfying experience. At
              Win-Estate Homes, we offer a diverse range of properties designed
              to meet world-class standards while remaining affordable and
              accessible to everyone. Whether you're looking for a residential
              home, an apartment, or a commercial space, we have something that
              fits your lifestyle and budget.
            </p>
            <h4 className="text-gray-100">Yitbarek Temesgen</h4>
            <h4 className="text-gold-yellow">Founder & CEO</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
