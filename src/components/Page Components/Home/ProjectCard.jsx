import styled from "styled-components";

const Card = styled.div`
  max-width: 95%;
  padding: 1rem;
  display: flex;
  gap: 1.5rem;
  transition: all 0.3s ease;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  margin-bottom: 1rem;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.12);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 0.875rem;
  }

  .left {
    width: 30%;
    flex-shrink: 0;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  .left img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 6px;

    @media (max-width: 768px) {
      height: 160px;
    }
  }

  .right {
    width: 100%;
    text-align: left;
  }

  .right p {
    font-size: 0.875rem;
    color: #61708a;
    line-height: 1.5;
    margin-bottom: 0.5rem;
    text-align: justify;
  }

  .right .heading {
    font-size: 1.125rem;
    color: #121417;
    line-height: 1.4;
    font-weight: 600;
    margin-bottom: 0.5rem;

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }

  .right .about {
    font-weight: 500;
    color: #4a5568;
    margin-bottom: 0.75rem;
  }
`;

const ProjectCard = ({ imgSrc, alt, heading, about, desc }) => {
  return (
    <Card>
      <div className="left">
        <img src={imgSrc} alt={alt} />
      </div>
      <div className="right">
        <p className="heading">{heading}</p>
        <p className="about">{about}</p>
        <p>{desc}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
