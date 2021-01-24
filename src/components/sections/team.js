import React, { Component } from "react";
import PropTypes from "prop-types";

import "./team.scss";
import ApplyButton from "../ApplyButton";

import { ApplicationDeadlineText } from "../ApplicationDeadlineText";

class team extends Component {
  render() {
    return (
      <>
        <img
          src="/img/glitch-effect-team-section.svg"
          alt="glitching colour visual effect"
          className="glitching-effect-team"
        />
        <section className="full-width team-cta">
          <h2 className="h1 team-cta__heading">Team up and buckle up! </h2>
          <div className="team-cta__subheading">
            <ApplicationDeadlineText />
          </div>
          <div className="team-cta__controls">
            <ApplyButton className="team-cta__button" />
            <a
              href="https://www.facebook.com/groups/2959308947727798"
              target="blank"
              className="team-cta__button button button--secondary"
            >
              Find Team on Facebook
            </a>
          </div>
        </section>
      </>
    );
  }
}

export default team;
