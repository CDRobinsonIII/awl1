import React, { Component } from 'react';
import styled from 'styled-components';
import santee from '../assets/santee.png';
import LocationBlock from '../components/LocationBlock';

const LocationsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background: white;
`;
const LocationsHeader = styled.section`
  height: 411px;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: 'AvantGardeMdITC';
  text-transform: capitalize;
  font-size: 3em;
  background-image: url(${santee});
`;

const LocationsH1 = styled.h1`
  font-size: 1.5em;
`;
class Locations extends Component {
  render() {
    return (
      <LocationsWrapper>
        <LocationsHeader>
          <LocationsH1>Locations</LocationsH1>
        </LocationsHeader>
        <LocationBlock />
      </LocationsWrapper>
    );
  }
}

export default Locations;
