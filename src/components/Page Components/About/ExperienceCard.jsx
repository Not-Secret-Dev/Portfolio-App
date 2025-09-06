// ExperienceCard.jsx
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* ✅ same as SkillCard */
  gap: 12px;
  outline: 1px solid #afafaf;
  border-radius: 8px;
  font-size: 13px;
  color: #121417;
  font-weight: 500;
  width: 15rem;
  height: 3.5rem;
  background: #fff;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  img {
    width: 1rem;
    height: auto;
  }

  .timeline {
    font-size: 12px;
    color: #5e5e5e;
  }

  /* 📱 Mobile adjustments */
  @media (max-width: 600px) {
    width: 100%;
    max-width: 320px;
    height: auto;
    padding: 12px;
    font-size: 12px;

    img {
      width: 0.9rem;
    }
  }
`;

const Card = ({ title, icon, timeline }) => {
  return (
    <MainContainer>
      <img src={icon} alt={title} />
      <div>
        <p>{title}</p>
        <p className="timeline">{timeline}</p>
      </div>
    </MainContainer>
  );
};

export default Card;
