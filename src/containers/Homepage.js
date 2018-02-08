import React, { Component } from 'react';
import styled from 'styled-components';

import hero from '../assets/hero-home-1.jpg';
import missionBlock from '../assets/mission-block-background.png';
import cats from '../assets/mission-artwork.png';

import LocationBlock from '../components/LocationBlock';
import Home from '../assets/hero-home-1.jpg';
import '../styles/homepage.css';
import LocationCard from '../components/LocationCard';
import Bonita from '../assets/bonita.png';
import Santee from '../assets/santee.png';
import Lamesa from '../assets/lamesa.png';
import Slider from '../components/Carousel';
import Slider1 from '../components/Slider';

const HomeBanner = styled.section`
  height: 411px;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: white;
  font-family: 'AvantGardeMdITC';
  background-image: url(${hero});
`;
const HeroTextWrapper = styled.div`
  margin: 5em;
`;
const HeroP = styled.p`
  -webkit-font-smoothing: antialiased;
  font-family: Nexa, sans-serif;
  text-transform: uppercase;
  margin-bottom: 35px;
  letter-spacing: 0.08em;
`;
const HeroH1 = styled.h1`
  font-family: AvantGardeMdITC, helvetica;
  font-size: 4.6em;
  line-height: 0.9;
  margin-bottom: 30px;
  text-transform: capitalize;
`;
const HeroA = styled.a`
  text-decoration: none;
  color: white;
  font-family: Playfair Display, serif;
  font-style: italic;
  -webkit-font-smoothing: antialiased;
  font-size: 1.2em;
  letter-spacing: 0.02em;
  margin-left: 5px;
`;

const HomeMission = styled.section`
  background-image: url(${missionBlock});
  height: 479px;
  background-repeat: no-repeat;
  margin-bottom: 150px;
`;
const CatImage = styled.img``;

const HomeMissionP = styled.p`
  position: relative;
  font-family: Playfair Display, serif;
  -webkit-font-smoothing: antialiased;
  width: 34%;
  top: -158%;
  right: -55%;
  color: #fff;
  font-size: 1.5em;
  line-height: 1.8em;
`;
const HomeMissionSpan = styled.span`
  position: absolute;
  font-family: Nexa, sans-serif;
  font-size: 0.6em;
  text-transform: uppercase;
  font-weight: 700;
  transform: translateX(-130%);
  letter-spacing: 0.04em;
`;

class HomePage extends Component {
  render() {
    return (
      <div className="Home">
        <HomeBanner>
          <HeroTextWrapper>
            <HeroP>art classes start now</HeroP>
            <HeroH1>
              What starts here, <br />changes the world
            </HeroH1>
            <HeroA href="">View upcoming classes</HeroA>
          </HeroTextWrapper>
        </HomeBanner>
        {/* <Slider /> */}
        <HomeMission>
          <CatImage src={cats} />
          <HomeMissionP>
            <HomeMissionSpan>The Mission</HomeMissionSpan>
            We work hard to capture the unique style that each student brings
            while providing a fun and loving environment for students of all
            levels to grow and learn.
          </HomeMissionP>
        </HomeMission>
        <div className="secondary-Spacer" />
        <div className="homeLocation">
          <span className="homeLocationTag">Our Locations</span>
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
