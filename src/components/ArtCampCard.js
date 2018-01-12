import React from "react";
import "../styles/artcampcard.css";

export default function ArtCampCard(props) {
  return (
    <div className="artCampCard">
      <div className="campCard-left">
        <img className="firstImage" src={props.leftUpperimage} />
        <img className="secondImage" src={props.leftLowerImage} />
        <img className="thirdImage" src={props.rightLowerImage} />
      </div>
      <div className="campCard-right">
        <div className="campright-header">
          <h1 className="campright-header__text">{props.header}</h1>
        </div>
        <div className="campright-body">
          <p className="camright-body__text">{props.body}</p>
        </div>
        <div className="campright-info">
          <div className="campInfo-left">
            <span>Class Schedule</span>
            <span>Contact Us</span>
          </div>
          <div className="campright-contacts">
            <ul>
              <li>
                La Mesa <span className="hl">(619) 857-1270</span>
              </li>
              <li>
                Santee <span className="hl">(619) 855-2787</span>
              </li>
              <li>
                Kearny Mesa <span className="hl">(619)-456-7506</span>
              </li>
              <li>
                Bonita <span className="hl">(619) 508-1299</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
