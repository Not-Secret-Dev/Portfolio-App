import styled from "styled-components";
import Skills from "../Page Components/About/Skills";
import Experience from "../Page Components/About/Experience";
import Info from "../Page Components/About/Info";

const MainContainer = styled.div`
  width: 100%;
  margin: 23px 0;
  display: flex;
  flex-direction: column;
`;

const About = () => {
  return (
    <MainContainer>
      <Info />
      <Skills />
      <Experience />
    </MainContainer>
  );
};

export default About;
