import React from "react";
import { Link } from "gatsby";

const PIVOT_APPS_LINK = "https://www.surveymonkey.ca/r/pivot2021";

const ApplyButton = ({ ...props }) => (
  <Link
    to={PIVOT_APPS_LINK}
    target="blank"
    className={"button " + props.className}
  >
    Apply Now
  </Link>
);

export default ApplyButton;
