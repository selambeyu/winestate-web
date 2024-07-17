export default function Faq() {
  return (
    <section id="faq" className="bg-light-blue py-20">
      <div className="container mx-auto p-8 sm:p-16">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl   text-center text-gold-yellow mb-8">
          Common Questions
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <img src="./faq.png" className="w-90" alt="" />
          <div className="bg-white p-10 border rounded-tl-[120px] rounded-br-[120px]  shadow-lg w-full ">
            <h4 className=" text-gold-yellow mb-4">
              1. What services does Win-Estate Homes offer?
            </h4>
            <p className="text-light-blue text-sm">
              Win-Estate Homes provides end-to-end real estate services,
              including property selection, financing assistance, and support
              throughout the purchasing process to help you find a home that
              fits your lifestyle and budget.
            </p>
          </div>
          <div className="bg-white p-10 border rounded-tl-[120px] rounded-br-[120px]  shadow-lg col-span-1">
            <h4 className="text-gold-yellow mb-4">
              2. What types of properties are available?
            </h4>
            <p className="text-light-blue text-sm">
              We offer a variety of properties in Addis Ababa, Ethiopia,
              including residential homes, apartments, and commercial spaces,
              all designed to world-class standards and catering to diverse
              financial capacities.
            </p>
          </div>
          <div></div>
          <div></div>

          <div className="bg-white p-10 border rounded-tl-[120px] rounded-br-[120px]  shadow-lg col-span-1">
            <h4 className=" text-gold-yellow mb-4">
              2. What types of properties are available?
            </h4>
            <p className="text-light-blue text-sm">
              We offer a variety of properties in Addis Ababa, Ethiopia,
              including residential homes, apartments, and commercial spaces,
              all designed to world-class standards and catering to diverse
              financial capacities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
