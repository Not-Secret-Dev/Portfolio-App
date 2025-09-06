import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaHome, FaBookOpen, FaLinkedin, FaGithub } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import { MdContactEmergency } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { useState, useEffect } from "react";

const MainContainer = styled.div`
  width: 260px;
  padding: 1.5rem 1rem;
  color: #121417;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
  overflow-y: auto;
  height: 92vh;
  max-height: 100vh;
  position: sticky;
  top: 0;
  a {
    color: #121417;
  }

  @media (max-width: 1024px) {
    width: 220px;
  }

  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    top: 0;
    transform: translateX(-100%);
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);

    ${({ $isOpen }) =>
      $isOpen &&
      `
      transform: translateX(0);
    `}
  }
`;

const HamburgerButton = styled.button`
  display: none;
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 1100;
  background: #fff;
  border: none;
  border-radius: 4px;
  padding: 0.5rem;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }

  span {
    display: block;
    width: 22px;
    height: 2px;
    margin: 4px 0;
    background-color: #121417;
    transition: all 0.3s ease-in-out;

    &:nth-child(1) {
      transform: ${({ $isOpen }) =>
        $isOpen ? "rotate(45deg) translate(5px, 5px)" : "none"};
    }

    &:nth-child(2) {
      opacity: ${({ $isOpen }) => ($isOpen ? "0" : "1")};
    }

    &:nth-child(3) {
      transform: ${({ $isOpen }) =>
        $isOpen ? "rotate(-45deg) translate(5px, -5px)" : "none"};
    }
  }
`;

const Overlay = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;

  @media (min-width: 769px) {
    display: none;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 1.5rem;

  p {
    font-size: 1.125rem;
    line-height: 1.75rem;
    text-align: center;
  }

  p:nth-child(3) {
    font-size: 0.75rem;
    color: #61708a;
    line-height: 1.5rem;
  }

  p:last-child {
    width: 100%;
    font-size: 0.75rem;
    color: #61708a;
    line-height: 1.5rem;
    text-align: center;
    margin-bottom: 0.5rem;
  }

  img {
    width: 6.75rem;
    height: 6.75rem;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
  }
`;

const Navlinks = styled.nav`
  margin: 1.5rem 0;

  a {
    margin-top: 0.375rem;
    text-decoration: none;
    display: block;
  }

  a .content {
    width: 100%;
    padding: 0.5rem 0 0.5rem 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
    transition: 0.4s all ease-in-out;
    border-radius: 0.25rem;
  }

  a .content:hover {
    background-color: #dfdfdf;
    cursor: pointer;
  }
`;

const Medialinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  margin-top: 1.5rem;

  .link {
    width: 2rem;
    height: 2rem;
    padding: 0.1875rem;
    font-size: 1.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s all ease-in-out;
    border-radius: 50%;
  }

  .link:hover {
    background-color: #dfdfdf;
    cursor: pointer;
  }
`;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      if (!mobile && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <HamburgerButton
        onClick={toggleSidebar}
        aria-label="Toggle menu"
        $isOpen={isOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </HamburgerButton>

      <Overlay $isOpen={isOpen && isMobile} onClick={closeSidebar} />

      <MainContainer $isOpen={isOpen || !isMobile}>
        <InfoContainer>
          <img src="/Global/Main.jpg" alt="Aayan Mumtaz" />
          <p>Aayan Mumtaz</p>
          <p>Fullstack Web Developer</p>
          <p>Specializing in user-centered web and mobile applications</p>
        </InfoContainer>

        <Medialinks>
          <Link to="/" className="link" onClick={closeSidebar}>
            <FaLinkedin />
          </Link>
          <Link to="/" className="link" onClick={closeSidebar}>
            <FaGithub />
          </Link>
          <Link to="/" className="link" onClick={closeSidebar}>
            <AiFillInstagram />
          </Link>
        </Medialinks>

        <Navlinks>
          <ul>
            <Link to="/" className="link" onClick={closeSidebar}>
              <div className="content">
                <FaHome />
                Home
              </div>
            </Link>
            <Link to="/about" className="link" onClick={closeSidebar}>
              <div className="content">
                <RiAccountCircleFill />
                About
              </div>
            </Link>
            <Link to="/projects" className="link" onClick={closeSidebar}>
              <div className="content">
                <FaBookOpen />
                Projects
              </div>
            </Link>
            <Link to="/contact" className="link" onClick={closeSidebar}>
              <div className="content">
                <MdContactEmergency />
                Contact
              </div>
            </Link>
          </ul>
        </Navlinks>
      </MainContainer>
    </>
  );
};

export default Sidebar;
