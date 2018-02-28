import React from 'react';

const Slide = ({ image }) => {
  const styles = {
    backgroundImage: `url(../assets/${image}.jpg)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%',
    height: '50vh',
    width: '100%'
  };
  return <li style={styles} />;
};

export default Slide;
