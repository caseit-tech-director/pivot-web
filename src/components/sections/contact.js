import React, { Component } from "react";
import CopyableField from "../CopyableField";

import "./contact.scss";

class contact extends Component {
  render() {
    return (
      <section id="contact" className="centered-text">
        <h2 className="contact-header">Not getting your answer?</h2>
        <CopyableField className="email-field">pivot_btm@sfu.ca</CopyableField>
        <div className="social-media-icons">
          <a
            href="https://www.facebook.com/PIVOTCaseCompetition"
            target="blank"
          >
            <img src="img/facebook-icon.svg" alt="Visit our facebook page" />
          </a>
          <a
            href="https://www.instagram.com/pivotcasecompetition/"
            target="blank"
          >
            <img src="img/instagram-icon.svg" alt="Visit our instagram page" />
          </a>
        </div>
      </section>
    );
  }
}

export default contact;
