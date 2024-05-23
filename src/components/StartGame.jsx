import React from "react";
import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame = ({ toggle }) => {
  return (
    <Container>
      <LogoWrapper>
        <img src="/assets/logo.avif" alt="Logo" />
      </LogoWrapper>
      <MainContent>
        <ImageWrapper>
          <img src="/assets/dices.png" alt="Dices" />
        </ImageWrapper>
        <Content>
          <h1>DICE GAME</h1>
          <Button onClick={toggle}>Play Now</Button>
        </Content>
      </MainContent>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  margin: 0 auto;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (min-width: 768px) {
    padding: 40px;
  }

  @media (max-width: 480px) {
    padding: 10px;
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

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const ImageWrapper = styled.div`
  img {
    width: 100%;
    max-width: 649px;
    height: auto;

    @media (max-width: 768px) {
      max-width: 100%;
    }

    @media (max-width: 480px) {
      max-width: 300px;
    }
  }
`;

const Content = styled.div`
  text-align: center;
  margin-top: 20px;

  h1 {
    font-size: 48px;
    white-space: nowrap;

    @media (min-width: 768px) {
      font-size: 72px;
    }

    @media (min-width: 1024px) {
      font-size: 96px;
    }

    @media (max-width: 480px) {
      font-size: 36px;
    }
  }

  @media (min-width: 768px) {
    margin-top: 0;
    margin-left: 20px;
  }
`;
