import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import SidebarStyles from "./Sidebar.module.css"; // Import external CSS file
import logo from "../../assets/logo.png";
const Sidebar = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const urlPath = useLocation();
  const drawerRef = useRef(null);

  const NavLinks = [
    {
      title: "Home",
      link: "/home",
    },
    {
      title: "Mens",
      link: "/mens",
    },
    {
      title: "Womens",
      link: "/womens",
    },
    {
      title: "Kids",
      link: "/kids",
    },
  ];

  useEffect(() => {
    function onWindowResize() {
      setScreenWidth(window.innerWidth);
      if (window.innerWidth >= 992) {
        setSideBarOpen(true);
      } else {
        setSideBarOpen(false);
      }
    }

    window.addEventListener("resize", onWindowResize);

    return () => {
      window.removeEventListener("resize", onWindowResize);
    };
  }, []);

  const onClickOutside = (event) => {
    if (
      drawerRef.current &&
      !drawerRef.current.contains(event.target) &&
      screenWidth <= 992
    ) {
      setSideBarOpen(false);
    }
  };

  useEffect(() => {
    if (sideBarOpen) {
      document.addEventListener("mousedown", onClickOutside);
    } else {
      document.removeEventListener("mousedown", onClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [sideBarOpen, screenWidth]);

  return (
    <>
      {sideBarOpen && (
        <div
          ref={drawerRef}
          className={`${SidebarStyles.sidebar} ${
            sideBarOpen
              ? `${SidebarStyles.open_Sidebar}`
              : `${SidebarStyles.closed_Sidebar}`
          }`}
        >
          <div
            className={SidebarStyles.closeButton}
            onClick={() => setSideBarOpen(false)}
          >
            X
          </div>

          <div className={SidebarStyles.logo}>
            <img src={logo} alt="logo" />
          </div>

          <ul>
            {NavLinks.map((data, index) => {
              const activePath = urlPath === data.link ? true : false;
              return (
                <li
                  key={index}
                  className={`${SidebarStyles.link} ${
                    activePath ? "active" : ""
                  }`}
                >
                  <Link to={data.link}>
                    <p>{data.title}</p>
                  </Link>
                </li>
              );
            })}
            <li className={SidebarStyles.login}>
              <button className={SidebarStyles.loginButton}>Login</button>
            </li>
          </ul>
        </div>
      )}
      {!sideBarOpen && (
        <div
          className={SidebarStyles.openButton}
          onClick={() => setSideBarOpen(true)}
        >
          ☰
        </div>
      )}
    </>
  );
};

export default Sidebar;
