import React from "react";
import styled from "styled-components";

const RoleDice = ({ currentDice, roleDice, isRolling }) => {
  return (
    <DiceContainer>
      <div className={`dice ${isRolling ? "rolling" : ""}`} onClick={roleDice}>
        <img src={`/assets/dice_${currentDice}.png`} alt="Dice" />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

  .dice {
    cursor: pointer;
  }

  .dice img {
    transition: transform 1s;

    @media (max-width: 480px) {
      width: 130px;
      height: 130px;
    }
  }

  .dice.rolling img {
    animation: roll 1s infinite, box-shadow-change 1s infinite;
    border-radius: 30px;
  }

  @keyframes roll {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(90deg);
    }
    50% {
      transform: rotate(180deg);
    }
    75% {
      transform: rotate(270deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes box-shadow-change {
    0% {
      box-shadow: inset 1px 4px 2px 2px #4f4d50, inset 2px 4px 10px 3px #569bdf;
    }
    25% {
      box-shadow: inset 1px 4px 2px 2px #ff0000, inset 2px 4px 10px 3px #ff7f00;
    }
    50% {
      box-shadow: inset 1px 4px 2px 2px #ffff00, inset 2px 4px 10px 3px #00ff00;
    }
    75% {
      box-shadow: inset 1px 4px 2px 2px #0000ff, inset 2px 4px 10px 3px #4b0082;
    }
    100% {
      box-shadow: inset 1px 4px 2px 2px #8b00ff, inset 2px 4px 10px 3px #4f4d50;
    }
  }

  .dice:hover img {
    width: 245px;
    box-shadow: inset 1px 4px 2px 2px #4f4d50, inset 2px 4px 10px 3px #569bdf;
    border-radius: 30px;

    @media (max-width: 480px) {
      width: 130px; 
    }

  }

  p {
    font-size: 24px;

    @media (max-width: 480px) {
      font-size: 20px;
    }
  }
`;
