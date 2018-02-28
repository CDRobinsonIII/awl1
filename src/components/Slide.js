import React from 'react';

const Slide = ({ pic }) => {
  const styles = {
    backgroundImage: `url(img/${pic}.jpg)`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%',
    height: '65vh',
    width: '100%',
    display: 'inline-block'
  };
  return <li className="slide" style={styles} />;
};

export default Slide;
