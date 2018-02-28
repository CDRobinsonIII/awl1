import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Slide from './Slide';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

const SliderWrapper = styled.ul`
  display: flex;
  background: white;
  position: relative;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  overflow: hidden;
  white-space: nowrap;
`;

class Slider extends Component {
  constructor(props) {
    super(props);
    this.renderPictures = this.renderPictures.bind(this);
  }
  renderPictures = () => {
    return this.props.pictures.map(picture => {
      return (
        <Slide image={picture.title} key={picture.title}>
          {picture.title}
        </Slide>
      );
    });
  };
  render() {
    if (!this.props.pictures) {
      return <div>Getting pictures...</div>;
    }
    return (
      <SliderWrapper>
        {this.renderPictures()}
        <RightArrow />
        <LeftArrow />
      </SliderWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    pictures: state.pictures
  };
}

export default connect(mapStateToProps)(Slider);
