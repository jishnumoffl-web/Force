import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Leadership from "@/components/Leadership";
import Membership from "@/components/Membership";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Hero/>
    <About/>
    <Services/>
    <Membership/>
    <Gallery/>
    <Leadership/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    
    </>
 
  );
}
