import React from "react";
import "./AlumniDisplay.scss";

const AlumniDisplay = ({ className }) => {
  const alumniList = [
    {
      name: "John Doe",
      position: "consultant, SAP",
      image: "https://source.unsplash.com/random/800x600/?business+person",
    },
    {
      name: "John Doe",
      position: "consultant, SAP",
      image: "https://source.unsplash.com/random/800x600/?business+person",
    },
    {
      name: "John Doe",
      position: "consultant, SAP",
      image: "https://source.unsplash.com/random/800x600/?business+person",
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
