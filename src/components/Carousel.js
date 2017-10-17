import React from "react";
import "../styles/carousel.css";
import Flickity from "flickity";
import Bonita from "../assets/bonita.png";
import Lamesa from "../assets/lamesa.png";
import Santee from "../assets/santee.png";

const elem = document.querySelector(".main-carousel");
const flkty = new Flickity(elem, {
  // options
  cellAlign: "left",
  contain: true
});

export default function Carousel() {
  return (
    <div
      className="main-carousel"
      data-flickity="{ &quot;wrapAround&quot;: true }">
      <img src={Santee} className="carousel-cell" />
      <img src={Santee} className="carousel-cell" />
      <img src={Santee} className="carousel-cell" />
      <img src={Santee} className="carousel-cell" />
    </div>
  );
}
