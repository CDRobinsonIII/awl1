import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import * as actions from 'actions/header'
import styled from 'styled-components'
import logo from 'assets/logo.svg'

const NavWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  height: 250px;
  padding-top: 50px;
`
const LogoLink = styled(Link)`
  max-width: 470px;
  width: 100%;
`
const Logo = styled.img`width: 100%;`

const LinkBar = styled.nav`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  width: 100%;
  max-width: 900px;
  white-space: nowrap;
  padding: 0 3%;
`

const StyledLink = styled(Link)`
  color: #828282;
  font-family: 'Nexa';
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
`

class Header extends Component {
  render() {
    return (
      <NavWrapper>
        <LogoLink to="/">
          <Logo src={logo} />
        </LogoLink>
        <LinkBar>
          <StyledLink to="/classes">Art Classes</StyledLink>
          <StyledLink to="/locations">Locations</StyledLink>
          <StyledLink to="/camps">Art Camps</StyledLink>
          <StyledLink to="/parties">Art Parties</StyledLink>
          <StyledLink to="/tuition">Tuition</StyledLink>
          <StyledLink to="/about">About Us</StyledLink>
        </LinkBar>
      </NavWrapper>
    )
  }
}

const mapStateToProps = ({ header }) => ({
  open: header.open
})

export default withRouter(connect(mapStateToProps, actions)(Header))
