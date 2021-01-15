import React from "react";
import PropTypes from "prop-types";

import "./hero.scss";
import { Link } from "gatsby";

const hero = ({ pivotBeginDate, pivotEndDate, daysLeft, applicationLink }) => (
  <header id="hero" className="full-width hero">
    {/* top bar */}
    <div className="hero-cta">
      <img
        src="img/pivot-logo-2021.svg"
        alt="Pivot Logo"
        className="hero-cta__logo"
      />
      <p className="hero-cta__cta-text label">
        {Math.floor(daysLeft)} days left!
      </p>
      <Link to={applicationLink} target="blank">
        Apply Now
      </Link>
    </div>
    {/* center area */}
    <h1 className="hero__heading">
      BC based BTM Case Competition built for future business leaders
    </h1>
    <div className="hero__label">1 week virtual event</div>
    <div className="hero__date">
      {/* Javascript month starts from zero */}
      {`${pivotBeginDate.getMonth() + 1}/${pivotBeginDate.getDate()} - ${
        pivotEndDate.getMonth() + 1
      }/${pivotEndDate.getDate()}`}
    </div>
  </header>
);

hero.propTypes = {
  pivotBeginDate: PropTypes.object,
  pivotEndDate: PropTypes.object,
};

export default hero;
