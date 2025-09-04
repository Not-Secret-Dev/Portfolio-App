import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { RiAccountCircleFill } from "react-icons/ri";
import { FaBookOpen } from "react-icons/fa";
import { MdContactEmergency } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

const MainContainer = styled.div`
  width: 260px;
  margin: 20px;
  padding: 12px;
  color: #121417;

  a {
    color: #121417;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  p {
    font-size: 18px;
    line-height: 28px;
  }

  p:nth-child(3) {
    font-size: 12px;
    color: #61708a;
    line-height: 24px;
  }

  p:last-child {
    width: 90%;
    font-size: 12px;
    color: #61708a;
    line-height: 24px;
    text-align: center;
    margin-bottom: 8px;
  }

  img {
    width: 108px;
    border-radius: 64px;
  }
`;

const Navlinks = styled.nav`
  margin-top: 8px;

  a {
    margin-top: 6px;
    text-decoration: none;
  }

  a .content {
    width: 100%;
    padding: 6px 0 6px 12px;
    display: flex;
    align-items: center;
    gap: 12px;
    transition: 0.4s all ease-in-out;
    border-radius: 4px;
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
  gap: 12px;

  .link {
    width: 32px;
    height: 32px;
    padding: 3px;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s all ease-in-out;
    border-radius: 20px;
  }

  .link:hover {
    background-color: #dfdfdf;
    cursor: pointer;
  }
`;

const Sidebar = () => {
  return (
    <MainContainer>
      <InfoContainer>
        <img src="/Global/Main.jpg" alt="Aayan Mumtaz" />
        <p>Aayan Mumtaz</p>
        <p>Fullstack Web Developer</p>
        <p>Specializing in user-centered web and mobile applications</p>
      </InfoContainer>
      <Medialinks>
        <Link to="/" className="link">
          <FaLinkedin />
        </Link>
        <Link to="/" className="link">
          <FaGithub />
        </Link>
        <Link to="/" className="link">
          <AiFillInstagram />
        </Link>
      </Medialinks>
      <Navlinks>
        <ul>
          <Link to="/" className="link">
            <div to="/" className="content">
              <FaHome />
              Home
            </div>
          </Link>
          <Link to="/about" className="link">
            <div className="content">
              <RiAccountCircleFill />
              About
            </div>
          </Link>
          <Link to="/projects" className="link">
            <div className="content">
              <FaBookOpen />
              Projects
            </div>
          </Link>
          <Link to="/contact" className="link">
            <div className="content">
              <MdContactEmergency />
              Contact
            </div>
          </Link>
        </ul>
      </Navlinks>
    </MainContainer>
  );
};

export default Sidebar;
