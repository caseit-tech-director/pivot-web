import React from "react";
import EventItem from "./EventItem";
import ScheduleEvents from "../../data/ScheduleEvents";

import "./ScheduleTable.scss";

const ScheduleTable = () => {
  const day1Time = "2/12";
  const day2Time = "2/13";

  return (
    <div className="schedule-table">
      {/* <div className="schedule-table__day">
        <div className="schedule-table__date-info">
          <div className="schedule-table__day-name">Day1</div>
          <div className="schedule-table__day-date">{day1Time}</div>
        </div>
        <div className="schedule-table__events event-list">
          {ScheduleEvents.day1.map((val, index) => (
            <EventItem name={val.name} time={val.time} key={index} />
          ))}
        </div>
      </div> */}

      <div className="schedule-table__week">- Schedule Coming Soon -</div>

      {/* <div className="schedule-table__day">
        <div className="schedule-table__date-info">
          <div className="schedule-table__day-name">Day2</div>
          <div className="schedule-table__day-date">{day2Time}</div>
        </div>
        <div className="schedule-table__events event-list">
          {ScheduleEvents.day2.map((val, index) => (
            <EventItem name={val.name} time={val.time} key={index} />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default ScheduleTable;
