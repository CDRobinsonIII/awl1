import React, { Component } from 'react';
import styled from 'styled-components';
import Slide from '../components/hero1';
import Slide2 from '../components/hero2';

const Hero = styled.div`
  position: relative;
  width: 100%;
  margin: 0 auto;
  min-height: 411px;
  overflow: hidden;
  white-space: nowrap;
`;

const HeroSliderWrapper = styled.ul`
  position: relative;
  min-height: 411px;
  width: 100%;
`;

export default class HeroSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideCount: 1
    };
  }
  render() {
    return (
      <Hero>
        <HeroSliderWrapper>
          {this.state.slideCount === 1 ? <Slide2 /> : null}
        </HeroSliderWrapper>
      </Hero>
    );
  }
}
