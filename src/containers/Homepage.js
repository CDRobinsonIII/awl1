import React, { Component } from "react";
import "../styles/homepage.css";
import HomePics from "../assets/mission-artwork.png";

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
            <img src={HomePics} />
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
      </section>
    );
  }
}

export default HomePage;
