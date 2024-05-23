import React from "react";
import styled from "styled-components";

const NumberSelector = ({ selectedNumber, setSelectedNumber }) => {
  const boxNumbers = [1, 2, 3, 4, 5, 6];

  return (
    <NumberSelectorContainer>
      <Title>Select Number</Title>
      <BoxContainer>
        <Boxes>
          {boxNumbers.map((value, index) => (
            <Box
              key={index}
              isSelected={value === selectedNumber}
              onClick={() => setSelectedNumber(value)}
            >
              {value}
            </Box>
          ))}
        </Boxes>
      </BoxContainer>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  border-radius: 3px;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  transition: 0.5s background ease-in;

  @media (max-width: 768px) {
    height: 60px;
    width: 60px;
    font-size: 20px;
  }

  @media (max-width: 480px) {
    height: 50px;
    width: 50px;
    font-size: 18px;
  }
`;

const Boxes = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: 768px) {
    gap: 16px;
  }

  @media (max-width: 480px) {
    gap: 12px;
  }
`;

const BoxContainer = styled.div`
  position: relative;
`;

const NumberSelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  padding: 0 20px; 

  @media (max-width: 480px) {
    padding: 0 10px; 
  }
`;

const Title = styled.p`
  font-size: 34px;
  font-weight: 700;
  margin-top: 36px;
  background-image: url('https://i.pinimg.com/originals/81/d9/88/81d988adf40f1c8d2a41d7b97f652a03.gif');
  background-size: contain;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;
