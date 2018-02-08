import React, { Component } from 'react';
import styled from 'styled-components';
import santee from '../assets/santee.png';

const TuitionWrapper = styled.div`
  background: white;
  color: white;
  font-family: 'Nexa';
`;

const TuitionSec = styled.section`
  background: #482548;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TuitionH1 = styled.h1`
  font-size: 2em;
  text-transform: capitalize;
  letter-spacing: 1px;
  padding: 1em;
`;

const TuitionImage = styled.img`
  height: 200px;
  width: 490px;
`;

const TuitionBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 490px;
`;

const TuitionH2 = styled.h2`
  margin-top: 0.5em;
  padding: 0.5em;
  font-size: 1.5em;
`;

const TuitionSpan = styled.span`
  line-height: 2em;
  font-size: 0.8em;
  padding: 0.5em 0.1em;
  text-align: -webkit-center;

  &:last-of-type {
    font-size: 1em;
    padding: 1em;
  }
`;

const TuitionButton = styled.button`
  padding: 15px 20px;
  font-family: 'Nexa';
  text-transform: uppercase;
  font-weight: 900;
  background: #bd0f0f;
  color: white;
  -webkit-font-smoothing: antialiased;
  margin-bottom: 5em;
  border: 0px;
`;

const Discount = styled.section`
  color: black;
  width: 100%;
  background: white;
`;

const DiscountH2 = styled.h2`
  font-size: 1.5em;
  display: flex;
  justify-content: center;
  padding: 1em;
  margin-top: 1em;
`;

const DiscountBody = styled.div`
  padding-bottom: 4em;
  justify-content: center;
  display: flex;
`;

const DiscountLeft = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  margin: 1em;
`;
const DiscountRow = styled.div`
  text-align: -webkit-center;
  padding: 0.5em;
`;

const DiscountH3 = styled.h3`
  padding: 1em;
  font-size: 1.2em;
`;

const DiscountSmallFont = styled.span`
  text-transform: uppercase;
  -webkit-font-smoothing: antialiased;
  font-size: 0.6em;
  font-weight: 800;
`;

const DiscountSpan = styled.span`
  line-height: 25px;
`;

const DiscountRight = styled.div`
  width: 350px;
  margin: 1em;
  text-align: -webkit-center;
`;

const DiscountRightH2 = styled.h2`
  padding: 1em;
  text-align: -webkit-center;
  font-size: 1.2em;
`;

const DiscountRightSpan = styled.span``;

const Supplies = styled.section`
  height: 35vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: #482548;
  color: white;
  padding-bottom: 5em;
`;

const SuppliesH1 = styled.h1`
  padding: 0.6em;
  font-size: 1.5em;
`;
const SuppliesSpan = styled.span`
  margin: 0 25em;
  text-align: -webkit-center;
  line-height: 2em;
`;
class Tuition extends Component {
  render() {
    return (
      <TuitionWrapper>
        <TuitionSec>
          <TuitionH1>Tuition fees</TuitionH1>
          <TuitionImage src={santee} />
          <TuitionBody>
            <TuitionH2>Student Fees</TuitionH2>
            <TuitionSpan>
              Our student reserve their spots on a month to month basis,
              attending 1 class per week. Most months have 4 classes per month.
            </TuitionSpan>
            <TuitionSpan>$20 per 1 hour and 15 min class</TuitionSpan>
            <TuitionButton>Pay tuition</TuitionButton>
          </TuitionBody>
        </TuitionSec>
        <Discount>
          <DiscountH2>Discounts</DiscountH2>
          <DiscountBody>
            <DiscountLeft>
              <DiscountRow>
                <DiscountH3>Family Discount</DiscountH3>
                <DiscountSmallFont>
                  1st student pays full price
                </DiscountSmallFont>
                <br />
                <DiscountSpan>10% of the 2nd Student</DiscountSpan>
              </DiscountRow>
              <DiscountRow>
                <DiscountSmallFont>
                  1st and 2nd student pays full price
                </DiscountSmallFont>
                <br />
                <DiscountSpan>50% of the 3rd Student</DiscountSpan>
              </DiscountRow>
              <DiscountRow>
                <DiscountSmallFont>
                  1st, 2nd and 3rd student pays full price
                </DiscountSmallFont>
                <br />
                <DiscountSpan>FREE for the 4th student</DiscountSpan>
              </DiscountRow>
            </DiscountLeft>
            <DiscountRight>
              <DiscountRightH2>Commitment Discount</DiscountRightH2>
              <DiscountSmallFont>
                pay for 3 months at a time, get
              </DiscountSmallFont>
              <br />
              <DiscountRightSpan>$18 per class</DiscountRightSpan>
            </DiscountRight>
          </DiscountBody>
        </Discount>
        <Supplies>
          <SuppliesH1>Supplies</SuppliesH1>
          <SuppliesSpan>
            Our students buy supplies from us, depending on which medium/level
            they are in. The supplies are theirs to take home and practice with.
          </SuppliesSpan>
        </Supplies>
      </TuitionWrapper>
    );
  }
}

export default Tuition;
