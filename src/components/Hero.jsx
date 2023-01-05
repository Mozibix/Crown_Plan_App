import React from "react";
import hero from "../Images/hero.png";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section class="home-page">
        <img src={hero} alt="background" />
        <div class="home-page-inner">
          <div class="left-side">
            <h3>WELCOME</h3>

            <p class="left-text">Wedding Planner</p>

            <button class="learn-more">LEARN MORE</button>
          </div>

          <div class="right-side">
            <p class="right-text">
              The #1 ranked. Helped over 50,000 couples around the country and
              we look forward to supporting you along your wedding planning
              journey.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
