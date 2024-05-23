import React from 'react';
import styled from 'styled-components';
import { Button } from '../styled/Button';
import { Link } from 'react-router-dom';

const Rules = () => {
  return (
    <RulesPage>
      <LogoWrapper>
        <img src="/assets/logo.avif" alt="Logo" />
      </LogoWrapper>
      <RulesContainer>
        <h2>How to play dice game</h2>
        <div className="text">
          <ul>
            <li><p>Select any number</p></li>
            <li><p>Click on dice image</p></li>
            <li><p>After clicking the dice, if the selected number is equal to the dice number, you will get the same points as the dice.</p></li>
            <li><p>If the selected number is not equal to the dice number, then 1 point will be deducted from your score.</p></li>
          </ul>
        </div>
      </RulesContainer>
      <Link to="/"><Button>Go Back</Button></Link>
    </RulesPage>
  );
};

export default Rules;

const RulesPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;
  background-color: #F5F5F5;
`;

const LogoWrapper = styled.div`
  margin-bottom: 20px;

  img {
    width: 72px;
    height: 72px;
  }
`;

const RulesContainer = styled.div`
  max-width: 600px;
  width: 100%;
  background-color: #FBF1F1;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  text-align: left;

  h2 {
    font-size: 24px;
    margin-bottom: 24px;
    text-align: center;
  }

  .text {
    ul {
      list-style-type: disc;
      padding-left: 20px;
    }

    li {
      margin-bottom: 16px;
    }

    p {
      font-size: 18px;
      line-height: 1.5;
      margin: 0;
    }
  }

  @media (max-width: 768px) {
    padding: 16px;

    h2 {
      font-size: 20px;
    }

    .text {
      p {
        font-size: 16px;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 12px;

    h2 {
      font-size: 18px;
    }

    .text {
      p {
        font-size: 14px;
      }
    }
  }
`;
