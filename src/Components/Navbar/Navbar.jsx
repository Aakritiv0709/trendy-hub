import React from "react";
import NavbarStyles from "./Navbar.module.css";
import logo from "../../assets/logo.png";
import cart_icon from "../../assets/cart_icon.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const NavLinks = [
    {
      title: "Home",
      links: "/home",
    },
    {
      title: "Mens",
      links: "/mens",
    },
    {
      title: "Womens",
      links: "/womens",
    },
    {
      title: "Kids",
      links: "/kids",
    },
  ];
  return (
    <div className={NavbarStyles.navbar}>
      <div className={NavbarStyles.main_logo}>
        <div className={NavbarStyles.sidebar}>
          <Sidebar />
        </div>
        <div className={NavbarStyles.logo_section}>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <h4>TrendyHUB</h4>
        </div>
      </div>
      <ul className={NavbarStyles.navlinks}>
        {NavLinks.map((link, index) => (
          <li
            className={NavbarStyles.text}
            onClick={() => {
              setMenu(link.title);
            }}
            key={index}
          >
            <Link to={link.links} className={NavbarStyles.links}>
              {link.title}
            </Link>
            {/* {menu === link.title ? <hr /> : <></>} */}
          </li>
        ))}
      </ul>
      <div className={NavbarStyles.cart_section}>
        <button>Login</button>
        <img src={cart_icon} alt="cart-icon" />
        <div className={NavbarStyles.cart_count}>0</div>
      </div>
    </div>
  );
};

export default Navbar;
