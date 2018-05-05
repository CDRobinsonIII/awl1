import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import LocationCard from './LocationCard';
import HeroSlider from './HeroSlider.js';
import hero from '../assets/hero-home-1.jpg';
import locationBg from '../assets/location-block-background.png';
import secondBg from '../assets/secondary-background-tile.png';
import bonita from '../assets/bonita.png';
import santee from '../assets/santee.png';
import lamesa from '../assets/lamesa.png';
import Hero from './HeroSlider';

const Home = styled.div`
  width: 100%;
  height: 100%%;
`;
const Space = styled.div`
  background-image: url(${locationBg});
  height: 360px;
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
  font-size: 0;
`;

const HomeLocation = styled.section`
  background-image: url(${secondBg});
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-align: center;
  align-items: center;
  position: relative;
  padding-bottom: 100px;
`;

const LocationSpan = styled.span`
  font-family: AvantGardeMdITC, helvetica;
  -webkit-font-smoothing: antialiased;
  color: #fff;
  font-size: 3.5em;
  position: absolute;
  top: -100px;
`;

const LocationRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 405px;
`;
class HomePage extends Component {
  render() {
    return (
      <Home>
        <HeroSlider />
        <Space />
        <HomeLocation>
          <LocationSpan>Our Locations</LocationSpan>
          <LocationRow>
            <LocationCard
              backgroundColor="rgba(73, 38, 73, 0.7"
              image={bonita}
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
          </LocationRow>
          <LocationRow>
            <LocationCard
              backgroundColor="rgba(235, 101, 89, 0.7)"
              image={lamesa}
              name="La Mesa"
              address="5208 Jackson Drive, Ste 111"
              city="La Mesa, CA 91942"
              number="(619) 857-1270"
            />
            <LocationCard
              backgroundColor="rgba(238, 192, 44, 0.7)"
              image={santee}
              name="Santee"
              address="9225 Carlton Hills Blvd, Ste. 31"
              city="Santee, CA 92071"
              number="(619) 855-2787"
            />
          </LocationRow>
        </HomeLocation>
      </Home>
    );
  }
}

export default withRouter(HomePage);
