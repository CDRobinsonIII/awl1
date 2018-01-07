import React, { Component } from "react";
import "../styles/slider.css";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import Slide1 from "../slides/slide1";
import Slide2 from "../slides/slide2";
import Slide3 from "../slides/slide3";

const styled = {
  width: "100%",
  height: "300px",
  backgroundColor: "white"
};
export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideCount: 1
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
  }
  nextSlide() {
    this.setState({ slideCount: this.state.slideCount + 1 });
  }
  prevSlide() {
    this.setState({ slideCount: this.state.slideCount - 1 });
  }
  render() {
    return (
      <div style={styled} className="slider">
        <div className="slider-wrapper">
          {this.state.slideCount === 1 ? <Slide1 /> : null}
          {this.state.slideCount === 2 ? <Slide2 /> : null}
          {this.state.slideCount === 3 ? <Slide3 /> : null}
        </div>
        <LeftArrow prevSlide={this.prevSlide} />
        <RightArrow nextSlide={this.nextSlide} />
      </div>
    );
  }
}
