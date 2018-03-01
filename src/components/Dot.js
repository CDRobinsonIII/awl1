import React from 'react';
import styled from 'styled-components';

const Dot = styled.div`
  background: #fff;
  display: inline-block;
  padding: 5px;
  margin-right: 5px;
  cursor: pointer;
  border-radius: 50%;
  margin: 0 5px;

  &.active {
    background: #2f2f2f;
  }
`;

const dot = ({ id, active, dotClick }) => {
  let name = active ? 'dot active' : 'dot';

  return (
    <Dot
      data-id={id}
      className={name}
      onClick={e => dotClick(parseInt(e.target.getAttribute('data-id')))}
    />
  );
};

export default dot;
