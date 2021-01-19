import React, { useEffect, useRef, useState } from "react";
import { useUpdateSectionProgress } from "./NavContext";

/*
 * The purpose of this component is to detect scroll progress within
 * the section while pushing update to the navContext provider compoent.
 *
 * *** require the "NavDataContext" context provide inorder for this to work
 */
const SECTION_VERTICAL_OFFSET = 200; // vertical offset to compensate the anchor difference

const NavSection = ({ name, children }) => {
  const measureRef = useRef();
  const updateSectionProgress = useUpdateSectionProgress();
  const [isSectionInView, setSectionInView] = useState(false);

  function setProgress(progress) {
    updateSectionProgress({ id: name, progress: progress });
  }

  // setup intersection observer for detecting whether the element is in view
  useEffect(() => {
    const options = { rootMargin: `${-SECTION_VERTICAL_OFFSET}px 0px 0px 0px` };
    const observer = new IntersectionObserver(function (entries, observer) {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setSectionInView(true);
      } else {
        setSectionInView(false);
      }
    }, options);

    // observe the container to see if the section is in view
    observer.observe(measureRef.current);

    // cleanup
    return () => observer.unobserve(measureRef.current);
  }, []);

  const READ_THREASHOLD = 0; // the y position which we consider the section is read

  // handle whether if the section is in view
  useEffect(() => {
    const handleScrollDuringInView = () => {
      // as client rect is relative to the viewport,
      // we can use the client rect to calculate how much the user has read
      const containingRect = measureRef.current.getBoundingClientRect();

      const yOffset = containingRect.top;
      const height = containingRect.height;

      const sectionReadingProgress =
        (-yOffset + SECTION_VERTICAL_OFFSET) / height;
      const clampedValue = Math.min(Math.max(sectionReadingProgress, 0), 1);
      setProgress(clampedValue);
    };

    if (isSectionInView) {
      // start measuring the
      window.addEventListener("scroll", handleScrollDuringInView);
    } else {
      // the section is getting out of view
      // check if the user has finish the section
      if (measureRef.current.getBoundingClientRect().bottom < READ_THREASHOLD) {
        // the user has finished this section
        setProgress(1);
      } else {
        setProgress(0);
      }
    }

    return () => {
      // clean up
      window.removeEventListener("scroll", handleScrollDuringInView);
    };
  }, [isSectionInView]);
  return (
    <div ref={measureRef}>
      <a
        id={name}
        className="section-anchor"
        style={{
          display: "block",
          position: "relative",
          top: `-${SECTION_VERTICAL_OFFSET}px`,
          visibility: "hidden",
        }}
      ></a>
      {children}
    </div>
  );
};

export default NavSection;
