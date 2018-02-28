import React from 'react';
import styled from 'styled-components';

const NextArrow = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 0;
  z-index: 999;
  color: #fff;
  transition: transform ease-in 0.1s;
  &:hover {
    transition: transform ease-in 0.1s;
    transform: scale(1.1);
  }
`;
const RightArrow = props => {
  return (
    <NextArrow onClick={props.nextSlide}>
      <i className="fa fa-arrow-right fa-2x" aria-hidden="true" />
    </NextArrow>
  );
};

export default RightArrow;
