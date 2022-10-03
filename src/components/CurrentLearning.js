import styled from "styled-components";
import { Container } from "../styles";

import thumb1 from "../img/posgrado.jpg";
import thumb2 from "../img/tsu.jpg";
import thumb3 from "../img/inscripcion.jpg";

import CurrentLearningCard from "./CurrentLearningCard";

const CurrentLearning = () => {
  const currentLearningContents = [
    {
      courseTitle: "Revisa la convocatoria para Posgrado",
      lectureTitle: "COnvocatoria",
      duration: "",
      img: thumb1,
    },
    {
      courseTitle: "Advanced CSS and Sass: Flexbox, Grid, Animations and More!",
      lectureTitle: "42. Building the Stories Section - Part 1",
      duration: "14m left",
      img: thumb2,
    },
    {
      courseTitle: "The Git & Github Bootcamp",
      lectureTitle: "93. Cloning Github Repos With Git Clone",
      duration: "7m left",
      img: thumb3,
    },
  ];
  return (
    <Container>
      <StyledCurrentLearning>
        <div className='current-learning-header'>
          <h4>Es sin miedo al Exito</h4>
          <a href='#'>Mi cuenta</a>
        </div>
        <div className='current-learning-cards'>
          {currentLearningContents.map((learningContent) => {
            return (
              <CurrentLearningCard
                courseTitle={learningContent.courseTitle}
                
                thumbnail={learningContent.img}
              />
            );
          })}
        </div>
      </StyledCurrentLearning>
    </Container>
  );
};

const StyledCurrentLearning = styled.div`
  width: 95%;
  margin: auto;
  margin-top: 3rem;

  .current-learning-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
      color: #0f7c90;
      font-size: 1rem;
      font-weight: 700;

      &:hover {
        color: #004450;
      }
    }
  }

  .current-learning-cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
  }

  @media (max-width: 1150px) {
    width: 100%;
    .current-learning-cards {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 840px) {
    width: 100%;
    .current-learning-cards {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default CurrentLearning;
