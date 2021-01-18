import React from "react";
import "./TeamHeadshot.scss";

const TeamHeadshot = ({ name, position, image, ...props }) => (
  <div className="team-headshot" {...props}>
    <img
      className="team-headshot__image"
      src={image}
      alt={`headshot of ${name}`}
    />
    <div className="team-headshot__name">{name}</div>
    <div className="team-headshot__position">{position}</div>
  </div>
);

export default TeamHeadshot;
