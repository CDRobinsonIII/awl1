import React, { Component } from "react";
import "../styles/locations.css";
import LocationBlock from "../components/LocationBlock";

class Locations extends Component {
  render() {
    return (
      <section className="Locations">
        <div className="locations-header">
          <h1>Locations</h1>
        </div>
        <LocationBlock />
      </section>
    );
  }
}

export default Locations;
