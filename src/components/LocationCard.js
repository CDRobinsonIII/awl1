import React from "react";
import "../styles/locationcard.css";

export default function Location(props) {
  return (
    <div className="location-card-container">
      <div className="locationCard-Top">
        <a href="" className="location-image__wrapper">
          <img src={props.image} />
          <div className="location-overlay">
            <h2>{props.name}</h2>
          </div>
        </a>
      </div>
      <div className="locationCard-Bottom">
        <address>
          {props.address}
          <br />
          {props.city}
          <br />
          {props.number}
        </address>
        <div className="locationCard-Links">
          <a href="">
            contact us{" "}
            <i className="fa fa-envelope-o fa-2x" aria-hidden="true" />
          </a>
          <a href="">
            class schedule{" "}
            <i className="fa fa-calendar fa-2x" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  );
}
