import React, { Component } from 'react';
import styled from 'styled-components';
import hero from '../assets/hero-art-classes-1.png';
import orangeBg from '../assets/ArtwithLarisseOrange.jpg';
import { withRouter, Link } from 'react-router-dom';

let style = {
  width: '25px',
  height: '25px',
  margin: '0 8px 0 0'
};
let style1 = {
  width: '25px',
  height: '25px'
};
const ClassesWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: white;
`;
const ClassesHeader = styled.section`
  height: 411px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: 'AvantGardeMdITC';
  text-transform: capitalize;
  font-size: 3em;
  background-image: url(${hero});
  background-repeat: no-repeat;
  background-size: cover;
`;

const ClassesHeaderH1 = styled.h1`
  font-size: 4.6rem;
`;

const ClassesIntro = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 25px 26% 40px;
`;

const ClassesIntroSpan = styled.span`
  padding: 3em 0 1em;
  text-transform: uppercase;
  font-size: 0.8em;
  font-weight: 900;
  color: #492649;
  font-family: 'Nexa';
`;

const ClassesIntroH2 = styled.h2`
  font-family: AvantGardeMdITC, helvetica;
  font-size: 2.5em;
  margin-bottom: 20px;
  color: #492649;
  text-transform: capitalize;
`;

const ClassesIntoP = styled.p`
  font-family: Myriad Pro, helvetica;
  font-size: 1.3em;
  line-height: 1.7;
  margin-bottom: 30px;
  color: #492649;
  text-align: center;
`;

const ClassesButton = styled(Link)`
  text-decoration: none;
  background-color: #7b407b;
  color: #fff;
  font-family: Nexa, sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  border: none;
  padding: 15px 80px 12px;
  border-radius: 25px;
  font-size: 0.8em;
  line-height: 1;
  letter-spacing: 1px;
`;

const ClassesTypes = styled.section`
  padding: 27% 0 0;
  background-image: url(${orangeBg});
  width: 100%;
`;

const ClassTypeHeader = styled.div`
  text-align: center;
  padding: 2em;
  position: relative;
`;
const ClassTypesH2 = styled.h2`
  font-family: AvantGardeMdITC, helvetica;
  color: #fff;
  font-size: 2em;
  position: absolute;
  top: -180px;
  right: 0;
  left: 0;
  padding: 0px 23%;
  letter-spacing: 0.8px;
`;

const ClassesBody = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -158px;
  color: white;
`;
const ClassesCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  box-sizing: border-box;
  margin: 1em;
`;

const ClassesColSpan = styled.span`
  font-family: 'Nexa';
  padding: 0.5em;
  width: 100%;
  text-align: -webkit-left;
`;
const ClassesColStrong = styled.strong`
  font-weight: 900;
`;

const ClassesColH3 = styled.h3`
  font-family: 'Nexa';
  font-size: 1.5em;
  text-transform: capitalize;
  font-weight: 800;
`;

const ClassesBodyBoxes = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 200px;
  background: ${props => props.background};
`;

const ClassesColP = styled.p`
  line-height: 1.8em;
  padding: 0.5em;
  width: 100%;
  -webkit-font-smoothing: antialiased;
  font-weight: 800;
  text-align: -webkit-left;
  font-family: 'Playfair Display';
`;
const AdultSchedule = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AdultScheduleBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  justify-content: center;
  width: 50%;
  line-height: 30px;
  margin: ${props => props.margin};
`;

const AdultCity = styled.strong`
  font-family: 'AvantGardeMdITC';
  margin-top: ${props => props.margin};
  font-size: 20px;
  letter-spacing: 1px;
  margin-bottom: 15px;
`;
const AdultDay = styled.span`
  font-family: 'Nexa';
  line-height: 17px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  margin-bottom: 10px;
  display: flex;
`;
const AdultTime = styled.span`
  font-family: 'Nexa';
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
`;

const AdultButton = styled.button`
  background-color: #fff;
  color: #7b407b;
  font-family: Nexa, sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  border: none;
  padding: 17px 35px 17px;
  border-radius: 25px;
  font-size: 0.8em;
  line-height: 1;
  letter-spacing: 1px;
`;

const CharterUl = styled.ul`
  padding: 0.5em;
  width: 100%;
  text-align: -webkit-left;
`;

const CharterLi = styled.li`
  padding: 0.5em;
  width: 100%;
  text-align: -webkit-left;
  font-family: 'Playfair Display';
`;

