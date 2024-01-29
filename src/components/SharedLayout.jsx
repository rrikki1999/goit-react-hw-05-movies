import React from "react";
import {  NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  background-color: #7A8084; 
  padding: 20px 50px; 
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  color: white;
  font-size: 30px;
`;

const Nav = styled.nav`
  display: flex;
  gap: 50px; 
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-size: 20px; 
  font-weight: bold;
  transition: background-color 0.3s; 
  border-radius:90px;
  padding: 10px;

  &.active {
    background-color: #E1DCDC;
    color: #444444; 
    
  }

  &:hover {
    background-color: #E1DCDC;
    color: #444444; 
    
  }
`;


export const SharedLayout = () => {
  return (
    <Container>
      <Logo>
        <span role="img" aria-label="film icon">
          🎬
        </span>{" "}
        FILMS
      </Logo>
      <Nav>
        <StyledNavLink to="/">Home</StyledNavLink>
        <StyledNavLink to="/movies">Films</StyledNavLink>
      </Nav>
    </Container>
  );
};



