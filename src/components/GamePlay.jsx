import React, { useState } from 'react';
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import styled from 'styled-components';
import RoleDice from './RoleDice';
import Alert from './Alert';
import { BlackButton, Button } from '../styled/Button';
import { Link } from 'react-router-dom';

const GamePlay = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [isRolling, setIsRolling] = useState(false);
  const [currentDice, setCurrentDice] = useState(1);
  const [showAlert, setShowAlert] = useState(false);

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const roleDice = () => {
    if (selectedNumber === 0) {
      setShowAlert(true);
      return;
    }

    setIsRolling(true);
    setTimeout(() => {
      const randomNumber = generateRandomNumber(1, 7);
      setCurrentDice(randomNumber);
      setIsRolling(false);

      setScore((previous) => {
        if (selectedNumber === randomNumber) {
          return previous + randomNumber;
        } else {
          return previous - 1;
        }
      });
      setSelectedNumber(0);
    }, 3000);
  };

  const resetScore = () => {
    setScore(0);
    setSelectedNumber(0);
    setCurrentDice(1);
  };

  return (
    <MainContainer>
      <LogoWrapper>
        <img src="/assets/logo.avif" alt="Logo" />
      </LogoWrapper>
      <div className="top_section">
        <TotalScore score={score} />
        <NumberSelector selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} isRolling={isRolling} />
      {showAlert && <Alert message="Hey! Pick a number from above! If new to game click on Show Rules" onClose={() => setShowAlert(false)} />}
      <div className="btns">
        <Button onClick={resetScore}>Reset Score</Button>
        <Link to="/rules"><BlackButton>Show Rules</BlackButton></Link>
      </div>
    </MainContainer>
  );
};

export default GamePlay;

const MainContainer = styled.main`
  position: relative;
  padding: 20px;

  .top_section {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    padding: 15px 15px 30px;
    margin-top: 20px; 
    position: relative;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .btns {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 24px;

    @media (max-width: 480px) {
      margin-top: 20px;
      gap: 16px;
    }
  }
`;

const LogoWrapper = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;

  img {
    width: 72px;
    height: 72px;
  }
`;
