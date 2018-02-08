import React, { Component } from 'react';
import styled from 'styled-components';
import santee from '../assets/santee.png';
import bonita from '../assets/bonita.png';

const AboutWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: white;
`;
const AboutHeader = styled.section`
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

const AboutH1 = styled.h1``;

const MissionWrapper = styled.section`
  display: flex;
  padding: 0 15%;
  flex-direction: column;
  align-items: center;
`;

const MissionH2 = styled.h2`
  letter-spacing: 2px;
  font-family: 'Nexa';
  padding: 3em 0;
  -webkit-font-smoothing: antialiased;
  text-transform: uppercase;
  font-size: 1em;
  font-weight: 600;
`;

const MissionP = styled.p`
  font-family: 'Nexa';
  line-height: 2.5em;
  text-align: center;
  margin: 0 2.5em;
  line-height: 2.5em;
  text-align: center;
  padding-bottom: 2em;
  -webkit-font-smoothing: antialiased;
`;

const InstructorsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: -webkit-center;
  padding-bottom: 2.5em;
`;

const InstructorsH2 = styled.h2`
  font-family: 'Nexa';
  font-size: 2em;
  text-transform: capitalize;
  padding: 0.8em 0;
  -webkit-font-smoothing: antialiased;
`;

const InstructorsBody = styled.div`
  display: flex;
  justify-content: center;
`;

const InstructorCol = styled.div`
  width: 270px;
  box-sizing: border-box;
  margin: 1.5em;
`;

const InstructorImage = styled.img`
  width: 100%;
`;

const InstructorName = styled.h2`
  padding: 1em 0 0.5em 0;
  font-family: 'Nexa';
  -webkit-font-smoothing: antialiased;
  font-size: 1.5em;
`;

const InstructorTitle = styled.span`
  letter-spacing: 2px;
  font-family: 'Nexa';
  text-transform: uppercase;
  font-size: 0.5em;
  font-weight: 700;
  -webkit-font-smoothing: antialiased;
`;

const GivingWrapper = styled.section`
  width: 100%;
  color: white;
  background: #482548;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 4em;
`;

const GivingTitle = styled.h2`
  font-family: 'Nexa';
  font-size: 2em;
`;

const GivingBody = styled.div`
  display: flex;
  height: 440px;
  width: 100%;
  justify-content: space-evenly;
  padding: 5em;
`;

const GivingBlocks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 480px;
`;

const GivingH3 = styled.h3`
  font-family: 'Nexa';
  -webkit-font-smoothing: antialiased;
  font-size: 1.5em;
  padding: 0 0 1em 0;
`;

const GivingP = styled.p`
  font-family: 'Nexa';
  -webkit-font-smoothing: antialiased;
  line-height: 2em;
  text-align: -webkit-center;
`;
class About extends Component {
  render() {
    return (
      <AboutWrapper>
        <AboutHeader>
          <AboutH1>About Us</AboutH1>
        </AboutHeader>
        <MissionWrapper>
          <MissionH2>Mission Statement</MissionH2>
          <MissionP>
            Art with Larisse was founded in 2001. We started a little studio in
            La Mesa of only 8 students and within 1 year grew to 80. Since then
            we have been opening more studios as well as bringing in talented
            staff to keep with the growing number of students. Being in San
            Diego has allowed us to bring the fine arts to the communities that
            have been missing from our schools. We are proud to offer a
            traditional form of art instruction including the use of sort
            pastels, watercolors, charcoals, and oil paints. Our structured art
            program promotes an icreased set of skills with each level
            completed. We work hard to keep the quality of art up while
            capturing the unique style that each student brings to the studio.
            With the individual instruction you get in our class, students get
            to progress at their own speed doing their own projects.
          </MissionP>
        </MissionWrapper>
        <InstructorsWrapper>
          <InstructorsH2>instructors</InstructorsH2>
          <InstructorsBody>
            <InstructorCol>
              <InstructorImage src={santee} />
              <InstructorName>Larisse Robinson</InstructorName>
              <InstructorTitle>Founder</InstructorTitle>
            </InstructorCol>
            <InstructorCol>
              <InstructorImage src={santee} />
              <InstructorName>Jessica Velazquez</InstructorName>
              <InstructorTitle>Santee studio program director</InstructorTitle>
            </InstructorCol>
            <InstructorCol>
              <InstructorImage src={santee} />
              <InstructorName>Mary Longbottom</InstructorName>
              <InstructorTitle>La mesa studio program director</InstructorTitle>
            </InstructorCol>
          </InstructorsBody>
        </InstructorsWrapper>
        <GivingWrapper>
          <GivingTitle>Giving Back</GivingTitle>
          <GivingBody>
            <GivingBlocks>
              <GivingH3>Community Events</GivingH3>
              <GivingP>
                Maecenas faucibus mollis interdum. Praesent commado cursus
                magna, vel scelerisque nisl consectetur et. Donec id elit nom mi
                porta gravida at eget metus. Vivamus sagittis lacus vel augue
                laoreet rutrum faucibus dolor auctor. Curabitur blandit tempus
                portitor
              </GivingP>
            </GivingBlocks>
            <GivingBlocks>
              <GivingH3>Donation Request</GivingH3>
              <GivingP>
                Maecenas faucibus mollis interdum. Praesent commado cursus
                magna, vel scelerisque nisl consectetur et. Donec id elit nom mi
                porta gravida at eget metus. Vivamus sagittis lacus vel augue
                laoreet rutrum faucibus dolor auctor. Curabitur blandit tempus
                portitor
              </GivingP>
            </GivingBlocks>
          </GivingBody>
        </GivingWrapper>
      </AboutWrapper>
    );
  }
}

export default About;
