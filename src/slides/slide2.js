import React, { Component } from "react";
import Lamesa from "../assets/lamesa.png";

let background = {
  backgroundImage: "url(" + Lamesa + ")",
  backgroundSize: "cover",
  backgroundPosition: "center"
};

const SlideTwo = props => {
  return <div style={background} className="slide slide2" />;
};

export default SlideTwo;
