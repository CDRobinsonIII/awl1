import React from 'react';
import styled from 'styled-components';
import brush from '../assets/footer-brush.png';

const style = {
  color: '#828282'
};
const FooterWrapper = styled.section`
  background: white;
  background-image: url(${brush});
  background-position: right;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  height: 245px;
  padding: 0 6%;
`;
const FooterContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 4em 0 1em;
  margin-bottom: 10px;
`;
const FooterA = styled.a`
  padding: 0 2em 0 0;
  &:hover {
    cursor: pointer;
    color: #492649;
  }
`;

const FooterMiddle = styled.div`
  padding: 1.5em 0;
`;
const FooterMiddleA = styled.a`
  color: #828282;
  font-size: 16px;
  font-family: Nexa, sans-serif;
  text-transform: uppercase;
  font-weight: 700;
  -webkit-font-smoothing: antialiased;
  margin-right: 45px;
  padding: 5px;
  &:hover {
    cursor: pointer;
    color: #492649;
  }
`;

const FooterCopyright = styled.p`
  font-family: Playfair Display, serif;
  color: #a8a8a8;
`;
export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer>
        <FooterA>
          <i
            style={style}
            className="fab fa-facebook fa-2x"
            aria-hidden="true"
          />
        </FooterA>
        <FooterA>
          <i
            style={style}
            className="fab fa-instagram fa-2x"
            aria-hidden="true"
          />
        </FooterA>
        <FooterA>
          <i
            style={style}
            className="fab fa-twitter fa-2x"
            aria-hidden="true"
          />
        </FooterA>
      </FooterContainer>
      <FooterMiddle>
        <FooterMiddleA>Frequently asked questions</FooterMiddleA>
        <FooterMiddleA>Become an instructor</FooterMiddleA>
      </FooterMiddle>
      <FooterCopyright>
        Designed by Miles Cartwright. Built by Niccolo Ortega. All rights
        reserved with Art with Larisse.
      </FooterCopyright>
    </FooterWrapper>
  );
}
