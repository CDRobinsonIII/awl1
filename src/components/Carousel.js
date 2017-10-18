import React from "react";
import "../styles/carousel.css";
import Flickity from "flickity";
import Bonita from "../assets/bonita.png";
import Lamesa from "../assets/lamesa.png";
import Santee from "../assets/santee.png";

const elem = document.querySelector(".main-carousel");
const flkty = new Flickity(elem, {
  // options
  wrapAround: true,
  cellAlign: "left",
  contain: true,
  pageDots: false
});

export default function Carousel() {
  return (
    <div className="carousel" data-flickity="{ &quot;wrapAround&quot;: true }">
      <div className="carousel-cell" />
      <div className="carousel-cell" />
      <div className="carousel-cell" />
      <div className="carousel-cell" />
    </div>
  );
}
