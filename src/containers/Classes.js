import React, { Component } from "react";
import "../styles/classes.css";
import { withRouter, Link } from "react-router-dom";
import LocationBlock from "../components/LocationBlock";

class About extends Component {
  render() {
    return (
      <section className="Classes">
        <div className="classes-header">
          <h1>Art classes</h1>
        </div>
        <div className="classes-intro-block">
          <span>Schedule a free class</span>
          <h2>The first class is Free!</h2>
          <p>
            We invite you to attend a free introductory class to see what we are
            all about. We will provide the supplies needed during that first
            class. The student must be at least 4 ½ years of age to attend. To
            get started please click the “locations” button below to pick the
            studio closest to you.
          </p>
          <Link className="classes-button" to="/locations">
            Locations
          </Link>
        </div>
        <div className="classes-lower-block">
          <div className="classes-header-container">
            <h2>
              In addition to our regularly scheduled <br />
              children's art classes we also offer:
            </h2>
            <div className="classes-body">
              <div className="classes-col">
                <div className="classes-body-imageWrapper artclasses">
                  <h3>Adult art classes</h3>
                  <div />
                </div>
                <div className="artClass-cityBlock">
                  <div className="artClass-cityBlock-left">
                    <span>
                      <strong>La Mesa</strong>
                    </span>
                    <div className="cityBlockUpper">
                      <i className="fa fa-calendar" aria-hidden="true" />
                      <span>Every other Wednesday</span>
                    </div>
                    <div className="cityBlockLower">
                      <i className="fa fa-clock-o" aria-hidden="true" />
                      <span> 6-8:30</span>
                    </div>
                  </div>
                  <div className="artClass-cityBlock-right">
                    <span>
                      <strong>Bonita</strong>
                    </span>
                    <div className="cityBlockUpper">
                      <i className="fa fa-calendar" aria-hidden="true" />
                      <span>Wednesday</span>
                    </div>
                    <div className="cityBlockLower">
                      <i className="fa fa-clock-o" aria-hidden="true" />
                      <span>11-2PM</span>
                    </div>
                  </div>
                </div>
                <p>
                  We welcome all of our adults to attend during our regular
                  classes with children, but we also offer a select few classes
                  that are available only to adults. These classes provide a
                  unique environment allowing adults to create and thrive
                  learning the mediums we teach. This class is set up for a
                  double amount of time and therefore is double in cose. The
                  first free class will help us to establish what you want to
                  learn with us and we can talk about the medium you prefer to
                  work in. We specialize in Charcoal, Pastel, Watercolor and
                  Oils.
                </p>
                <button>Schedule free intro class</button>
              </div>
              <div className="classes-col">
                <div className="classes-body-imageWrapper charterschools">
                  <h3>Charter Schools</h3>
                </div>
                <p>
                  We happily accept Charter School students at our studios. We
                  are currently set up as Vendors at:
                </p>
                <ul className="charterschoollist">
                  <li>Julian Charter School</li>
                  <li>Dehesa Charter School</li>
                  <li>Greater San Diego Academy</li>
                  <li>The Learning Choice Academy</li>
                  <li>Summit Academy</li>
                  <li>Inspire Charter Schools</li>
                  <li>Harbor Springs</li>
                </ul>
                <p>
                  As vendors for these schools we can take request from students
                  to attend our classes. Some of the schools will pay for
                  supplies, but not all. In order to get going as a charter
                  school student the first step is to sign up for our free
                  introductory class to get all your questions answered and set
                  up a schedule for the future classes. From there we can begin
                  the billing process for the school and get your child enrolled
                  in the art classes.
                </p>
              </div>
              <div className="classes-col">
                <div className="classes-body-imageWrapper girlboyscouts">
                  <h3>Girl and Boy Scouts</h3>
                </div>
                <p>
                  We offer a special 1 hour and 15 minute class to Girl Scouts
                  and Boy Scouts. You will get a lesson with your troop to earn
                  that badge or even just to enjoy an art class together. We
                  will offer a special price of $10 per student to attend a
                  class with a minimum of $80 paid. We have a maximum of 14
                  children allowed in one meeting. To book your class with your
                  troop, please contact the studio you would like to attend and
                  look at our class schedule so we can give you a private event.
                  We will provide all art supplies and the kids get to go home
                  with a great piece of art.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
