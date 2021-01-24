import React from "react";
import { Link } from "gatsby";

const PIVOT_APPS_LINK = "https://www.surveymonkey.ca/r/pivot2021";

const ApplyButton = ({ disabled, className, ...props }) => {
  const buttonClasses = disabled ? "button button--disabled " : "button ";

  return (
    <Link
      to={disabled ? "#" : PIVOT_APPS_LINK}
      target={disabled ? "" : "blank"}
      className={buttonClasses + className}
    >
      Apply Now
    </Link>
  );
};

export default ApplyButton;
