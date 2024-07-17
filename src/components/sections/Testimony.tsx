export default function Testimonials() {
  return (
    <section id="testimony" className="bg-light-blue py-20">
      <div className="container mx-auto p-8 sm:p-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl   text-center text-gold-yellow mb-8">
          Testimonials
        </h2>
        <div className="flex flex-wrap justify-around gap-4 ">
          {" "}
          <div className="gap-6 ">
            <img
              className="rounded-full h-auto w-36 place-items-center mx-auto -mb-14 "
              src="/melkam.jpg"
              alt=""
            />
            {/* <div className="> */}
            <div className=" bg-white border w-64 h-auto rounded-3xl shadow-lg p-8">
              <p className="text-sm text-light-blue">
                "Great service and support G!"
              </p>
              <p className="text-right text-yello-orange py-4 ">
                - Happy Customer
              </p>
            </div>
          </div>
          <div className="gap-6 ">
            <img
              className="rounded-full h-auto w-36 place-items-center mx-auto -mb-14 "
              src="/testavatar.png"
              alt=""
            />
            {/* <div className="> */}
            <div className=" bg-white border w-64 h-auto rounded-3xl shadow-lg p-10">
              <p className="text-sm text-light-blue">
                "Great service and support G!"
              </p>
              <p className="text-right text-yello-orange py-4 ">
                - Happy Customer
              </p>
            </div>
          </div>
          <div className="gap-6 ">
            <img
              className="rounded-full h-auto w-36 place-items-center mx-auto -mb-14 "
              src="/melkam.jpg"
              alt=""
            />
            {/* <div className="> */}
            <div className="p-16 bg-white border  rounded-3xl shadow-lg ">
              <p className="w-52">"Great service and support!"</p>
              <p className="text-right text-yello-orange ">- Happy Customer</p>
            </div>
          </div>
          <div className="gap-6 ">
            <img
              className="rounded-full h-auto w-36 place-items-center mx-auto -mb-14 "
              src="/testavatar.png"
              alt=""
            />
            {/* <div className="> */}
            <div className=" bg-white border w-64 h-auto rounded-3xl shadow-lg p-8">
              <p className="text-sm text-light-blue">
                "Great service and support G!"
              </p>
              <p className="text-right text-yello-orange py-4 ">
                - Happy Customer
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}
