import React from "react";
import PropTypes from "prop-types";

import "./EventItem.scss";

function EventItem({ time, name }) {
  return (
    <div className="event-item">
      <div className="event-item__time">{time}</div>
      <div className="event-item__name">{name}</div>
    </div>
  );
}

EventItem.propTypes = {
  time: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default EventItem;
