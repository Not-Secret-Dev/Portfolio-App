import React from "react";
import styled from "styled-components";

const NavbarComponent = styled.nav`
  color: #6f534f;
  font-weight: 600;
  font-size: medium;
  padding: 8px 0;

  ul {
    display: flex;
    justify-content: center;
  }

  li {
    margin: 12px;
    list-style: none;
    transition: 0.1s;
  }

  li:hover {
    font-size: large;
    cursor: pointer;
  }
`;

const Navbar = () => {
  return (
    <NavbarComponent>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Skills</li>
        <li>Services</li>
        <li>Resume</li>
        <li>Contact</li>
      </ul>
    </NavbarComponent>
  );
};

export default Navbar;
