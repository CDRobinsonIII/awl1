import React, { Component } from "react";
import Bonita from "../assets/bonita.png";

let background = {
  backgroundImage: "url(" + Bonita + ")",
  backgroundSize: "cover",
  backgroundPosition: "center"
};

const SlideThree = props => {
  return <div style={background} className="slide slide3" />;
};

export default SlideThree;
