import React from "react";
import EventItem from "./EventItem";
import ScheduleEvents from "./ScheduleEvents";

import "./ScheduleTable.scss";

const ScheduleTable = () => {
  const day1Time = "1/30";
  const day2Time = "2/6";

  return (
    <div className="schedule-table">
      <div className="schedule-table__day">
        <div className="schedule-table__date-info">
          <div className="schedule-table__day-name">Day1</div>
          <div className="schedule-table__day-date">{day1Time}</div>
        </div>
        <div className="schedule-table__events event-list">
          {ScheduleEvents.day1.map((val) => (
            <EventItem name={val.name} time={val.time} />
          ))}
        </div>
      </div>

      <div className="schedule-table__week">One Week Deliberation Period</div>

      <div className="schedule-table__day">
        <div className="schedule-table__date-info">
          <div className="schedule-table__day-name">Day2</div>
          <div className="schedule-table__day-date">{day2Time}</div>
        </div>
        <div className="schedule-table__events event-list">
          {ScheduleEvents.day2.map((val) => (
            <EventItem name={val.name} time={val.time} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScheduleTable;
