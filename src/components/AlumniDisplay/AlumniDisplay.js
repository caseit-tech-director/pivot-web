import React from "react";
import "./AlumniDisplay.scss";

const AlumniDisplay = ({ className }) => {
  const alumniList = [
    {
      name: "Brian Yan Muk",
      position: "Director of Education, Nextech AR Solution",
      image: "img/headshot-brian.jpg",
    },
    {
      name: "Michelle Chen",
      position: "Associate Product Manager, Electronic Arts",
      image: "img/headshot-michelle-chen.jpg",
    },
    {
      name: "Anthony Siu",
      position: "Project Manager, GAP",
      image: "img/headshot-anthony-siu.jpg",
    },
  ];
  return (
    <div className={`alumni-profile-container ${className}`}>
      {alumniList.map((val) => {
        return (
          <div className="alumni-profile">
            <img
              src={val.image}
              alt={`image of ${val.name}`}
              className="alumni-profile__image"
            />
            <div className="alumni-profile__description">
              <div className="alumni-profile__name">{val.name}</div>
              <div className="alumni-profile__position">{val.position}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AlumniDisplay;
