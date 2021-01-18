import React from "react";
import PropTypes from "prop-types";
import "./FaqComponent.scss";

const FaqList = ({ catagoryName, children }) => {
  return (
    <>
      <div className="faq-list-container">
        <h4 className="faq-list-label">{catagoryName}</h4>
        <ul className="faq-list">{children}</ul>
      </div>
    </>
  );
};

FaqList.propTypes = {
  catagoryName: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default FaqList;
