// Skills.jsx
import styled from "styled-components";
import Card from "./SkillCard";
import SkillCardData from "../../Datasets/About/SkillCard.js";

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
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px;
`;

const Skills = () => {
  return (
    <Wrapper>
      <Header>Skills</Header>
      <Cards>
        {SkillCardData.map((item) => (
          <Card key={item.id} icon={item.iconSrc} title={item.title} />
        ))}
      </Cards>
    </Wrapper>
  );
};

export default Skills;
