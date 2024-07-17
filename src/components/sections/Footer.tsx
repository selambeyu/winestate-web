export default function Footer() {
  return (
    <div>
      <section id="testimony" className="bg-light-blue ">
        <div className="container mx-auto p-8 sm:p-16">
          <div className="flex flex-wrap justify-around mb-8">
            <div>
              <h1 className="text-gold-yellow mb-4 text-xl">
                Win-Estate Homes
              </h1>
              <div className="flex ">
                <img
                  src="/social-media/Facebook.png"
                  className="w-12 h-12"
                  alt=""
                />
                <img
                  src="/social-media/Linkedin.png"
                  className="w-12 h-12"
                  alt=""
                />

                <img
                  src="/social-media/Instagram.png"
                  className="w-12 h-12"
                  alt=""
                />
                <img
                  src="/social-media/TikTok.png"
                  className="w-12 h-12"
                  alt=""
                />
              </div>
            </div>
            <div>
              <h1 className="text-gold-yellow mb-4 ">Services</h1>
              <div>
                <ul className="text-light-white">
                  <li>Residential Listing </li>
                  <li>Residential Listing </li>
                  <li>Residential Listing </li>
                </ul>
              </div>
            </div>
            <div>
              <h1 className="text-gold-yellow mb-4 ">About Us</h1>
              <div>
                <ul className="text-light-white">
                  <li>About Us</li>
                  <li>Services</li>
                  <li>Testimonals</li>
                  <li>Common Questions</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-around ">
            <div className="flex items-center gap-2">
              <img
                src="/social-media/Instagram.png"
                className="w-8 h-8"
                alt=""
              />
              <h1 className="text-light-white">Address</h1>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="/social-media/Instagram.png"
                className="w-8 h-8"
                alt=""
              />
              <h1 className="text-light-white"> +251234532345/251555434</h1>
            </div>
            <div className="flex items-center gap-2">
              <img
                src="/social-media/Instagram.png"
                className="w-8 h-8"
                alt=""
              />
              <h1 className="text-light-white">info@winestate@gmail.com</h1>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-dark-blue w-full  bottom-0 mb-0 top-0">
        <h1 className="text-center p-4 text-light-white">
          All Rights Reserved !
        </h1>
      </div>
    </div>
  );
}
