import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

import "./CopyableField.scss";

function copyTextToClipboard(text) {
  let copyText = document.createElement("input");
  copyText.type = "input";
  document.body.append(copyText);

  copyText.value = text;
  copyText.select();
  document.execCommand("copy");
  copyText.remove();
}

const copiedMessageAnimation = {
  initial: {
    width: 0,
  },
  enter: {
    width: "100%",
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.1 },
  },
};

// Show copied message for 1 seconds
const copiedMessageDuration = 1000;

const CopyableField = ({ children, className }) => {
  const [isCopied, setIsCopied] = useState(false);

  // in case the copy content is a link
  const copyContent =
    typeof children === "string" ? children : children.children;

  const handleButtonClick = () => {
    copyTextToClipboard(copyContent);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), copiedMessageDuration);
  };

  return (
    <div className={`copyable-field ${className}`}>
      <AnimatePresence>
        {isCopied && (
          <motion.div
            className="copyable-field__copied-message"
            variants={copiedMessageAnimation}
            initial="initial"
            animate="enter"
            exit="exit"
          >
            Copied
          </motion.div>
        )}
      </AnimatePresence>
      <div className="copyable-field__copy-text">{children}</div>
      <img
        onClick={handleButtonClick}
        src="img/copy-icon.svg"
        className="copyable-field__button"
        alt="copy icon"
      />
    </div>
  );
};

export default CopyableField;
