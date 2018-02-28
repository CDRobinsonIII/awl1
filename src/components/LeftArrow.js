import React from 'react';
import styled from 'styled-components';

const PreviousArrow = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border-radius: 50%;
  cursor: pointer;
  transition: transform ease-in 0.1s;
  position: absolute;
  top: 50%;
  left: 0;
  z-index: 999;
  color: #fff;
  &:hover {
    transition: transform ease-in 0.1s;
    transform: scale(1.1);
  }
`;
const LeftArrow = props => {
  return (
    <PreviousArrow onClick={props.previousSlide}>
      <i className="fa fa-arrow-left fa-2x" aria-hidden="true" />
    </PreviousArrow>
  );
};

export default LeftArrow;
