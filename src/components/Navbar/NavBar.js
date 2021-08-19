import React, { useEffect, useState, useMemo, useRef } from "react";
import { motion } from "framer-motion";
import { MenuItems } from "./MenuItems";
import { Link } from "gatsby";

import { useSectionProgressData } from "./NavContext";
import "./NavBar.scss";
import ApplyButton from "../ApplyButton";

import { isApplicationOver } from "../ApplicationDeadlineText";

const SHOW_TRIGGER_Y = 700;

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isScrollingToSection, setIsScrollingToSection] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, allSectionsProgress] = useSectionProgressData();

  // function for disabling location hash change to prevent race condition
  function beginAutoScrolling() {
    setIsScrollingToSection(true);
    // abort the current itmetout
    if (scrollingTimeout.current) clearTimeout(scrollingTimeout.current);
    scrollingTimeout.current = setTimeout(() => {
      setIsScrollingToSection(false);
    }, 1000); // half a second timout tolerance
  }

  useEffect(() => {
    if (typeof currentSection.id !== "string") return;
    if (currentSection.id !== "" && !isScrollingToSection) {
      // update the location hash base on the id
      window.history.pushState({}, "", `#${currentSection.id}`);
      // scroll to the menu item
      const navElmToHighlight = document.querySelector(
        `a[href="/#${currentSection.id}"]`
      );
      if (navElmToHighlight)
        navElmToHighlight.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentSection.id]);

  // update progress bar base on the progress data
  useEffect(() => {
    // get the current section index
    const currentSectionInEntry = allSectionsProgress[currentSection.id];
    if (!currentSectionInEntry) return;

    const sectionsCount = Object.keys(allSectionsProgress).length;
    const overallProgress =
      (currentSectionInEntry.index + currentSection.progress) / sectionsCount;

    setScrollProgress(overallProgress);
  }, [currentSection.progress]);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > SHOW_TRIGGER_Y) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  // Scroll spy function
  const scrollingTimeout = useRef();
  const handleLinkClick = (e) => {
    if (!document) return;

    // re-trigger the scrolling even if the user click the same link again
    const targetElement = document.querySelector(window.location.hash);
    if (!targetElement) return;

    beginAutoScrolling();
    targetElement.scrollIntoView();
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
    <div
      className={
        scrolled ? "nav-container nav-container--scrolled" : "nav-container"
      }
    >
      <nav className="nav">
        {/* nav logo */}

        <img
          src="img/pivot-logo-2021-inverted.svg"
          alt="Pivot Logo"
          className="nav__logo"
        />
        {/* main nav bar - contains nav links and scroll progress bar */}
        <div className="nav-bar">
          <motion.div
            style={{ scaleX: `${scrollProgress}` }}
            className="nav-bar__progress"
          />
          {MenuItems.map(({ title, url }, index) => {
            // highlight the current section base on the hash on url
            const linkClassName = (() => {
              // for server side rendering
              if (typeof window !== "undefined") {
                return window.location.hash === url
                  ? "nav-link nav-link--current"
                  : "nav-link";
              } else {
                return "nav-link";
              }
            })();

            return (
              <Link
                className={linkClassName}
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
        <ApplyButton
          className="button--inverted nav__cta"
          disabled={isApplicationOver}
        />
      </nav>
    </div>
  );
};
export default NavBar;
