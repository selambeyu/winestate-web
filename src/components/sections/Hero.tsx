export default function Hero() {
  return (
    <section id="home" className="bg-light-blue text-center  py-20">
      <div className=" ">
        <div className="mx-auto max-w-2xl py-8 sm:py-18 lg:py-36 flex justify-center items-center">
          <div>
            <h2 className="text-gold-yellow ">
              Find Your Perfect Home in Addis Ababa
            </h2>
            <h6 className="text-gray-100">
              Premium Real Estate Solutions Tailored to Your Needs
            </h6>
          </div>
          <div>
            <img
              src="/winestate-img.png"
              className="h-full w-full object-fill object-right"
              alt="realeastate"
            />
          </div>
        </div>
        <div className="bg-dark-blue py-6 sm:py-12 lg:py-16 flex flex-col lg:flex-row justify-around items-center gap-8">
          <div className="flex flex-col md:flex-row  items-center gap-6">
            <img src="/Client.svg" alt="" />
            <div className="text-center md:text-left sm:text-center">
              <h4 className="text-gold-yellow text-xl">10+</h4>
              <h6 className="text-gray-100">HAPPY CLIENTS</h6>
            </div>
          </div>
          <div className="flex flex-col md:flex-row  items-center gap-6">
            <img src="/Certificates.svg" alt="" />
            <div className="text-center md:text-left sm:text-center">
              <h4 className="text-gold-yellow text-xl">6+</h4>
              <h6 className="text-gray-100">Certificates</h6>
            </div>
          </div>
          <div className="flex flex-col md:flex-row  items-center gap-6">
            <img src="/Experience.svg" alt="" />
            <div className="text-center md:text-left sm:text-center">
              <h4 className="text-gold-yellow text-xl">10+</h4>
              <h6 className="text-gray-100">Years of Experience</h6>
            </div>
          </div>
        </div>

        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
}
