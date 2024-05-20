import React from "react";
import FooterStyles from "./Footer.module.css";
import { Link } from "react-router-dom";
import whatsappicon from "../../assets/whatsapp_icon.png";
import instagramicon from "../../assets/instagram_icon.png";
const Footer = () => {
  return (
    <footer className={FooterStyles.footer}>
      <div className={FooterStyles.footer_column}>
        <h3>ABOUT US</h3>
        <Link to="/home">
          <p>Who We Are</p>
        </Link>
        <Link to="/home">
          <p>Work With Us</p>
        </Link>
        <Link to="/home">
          <p>Become A Supplier</p>
        </Link>
        <Link to="/home">
          <p>Investor Relations</p>
        </Link>
        <Link to="/home">
          <p>Our Devices</p>
        </Link>
        <Link to="/home">
          <p>Affiliate Program</p>
        </Link>
      </div>
      <div className={FooterStyles.footer_column}>
        <h3>USEFUL LINKS</h3>
        <Link to="/home">
          <p>Who We Are</p>
        </Link>
        <Link to="/home">
          <p>Work With Us</p>
        </Link>
        <Link to="/home">
          <p>Become A Supplier</p>
        </Link>
        <Link to="/home">
          <p>Investor Relations</p>
        </Link>
        <Link to="/home">
          <p>Our Devices</p>
        </Link>
        <Link to="/home">
          <p>Affiliate Program</p>
        </Link>
      </div>
      <div className={FooterStyles.footer_column}>
        <h3>ONLINE SHOPPING</h3>
        <Link to="/home">
          <p>Who We Are</p>
        </Link>
        <Link to="/home">
          <p>Work With Us</p>
        </Link>
        <Link to="/home">
          <p>Become A Supplier</p>
        </Link>
        <Link to="/home">
          <p>Investor Relations</p>
        </Link>
        <Link to="/home">
          <p>Our Devices</p>
        </Link>
        <Link to="/home">
          <p>Affiliate Program</p>
        </Link>
      </div>
      <div className={FooterStyles.footer_column}>
        <h3>EXPERIENCE APP IN MOBILE</h3>

        <h4 className={FooterStyles.shopping}>ONLINE SHOPPING</h4>
        <hr></hr>
        <img
          className={FooterStyles.social}
          src={whatsappicon}
          alt="whatsappicon"
        />
        <img
          className={FooterStyles.social}
          src={instagramicon}
          alt="instagramicon"
        />
      </div>
    </footer>
  );
};

export default Footer;
