import React from 'react';
import styled from 'styled-components';

const Slide = ({ pic }) => {
  const styles = {
    backgroundImage: `url(img/${pic}.jpg)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%',
    height: '411px',
    width: '25%',
    display: 'inline-block'
  };
  return <li className="slide" style={styles} />;
};

export default Slide;
