"use client";
import About from "../components/about/About";
import Banner from "../components/banner/Banner";
import Contact from "../components/contact/Contact";
import FeaturedProperties from "../components/featured-properties/FeaturedProperties";
import Testimonials from "../components/testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Banner />
      <FeaturedProperties />
      <About />
      <Testimonials />
      <Contact />
    </>
  );
}
