import React from "react";
import "../styles/artcampcard.css";

export default function ArtCampCard(props) {
  return (
    <div className="artCampCard">
      <div className="campCard-left">
        <div className="cardleft-upper">
          <img src={props.leftUpperimage} />
        </div>
        <div className="cardleft-lower">
          <img src={props.leftLowerImage} />
          <img src={props.rightLowerImage} />
        </div>
      </div>
      <div className="campCard-right">
        <div className="campright-header">
          <h1 className="campright-header__text">{props.header}</h1>
        </div>
        <div className="campright-body">
          <p className="camright-body__text">{props.body}</p>
        </div>
        <div className="campright-info">
          <span>
            <strong>Schedule</strong>
          </span>
          <span>
            <strong>Artwithlarisse@gmail.com</strong>
          </span>
          <div className="campright-contacts">
            <span />
            <ul>
              <li>
                La Mesa <strong>(619) 857-1270</strong>
              </li>
              <li>
                Santee <strong>(619) 855-2787</strong>
              </li>
              <li>
                Kearny Mesa <strong>(619)-456-7506</strong>
              </li>
              <li>
                Bonita <strong>(619) 508-1299</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
