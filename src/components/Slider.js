import React, { Component } from 'react';
import styled from 'styled-components';
import SlideOne from './slides/slide1';
import SlideTwo from './slides/slide2';
import SlideThree from './slides/slide3';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

const SliderWrapper = styled.div`
  background: white;
  position: relative;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  overflow: hidden;
  white-space: nowrap;
`;

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideCount: 1
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }
  nextSlide() {
    this.setState({ slideCount: this.state.slideCount + 1 });
  }
  previousSlide() {
    this.setState({ slideCount: this.state.slideCount - 1 });
  }
  render() {
    return (
      <SliderWrapper>
        {this.state.slideCount === 1 ? <SlideOne /> : null}
        {this.state.slideCount === 2 ? <SlideTwo /> : null}
        {this.state.slideCount === 3 ? <SlideThree /> : null}
        <RightArrow nextSlide={this.nextSlide} />
        <LeftArrow previousSlide={this.previousSlide} />
      </SliderWrapper>
    );
  }
}
