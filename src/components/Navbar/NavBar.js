import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MenuItems } from "./MenuItems";
import { Link } from "gatsby";
import "./NavBar.scss";

const SHOW_TRIGGER_Y = 700;

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  const [documentHeight, setDocumentHeight] = useState(0);

  const currentSection = 0;
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > SHOW_TRIGGER_Y) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
    // setScrollProgress();
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // in case the user is not stsarted at the top
    handleScroll();
    return () => {
      // clean up funciton when nav bar dismount
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // no update dependency, only run once

  return (
    <div className="nav-container">
      <nav className={scrolled ? "nav nav--scrolled" : "nav"}>
        {/* nav logo */}
        <img
          src="img/pivot-logo-2021-inverted.svg"
          alt="Pivot Logo"
          className="nav__logo"
        />
        {/* main nav bar */}
        <div className="nav-bar">
          <motion.div
            style={{ width: `${scrollProgress}` }}
            className="nav-bar__progress"
          ></motion.div>
          {MenuItems.map(({ title, url }, index) => {
            return (
              <Link className="nav-link" to={url} key={index}>
                <div className="nav-link__index">{`0${index + 1}`}</div>
                <div className="nav-link__title">{title}</div>
              </Link>
            );
          })}
        </div>
        {/* Apply button */}
      </nav>
    </div>
  );
};
export default NavBar;
