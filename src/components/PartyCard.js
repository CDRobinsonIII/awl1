import React from "react";
import "../styles/partycard.css";

export default function PartyCard(props) {
  return (
    <div className="partyCard-wrapper">
      <div className="partyCard-left">
        <div className="partyleft-upper">
          <img src={props.partyUpperImage} />
        </div>
        <div className="partyleft-lower">
          <img src={props.partyLeftLowerImage} />
          <img src={props.partyRightLowerImage} />
        </div>
      </div>
      <div className="partyCard-right">
        <h2>{props.partyCardTitle}</h2>
        <p>{props.partyCardP}</p>
        <ul>
          <li>Pricing Info</li>
          <li>artwithlarisse@gmail.com</li>
          <li>(619) 857-1270</li>
        </ul>
      </div>
    </div>
  );
}
