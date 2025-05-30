import React from "react";
import HeroImg from "../Assets/hero_img.png"
import "./Hero.css";

function Hero(){
    return(
        <div className="hero_section">
            
        <img src={HeroImg} alt="hero-img" className="hero_img" />

        </div>
    );
};
export default Hero