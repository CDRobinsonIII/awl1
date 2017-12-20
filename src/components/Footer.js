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
          <a>Frequently asked questions</a>
          <a>Become an instructor</a>
        </div>
        <p className="footer-copyright">
          Designed by Miles Cartwright. Built by Niccolo Ortega. All rights
          reserved with Art with Larisse.
        </p>
      </div>
    </section>
  );
}
