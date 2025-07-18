import React from "react";
import styled from "styled-components";

const HomeSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: calc(100vh - 10.5vh);
  overflow: hidden;
  background: #fef7f6;

  @media (max-width: 768px) {
    min-height: calc(100dvh - 10.5dvh);
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    width: 100%;
    gap: 3rem;

    @media (max-width: 768px) {
      flex-direction: column;
      text-align: center;
    }
  }

  .intro {
    flex: 1;
    color: #2e1c1a;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1.2rem;

    h1 {
      font-size: 3rem;
      margin: 0;
      line-height: 1.2;
    }

    h2 {
      font-size: 1.5rem;
      font-weight: 400;
      margin: 0;
      color: #6b4a47;
    }

    p {
      font-size: 1.1rem;
      line-height: 1.6;
      margin: 0;
      color: #4a2f2b;
    }

    button {
      align-self: flex-start;
      margin-top: 1rem;
      background-color: #4a2f2b;
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      cursor: pointer;
      border-radius: 0.5rem;
      transition: background-color 0.3s ease;

      &:hover {
        background-color: #361f1b;
      }

      @media (max-width: 768px) {
        align-self: center;
      }
    }
  }

  .image-box {
    flex: 1;
    display: flex;
    justify-content: center;

    img {
      max-width: 100%;
      height: auto;
      border-radius: 1rem;
      transform: scaleX(-1);
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const Home = () => {
  return (
    <HomeSection>
      <div className="container">
        <div className="intro">
          <h1>Hi, I'm Aayan</h1>
          <h2>Front-End Developer & Creative Coder</h2>
          <p>
            I build sleek, fast, and accessible websites using React and modern
            tools.
          </p>
          <button>View My Work</button>
        </div>
        <div className="image-box">
          <img src="/Home.png" alt="Aayan" />
        </div>
      </div>
    </HomeSection>
  );
};

export default Home;
