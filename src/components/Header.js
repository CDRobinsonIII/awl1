import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import * as actions from "actions/header";
import styled from "styled-components";
import logo from "../assets/Art-Larisse-Logo.png";

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  height: 250px;
  padding-top: 50px;
`;
const LogoLink = styled(Link)`
  max-width: 470px;
  width: 100%;
  @media screen and (max-width: 767px) {
    display: flex;
    padding: 1em;
  }
`;
const Logo = styled.img`
  width: 100%;
`;

const LinkBar = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  width: 100%;
  max-width: 1085.703px;
  white-space: nowrap;
  padding: 0 3%;
  @media screen and (max-width: 767px) {
    justify-content: space-between;
    padding-top: 2em;
    margin-top: 0px;
    width: 100%;
    background: white;
    flex-direction: column;
    text-align: end;
    position: fixed;
    top: -0px;
    display: ${props => (props.open ? "none" : "flex")};
    transform: translateY(${props => (props.open ? "-130%" : "0")}); };
    transition: all 0.4s ease-out;
    z-index:98;
  }
`;

const MobileNav = styled.div`
  display: none;
  @media screen and (max-width: 767px) {
    margin: 0 -4%;
    z-index: 99;
    justify-content: flex-end;
    overflow: hidden;
    position: fixed;
    top: 0;
    width: 100%;
    background: transparent;
    display: flex;
  }
`;
const StyledLink = styled(Link)`
  color: #828282;
  font-family: "Nexa";
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 2px;
  -webkit-font-smoothing: antialiased;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  font-weight: 700px;
  padding: 15px;

  &:hover {
    background: #3d2637;
    color: white;
  }
  &:last-child {
    margin-right: 0;
  }
  @media screen and (max-width: 767px) {
    font-size: 10px;
  }
`;

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  toggleMenu() {
    const isOpen = this.state.open;
    this.setState({
      open: !isOpen
    });
  }
  render() {
    return (
      <NavWrapper>
        <LogoLink to="/">
          <Logo src={logo} />
        </LogoLink>
        <MobileNav>
          <svg
            onClick={() => this.toggleMenu()}
            fill="#000000"
            height="36"
            viewBox="0 0 24 24"
            width="36"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
          </svg>
        </MobileNav>
        <LinkBar
          onClick={() => {
            this.toggleMenu();
          }}
          open={this.state.open}>
          <StyledLink to="/classes">Art Classes</StyledLink>
          <StyledLink to="/locations">Locations</StyledLink>
          <StyledLink to="/camps">Art Camps</StyledLink>
          <StyledLink to="/parties">Art Parties</StyledLink>
          <StyledLink to="/tuition">Tuition</StyledLink>
          <StyledLink to="/about">About Us</StyledLink>
        </LinkBar>
      </NavWrapper>
    );
  }
}

const mapStateToProps = ({ header }) => ({
  open: header.open
});

export default withRouter(connect(mapStateToProps, actions)(Header));
