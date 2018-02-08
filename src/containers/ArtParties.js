import React, { Component } from 'react';
import styled from 'styled-components';
import PartyCard from '../components/PartyCard';
import Pic1 from '../assets/background-tile.jpg';
import Pic2 from '../assets/secondary-background-tile.png';
import Pic3 from '../assets/santee.png';
import bonita from '../assets/bonita.png';

const PartiesWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const PartiesHeader = styled.div`
  height: 411px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: 'AvantGardeMdITC';
  text-transform: capitalize;
  font-size: 3em;
  background-image: url(${bonita});
`;

const PartiesH1 = styled.h1`
  font-size: 1.5em;
`;

const PartiesBody = styled.div`
  width: 100%;
  height: 100%;
`;
class Parties extends Component {
  render() {
    return (
      <PartiesWrapper>
        <PartiesHeader>
          <PartiesH1>Art Parties</PartiesH1>
        </PartiesHeader>
        <PartiesBody>
          <PartyCard
            partyUpperImage={Pic3}
            partyLeftLowerImage={Pic2}
            partyRightLowerImage={Pic2}
            partyCardTitle="Birthday art parties"
            partyCardP="We offer a unique birthday experience for the birthday guest of honor. We provide art lessons for the birthday guest of honor and all of their friends! There are creative birthday games as well! Call today so that we can customize a birthday art party for your child that they will never forget! Please browse through our birthday arty party pictures below."
          />
          <PartyCard
            partyUpperImage={Pic3}
            partyLeftLowerImage={Pic2}
            partyRightLowerImage={Pic2}
            partyCardTitle="Mobile art parties for adult"
            partyCardP="We offer a unique birthday experience for the birthday guest of honor. We provide art lessons for the birthday guest of honor and all of their friends! There are creative birthday games as well! Call today so that we can customize a birthday art party for your child that they will never forget! Please browse through our birthday arty party pictures below."
          />
        </PartiesBody>
      </PartiesWrapper>
    );
  }
}

export default Parties;
