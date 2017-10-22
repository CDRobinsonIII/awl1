import React, { Component } from "react";
import LocationBlock from "../components/LocationBlock";
import styled from "styled-components";
import Carousel from "../components/Carousel";
import Bonita from "../assets/bonita.png";

const HomeWrapper = styled.section`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HomeBanner = styled.div`
  height: 300px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: "AvantGardeMdITC";
  text-transform: capitalize;
  font-size: 3em;
  background-image: url(${Bonita});
`;
const HomeBannerH1 = styled.h1`
  font-size: 1.5em;
  color: white
  -webkit-font-smoothing: antialiased;
  display:flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px){
    text-align: -webkit-center;
    font-size: 1.3em;
    }
  }
`;
const MissionStatement = styled.div`
  color: white;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  margin: 4em;
`;
const MissionTitle = styled.span`
  width: 100%;
  font-family: "Nexa";
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.8em;
  -webkit-font-smoothing: antialiased;
`;
const MissionP = styled.p`
  text-align: -webkit-center;
  margin: 1% 26% 4%;
  line-height: 30px;
  font-size: 1.3em;
  font-family: "Nexa";
  -webkit-font-smoothing: antialiased;
  @media screen and (max-width: 767px) {
    font-size: 0.8em;
    line-height: 17px;
    margin: 4% 13%;
  }
`;
class HomePage extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeBanner>
          <HomeBannerH1>Hero Slide Copy</HomeBannerH1>
        </HomeBanner>
        <MissionStatement>
          <MissionTitle>Mission Statement</MissionTitle>
          <MissionP>
            We work hard to capture the unique style that each students bring
            while providing a fun and loving environment for students of all
            levels to grow and learn.
          </MissionP>
        </MissionStatement>
        <LocationBlock />
      </HomeWrapper>
    );
  }
}

export default HomePage;
