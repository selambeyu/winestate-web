import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import AboutUs from "@/components/sections/AboutUs";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimony";
import Faq from "@/components/sections/Faq";
import Footer from "@/components/sections/Footer";
// import Test from "@/components/sections/Test";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Testimonials />

      <Faq />
      <Footer />
    </div>
  );
}
