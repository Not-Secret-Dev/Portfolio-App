import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  outline: 1px solid #afafaf;
  border-radius: 8px;
  font-size: 14px;
  color: #121417;
  font-weight: 500;
  width: 15rem;
  height: 3.5rem;
  background: #fff;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  svg {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 600px) {
    width: 100%;
    max-width: 320px;
    height: auto;
    padding: 10px 14px;
    font-size: 13px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

const Card = ({ title, icon: IconComponent }) => {
  return (
    <MainContainer>
      <IconComponent />
      <p>{title}</p>
    </MainContainer>
  );
};

export default Card;
