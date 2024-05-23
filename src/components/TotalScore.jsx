import React from "react";
import styled from "styled-components";

const TotalScore = ({ score }) => {
  return (
    <ScoreContainer>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
  max-width: 200px;
  text-align: center;
  
  h1 {
    font-size: 120px;
    line-height: 100px;
    font-weight: bolder;
    background-image: url("https://i.pinimg.com/originals/81/d9/88/81d988adf40f1c8d2a41d7b97f652a03.gif");
    background-size: contain;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 480px) {
      font-size: 80px;
    }
  }

  p {
    font-size: 24px;
    font-weight: bolder;
    background-image: url("https://i.pinimg.com/originals/81/d9/88/81d988adf40f1c8d2a41d7b97f652a03.gif");
    background-size: contain;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 480px) {
      font-size: 18px;
    }
  }
`;
