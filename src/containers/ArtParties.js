import React, { Component } from "react";
import "../styles/artparties.css";
import PartyCard from "../components/PartyCard";
import Pic1 from "../assets/background-tile.jpg";
import Pic2 from "../assets/secondary-background-tile.png";
import Pic3 from "../assets/santee.png";

class Parties extends Component {
  render() {
    return (
      <section className="Parties">
        <div className="parties-header">
          <h1>Art Parties</h1>
        </div>
        <div className="parties-body">
          <PartyCard
            partyUpperImage={Pic3}
            partyLeftLowerImage={Pic2}
            partyRightLowerImage={Pic1}
            partyCardTitle="Birthday art parties"
            partyCardP="We offer a unique birthday experience for the birthday guest of honor. We provide art lessons for the birthday guest of honor and all of their friends! There are creative birthday games as well! Call today so that we can customize a birthday art party for your child that they will never forget! Please browse through our birthday arty party pictures below."
          />
          <PartyCard
            partyUpperImage={Pic3}
            partyLeftLowerImage={Pic2}
            partyRightLowerImage={Pic1}
            partyCardTitle="Mobile art parties for adult"
            partyCardP="We offer a unique birthday experience for the birthday guest of honor. We provide art lessons for the birthday guest of honor and all of their friends! There are creative birthday games as well! Call today so that we can customize a birthday art party for your child that they will never forget! Please browse through our birthday arty party pictures below."
          />
        </div>
      </section>
    );
  }
}

export default Parties;
