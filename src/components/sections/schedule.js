import React, { Component } from "react";
import ScheduleTable from "../../components/ScheduleTable";

class schedule extends Component {
  render() {
    return (
      <section id="schedule" className="main-grid full-width">
        <h2 className="main-grid__shifted-col">Competition Schedule</h2>
        <div className="main-grid__shifted-col">
          <ScheduleTable />
        </div>
        <div className="main-grid__shifted-col">
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
