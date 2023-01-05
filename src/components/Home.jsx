import React from "react";
import Hero from "./Hero";
import { Review } from "./Review";
import "./Home.css";
import Services from "./Services";

const Home = () => {
  return (
    <>
      <section>
        <section id="hero">
          <Hero />
        </section>

        <section id="review">
          <Review />
        </section>

        <section id="services">
          <Services />
        </section>
      </section>
    </>
  );
};

export default Home;
