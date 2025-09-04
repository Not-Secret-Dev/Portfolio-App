import styled from "styled-components";

const Card = styled.div`
  max-width: 80%;
  padding: 14px;
  display: flex;
  gap: 23px;
  transition: 0.4s all;
  border-radius: 5px;

  &:hover {
    scale: 1.02;
    cursor: pointer;
    background-color: #dfdfdf;

    p {
      background-color: #dfdfdf;
    }
  }

  .left {
    width: 40%;
  }

  .left img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }

  .right {
    width: 100%;
    text-align: justify;
    background: none;
  }

  .right p {
    font-size: 14px;
    color: #61708a;
    line-height: 20px;
    background: none;
  }

  .right .heading {
    font-size: 16px;
    color: #121417;
    line-height: 23px;
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
        <p>{about}</p>
        <p>{desc}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
