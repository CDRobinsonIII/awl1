import React, { Component } from "react";
import LocationBlock from "../components/LocationBlock";
import Home from "../assets/hero-home-1.jpg";
import "../styles/homepage.css";
import Cats from "../assets/mission-artwork.png";
import LocationCard from "../components/LocationCard";
import Bonita from "../assets/bonita.png";
import Santee from "../assets/santee.png";
import Lamesa from "../assets/lamesa.png";
import MyComponent from "../components/Carousel";

class HomePage extends Component {
  render() {
    return (
      <div className="Home">
        <section className="homeBanner">
          <div className="homeHero-Wrapper">
            <p>art classes start now</p>
            <h1>
              What starts here, <br />changes the world
            </h1>
            <a href="">View upcoming classes</a>
          </div>
        </section>
        <section className="homeMission">
          <img src={Cats} />
          <p>
            <span>The Mission</span>
            We work hard to capture the unique style that each student brings
            while providing a fun and loving environment for students of all
            levels to grow and learn.
          </p>
        </section>
        <div className="secondary-Spacer" />
        <div className="homeLocation">
          <span className="homeLocationTag">View Locations</span>
          <div className="homeLocation-wrapper">
            <div className="homeLocationRow">
              <LocationCard
                backgroundColor="rgba(73, 38, 73, 0.7"
                image={Bonita}
                name="Bonita"
                address="4510 Bonita Road"
                city="Bonita, CA 91902"
                number="(619) 508-1299"
              />
              <LocationCard
                backgroundColor="rgba(253, 163, 89, 0.7)"
                name="Kearny Mesa"
                address="4885 Ronson Court Suite D"
                city="San Diego, CA 92111"
                number="(619)-456-7506"
              />
            </div>
            <div className="homeLocationRow">
              <LocationCard
                backgroundColor="rgba(235, 101, 89, 0.7)"
                image={Lamesa}
                name="La Mesa"
                address="5208 Jackson Drive, Ste 111"
                city="La Mesa, CA 91942"
                number="(619) 857-1270"
              />
              <LocationCard
                backgroundColor="rgba(238, 192, 44, 0.7)"
                image={Santee}
                name="Santee"
                address="9225 Carlton Hills Blvd, Ste. 31"
                city="Santee, CA 92071"
                number="(619) 855-2787"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
