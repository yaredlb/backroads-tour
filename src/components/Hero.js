import React from "react";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-banner">
        <h1>Backroads exploring</h1>
        <p>
          Embark on a journey of discovery, where every path leads to new
          adventures and breathtaking sights. Whether you’re wandering through
          ancient cities, uncovering hidden gems, or experiencing the local
          culture, there’s always something new to explore. Every destination is
          a new chapter in your story—so keep exploring, and let the journey
          unfold.
        </p>
        <a href="#tours" className="btn hero-btn">
          explore tours
        </a>
      </div>
    </section>
  );
};

export default Hero;
