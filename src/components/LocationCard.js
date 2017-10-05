import React from "react";
import "../styles/locationcard.css";

export default function Location(props) {
  return (
    <div className="location-card-container">
      <div className="location-image__wrapper">
        <img src={props.image} />
      </div>
      <div className="location-card">
        <div className="location-left">
          <span className="location-name">{props.name}</span>
          <ul className="card-info">
            <li>{props.address}</li>
            <li>{props.city}</li>
            <li>{props.number}</li>
          </ul>
        </div>
        <div className="location-right">
          <span>Contact</span>
          <span>Schedule</span>
        </div>
      </div>
    </div>
  );
}
