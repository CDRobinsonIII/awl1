import React from 'react';
import styled from 'styled-components';

const style = {
  padding: '0 5px 0 0',
  color: 'white'
};
const CardWrapper = styled.div`
  margin-right: 30px;
  width: 475px;
  height: 370px;
`;

const CardTop = styled.div``;
const ImageWrapper = styled.a`
  text-decoration: none;
  width: 475px;
  height: 250px;
`;
const CardImage = styled.img`
  width: 475px;
  height: 250px;
`;

const Overlay = styled.div`
  position: relative;
  display: flex;
  top: -252px;
  height: 250px;
  width: 475px;
  justify-content: center;
  align-items: center;
`;

const OverlayH2 = styled.h2`
  font-family: 'AvantGardeMdITC';
  font-size: 2em;
  line-height: 1.5em;
  color: white;
  text-decoration: none;
`;

const CardBottom = styled.div`
  position: relative;
  top: -245px;
  display: flex;
  justify-content: space-between;
  padding: 10px 0 25px;
  font-family: Playfair Display, serif;
  color: #fff;
  line-height: 1.5;
  font-weight: lighter;
  -webkit-font-smoothing: antialiased;
  letter-spacing: 0.02em;
  font-size: 1.2em;
`;
const Address = styled.address``;

const CardLinks = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 30px;
  text-align: right;
`;
const CardLink = styled.a`
  font-family: 'Nexa';
  font-size: 12.8px;
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  font-weight: 800;
`;
export default function Location(props) {
  return (
    <CardWrapper>
      <CardTop>
        <ImageWrapper>
          <CardImage src={props.image} />
          <Overlay style={{ background: props.backgroundColor }}>
            <OverlayH2>{props.name}</OverlayH2>
          </Overlay>
        </ImageWrapper>
      </CardTop>
      <CardBottom>
        <Address>
          {props.address}
          <br />
          {props.city}
          <br />
          {props.number}
        </Address>
        <CardLinks>
          <CardLink href="">
            contact us{' '}
            <i
              style={style}
              className="far fa-lg fa-envelope"
              aria-hidden="true"
            />
          </CardLink>
          <CardLink href="">
            class schedule{' '}
            <i
              style={style}
              className="far fa-lg fa-envelope"
              aria-hidden="true"
            />
          </CardLink>
        </CardLinks>
      </CardBottom>
    </CardWrapper>
  );
}
