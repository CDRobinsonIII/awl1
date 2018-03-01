import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import styled from 'styled-components';
import group from '../assets/Group.jpg';

const HeroOne = styled.div`
  height: 411px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  font-family: 'AvantGardeMdITC';
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(${group});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 5em;
`;

const HeroP = styled.p`
  -webkit-font-smoothing: antialiased;
  font-family: Nexa, sans-serif;
  text-transform: uppercase;
  margin-bottom: 25px;
  letter-spacing: 0.08em;
  font-weight: 600;
`;
const HeroH1 = styled.h1`
  margin: 0 auto;
  font-family: AvantGardeMdITC, helvetica;
  font-size: 2em;
  display: flex;
  justify-content: center;
  text-align: center;
  line-height: 40px;
  -webkit-font-smoothing: antialiased;
  font-style: italic;
  margin-bottom: 30px;
  text-transform: none;
`;
const HeroA = styled(Link)`
  text-decoration: none;
  color: white;
  font-family: Playfair Display, serif;
  font-style: italic;
  -webkit-font-smoothing: antialiased;
  font-size: 1.2em;
  letter-spacing: 0.02em;
  margin-left: 5px;
  &:hover {
    cursor: pointer;
  }
`;

const Hero1 = () => {
  return (
    <HeroOne>
      <HeroP>Our Mission: </HeroP>
      <HeroH1>
        " We work hard to capture the unique style that each <br /> student
        brings while providing a fun and loving environment <br /> for students
        of all levels to grow and learn. "
      </HeroH1>
      <HeroA to="/locations">
        Click here to schedule your free introductory art class
      </HeroA>
    </HeroOne>
  );
};

export default withRouter(Hero1);
