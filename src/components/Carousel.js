import React, { Component } from "react";
import Slider from "react-slick-carousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bonita from "../assets/bonita.png";
import "../styles/carousel.css";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};
class SimpleSlider extends Component {
  render() {
    return (
      <Slider {...settings}>
        <div className="slide" />
        <div className="slide" />
        <div className="slide" />
        <div className="slide" />
        <div className="slide" />
        <div className="slide" />
      </Slider>
    );
  }
}

export default SimpleSlider;
