import React from "react";
import "../styles/footer.css";

export default function Footer() {
  return (
    <section className="Footer">
      <div className="footer-container">
        <div className="footer-icon__container">
          <a>
            <i className="fa fa-facebook-official fa-2x" aria-hidden="true" />
          </a>
          <a>
            <i className="fa fa-instagram fa-2x" aria-hidden="true" />
          </a>
          <a>
            <i className="fa fa-twitter fa-2x" aria-hidden="true" />
          </a>
        </div>
        <div className="footer-middle">
          <span>Frequently asked questions</span>
          <span>Become an instructor</span>
        </div>
        <span>
          Designed by Miles Cartwright. Built by Art Longbottom and Niccolo
          Ortega. All rights reserved with Art with Larisse.
        </span>
      </div>
    </section>
  );
}
