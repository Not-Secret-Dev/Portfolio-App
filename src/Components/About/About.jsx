import React from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const AboutWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #faf7f3;
  color: #3b2b2a;
  min-height: calc(100vh - 11vh);
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 3rem 1rem;
  }
`;

const ProfileImage = styled.div`
  flex: 0 0 320px;
  margin-right: 4rem;
  animation: ${fadeIn} 1s ease-out forwards;

  img {
    width: 100%;
    max-width: 300px;
    border-radius: 50%;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    object-fit: cover;
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 2rem;
  }
`;

const InfoCard = styled.div`
  flex: 1;
  background: white;
  padding: 2rem;
  border-radius: 1.5rem;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.05);
  animation: ${fadeIn} 1.2s ease-out forwards;
  max-width: 600px;

  h1 {
    font-size: 2.8rem;
    margin-bottom: 1rem;
    color: #4a2f2b;
    font-weight: 800;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }

  .details {
    margin-top: 1rem;

    p {
      margin: 0.5rem 0;
      padding-left: 1.2rem;
      position: relative;
      font-size: 1rem;

      &::before {
        content: "▸";
        position: absolute;
        left: 0;
        color: #b4978e;
        font-weight: bold;
      }
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }

    .details p {
      font-size: 0.9rem;
    }
  }
`;

const About = () => {
  return (
    <AboutWrapper id="about">
      <ProfileImage>
        <img src="/About.png" alt="Aayan Mumtaz" />
      </ProfileImage>

      <InfoCard>
        <h1>About Me</h1>
        <p>
          I'm a passionate Fullstack Web Developer who loves creating functional
          and elegant websites. My goal is to turn ideas into digital
          experiences that solve real-world problems.
        </p>
        <div className="details">
          <p>Name: Aayan Mumtaz</p>
          <p>Date of birth: October 27th, 2007</p>
          <p>Address: E-Block, Gulbahar Town, Lahore, Pakistan</p>
          <p>Zip Code: 54000</p>
          <p>Email: aayanmumtaz1@gmail.com</p>
          <p>Phone: +92 329-7528-954</p>
        </div>
      </InfoCard>
    </AboutWrapper>
  );
};

export default About;
