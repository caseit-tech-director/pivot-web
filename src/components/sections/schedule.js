import React, { Component } from "react";

class schedule extends Component {
  render() {
    return (
      <section id="schedule">
        <h2>Competition Schedule</h2>
        <div>
          <h4 className="footnotes--heading">footnotes</h4>
          <p className="footnotes">
            All competitors present at the final presentations will be
            considered in the raffle. In the case that the winner is not present
            during the raffle draw, a redrawal will take place.
          </p>
        </div>
      </section>
    );
  }
}

export default schedule;
