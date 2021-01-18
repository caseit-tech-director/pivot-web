import React from "react";
import CreditAnimation from "../CreditAnimation";
import "./footer.scss";

class footer extends React.Component {
  render() {
    return (
      <>
        <footer>
          <img
            src="img/glitch-overlay-footer.svg"
            alt="background glitch effect"
            className="glitch-effect-footer"
          />
          <div className="credit full-width">
            {/* inser logo here */}
            <div className="credit__blurb-area">
              <img
                src="img/pivot-logo-2021-inverted.svg"
                alt="pivot logo"
                className="credit__logo"
              />
              <div className="credit__tag-line">Shift Your Thinking</div>
              <div className="credit__text">
                brought to you by the dedicated team of pivot
              </div>
            </div>

            <div className="credit__animation">
              <CreditAnimation />
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default footer;