const Calendar = styled.i``;
class Classes extends Component {
  render() {
    return (
      <ClassesWrapper>
        <ClassesHeader>
          <ClassesHeaderH1>Art classes</ClassesHeaderH1>
        </ClassesHeader>
        <ClassesIntro>
          <ClassesIntroSpan>Schedule a free class</ClassesIntroSpan>
          <ClassesIntroH2>The first class is Free!</ClassesIntroH2>
          <ClassesIntoP>
            We invite you to attend a free introductory class to see what we are
            all about. We will provide the supplies needed during that first
            class. The student must be at least 4 ½ years of age to attend. To
            get started please click the “locations” button below to pick the
            studio closest to you.
          </ClassesIntoP>
          <ClassesButton to="/locations">Locations</ClassesButton>
        </ClassesIntro>
        <ClassesTypes>
          <ClassTypeHeader>
            <ClassTypesH2>
              In addition to our regularly scheduled <br />
              children's art classes we also offer:
            </ClassTypesH2>
          </ClassTypeHeader>
          <ClassesBody>
            <ClassesCol>
              <ClassesBodyBoxes background="#613b61">
                <ClassesColH3>Adult art classes</ClassesColH3>
              </ClassesBodyBoxes>
              <AdultSchedule>
                <AdultScheduleBlock>
                  <AdultCity margin="10px">La Mesa</AdultCity>
                  <AdultDay>
                    <i style={style} className="fas fa-lg fa-calendar-alt" />
                    Every other wednesday
                  </AdultDay>
                  <AdultTime>
                    <i style={style} className="far fa-lg fa-clock" />6-8:30PM
                  </AdultTime>
                </AdultScheduleBlock>
                <AdultScheduleBlock margin="7px 0 0 50px">
                  <AdultCity margin="-6px">Bonita</AdultCity>
                  <AdultDay>
                    <i style={style} className="fas fa-lg fa-calendar-alt" />Wednesday
                  </AdultDay>
                  <AdultTime>
                    <i style={style1} className="far fa-lg fa-clock" />11-2PM
                  </AdultTime>
                </AdultScheduleBlock>
              </AdultSchedule>
              <ClassesColP>
                We welcome all of our adults to attend during our regular
                classes with children, but we also offer a select few classes
                that are available only to adults. These classes provide a
                unique environment allowing adults to create and thrive learning
                the mediums we teach. This class is set up for a double amount
                of time and therefore is double in cose. The first free class
                will help us to establish what you want to learn with us and we
                can talk about the medium you prefer to work in. We specialize
                in Charcoal, Pastel, Watercolor and Oils.
              </ClassesColP>
              <AdultButton>Schedule free intro class</AdultButton>
            </ClassesCol>
            <ClassesCol>
              <ClassesBodyBoxes background="#f76363">
                <ClassesColH3>Charter Schools</ClassesColH3>
              </ClassesBodyBoxes>
              <ClassesColP>
                We happily accept Charter School students at our studios. We are
                currently set up as Vendors at:
              </ClassesColP>
              <CharterUl>
                <CharterLi>Julian Charter School</CharterLi>
                <CharterLi>Dehesa Charter School</CharterLi>
                <CharterLi>Greater San Diego Academy</CharterLi>
                <CharterLi>The Learning Choice Academy</CharterLi>
                <CharterLi>Summit Academy</CharterLi>
                <CharterLi>Inspire Charter Schools</CharterLi>
                <CharterLi>Harbor Springs</CharterLi>
              </CharterUl>
              <ClassesColP>
                As vendors for these schools we can take request from students
                to attend our classes. Some of the schools will pay for
                supplies, but not all. In order to get going as a charter school
                student the first step is to sign up for our free introductory
                class to get all your questions answered and set up a schedule
                for the future classes. From there we can begin the billing
                process for the school and get your child enrolled in the art
                classes.
              </ClassesColP>
            </ClassesCol>
            <ClassesCol>
              <ClassesBodyBoxes background="#32c0bb">
                <ClassesColH3>Girl and Boy Scouts</ClassesColH3>
              </ClassesBodyBoxes>
              <ClassesColP>
                We offer a special 1 hour and 15 minute class to Girl Scouts and
                Boy Scouts. You will get a lesson with your troop to earn that
                badge or even just to enjoy an art class together. We will offer
                a special price of $10 per student to attend a class with a
                minimum of $80 paid. We have a maximum of 14 children allowed in
                one meeting. To book your class with your troop, please contact
                the studio you would like to attend and look at our class
                schedule so we can give you a private event. We will provide all
                art supplies and the kids get to go home with a great piece of
                art.
              </ClassesColP>
            </ClassesCol>
          </ClassesBody>
        </ClassesTypes>
      </ClassesWrapper>
    );
  }
}

export default Classes;
