import React, { Component } from "react";
import Carousel from "nuka-carousel";
import Santee from "../assets/santee.png";

export default class Slider1 extends Component {
  render() {
    return (
      <Carousel>
        <img src={Santee} />
        <img src={Santee} />
        <img src={Santee} />
        <img src={Santee} />
      </Carousel>
    );
  }
}
