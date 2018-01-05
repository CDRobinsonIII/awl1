import React, { Component } from "react";
import "../styles/locationblock.css";
import LocationCard from "../components/LocationCard";
import Bonita from "../assets/bonita.png";
import Lamesa from "../assets/lamesa.png";
import Santee from "../assets/santee.png";
import Blank from "../assets/blank.png";

class LocationBlock extends Component {
  render() {
    return (
      <div className="locationBlock-wrapper">
        <div className="locations-tag__container">
          <h1 className="locations-tag__text">
            Click the class schedule icon to <br /> select your prefered day and
            time
          </h1>
        </div>
        <div className="locations-body">
          <div className="location-upper">
            <LocationCard
              backgroundColor="rgba(73, 38, 73, 0.7"
              image={Bonita}
              name="Bonita"
              address="4510 Bonita Road"
              city="Bonita, CA 91902"
              number="(619)-508-1299"
            />
            <LocationCard
              image={Blank}
              name="Kearny Mesa"
              backgroundColor="rgba(253, 163, 89, 0.7)"
              address="4885 Ronson Court Suite D"
              city="San Diego, CA 92111"
              number="(619)-456-7506"
            />
          </div>
          <div className="location-lower">
            <LocationCard
              image={Lamesa}
              backgroundColor="rgba(235, 101, 89, 0.7)"
              name="La Mesa"
              address="5208 Jackson Drive, Suite 111"
              city="La Mesa, CA 91942"
              number="(619)-857-1270"
            />
            <LocationCard
              image={Santee}
              backgroundColor="rgba(238, 192, 44, 0.7)"
              name="Santee"
              address="9225 Carlton Hills, Ste 31"
              city="Santee, CA 92701"
              number="(619)-855-2787"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LocationBlock;
