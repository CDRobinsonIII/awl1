import React, { Component } from "react";
import Santee from "../assets/santee.png";

let background = {
  backgroundImage: "url(" + Santee + ")",
  backgroundSize: "cover",
  backgroundPosition: "center"
};

const SlideOne = props => {
  return <div style={background} className="slide slide1" />;
};

export default SlideOne;
