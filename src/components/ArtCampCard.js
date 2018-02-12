import React from 'react';
import styled from 'styled-components';

const ArtCampCardWrapper = styled.div`
  font-family: 'Nexa';
  display: flex;
  padding: 4em 6em;

  &:nth-last-of-type(even) {
    flex-direction: row-reverse;
  }
`;

const CampLeft = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 630px;
  height: 410px;
  padding: 0 3em;
`;

const FirstImage = styled.img`
  position: absolute;
  top: 202px;
  z-index: 10;
  width: 250px;
  right: 107px;
  height: 200px;
`;

const SecondImage = styled.img`
  position: absolute;
  top: 162px;
  width: 310px;
  height: 220px;
  left: -20px;
`;

const ThirdImage = styled.img`
  width: 400px;
  height: 250px;
  position: absolute;
  top: -20px;
  z-index: 9;
`;

const CampRight = styled.div`
  width: 50%;
  height: 410px;
  box-sizing: border-box;
  padding: 0 3em;
  color: black;
`;

const RightHeader = styled.div`
  margin-top: -10px;
  padding: 1em 0;
  color: #492649;
  font-family: AvantGardeMdITC;
`;

const RightH1 = styled.h1`
  font-size: 2.5em;
  font-weight: 800;
  -webkit-font-smoothing: antialiased;
`;

const RightBody = styled.div`
  font-family: Playfair Display;
  color: #492649;
`;
const RightP = styled.p`
  font-size: 1em;
  line-height: 1.9em;
  padding: 0.5em 0px;
`;

const RightInfo = styled.div`
  display: flex;
  padding: 1em 0;
  justify-content: space-evenly;
  padding-right: 115px;
`;

const InfoLeft = styled.div`
  display: flex;
  flex-direction: column;
`;
const InfoLeftSpan = styled.span`
  color: #492649;
  letter-spacing: 1px;
  margin-top: 1px;
  text-transform: uppercase;
  font-size: 0.8em;
`;
const InfoRightSpan = styled.span`
  padding: 0.5em 0em;
  font-size: 0.8em;
  font-weight: 600;
`;

const CampContacts = styled.ul`
  color: #492649;
  font-size: 0.8em;
`;

const CampContactsLi = styled.li`
  font-family: 'Nexa';
  padding: 0.5em 0;
  font-size: 1em;
  color: #492649;
`;

const Highlighted = styled.span`
  color: #492649;
`;
export default function ArtCampCard(props) {
  return (
    <ArtCampCardWrapper>
      <CampLeft>
        <FirstImage src={props.leftUpperimage} />
        <SecondImage src={props.leftLowerImage} />
        <ThirdImage src={props.rightLowerImage} />
      </CampLeft>
      <CampRight>
        <RightHeader>
          <RightH1>{props.header}</RightH1>
        </RightHeader>
        <RightBody>
          <RightP>{props.body}</RightP>
        </RightBody>
        <RightInfo>
          <InfoLeft>
            <InfoLeftSpan>Class Schedule</InfoLeftSpan>
            <InfoRightSpan>Contact Us</InfoRightSpan>
          </InfoLeft>
          <CampContacts>
            <CampContactsLi>
              La Mesa <Highlighted>(619) 857-1270</Highlighted>
            </CampContactsLi>
            <CampContactsLi>
              Santee <Highlighted>(619) 855-2787</Highlighted>
            </CampContactsLi>
            <CampContactsLi>
              Kearny Mesa <Highlighted>(619)-456-7506</Highlighted>
            </CampContactsLi>
            <CampContactsLi>
              Bonita <Highlighted>(619) 508-1299</Highlighted>
            </CampContactsLi>
          </CampContacts>
        </RightInfo>
      </CampRight>
    </ArtCampCardWrapper>
  );
}
