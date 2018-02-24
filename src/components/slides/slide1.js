import React from 'react';
import styled from 'styled-components';
import image from '../../assets/ACP1.jpg';

const Slide = styled.div`
  width: 100%;
  min-height: 500px;
  background-image: url(${image});
  background-position: center;
  background-size: cover;
`;
const slide1 = props => {
  return <Slide />;
};

export default slide1;
