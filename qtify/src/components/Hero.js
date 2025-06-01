import React from "react";
import HeroImg from "../Assets/hero_img.png";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero_section">
      <div className="hero_text">
        <h1>100 Thousand Songs, ad-free</h1>
        <p>Over thousands podcast episodes</p>
      </div>
      <img src={HeroImg} alt="hero-img" className="hero_img" />
    </div>
  );
}

export default Hero;
