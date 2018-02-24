import React from 'react';
import styled from 'styled-components';

const NextArrow = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 99;
  top: 50%;
  right: 0;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
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
