// Info.jsx
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 0 16px;

  @media (min-width: 768px) {
    padding: 0 32px;
  }

  @media (min-width: 1200px) {
    padding: 0 48px;
  }
`;

const Header = styled.h1`
  font-size: clamp(22px, 8vw, 28px);
  line-height: 1.3;
  color: #121417;
  font-weight: 500;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Description = styled.p`
  font-size: clamp(14px, 2vw, 18px);
  line-height: 1.6;
  color: #121417;
  font-weight: 300;
  text-align: justify;
`;

const Info = () => {
  return (
    <Wrapper>
      <Header>About Me</Header>
      <Description>
        I’m a curious and driven Full Stack Developer who loves solving problems
        through code. I combine creativity with technical skill to design and
        build user-friendly digital experiences. Collaboration and learning fuel
        my work — I enjoy turning ideas into real, working solutions. My goal is
        always to create technology that is reliable, impactful, and easy to
        use.
      </Description>
    </Wrapper>
  );
};

export default Info;
