import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getSliderImages,
  setTranslateValue,
  setIndex,
  toggleAutoplay
} from '../actions/slider';
import { bindActionCreators } from 'redux';
import styled from 'styled-components';

import Slide from './Slide';
import Dots from './Dots';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

const Slider = styled.ul`
  position: relative;
  width: 100%;
  margin: 0 auto;
  min-height: 500px;
  overflow: hidden;
  white-space: nowrap;
`;

const SliderWrapper = styled.div`
  position: relative;
  min-height: 500px;
  width: 100%;
`;

class SliderComponent extends Component {
  componentDidMount = () => this.props.getSliderImages();
  renderSlides() {
    return this.props.images.map(image => {
      return <Slide pic={image} key={image} />;
    });
  }

  render() {
    if (!this.props.images) {
      return <div>Getting slides...</div>;
    }
    const { images, index, translateValue } = this.props;
    return (
      <Slider>
        <SliderWrapper
          style={{
            transform: `translateX(${translateValue}px)`,
            transition: 'transform ease-out 0.45s'
          }}>
          {this.renderSlides()}
        </SliderWrapper>
        <Dots
          index={index}
          quantity={images.length}
          dotClick={this.handleDotClick}
        />
        <LeftArrow prevSlide={this.goToPreviousSlide} />
        <RightArrow nextSlide={this.goToNextSlide} />
      </Slider>
    );
  }

  goToPreviousSlide = () => {
    const { index, translateValue, setTranslateValue, setIndex } = this.props;

    if (index === 0) return;

    setTranslateValue(translateValue + this.slideWidth());
    setIndex(index - 1);
  };

  goToNextSlide = () => {
    const {
      images,
      index,
      translateValue,
      setTranslateValue,
      setIndex
    } = this.props;

    if (index === images.length - 1) {
      setTranslateValue(0);
      setIndex(0);
      return;
    }
    setTranslateValue(translateValue - this.slideWidth());
    setIndex(index + 1);
  };

  handleDotClick = i => {
    const { index, translateValue, setTranslateValue, setIndex } = this.props;
    if (i === index) return;

    if (i > index) setTranslateValue(-(i * this.slideWidth()));
    else setTranslateValue(translateValue + (index - i) * this.slideWidth());

    setIndex(i);
  };

  slideWidth = () => {
    const slide = document.querySelector('.slide');
    return slide.clientWidth;
  };
}

const mapStateToProps = ({ slider }) => {
  return {
    images: slider.images,
    index: slider.index,
    translateValue: slider.translateValue
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getSliderImages: getSliderImages,
      setTranslateValue: setTranslateValue,
      setIndex: setIndex,
      toggleAutoplay: toggleAutoplay
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(SliderComponent);
