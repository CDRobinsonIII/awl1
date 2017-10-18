import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import * as actions from "actions/header";
import styled from "styled-components";
import logo from "assets/logo.svg";

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
  }
`;
const Logo = styled.img`width: 100%;`;

const LinkBar = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  width: 100%;
  max-width: 900px;
  white-space: nowrap;
  padding: 0 3%;
  @media screen and (max-width: 767px) {
    flex-direction: column;
    text-align: end;
    position: absolute;
    background: white;
    top: 0px;
    display: ${props => (props.open ? "flex" : "none")};
  }
`;

const NavBar = styled.div`
z-index: 99;
justify-content: flex-end;
display: flex;
overflow: hidden;
position: fixed;
top: 0;
width: 100%;
background: transparent;
}
`;
const StyledLink = styled(Link)`
  color: #828282;
  font-family: "Nexa";
  font-weight: bold;
  font-size: 13px;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 2px;
  -webkit-font-smoothing: antialiased;
  padding: 5px;

  &:hover {
    color: #333;
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
        <NavBar>
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
        </NavBar>
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
