import React, { Component } from "react";
import "../styles/artcamps.css";
import ArtCampCard from "../components/ArtCampCard";
import Pic1 from "../assets/Art Camp Project_01.jpg";
import Pic2 from "../assets/Art Camp Project_13.jpg";
import Pic3 from "../assets/Student Creating Art_03.jpg";

class ArtCamps extends Component {
  render() {
    return (
      <section className="ArtCamps">
        <div className="artCamps-header">
          <h1 className="artCamps-header__text">Art camps</h1>
        </div>
        <div className="artCamps-body">
          <ArtCampCard
            leftUpperimage={Pic3}
            leftLowerImage={Pic2}
            rightLowerImage={Pic1}
            header="Summer Art Camp"
            body="Learn how to draw fine art and create new crafts everyday. The camp are for 4 days (no camp on Tuesdays). The fun begins at 10am and lasts until 1pm. We will still have afternoon classes during camp weeks. All the supplies are included as well as snacks. The cost is 150 for 4 days. Each art camp is based on availability, and you must reserve your spot with a $50 art camp deposit. Please email or call us for details."
          />
          <ArtCampCard
            leftUpperimage={Pic3}
            leftLowerImage={Pic2}
            rightLowerImage={Pic1}
            header="Winter Art Camps"
            body="Learn how to draw fine art and create new crafts everyday. The camp are for 4 days (no camp on Tuesdays). The fun begins at 10am and lasts until 1pm. We will still have afternoon classes during camp weeks. All the supplies are included as well as snacks. The cost is 150 for 4 days. Each art camp is based on availability, and you must reserve your spot with a $50 art camp deposit. Please email or call us for details."
          />
          <ArtCampCard
            leftUpperimage={Pic3}
            leftLowerImage={Pic2}
            rightLowerImage={Pic1}
            header="Spring Art Camps"
            body="Learn how to draw fine art and create new crafts everyday. The camp are for 4 days (no camp on Tuesdays). The fun begins at 10am and lasts until 1pm. We will still have afternoon classes during camp weeks. All the supplies are included as well as snacks. The cost is 150 for 4 days. Each art camp is based on availability, and you must reserve your spot with a $50 art camp deposit. Please email or call us for details."
          />
          <ArtCampCard
            leftUpperimage={Pic3}
            leftLowerImage={Pic2}
            rightLowerImage={Pic1}
            header="One Day"
            body="Learn how to draw fine art and create new crafts everyday. The camp are for 4 days (no camp on Tuesdays). The fun begins at 10am and lasts until 1pm. We will still have afternoon classes during camp weeks. All the supplies are included as well as snacks. The cost is 150 for 4 days. Each art camp is based on availability, and you must reserve your spot with a $50 art camp deposit. Please email or call us for details."
          />
        </div>
      </section>
    );
  }
}

export default ArtCamps;
