import React, { Component } from 'react';
import styled from 'styled-components';
import ArtCampCard from '../components/ArtCampCard';
import bonita from '../assets/bonita.png';
import Pic1 from '../assets/ACP1.jpg';
import Pic2 from '../assets/ACP13.jpg';
import Pic3 from '../assets/Student Creating Art_03.jpg';
import Pic4 from '../assets/Student Creating Art_02.jpg';
import Pic5 from '../assets/ACP9.jpg';
import Pic6 from '../assets/ACP8.jpg';
import Pic7 from '../assets/ACP7.JPG';
import Pic8 from '../assets/ACP14.jpg';
import Pic9 from '../assets/ACP4.jpg';
import Pic10 from '../assets/ACP12.jpeg';
import Pic11 from '../assets/ACP5.jpg';
import Pic12 from '../assets/ACP6.jpg';

const ArtCampWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: white;
`;

const ArtCampsHeader = styled.div`
  height: 411px;
  width: 100%;
  display: flex;
  background-size: cover;
  background-position: center;
  justify-content: center;
  align-items: center;
  color: white;
  font-family: 'AvantGardeMdITC';
  text-transform: capitalize;
  font-size: 3em;
  background-image: url(${bonita});
`;

const ArtCampH1 = styled.h1`
  -webkit-font-smoothing: antialiased;
  font-size: 1.5em;
`;

const ArtCampBody = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1em 0;
`;
class ArtCamps extends Component {
  render() {
    return (
      <ArtCampWrapper>
        <ArtCampsHeader>
          <ArtCampH1>Art camps</ArtCampH1>
        </ArtCampsHeader>
        <ArtCampBody>
          <ArtCampCard
            leftUpperimage={Pic3}
            leftLowerImage={Pic2}
            rightLowerImage={Pic1}
            header="Summer Art Camp"
            body="Learn how to draw fine art and create new crafts everyday. The camp are for 4 days (no camp on Tuesdays). The fun begins at 10am and lasts until 1pm. We will still have afternoon classes during camp weeks. All the supplies are included as well as snacks. The cost is 150 for 4 days. Each art camp is based on availability, and you must reserve your spot with a $50 art camp deposit. Please email or call us for details."
          />
          <ArtCampCard
            leftUpperimage={Pic4}
            leftLowerImage={Pic5}
            rightLowerImage={Pic6}
            header="Winter Art Camps"
            body="Learn how to draw fine art and create new crafts everyday. The camp are for 4 days (no camp on Tuesdays). The fun begins at 10am and lasts until 1pm. We will still have afternoon classes during camp weeks. All the supplies are included as well as snacks. The cost is 150 for 4 days. Each art camp is based on availability, and you must reserve your spot with a $50 art camp deposit. Please email or call us for details."
          />
          <ArtCampCard
            leftUpperimage={Pic7}
            leftLowerImage={Pic8}
            rightLowerImage={Pic9}
            header="Spring Art Camps"
            body="Learn how to draw fine art and create new crafts everyday. The camp are for 4 days (no camp on Tuesdays). The fun begins at 10am and lasts until 1pm. We will still have afternoon classes during camp weeks. All the supplies are included as well as snacks. The cost is 150 for 4 days. Each art camp is based on availability, and you must reserve your spot with a $50 art camp deposit. Please email or call us for details."
          />
          <ArtCampCard
            leftUpperimage={Pic10}
            leftLowerImage={Pic11}
            rightLowerImage={Pic12}
            header="One Day"
            body="Learn how to draw fine art and create new crafts everyday. The camp are for 4 days (no camp on Tuesdays). The fun begins at 10am and lasts until 1pm. We will still have afternoon classes during camp weeks. All the supplies are included as well as snacks. The cost is 150 for 4 days. Each art camp is based on availability, and you must reserve your spot with a $50 art camp deposit. Please email or call us for details."
          />
        </ArtCampBody>
      </ArtCampWrapper>
    );
  }
}

export default ArtCamps;
