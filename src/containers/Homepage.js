import React, { Component } from "react";
import "../styles/homepage.css";
import HomePics from "../assets/mission-artwork.png";
import LocationBlock from "../assets/location-block-background.png";
import LocationCard from "../components/LocationCard";
import Bonita from "../assets/bonita.png";

class HomePage extends Component {
  render() {
    return (
      <section className="HomePage">
        <div className="banner-container">
          <div className="banner-text-container">
            <span className="banner__text">Art classes start now</span>
            <h1 className="banner__header">
              What Starts Here,<br /> Changes the World
            </h1>
            <span className="banner__text2">View upcoming art classes</span>
          </div>
        </div>
        <div className="mission-container">
          <div className="mission-left">
            <img className="mission-pics" src={HomePics} />
          </div>
          <div className="mission-wrapper">
            <div className="mission-header-container">
              <span className="mission-header__text">the mission</span>
            </div>
            <div className="mission-body-container">
              <span className="mission-body__text">
                We work hard to capture the unique style that<br />
                each students bring while providing a fun and<br /> loving
                environment for students of all level to<br /> learn and grow
              </span>
            </div>
          </div>
        </div>
        <div className="location-container">
          <div className="location-header-container">
            <h1 className="location-header__text">View Locations</h1>
          </div>
          <div className="location-body-container">
            <div className="location-body__upper">
              <LocationCard
                image={Bonita}
                name="Bonita"
                address="4510 Bonita Road"
                city="Bonita, CA 91902"
                number="(619)-508-1299"
              />
              <LocationCard
                image={Bonita}
                name="Bonita"
                address="4510 Bonita Road"
                city="Bonita, CA 91902"
                number="(619)-508-1299"
              />
            </div>
            <div className="location-body__lower">
              {" "}
              <LocationCard
                image={Bonita}
                name="Bonita"
                address="4510 Bonita Road"
                city="Bonita, CA 91902"
                number="(619)-508-1299"
              />
              <LocationCard
                image={Bonita}
                name="Bonita"
                address="4510 Bonita Road"
                city="Bonita, CA 91902"
                number="(619)-508-1299"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HomePage;
