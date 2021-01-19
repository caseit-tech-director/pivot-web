import React, { useEffect, useState, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { MenuItems } from "./MenuItems";
import { Link } from "gatsby";
import "./NavBar.scss";

const SHOW_TRIGGER_Y = 700;

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollPos, setScrollPos] = useState(0);
  const [isScrollingToSection, setIsScrollingToSection] = useState(false);

  // grab all the section elements on the menu item list
  const sectionsElement = useMemo(() => {
    return MenuItems.map(({ url }) => {
      return document.querySelector(`${url}`);
    });
  }, [scrollPos]);

  const sectionsInView = sectionsElement.filter((elm) => {
    // null check elm, in case it the sections haven't render yet
    if (!elm) return;

    // using bounding client rect to determine whether a specific element is in view
    const boundingClientRect = elm.getBoundingClientRect();
    if (
      boundingClientRect.top <= window.innerHeight * 0.1 && //.25 tolerance
      boundingClientRect.top > 0
    ) {
      return true;
    }
    return false;
  });

  // autometically update the hash tag when the user scroll to a specific section
  const viewingSection = sectionsInView[sectionsInView.length - 1];
  if (viewingSection && !isScrollingToSection)
    window.history.pushState({}, "", `#${viewingSection.id}`);

  const currentSection = 0;
  const currentSectionProgress = 0;
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > SHOW_TRIGGER_Y) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
    // setScrollProgress();
    setScrollPos(offset);
  };

  const scrollingTimeout = useRef();
  const handleLinkClick = (e) => {
    // re-trigger the scrolling even if the user click the same link again
    document.querySelector(window.location.hash).scrollIntoView();

    setIsScrollingToSection(true);
    // abort the current itmetout
    if (scrollingTimeout.current) clearTimeout(scrollingTimeout.current);
    scrollingTimeout.current = setTimeout(() => {
      setIsScrollingToSection(false);
    }, 1000); // half a second timout tolerance
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
              <Link
                className="nav-link"
                to={url}
                key={index}
                onClick={handleLinkClick}
              >
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
