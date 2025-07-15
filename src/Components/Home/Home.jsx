import React from "react";
import styled from "styled-components";

const HomeSection = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;

  .greeting {
    color: #6f534f;
    font-weight: bold;

    p:first-child {
      font-size: 21px;
    }
    p:nth-child(2) {
      font-size: 63px;
    }
    p:last-child {
      font-size: 28px;
    }
  }

  img {
    width: -400px;
    height: 517px;
  }
`;

const Home = () => {
  return (
    <HomeSection>
      <div className="greeting">
        <p>Hello!</p>
        <p>
          I'm Aayan
          <br />
          Mumtaz!
        </p>
        <p>A Fullstack Web Developer!</p>
      </div>
      <img src="/Home.png" alt="" />
    </HomeSection>
  );
};

export default Home;
