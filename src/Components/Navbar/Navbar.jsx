import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavbarComponent = styled.nav`
  background-color: #faf7f3;
  color: #4a2f2b;
  font-weight: 600;
  height: 65px;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid rgba(111, 83, 79, 0.1);

  .nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  a {
    text-decoration: none;
    color: #4a2f2b;
  }

  .logo {
    font-size: 1.2rem;
    font-weight: 700;
    color: #4a2f2b;
    cursor: pointer;
  }

  .nav-links {
    display: flex;
    gap: 1.5rem;

    @media (max-width: 768px) {
      display: none;
    }

    li {
      transition: all 0.2s ease;
      position: relative;
      padding: 8px 12px;
      color: #4a2f2b;
      list-style: none;
      li &:hover {
        cursor: pointer;
        transform: translateY(-2px);
        color: #8a6a65;
      }

      &::after {
        content: "";
        display: block;
        height: 2px;
        width: 0%;
        background-color: #8a6a65;
        transition: width 0.3s ease;
        position: absolute;
        bottom: 0;
        left: 0;
      }

      &:hover::after {
        width: 100%;
      }
    }
  }

  .hamburger {
    display: none;
    cursor: pointer;
    width: 30px;
    height: 20px;
    position: relative;
    z-index: 1001;

    @media (max-width: 768px) {
      display: block;
    }

    span {
      display: block;
      width: 100%;
      height: 2px;
      background-color: #4a2f2b;
      position: absolute;
      left: 0;
      transition: all 0.3s ease;

      &:nth-child(1) {
        top: 0;
      }
      &:nth-child(2) {
        top: 50%;
        transform: translateY(-50%);
      }
      &:nth-child(3) {
        bottom: 0;
      }
    }

    &.active {
      span:nth-child(1) {
        top: 50%;
        transform: translateY(-50%) rotate(45deg);
      }
      span:nth-child(2) {
        opacity: 0;
      }
      span:nth-child(3) {
        bottom: 50%;
        transform: translateY(50%) rotate(-45deg);
      }
    }
  }

  .mobile-menu {
    position: fixed;
    top: 65px;
    left: 0;
    width: 100%;
    background-color: #faf7f3;
    padding: 1rem 0;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
    transform: translateY(-150%);
    transition: transform 0.3s ease;
    z-index: 1000;

    @media (min-width: 769px) {
      display: none;
    }

    &.active {
      transform: translateY(0);
    }

    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      padding: 0;
      margin: 0;

      li {
        padding: 0.5rem 1rem;
        width: 100%;
        text-align: center;
        transition: all 0.2s ease;

        &:hover {
          background-color: rgba(111, 83, 79, 0.1);
        }
      }
    }
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <NavbarComponent>
      <div className="nav-container">
        <Link to="/" className="logo">
          &lt;Aayan /&gt;
        </Link>

        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/resume">Resume</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>

        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className={`mobile-menu ${isOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/skills" onClick={() => setIsOpen(false)}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={() => setIsOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/resume" onClick={() => setIsOpen(false)}>
              Resume
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </NavbarComponent>
  );
};

export default Navbar;
