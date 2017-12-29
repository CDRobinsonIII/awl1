import React, { Component } from "react";
import LocationBlock from "../components/LocationBlock";
import Home from "../assets/hero-home-1.jpg";
import "../styles/homepage.css";
import Cats from "../assets/mission-artwork.png";

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
            <span>The Mission</span> We work hard to capture the unique style
            that each student brings while providing a fun and loving
            environment for students of all levels to grow and learn.
          </p>
        </section>
      </div>
    );
  }
}

export default HomePage;
