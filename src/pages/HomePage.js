import React from "react";
import { Hero, Contact, FeaturedProducts, Services } from "../components/index";

const Homepage = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  );
};

export default Homepage;
