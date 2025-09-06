import styled from "styled-components";
import Card from "./ExperienceCard.jsx";
import ExperienceData from "../../Datasets/About/ExpCard.js";

const Wrapper = styled.section`
  margin: 28px 0;
  padding: 0 16px;

  @media (min-width: 768px) {
    padding: 0 32px;
  }

  @media (min-width: 1200px) {
    padding: 0 48px;
  }
`;

const Header = styled.h2`
  font-size: clamp(20px, 3vw, 24px);
  margin-bottom: 16px;
  color: #121417;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* ✅ same as Skills */
  gap: 12px;
`;

const Experience = () => {
  return (
    <Wrapper>
      <Header>Experience</Header>
      <Cards>
        {ExperienceData.map((item) => (
          <Card
            key={item.id}
            icon={item.iconSrc}
            title={item.title}
            timeline={item.timeline}
          />
        ))}
      </Cards>
    </Wrapper>
  );
};

export default Experience;