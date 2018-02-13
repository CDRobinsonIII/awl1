import React, { Component } from 'react';
import styled from 'styled-components';
import LocationCard from '../components/LocationCard';
import Bonita from '../assets/bonita.png';
import Lamesa from '../assets/lamesa.png';
import Santee from '../assets/santee.png';
import Blank from '../assets/blank.png';
import head from '../assets/location-block-background.png';
import body from '../assets/secondary-background-tile.png';

const LocationWrapper = styled.section`
  width: 100%;
`;

const LocationHeader = styled.div`
  text-align: center;
  background-position-y: -9px;
  height: 332px;
  margin-top: 40px;
  background-color: white;
  display: flex;
  justify-content: center;
  color: white;
  width: 100%;
  background-image: url(${head});
`;
const LocationH1 = styled.h1`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: 1em;
  font-size: 2em;
  color: white;
  -webkit-font-smoothing: antialiased;
  font-family: 'AvantGardeMdITC';
`;

const LocationBody = styled.div`
  background-image: url(${body});
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  height: 130vh;
`;

const LocationRow = styled.div`
  display: flex;
  padding: 2em 0;
`;
class LocationBlock extends Component {
  render() {
    return (
      <LocationWrapper>
        <LocationHeader>
          <LocationH1>
            Click the class schedule icon to <br /> select your prefered day and
            time
          </LocationH1>
        </LocationHeader>
        <LocationBody>
          <LocationRow>
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
          </LocationRow>
          <LocationRow>
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
          </LocationRow>
        </LocationBody>
      </LocationWrapper>
    );
  }
}

export default LocationBlock;
