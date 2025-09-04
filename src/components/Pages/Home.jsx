import styled from "styled-components";
import ProjectCard from "../Page Components/Home/ProjectCard";
import ProjectCardData from "../Datasets/Home/ProjectCard.js";

const MainContainer = styled.main`
  width: 100%;
  height: 100vh;
`;

const Heading = styled.header`
  margin: 23px;
  font-size: 28px;
  line-height: 40px;
  text-align: center;
  color: #121417;
`;

const ProjectCards = styled.div`
  margin: 12px 23px;
`;

const Home = () => {
  return (
    <MainContainer>
      <Heading>Featured Projects</Heading>
      <ProjectCards>
        {ProjectCardData.map((dataset) => {
          return (
            <ProjectCard
              imgSrc={dataset.imgSrc}
              alt={dataset.alt}
              heading={dataset.title}
              about={dataset.about}
              desc={dataset.desc}
            />
          );
        })}
      </ProjectCards>
    </MainContainer>
  );
};

export default Home;
