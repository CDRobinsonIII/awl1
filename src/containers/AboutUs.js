import React, { Component } from "react";
import "../styles/aboutus.css";
import Santee from "../assets/santee.png";

class About extends Component {
  render() {
    return (
      <section className="About">
        <div className="about-header">
          <h1>About Us</h1>
        </div>
        <div className="about-mission-wrapper">
          <h2>Mission Statement</h2>
          <p>
            Art with Larisse was founded in 2001. We started a little studio in
            La Mesa of only 8 students and within 1 year grew to 80. Since then
            we have been opening more studios as well as bringing in talented
            staff to keep with the growing number of students. Being in San
            Diego has allowed us to bring the fine arts to the communities that
            have been missing from our schools. We are proud to offer a
            traditional form of art instruction including the use of sort
            pastels, watercolors, charcoals, and oil paints. Our structured art
            program promotes an icreased set of skills with each level
            completed. We work hard to keep the quality of art up while
            capturing the unique style that each student brings to the studio.
            With the individual instruction you get in our class, students get
            to progress at their own speed doing their own projects.
          </p>
        </div>
        <div className="instructors-block">
          <h2>instructors</h2>
          <div className="instructors-body">
            <div className="intsructors-block__trio">
              <img src={Santee} />
              <h2>Larisse Robinson</h2>
              <span>Founder</span>
            </div>
            <div className="intsructors-block__trio">
              <img src={Santee} />
              <h2>Jessica Velazquez</h2>
              <span>Santee studio program director</span>
            </div>
            <div className="intsructors-block__trio">
              <img src={Santee} />
              <h2>Mary Longbottom</h2>
              <span>La mesa studio program director</span>
            </div>
          </div>
        </div>
        <div className="giving-block">
          <h2>Giving Back</h2>
          <div className="giving-body">
            <div className="community-wrapper">
              <h3>Community Events</h3>
              <p>
                Maecenas faucibus mollis interdum. Praesent commado cursus
                magna, vel scelerisque nisl consectetur et. Donec id elit nom mi
                porta gravida at eget metus. Vivamus sagittis lacus vel augue
                laoreet rutrum faucibus dolor auctor. Curabitur blandit tempus
                portitor
              </p>
            </div>
            <div className="donations-wrapper">
              <h3>Donation Request</h3>
              <p>
                Maecenas faucibus mollis interdum. Praesent commado cursus
                magna, vel scelerisque nisl consectetur et. Donec id elit nom mi
                porta gravida at eget metus. Vivamus sagittis lacus vel augue
                laoreet rutrum faucibus dolor auctor. Curabitur blandit tempus
                portitor
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
