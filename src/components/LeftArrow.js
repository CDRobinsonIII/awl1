import React from 'react';
import styled from 'styled-components';

const PreviousArrow = styled.div`
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 99;
  left: 0;
  top: 50%;
  border-radius: 50%;
  &:hover {
    cursor: pointer;
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
