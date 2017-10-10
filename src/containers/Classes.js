import React, { Component } from "react";
import "../styles/classes.css";
import Santee from "../assets/santee.png";
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
            class. The student must be atleast 4 1/2 years odl to atted. To
            schedule a class click on the schedule icon for each location below.
          </p>
        </div>
        <div className="classes-locations-block">
          <LocationBlock />
        </div>
        <div className="classes-lower-block">
          <div className="classes-header-container">
            <h2>Check out all the different types of classes we offer</h2>
            <div className="classes-body">
              <div className="classes-col">
                <h2>Adult art classes</h2>
                <div className="classes-body-imageWrapper">
                  <img src={Santee} />
                </div>
                <span>
                  <strong>La Mesa</strong>
                </span>
                <ul>
                  <li>Every other Wednesday</li>
                  <li>6-8:30</li>
                </ul>
                <p>
                  We offer adult art classes to those who want an environment
                  without children. Although we welcome adutls to attend at any
                  time during our classes offered at all of our studios we
                  currently only have one class tune that offers an adult only
                  setting. The class is held at the La Mesa Studio every other
                  Wednesday from 6:00 to 8:30. It's 2 1/2 hour class that is
                  considered double our regular time so that the students can
                  get more done in the time attending. The price is therfore
                  double the cost of one of our regular classes that is only 1
                  hour and 15 minutes long. If you would like to set up a free
                  introductory class to come in and try it out please click
                  here.
                </p>
                <button>Schedule free intro class</button>
              </div>
              <div className="classes-col">
                <h2>Charter Schools</h2>
                <img className="classes-body-imageWrapper" src={Santee} />
                <span>
                  We happily accept Charter School Students at our studios. We
                  are currently set up as Vendors at:
                </span>
                <ul>
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
                <h2>Girl and Boy Scouts</h2>
                <img className="classes-body-imageWrapper" src={Santee} />
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
