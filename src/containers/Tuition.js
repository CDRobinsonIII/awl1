import React, { Component } from "react";
import "../styles/tuition.css";
import Santee from "../assets/santee.png";

class Tuition extends Component {
  render() {
    return (
      <section className="Tuition">
        <div className="tuition-container">
          <h1>Tuition fees</h1>
          <div className="tuition-imageWrapper">
            <img src={Santee} />
          </div>
          <div className="tuition-body">
            <h2>Student Fees</h2>
            <span>
              Our student reserve their spots on a month to month basis,
              attending 1 class per week. Most months have 4 classes per month.
            </span>
            <span>$20 per 1 hour and 15 min class</span>
            <button>Pay tuition</button>
          </div>
          <div className="discount-container">
            <div className="discount-header">
              <h2>Discounts</h2>
            </div>
            <div className="discount-body">
              <div className="discount-left">
                <div className="discount-left-trio">
                  <h3>Family Discount</h3>
                  <span className="little-font">
                    1st student pays full price
                  </span>
                  <br />
                  <span>10% of the 2nd Student</span>
                </div>
                <div className="discount-left-trio">
                  <span className="little-font">
                    1st and 2nd student pays full price
                  </span>
                  <br />

                  <span>50% of the 3rd Student</span>
                </div>
                <div className="discount-left-trio">
                  <span className="little-font">
                    1st, 2nd and 3rd student pays full price
                  </span>
                  <br />
                  <span>FREE for the 4th student</span>
                </div>
              </div>
              <div className="discount-right">
                <h2>Commitment Discount</h2>
                <span className="little-font">
                  pay for 3 months at a time, get
                </span>
                <br />
                <span>$18 per class</span>
              </div>
            </div>
            <div className="supplies-block">
              <h1>Supplies</h1>
              <span>
                Our students buy supplies from us, depending on which
                medium/level they are in. The supplies are theirs to take home
                and practice with.
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Tuition;
