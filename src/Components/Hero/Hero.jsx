import React from "react";
import HeroStyles from "./Hero.module.css";
const Hero = () => {
  return (
    <>
      <div className={HeroStyles.hero_parent}>
        <div className={HeroStyles.hero_content}>
          <p className={HeroStyles.ultimate_collection}>ULTIMATE COLLECTION</p>
          <h3 className={HeroStyles.complete_store}>
            Complete Women <br></br> Fashion Here
          </h3>
          <button className={HeroStyles.shop_btn}>SHOP NOW</button>
        </div>
        <div className={HeroStyles.hero_banner_img}>
          <img src="/ban-1.png" alt="ban-1" />
        </div>
      </div>
    </>
  );
};

export default Hero;
