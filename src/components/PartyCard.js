import React from 'react';
import styled from 'styled-components';

const PartyCardWrapper = styled.div`
  font-family: 'Nexa';
  display: flex;
  margin: 4em 10em;
  color: white;
`;

const CardLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

const LeftUpperRow = styled.div`
  height: 270px;
`;

const BigImage = styled.img`
  height: 100%;
`;

const LeftLowerRow = styled.div`
  display: flex;
  height: 175px;
`;

const SmallImage = styled.img`
  width: 50%;
`;

const CardRight = styled.div`
  margin: 0 1em;
`;

const CardRightH2 = styled.h2`
  font-weight: 600;
  padding: 0 0 1em;
  font-size: 1.5em;
  text-transform: capitalize;
  -webkit-font-smoothing: antialiased;
`;

const CardRightP = styled.p`
  line-height: 2em;
  padding-bottom: 1.5em;
  margin: 0 3em 0 0;
  -webkit-font-smoothing: antialiased;
`;
const CardRightUl = styled.ul`
  line-height: 3em;
  text-transform: uppercase;
  -webkit-font-smoothing: antialiased;
  font-size: 0.6em;
  font-weight: 800;
  letter-spacing: 1px;
`;

const CardRightLi = styled.li`
  line-height: 3em;
  text-transform: uppercase;
  -webkit-font-smoothing: antialiased;
  font-size: 0.6em;
  font-weight: 800;
  letter-spacing: 1px;
`;
export default function PartyCard(props) {
  return (
    <PartyCardWrapper>
      <CardLeft>
        <LeftUpperRow>
          <BigImage src={props.partyUpperImage} />
        </LeftUpperRow>
        <LeftLowerRow>
          <SmallImage src={props.partyLeftLowerImage} />
          <SmallImage src={props.partyRightLowerImage} />
        </LeftLowerRow>
      </CardLeft>
      <CardRight>
        <CardRightH2>{props.partyCardTitle}</CardRightH2>
        <CardRightP>{props.partyCardP}</CardRightP>
        <CardRightUl>
          <CardRightLi>Pricing Info</CardRightLi>
          <CardRightLi>artwithlarisse@gmail.com</CardRightLi>
          <CardRightLi>(619) 857-1270</CardRightLi>
        </CardRightUl>
      </CardRight>
    </PartyCardWrapper>
  );
}
