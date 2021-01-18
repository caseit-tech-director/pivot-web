import React, { Component } from "react";
import PropTypes from "prop-types";

import "./team.scss";

class team extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <img
          src="/img/glitch-effect-team-section.svg"
          alt="glitching colour visual effect"
          className="glitching-effect-team"
        />
        <section id="team" className="full-width team-cta">
          <h2 className="h1 team-cta__heading">Team up and buckle up! </h2>
          <div className="team-cta__subheading">
            Deadline in {Math.floor(this.props.daysLeft)} Days! (
            {`${this.props.date.getMonth() + 1}/${this.props.date.getDate()}`})
          </div>
          <a
            href="https://www.facebook.com/groups/2959308947727798"
            target="blank"
            class="team-cta__button"
          >
            Find my Team
          </a>
        </section>
      </>
    );
  }
}

team.propTypes = {
  daysLeft: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default team;
