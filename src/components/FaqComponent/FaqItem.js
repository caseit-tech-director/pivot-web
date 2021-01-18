import React, { useState } from "react";
import PropTypes from "prop-types";
import "./FaqComponent.scss";

import { motion } from "framer-motion";

const FaqItem = ({ question, answer }) => {
  const [expanded, setExpended] = useState(false);

  const toggleExpandState = () => {
    setExpended(!expanded);
  };

  return (
    <li className="faq-item">
      <a className="faq-item__toggle-button" onClick={toggleExpandState}>
        <div className="faq-item__toggle-label">{question}</div>
        <motion.div
          className="faq-item__toggle-icon"
          animate={{
            rotate: expanded ? 180 : 0,
          }}
        >
          open icon
        </motion.div>
      </a>
      <motion.p
        animate={{
          height: expanded ? "auto" : "0px",
          overflow: "hidden",
        }}
        className="faq-item__answer"
      >
        {answer}
      </motion.p>
    </li>
  );
};

FaqItem.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default FaqItem;
